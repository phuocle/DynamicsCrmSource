

--
-- This stored procedure will collect all pricipals (users and team) in oldParent and newParent business units hierarchy
-- up to first join parent node in the business hierarchy (nearest common ancester).
-- For examples: original business units hierarchy is b0( b1(b3(b4)), b2(b5))
--		where 'bi' is business unit 'i'. 
-- Scenario A: b3 will be moved under b2. New hierarchy will be b0( b1, b2((b3(b4)), b5)). 
--        Users from b1 will loze deep visiability of entities from b3&b4
--		  Users from b2 will gain deep visiability of entities from b3&b4	
--		  Affected parent business units are b1 and b2.
-- Scenario B: b4 will be moved under b5. New hierarchy will be b0( b1(b3), b2(b5(b4))). 
--        Users from b1 and b3 will loze deep visiability of entities from b4
--		  Users from b2 and b5 will gain deep visiability of entities from b4	
--		  Affected parent business units are b1, b2, b3, b5.
-- Scenario C: b3 will be moved under b5. New hierarchy will be b0( b1, b2(b5(b3(b4)))). 
--        Users from b1 will loze deep visiability of entities from b3&b4
--		  Users from b2 and b5 will gain deep visiability of entities from b3&b4
--		  Affected parent business units are b1, b5.
--  
--  Principals in moved BU subtree are collected because the may be affected by removing inherited roles from oldParent.

create procedure p_CollectPrincipalsForBusinessUnitMove(@movedBusinessId uniqueidentifier, @oldParentId uniqueidentifier, @newParentId uniqueidentifier) as
begin
SET NOCOUNT ON

--ASSUMPTION: Bu hierarchy is a valid tree (not forest with more than one root).
--Algorithm
--Collect all ancesters to the root for @newParentId into table @ancestersOfNewParentToTheRoot 
--Walk tree up from @oldParentId with accumulating ids in @ancestersOfOldParent until an @id is found in @ancestersOfNewParentToTheRoot
--Populate @AffectedBuIds as  
--	@ancestersOfNewParentToTheRoot below @nearestCommonAncester
--	union
--	@ancestersOfOldParent (we stopped collect when @nearestCommonAncester was found)
--	union
--	movedSubtree - can use BusinessUnitMap which is rebuilt by this time (move BU doesn't change moved subtree itself)

 --Define and Set constants
declare @User int
declare @Team int
select @User = 8
select @Team = 9

Declare @oldId uniqueidentifier
Declare @newId uniqueidentifier

-- Use in memory tables, expected hundreds of BUs
declare @ancestersOfNewParentToTheRoot table (BusinessUnitId uniqueidentifier primary key clustered)
declare @ancestersOfNewParent table (BusinessUnitId uniqueidentifier primary key clustered)
declare @ancestersOfOldParent table (BusinessUnitId uniqueidentifier primary key clustered)
declare @affectedBuIds table (BusinessUnitId uniqueidentifier primary key clustered)

-- Collect all ancesters to the root for @newParentId into table @ancestersOfNewParentToTheRoot
select @newId = @newParentId
while @newId is not null
begin
	insert into @ancestersOfNewParentToTheRoot select @newId
	select @newId = ParentBusinessUnitId from BusinessUnitBase 
		where BusinessUnitId = @newId		
end

-- Walk tree up from @oldParentId with accumulating ids in @ancestersOfOldParent until an @id is found in @ancestersOfNewParentToTheRoot
select @oldId = @oldParentId
while 1 = 1
begin
	if exists(select * from @ancestersOfNewParentToTheRoot where BusinessUnitId = @oldId)
		break;		-- @oldId is a nearest common ancester
	
	insert into @ancestersOfOldParent select @oldId
	select @oldId = ParentBusinessUnitId from BusinessUnitBase 
		where BusinessUnitId = @oldId
end

-- Collect @ancestersOfNewParent by walking up to nearest common ancester (@oldId is a nearest common ancester)
select @newId = @newParentId
while @newId <> @oldId
begin
	insert into @ancestersOfNewParent select @newId
	 
	select @newId = ParentBusinessUnitId from BusinessUnitBase 
		where BusinessUnitId = @newId		
end

-- Collect all affected parent BU ids in one table 
insert into @affectedBuIds
	select * from @ancestersOfOldParent
	union
	select * from @ancestersOfNewParent
	union
	select SubBusinessId from BusinessUnitMap where BusinessId = @movedBusinessId

-- debug select
--select a.BusinessUnitId, bu.Name from @ancestersOfOldParent a 
--  join BusinessUnitBase as bu on (bu.BusinessUnitId = a.BusinessUnitId)
--select a.BusinessUnitId, bu.Name from @ancestersOfNewParent a 
--  join BusinessUnitBase as bu on (bu.BusinessUnitId = a.BusinessUnitId)
--select a.BusinessUnitId, bu.Name from @affectedBuIds a 
--  join BusinessUnitBase as bu on (bu.BusinessUnitId = a.BusinessUnitId)

-- Return results:
-- User principals
select SystemUserId as principalid, @User as type from SystemUserBase 
		where BusinessUnitId in (select BusinessUnitId from @affectedBuIds)
union		
-- Team principals
select TeamId as principalid, @Team as type from TeamBase 
		where BusinessUnitId in (select BusinessUnitId from @affectedBuIds)

end -- p_CollectPrincipalsForBusinessUnitMove