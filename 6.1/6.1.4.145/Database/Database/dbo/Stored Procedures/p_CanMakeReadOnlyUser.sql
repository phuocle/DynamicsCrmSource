

CREATE procedure p_CanMakeReadOnlyUser(@UserId uniqueidentifier)
as
begin
-- this procedure can be called when checking if a user can be made a read only user.
-- to prevent locking ourselves out there must be at least one system administrator left
-- that is not the user and is not read only himself.


set nocount on
declare @canMakeReadOnlyUser as bit
select @canMakeReadOnlyUser = 1

-- constant, deployment-invariant identifier for sysadmin role template id
declare @SysAdminRoleTemplateId uniqueidentifier
select @SysAdminRoleTemplateId = N'{627090FF-40A3-4053-8790-584EDC5BE201}'

if not exists(
select su.SystemUserId from SystemUserBase as su
join SystemUserRoles as sur on (sur.SystemUserId = su.SystemUserId and su.SystemUserId <> @UserId)
join Role as rb on (sur.RoleId = rb.RoleId and rb.RoleTemplateId = @SysAdminRoleTemplateId)
where su.IsDisabled = 0 and su.AccessMode <> 2

)
begin
	select @canMakeReadOnlyUser = 0
end


select @canMakeReadOnlyUser as 'CanMakeReadOnlyUser'
end