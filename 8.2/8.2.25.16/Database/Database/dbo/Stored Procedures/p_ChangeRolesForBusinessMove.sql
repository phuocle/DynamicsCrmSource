

--
-- this stored procedure will update roles as part of a business move
-- if it is a built-in role, it will reparent it, otherwise, it will
-- sever the parent link.
-- NOTE: this sproc assumes the parent business id for BizId has already been
-- changed (in the transaction).
--
create procedure dbo.p_ChangeRolesForBusinessMove(@bizId uniqueidentifier, @userid uniqueidentifier) as
begin

declare @parentBizId uniqueidentifier
select @parentBizId = ParentBusinessUnitId from BusinessUnitBase where BusinessUnitId = @bizId

declare @RootBu uniqueidentifier
select @RootBu = BusinessUnitId from BusinessUnitBase where ParentBusinessUnitId is null

declare @activeSolutionId uniqueidentifier
set @activeSolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238'

--
-- reparent roles (for pre-canned roles)
--
create table #parents
(
	parentroleid uniqueidentifier primary key clustered,
	roleuniqueid uniqueidentifier
)
--
-- Find all of the roles that need to be reparented.  We do this by selecting all RoleIdUnique
-- values, which will return both the overwriten and active rows for these roles.  We will have
-- to sort through these roles in the later queries when we are updating the ParentRoleId value.
--
insert into #parents(parentroleid, roleuniqueid)
	select rbParent.RoleId, rb.RoleIdUnique
	from Role as rb
	join Role as rbParent on (
		rb.BusinessUnitId = @bizId and
		rbParent.BusinessUnitId = @parentBizId and
		rbParent.RoleTemplateId = rb.RoleTemplateId and
		rbParent.RoleTemplateId is not null)

--
-- Update the ParentRoleId for the roles that are already part of the active solution.  Since 
-- they are already part of the active solution, they are already customized and can be updated.
--
update rb
	set rb.ParentRoleId = p.parentroleid, rb.ModifiedBy = @userid, rb.ModifiedOn = getutcdate()
	from RoleBase as rb
	join #parents as p on (rb.RoleIdUnique = p.roleuniqueid)
	where rb.SolutionId = @activeSolutionId
		and rb.OverwriteTime = 0

--
-- Update the ParentRoleId for the roles that are part of protected solutions.  These records cannot be
-- updated directly because they are part of the protected solution, so we must create new rows as part 
-- of the active solution which we can set correctly.
--
insert into RoleBase(RoleId, RoleTemplateId, OrganizationId, Name, BusinessUnitId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy, ParentRoleId, SolutionId)
	select RoleId, RoleTemplateId, OrganizationId, Name, BusinessUnitId, 
		CreatedOn, ModifiedOn, CreatedBy, ModifiedBy, p.parentroleid, @activeSolutionId
	from RoleBase rb
	join #parents as p on (rb.RoleIdUnique = p.roleuniqueid)
	where rb.SolutionId <> @activeSolutionId and rb.OverwriteTime = 0

-- Overwrite the protected solution record
update rb
	set rb.OverwriteTime = getutcdate()
	from RoleBase as rb
	join #parents as p on (rb.RoleIdUnique = p.roleuniqueid)
	where rb.SolutionId <> @activeSolutionId
		and rb.OverwriteTime = 0

-- #role table stores the custom roles that should not be deleted from reparented BU subtree.
create table #role(id uniqueidentifier primary key clustered)

-- Collect local custom roles (i.e roles that are not inherited) for each BU in the subtree
insert into #role(id) 
	select rb.RoleId from Role rb 
			where rb.BusinessUnitId in 
				(select SubBusinessId from BusinessUnitMap bum
				where bum.BusinessId = @bizId) 
		and rb.RoleTemplateId is null and rb.ParentRoleId is null
		and not exists (select id from #role where id = rb.RoleId)

-- Collect custom roles that are inherited from the BU (and any sub BU) that is being moved
	insert into #role(id) 
		select rb.RoleId from Role rb
		where rb.ParentRootRoleId in (select id from #role)
		and not exists (select id from #role where id = rb.RoleId)

-- Collect the inherited custom roles that are inherited from the Root BU so that they won't be deleted
insert into #role(id)
SELECT rb.RoleId FROM Role rb
INNER JOIN Role rr on rb.ParentRootRoleId = rr.RoleId
WHERE rb.BusinessUnitId in (select SubBusinessId from BusinessUnitMap bum
				where bum.BusinessId = @bizId) 
	AND rb.RoleTemplateId is null
	AND rr.RoleTemplateId is null
	AND rb.ParentRoleId is not null
	AND rr.BusinessUnitId = @RootBu
	AND NOT exists (select id from #role where id = rb.RoleId)

--
-- first remove users from SystemUserRoles
-- 

delete SystemUserRoles
		OUTPUT  DELETED.SystemUserRoleId, 15
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
from SystemUserRoles as sur
where sur.RoleId in (
	select rb.RoleId from Role rb
	where rb.BusinessUnitId in 
	(
		select bum.SubBusinessId from BusinessUnitMap bum where bum.BusinessId = @bizId
	)
	and rb.RoleId not in (select id from #role)
	and rb.RoleTemplateId is null and rb.ParentRoleId is not null
)

--
-- delete from TeamRoles
--

delete TeamRoles 
		OUTPUT  DELETED.TeamRoleId, 40
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
from TeamRoles as tr
where tr.RoleId in (
	select rb.RoleId from Role rb
	where rb.BusinessUnitId in 
	(
		select bum.SubBusinessId from BusinessUnitMap bum where bum.BusinessId = @bizId
	)
	and rb.RoleId not in (select id from #role)
	and rb.RoleTemplateId is null and rb.ParentRoleId is not null
)

--
-- nothing to delete from RolePrivileges for inherited roles
--

--
-- now delete the solution components
--
delete SolutionComponentBase from SolutionComponentBase as sc
where sc.ObjectId in (
	select rb.RoleId from Role rb
	where rb.BusinessUnitId in
	(
		select bum.SubBusinessId from BusinessUnitMap bum where bum.BusinessId = @bizId
	)
	and rb.RoleId not in (select id from #role)
	and rb.RoleTemplateId is null and rb.ParentRoleId is not null
)

--
-- now delete the roles
--

delete RoleBase 
		OUTPUT  DELETED.RoleIdUnique, 1036
		into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
from RoleBase as rb
where rb.BusinessUnitId in 
(
	select bum.SubBusinessId from BusinessUnitMap bum where bum.BusinessId = @bizId
)
and rb.RoleId not in (select id from #role)
and rb.RoleTemplateId is null and rb.ParentRoleId is not null

drop table #role
drop table #parents

end -- p_ChangeRolesForBusinessMove