

--This sp should be invoked when a new systemuser is added or assigned manager/position for the first time

--@MaxDepthForHierarchicalSecurityModel is the maxDepth to be used while expanding the SystemUser Hierarchy
--This depth will be considered relative to each user in the hierarchy.
--@SystemUserId identifies the user who is assigned a manager or position first time
create procedure [dbo].[p_UpdateSystemUserManagerMap] (@MaxDepthForHierarchicalSecurityModel int,
                        @SystemUserId uniqueidentifier
) as
begin

declare @hsmEnabled bit = 0;
declare @positionEnabled bit = 0;

select @hsmEnabled = IsHierarchicalSecurityModelEnabled, @positionEnabled = UsePositionHierarchy
from OrganizationBase 

if @hsmEnabled = 0
return;

if @MaxDepthForHierarchicalSecurityModel <= 0
    set @MaxDepthForHierarchicalSecurityModel = 3; -- Default value for maxDepth of Hierarchy that is set for an Org

-- Add the row for given SystemUser for hierarchy level 0 (self as parent) only if it does not exists already
if not exists (select 1 from SystemUserManagerMap where SystemUserId = @SystemUserId)
    insert into SystemUserManagerMap(HierarchyLevel, ParentSystemUserId, SystemUserId, SystemUserManagerMapId)
        values (0, @SystemUserId, @SystemUserId, newid())

if @positionEnabled = 1
begin
    declare @Position uniqueidentifier -- Holds the position of current user
    declare @ParentPosition uniqueidentifier -- Holds the parent position of current user
    select @Position = PositionId, @ParentPosition = ParentPositionId
    from Position where PositionId = 
        (SELECT PositionId FROM SystemUser WHERE SystemUserId = @SystemUserId)

    -- First assign parents to current user
    -- We first get the list of systemUsers which hold the position to which current user reports directly
    -- If there is no user in the direct reporting position then get first such level where user exists
    -- Then get all rows from systemUserManagerMap for all such users - this will include the rows with hierarchy level 0
    -- This is the complete list of all ParentSystemUsers of the current user
    declare @Level int = 1
    while @Level < @MaxDepthForHierarchicalSecurityModel and @ParentPosition is not null and not exists (select 1 from systemuser SystemUser where PositionId = @ParentPosition)
    begin
        select @ParentPosition = ParentPositionId
        from Position where PositionId = @ParentPosition
        
        select @Level = @Level + 1
    end

    if @ParentPosition is not null
    begin
        insert into SystemUserManagerMap(HierarchyLevel, ParentSystemUserId, SystemUserId, SystemUserManagerMapId)
            select HierarchyLevel+@Level, ParentSystemUserId, @SystemUserId, newid()
            from SystemUserManagerMap where HierarchyLevel + @Level <= @MaxDepthForHierarchicalSecurityModel and SystemUserId in
                (select SystemUserId from SystemUser where PositionId = @ParentPosition)
            group by ParentSystemUserId, HierarchyLevel;
    end
    -- Now update all children to report to current user based on position hierarchy
    select @Level = 1
    declare @Positions table (positionId uniqueidentifier primary key, processingState int)
    insert into @Positions(positionId, processingState) select @Position, 0

    while @Level <= @MaxDepthForHierarchicalSecurityModel and exists (select 1 from @Positions where processingState = 0)
    begin
        -- processingState = 1 holds all positions for which users at reporting positions are to be updated
        update @Positions set processingState = 1 where processingState = 0

        insert into @Positions (positionId, processingState) 
            select PositionId, 0 from Position where ParentPositionId in
                (select positionId from @Positions where processingState = 1)

        -- All users at newly added postions are to be added into SystemUserManagerMap
        insert into SystemUserManagerMap(HierarchyLevel, ParentSystemUserId, SystemUserId, SystemUserManagerMapId)
            select @Level, @SystemUserId, SystemUserId, newid()
            from SystemUser where PositionId in
             (select positionId from @Positions where processingState = 0)

        select @Level = @Level + 1
        update @Positions set processingState = 2 where processingState = 1
    end

end
else
begin
    declare @CurrentManagerId uniqueidentifier
    select @CurrentManagerId = ParentSystemUserId
    from SystemUser
    where SystemUserId = @SystemUserId;

    with Parents
    as
    (
        -- Since there can only be a single manager, the query below is simplified version of same query used for Position
        select ParentSystemUserId, HierarchyLevel
        from SystemUserManagerMap
        where SystemUserId = @CurrentManagerId and HierarchyLevel < @MaxDepthForHierarchicalSecurityModel
    ),
    Children
    as
    (
        -- Now get the list of all children of current user including itself
        select SystemUserId, HierarchyLevel
        from SystemUserManagerMap
        where ParentSystemUserId = @SystemUserId
    )
    -- A row has to be added in systemUserManagerMap for the cross product of children and parents as long as hierarchyLevel is within the limit
    insert into SystemUserManagerMap(HierarchyLevel, ParentSystemUserId, SystemUserId, SystemUserManagerMapId)
    select Parents.HierarchyLevel + Children.HierarchyLevel + 1, Parents.ParentSystemUserId, Children.SystemUserId, newid()
    from Parents cross join Children
    where Parents.HierarchyLevel + Children.HierarchyLevel < @MaxDepthForHierarchicalSecurityModel

end
end