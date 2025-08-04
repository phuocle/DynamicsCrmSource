

--
-- this stored procedure handles copying one role with cascading
-- copy role to sub-businesses
--
create procedure p_CopyRole(@parentRoleid uniqueidentifier, @userid uniqueidentifier) as
begin

SET NOCOUNT ON

declare @activeSolutionId uniqueidentifier
set @activeSolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238'

declare @defaultSolutionId uniqueidentifier
set @defaultSolutionId = 'fd140aaf-4df4-11dd-bd17-0019b9312238'

declare @roleComponentType int
set @roleComponentType = 20

declare @parentBizId uniqueidentifier
select @parentBizId = BusinessUnitId from Role where RoleId = @parentRoleid
declare @rootId uniqueidentifier

create table #parents(parentroleid uniqueidentifier primary key clustered)
insert into #parents(parentroleid) values(@parentRoleid)

declare c cursor local FORWARD_ONLY READ_ONLY for select businessunitid from dbo.GetSubsidiaryBusinesses(@parentBizId) where (depth > 0) order by depth
open c
fetch next from c into @rootId
while (@@fetch_status = 0)
begin
	declare @currParentBiz uniqueidentifier
	select @currParentBiz = null
	select @currParentBiz = ParentBusinessUnitId from BusinessUnitBase where BusinessUnitId = @rootId

	declare @currParentRoleId uniqueidentifier
	select @currParentRoleId = null
	select @currParentRoleId = RoleId from RoleBase 
		where BusinessUnitId = @currParentBiz and RoleId in (select parentroleid from #parents)

	declare @newRoleId uniqueidentifier
	select @newRoleId = newid()

	-- Add the Ids table entry first
	
	INSERT INTO 
  		[RoleBaseIds]
 	VALUES (@newRoleId)

	
	--
	-- create the role record
	-- 
	insert into RoleBase(RoleId, RoleTemplateId, OrganizationId, Name, BusinessUnitId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy, ParentRoleId, SolutionId
		, ParentRootRoleId)
	select @newRoleId, RoleTemplateId, OrganizationId, Name, @rootId, getutcdate(), null, @userid, null, @currParentRoleId, @activeSolutionId 
		-- set ParentRootRoleId, it will be @parentRoleid for all inherited roles 
		,@parentRoleid
	from RoleBase where RoleId = @currParentRoleId
	
	-- 
	-- insert the new role record into the solution components table
	--
	if (@currParentRoleId is null)
	begin
		insert into SolutionComponentBase(SolutionComponentId, ComponentType, ObjectId, IsMetadata, SolutionId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy)
			VALUES (newid(), @roleComponentType, @newRoleId, 0, @defaultSolutionId, getutcdate(), null, @userid, null)
	end

	insert into #parents(parentroleid) values(@newRoleId)

	fetch next from c into @rootId

end -- c cursor
close c
deallocate c

drop table #parents

end -- p_CopyRole