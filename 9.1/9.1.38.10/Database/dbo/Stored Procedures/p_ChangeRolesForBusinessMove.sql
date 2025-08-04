

-- this stored procedure will update roles as part of a business move.
-- If role is a built-in (OOB) role or inherited custom role which can be preserved,
-- role will be reparented to new parent role from new parent BU.
-- Other inherited custom roles will be deleted and associations with them to users/teams will be deleted also.
-- NOTE: this sproc assumes the parent business id for BizId has already been changed (in the transaction).
-- Returned result is count of deleted roles.

create procedure dbo.p_ChangeRolesForBusinessMove(@bizId uniqueidentifier, @userid uniqueidentifier) as
begin

declare @parentBizId uniqueidentifier
select @parentBizId = ParentBusinessUnitId from BusinessUnitBase where BusinessUnitId = @bizId
declare @CountRolesInBu int = (select count(1) from Role r where r.BusinessUnitId = @bizId)

declare @activeSolutionId uniqueidentifier = 'fd140aae-4df4-11dd-bd17-0019b9312238'  -- fixed guid

-- reparent roles for OOB roles and custom preserved inherited roles
create table #parents
(
	parentroleid uniqueidentifier primary key clustered,
	roleuniqueid uniqueidentifier,
	parentrootroleid uniqueidentifier
)

-- Find all of the OOB roles that need to be reparented.  We do this by selecting all RoleIdUnique
-- values, which will return both the overwriten and active rows for these roles.  We will have
-- to sort through these roles in the later queries when we are updating the ParentRoleId value.
insert into #parents(parentroleid, roleuniqueid, parentrootroleid)
	select rbParent.RoleId, rb.RoleIdUnique, rbParent.ParentRootRoleId
	from Role as rb
	join Role as rbParent on (
		rb.BusinessUnitId = @bizId and
		rbParent.BusinessUnitId = @parentBizId and
		rbParent.RoleTemplateId = rb.RoleTemplateId and  -- OOB roles have not nullable RoleTemplateId
		rbParent.RoleTemplateId is not null)

declare @CountOOBRoles int = (select @@rowcount)

-- Find all custom inherited roles which can be preserved: 
--   they exists as inherited in moved bu and in new parent bu
insert into #parents(parentroleid, roleuniqueid, parentrootroleid)
	select rbParent.RoleId, rb.RoleIdUnique, rbParent.ParentRootRoleId
	from Role as rb
	join Role as rbParent on (
		rb.BusinessUnitId = @bizId and	-- role from given BU
		rbParent.BusinessUnitId = @parentBizId and	-- role from new parent BU 
		rbParent.ParentRootRoleId = rb.ParentRootRoleId and  -- ParentRootRoleId is same, means role is inherited from same root role
		rbParent.RoleTemplateId is null)  -- all custom roles have RoleTemplateId as null

declare @CountInheritedRoles int = (select @@rowcount)

-- Update the ParentRoleId for the roles that are already part of the active solution.  Since 
-- they are already part of the active solution, they are already customized and can be updated.
update rb
	set rb.ParentRoleId = p.parentroleid, rb.ModifiedBy = @userid, rb.ModifiedOn = getutcdate()
	from Role as rb
	join #parents as p on (rb.RoleIdUnique = p.roleuniqueid)
	where rb.SolutionId = @activeSolutionId
		and rb.OverwriteTime = 0

declare @CountReparentedRoles int = (select @@rowcount)
drop table #parents

-- Optimization: if all roles of reparented BU were reparented (preserved) no other processing is needed
if (@CountRolesInBu = @CountReparentedRoles)
begin
	select 0 as countDeletedRoles  -- expected by caller return value
	return
end

-- find inherited custom roles ParentRootRoleId which doesn't exist in new parent
declare @inheritedRolesToBeDeleted table (parentrootroleid uniqueidentifier primary key clustered)
insert into @inheritedRolesToBeDeleted(parentrootroleid)
  select ParentRootRoleId from Role r where r.BusinessUnitId = @bizId
         and r.RoleTemplateId is null   --  custom role
		 and r.ParentRoleId is not null -- inherited role condition
  except
  select ParentRootRoleId from Role r where r.BusinessUnitId = @parentBizId
         and r.RoleTemplateId is null   --  custom role
		 and r.ParentRoleId is not null -- inherited role condition

declare @CountInheritedRolesToBeDeleted int = (select @@rowcount)
declare @CountDeletedRoles int = 0

if (@CountInheritedRolesToBeDeleted >0)
begin
	-- Collect roleIds for deletion once to be reused several times
	declare @rolesToBeDeleted table(RoleId uniqueidentifier)
	insert into @rolesToBeDeleted(RoleId)
		select rb.RoleId from Role rb
		where rb.BusinessUnitId in
		(
			select bum.SubBusinessId from BusinessUnitMap bum where bum.BusinessId = @bizId
		)
		and rb.ParentRootRoleId in (select parentrootroleid from @inheritedRolesToBeDeleted)

	declare @CountParentRootRoleIdToBeDeleted int = (select @@rowcount)

	if (@CountParentRootRoleIdToBeDeleted > 0)
	begin
		-- first remove users from SystemUserRoles
		delete SystemUserRoles
				OUTPUT  DELETED.SystemUserRoleId, 15
				into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
		from SystemUserRoles as sur
		where sur.RoleId in (select RoleId from @rolesToBeDeleted)

		-- delete from TeamRoles
		delete TeamRoles 
				OUTPUT  DELETED.TeamRoleId, 40
				into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
		from TeamRoles as tr
		where tr.RoleId in (select RoleId from @rolesToBeDeleted)

		-- nothing to delete from RolePrivileges for inherited roles

		-- delete the solution components
		delete SolutionComponentBase from SolutionComponentBase as sc
		where sc.ObjectId in (select RoleId from @rolesToBeDeleted)

		-- delete the roles
		delete RoleBase 
				OUTPUT  DELETED.RoleIdUnique, 1036
				into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
		where RoleId in (select RoleId from @rolesToBeDeleted)

		select @CountDeletedRoles = @@rowcount
	
		delete RoleBaseIds where RoleId in (select RoleId from @rolesToBeDeleted)
	end
end
select @CountDeletedRoles  as countDeletedRoles -- expected by caller return value

end -- p_ChangeRolesForBusinessMove