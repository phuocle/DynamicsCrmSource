

-- this stored procedure collect principals (owners): user or team - for a role to be deleted (including inherited roles)
-- NOTE: team members are not collected

CREATE     procedure p_CollectPrincipals(@roleid uniqueidentifier) as
begin
SET NOCOUNT ON

-- Define and Set constants
declare @User int
declare @Team int
select @User = 8
select @Team = 9

select SystemUserId as principalid, @User as type from SystemUserRoles 
	where RoleId in (select RoleId from Role where ParentRootRoleId = @roleid)
union
select TeamId as principalid, @Team as type from TeamRoles 
	where RoleId in (select RoleId from Role where ParentRootRoleId = @roleid)

end -- p_CollectPrincipals