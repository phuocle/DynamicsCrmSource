

create function [dbo].[fn_POARetrieveMultipleNonHierarchy](
    @userid as uniqueidentifier,
    @otc as int)
returns table 
as
Return
(
        select distinct POA.ObjectId
        from PrincipalObjectAccess POA
             inner join SystemUserPrincipals sup
                 on POA.PrincipalId = sup.PrincipalId
        where sup.SystemUserId = @userid
              and POA.ObjectTypeCode = @otc
              and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1) = 1
 )