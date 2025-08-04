

-- The stored procedure does the following.
-- a) collects principals (owners): user or team - for a given role (including inherited roles)
--     and returns all collected principals (NOTE: team members are collected also)
-- If needed does b) and c)
-- b) reinits PrincipalEntityMap and SystemUserBuEntityMap for passed in read privileges
-- c) ReInitializeUserSubscriptions 
CREATE     procedure [dbo].[p_CollectPrincipalsInDeepAndReinit](@Roleid uniqueidentifier, @ReadPrivilegesIds nvarchar(max), @IsRoleDeleted bit = 0) as
begin
SET NOCOUNT ON

-- Define and Set constants
declare @User int = 8
declare @Team int = 9
declare @CountPrincipals int = 0

-- To minimize changes in [p_SystemUserBuEntityMapReinit] for v5 Hotfix we will use table name #SystemUsers 
create table #SystemUsers
(
	SystemUserId uniqueidentifier primary key clustered
	,Type int not null default (8) -- user
)

-- Collect all principals associated with role (including inherited roles): directly or indirectly through team membership
insert into #SystemUsers(SystemUserId, Type)
(
	select SystemUserId, @User from SystemUserRoles 
		where RoleId in (select RoleId from Role where ParentRootRoleId = @Roleid)
	union
	select TeamId, @Team from TeamRoles 
		where RoleId in (select RoleId from Role where ParentRootRoleId = @Roleid)
	-- expand team membership, union will eleminates duplicates
	union
	select SystemUserId, @User from TeamMembership 
		where TeamId in 
		( select TeamId from TeamRoles 		
			where RoleId in (select RoleId from Role where ParentRootRoleId = @Roleid)
		)
)
select @CountPrincipals = @@ROWCOUNT

-- This recordset will be returned to caller
select SystemUserId as principalid, Type as type from #SystemUsers

-- Optimization for a edge case: no principals are associated with role
if (0 = @CountPrincipals)
  goto CleanUp

-- There were no added/changed/deleted  read privileges
if (@ReadPrivilegesIds is null)
  goto CleanUp

-- In big deployment could be hundred thousands of principals associated with given role
create statistics systemusersstat on #SystemUsers(SystemUserId)

-- Most common scenario is: ~dozen read privileges to be passed in which were changed for role
create table #ReadPrivileges(PrivilegeId uniqueidentifier primary key clustered)
insert into  #ReadPrivileges(privilegeId) select id from fn_GetGuidsFromString(@ReadPrivilegesIds) 

if (@IsRoleDeleted = 1)
	exec p_PrincipalEntityMapReinitBulk @Roleid
else
	exec p_PrincipalEntityMapReinitBulk

-- Reinit SystemUserBuEntityMap: for users only, delete teams first
delete #SystemUsers where Type = @Team

-- Optimization for a edge case: only empty teams are associated with given role
if (not exists(select top(1) 1 from #SystemUsers))
  goto CleanUp

-- explicitly provide null value for parameters, pass 1 for @ReadPrivilegesIdsPopulated parameter (#ReadPrivileges table is populated)
if (@IsRoleDeleted = 1)
	exec p_SystemUserBuEntityMapReinit null, @Roleid, 1
else 
	exec p_SystemUserBuEntityMapReinit null, null, 1

-- 	ReInitializeUserSubscriptions
update Subscription Set ReInitialize = 1 
where SystemUserId in 
(
   select SystemUserId from #SystemUsers
)

CleanUp:
drop table #SystemUsers

if (@ReadPrivilegesIds is not null)
	drop table #ReadPrivileges

end