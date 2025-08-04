

-- Notes:
--     1. @MaxDepthForHierarchicalSecurityModel is the maxDepth to be used while expanding the SystemUser Hierarchy.
--     2. This depth will be considered relative to each user in the hierarchy.
--     3. Only child users at hierarchy level within the maxDepth limit will be added to the SystemUserManagerMap table
--        for the particular ParentSystemUser.
--
create procedure [dbo].[p_ReinitSystemUserManagerMap]
    @MaxDepthForHierarchicalSecurityModel int
as;
begin;

    declare @hsmEnabled bit = 0;
    declare @positionEnabled bit = 0;
    declare @OtcSystemUserManagerMap int = 51; -- ObjectTypeCode for SystemUserManagerMap

    select @hsmEnabled = IsHierarchicalSecurityModelEnabled,
           @positionEnabled = UsePositionHierarchy
    from OrganizationBase;

    if (@hsmEnabled = 0)
        return;

    if (@MaxDepthForHierarchicalSecurityModel = -1)
        set @MaxDepthForHierarchicalSecurityModel = 3; -- Default value for maxDepth of Hierarchy that is set for an Org

    -- Create a temp table to store the actual Hierarchy level(relative to the root).
    -- If @positionEnabled is true it will store for all the Positions in PositionBase table else
    -- for all the SystemUsers in SystemUser table.
    create table #HierarchyLevels (
        ChildId uniqueidentifier primary key,
        ParentId uniqueidentifier,
        HierarchyLevel int not null);
    
    if (@positionEnabled = 1)
    begin;
        -- Insert all the existing rows in PositionBase table into #HierarchyLevels with default value 0 for HierarchyLevel.
        insert into #HierarchyLevels(ChildId, ParentId, HierarchyLevel)
        select p.PositionId,
               p.ParentPositionId,
               0
        from PositionBase p;
    end;
    else
    begin;
        -- Insert all the existing rows in SystemUser table into #HierarchyLevels with default value 0 for HierarchyLevel.
        insert into #HierarchyLevels(ChildId, ParentId, HierarchyLevel)
        select s.SystemUserId,
               s.ParentSystemUserId,
               0
        from SystemUserBase s;
    end;

    -- Set Level = 1 For Rows With No ParentIds
    update #HierarchyLevels
    set HierarchyLevel = 1
    where ParentId is null; -- root is at level 1

    -- Update level for remaining rows in #HierarchyLevels Table.
    while ((select count(*)
           from #HierarchyLevels
           where HierarchyLevel = 0) > 0)
    begin;
        update sChild
        set HierarchyLevel = sParent.HierarchyLevel + 1
        from #HierarchyLevels sChild
             inner join #HierarchyLevels sParent
                 on sChild.ParentId = sParent.ChildId
        where sChild.HierarchyLevel = 0
              and sParent.HierarchyLevel != 0;
    end;

    -- Temp table for new map
    create table #NewSystemUserManagerMap (
        HierarchyLevel int not null default (0),
        ParentSystemUserId uniqueidentifier not null,
        SystemUserId uniqueidentifier not null);

    if (@positionEnabled = 1)
    begin;
        -- Expand position hierarchy
        with ParentPositions
        as
        (
            -- Anchor member definition of the CTE.
            select s.ParentPositionId,
                   s.PositionId 
            from PositionBase s
            where ParentPositionId is not null
                  and StateCode = 0
            union all
                -- Recursive member definition.
                select p.ParentPositionId,
                       sb.PositionId 
                from ParentPositions p
                     inner join PositionBase sb
                         on sb.ParentPositionId = p.PositionId
                where sb.StateCode = 0
        )
        -- Insert all users in each position for each position. Select child users having
        -- hierarchy level <= maxdepth relative to the Hierarchy level of
        -- current parentSystemUserId.
        --
        insert into #NewSystemUserManagerMap(ParentSystemUserId, SystemUserId, HierarchyLevel)
        select b.SystemUserId as ParentSystemUserId,
               c.SystemUserId,
               suh.HierarchyLevel - sInner.HierarchyLevel
        from ParentPositions a
             inner join SystemUserBase b
                 on a.ParentPositionId = b.PositionId
             inner join SystemUserBase c
                 on a.PositionId = c.PositionId
             inner join #HierarchyLevels suh 
                 on c.PositionId = suh.ChildId
             inner join #HierarchyLevels sInner
                 on sInner.ChildId = b.PositionId
        where b.IsDisabled = 0
              and c.IsDisabled = 0
              and suh.HierarchyLevel <= (sInner.HierarchyLevel + @MaxDepthForHierarchicalSecurityModel); -- get hierarchy level of current parent, add maxDepth value.
    end; -- end if (@positionEnabled = 1)
    else
    begin;
        -- Expand user hierarchy.
        with ParentUsers
        as
        ( 
            -- Anchor member definition.
            select s.ParentSystemUserId,
                   s.SystemUserId
            from SystemUserBase s
            where ParentSystemUserId is not null
                  and s.IsDisabled = 0
            union all
                -- Recursive member definition.
                select p.ParentSystemUserId,
                       sb.SystemUserId 
                from ParentUsers p
                     inner join SystemUserBase sb
                         on sb.ParentSystemUserId = p.SystemUserId
                where sb.IsDisabled = 0
        )
        -- Insert user hierarchy. Select child users having hierarchy level <= maxdepth relative
        -- to the Hierarchy level of current parentSystemUserId.
        --
        insert into #NewSystemUserManagerMap(ParentSystemUserId, SystemUserId, HierarchyLevel)
        select p.ParentSystemUserId,
               p.SystemUserId,
               suh.HierarchyLevel - sInner.HierarchyLevel
        from ParentUsers p
             inner join #HierarchyLevels suh 
                 on p.SystemUserId = suh.ChildId
             inner join #HierarchyLevels sInner
                 on sInner.ChildId = p.ParentSystemUserId
        where suh.HierarchyLevel <= (sInner.HierarchyLevel + @MaxDepthForHierarchicalSecurityModel); --get hierarchy level of current parent, add maxDepth value.
    end;

    drop table #HierarchyLevels;

    -- Insert self records for each user.
    insert into #NewSystemUserManagerMap (ParentSystemUserId, SystemUserId)
    select SystemUserId,
           SystemUserId
    from SystemUserBase;

    -- New map is built, do diffing with existing old map.
    --

    --  Delete from old map rows, which do not exist in new map with tracking deleted
    delete SystemUserManagerMap 
    output deleted.SystemUserManagerMapId,
           @OtcSystemUserManagerMap
    into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
    from SystemUserManagerMap as old
         inner join (
             select SystemUserId,
                    ParentSystemUserId,
                    HierarchyLevel
             from SystemUserManagerMap
             except
                 select SystemUserId,
                        ParentSystemUserId,
                        HierarchyLevel
                 from #NewSystemUserManagerMap) as deletedMap
             on old.SystemUserId = deletedMap.SystemUserId
                and old.ParentSystemUserId = deletedMap.ParentSystemUserId
                and old.HierarchyLevel = deletedMap.HierarchyLevel option (recompile);

    -- Insert into existing map rows from new map, which do not exist in old map.
    with NewRows as
    (
        select HierarchyLevel,
               ParentSystemUserId,
               SystemUserId
        from #NewSystemUserManagerMap
        except
            select HierarchyLevel,
                   ParentSystemUserId,
                   SystemUserId
            from SystemUserManagerMap
    )
    insert into SystemUserManagerMap (HierarchyLevel, ParentSystemUserId, SystemUserId, SystemUserManagerMapId)
    select HierarchyLevel,
           ParentSystemUserId,
           SystemUserId,
           newid()
    from NewRows option (recompile);

    drop table #NewSystemUserManagerMap;
end;
