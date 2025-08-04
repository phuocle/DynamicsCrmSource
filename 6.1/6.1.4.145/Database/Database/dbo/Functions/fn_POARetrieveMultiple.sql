

create function [dbo].[fn_POARetrieveMultiple](@userid as uniqueidentifier, @otc as int)
returns @poa table
(
	ObjectId uniqueidentifier primary key clustered
)
as
begin
	insert into @poa 
	select distinct POA.ObjectId from PrincipalObjectAccess POA with (NOLOCK) 
		join SystemUserPrincipals sup with (NOLOCK) on POA.PrincipalId = sup.PrincipalId 
		where sup.SystemUserId = @userid
		and POA.ObjectTypeCode = @otc and
		((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 1) = 1
		order by POA.ObjectId
		option(OPTIMIZE FOR UNKNOWN)

	return
end