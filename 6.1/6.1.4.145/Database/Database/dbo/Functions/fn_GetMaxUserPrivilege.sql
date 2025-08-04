

create function fn_GetMaxUserPrivilege(
	@userid uniqueidentifier,
	@privilegeid 	uniqueidentifier )
returns int
begin
	declare @PrivilegeDepthMask int
	select 
	       @PrivilegeDepthMask = Max( PrivilegeDepthMask )
	from 
	       RolePrivileges 
	where
	       PrivilegeId = @privilegeid
	       and
	       RoleId in
	              (select ParentRootRoleId
					from RoleBase rb
					join SystemUserRoles sur on (sur.RoleId = rb.RoleId and sur.SystemUserId=@userid)
	              union
	              select ParentRootRoleId
					from RoleBase rb
	                join TeamRoles tr on (tr.RoleId = rb.RoleId)
			        join SystemUserPrincipals sup on (sup.PrincipalId = tr.TeamId and sup.SystemUserId = @userid)
	              )

	return @PrivilegeDepthMask
end


