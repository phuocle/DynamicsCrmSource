


CREATE procedure p_CanRemoveUserFromSysAdmin(@UserId uniqueidentifier)
as
begin
-- this procedure can be called when checking for
-- 1. deleting a user
-- 2. disabling a user
-- 3. removing a user from a SysAdmin role

set nocount on
declare @canRemove as bit
select @canRemove = 1

-- constant, deployment-invariant identifier for sysadmin role template id
declare @SysAdminRoleTemplateId uniqueidentifier
select @SysAdminRoleTemplateId = N'{627090FF-40A3-4053-8790-584EDC5BE201}'

-- first see if the specified user is a member of the sys admin role
if exists(
select
rb.RoleId from Role as rb
join SystemUserRoles as sur on 
	(rb.RoleId = sur.RoleId and sur.SystemUserId = @UserId and
	rb.RoleTemplateId = @SysAdminRoleTemplateId)
)
begin
	-- the user is a member of sys admin
	-- make sure the user is not the last member who is:
	-- 1. not disabled
	-- 2. has a license
	-- 3. has accepted an invitation

	if not exists(
	select su.SystemUserId from SystemUserBase as su
	join SystemUserRoles as sur on (sur.SystemUserId = su.SystemUserId and su.SystemUserId <> @UserId)
	join Role as rb on (sur.RoleId = rb.RoleId and rb.RoleTemplateId = @SysAdminRoleTemplateId)
	where su.IsDisabled = 0 and su.InviteStatusCode = 4
	)
	begin
		select @canRemove = 0
	end
end

select @canRemove as 'CanBeRemoved'
end