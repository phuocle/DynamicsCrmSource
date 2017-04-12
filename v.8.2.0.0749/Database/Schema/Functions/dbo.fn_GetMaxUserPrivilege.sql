SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_GetMaxUserPrivilege](
	@userid uniqueidentifier,
	@privilegeid uniqueidentifier 
)returns int
begin;
	declare @PrivilegeDepthMask int;

	select @PrivilegeDepthMask = max( PrivilegeDepthMask )
	from RolePrivileges 
	where PrivilegeId = @privilegeid
	       and RoleId in
	              (select ParentRootRoleId
					from RoleBase as rb
					inner join SystemUserRoles as sur on (sur.RoleId = rb.RoleId and sur.SystemUserId=@userid)
	              union
	              select ParentRootRoleId
					from RoleBase as rb
	                inner join TeamRoles as tr on (tr.RoleId = rb.RoleId)
			        inner join SystemUserPrincipals as sup on (sup.PrincipalId = tr.TeamId and sup.SystemUserId = @userid)
	              );

	return @PrivilegeDepthMask;
end;


GO
