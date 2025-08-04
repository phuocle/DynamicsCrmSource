

create function [dbo].[fn_POARetrieveMultipleHierarchy](
    @userid as uniqueidentifier,
    @otc as int)
returns Table
As
Return
(
        select distinct POA.ObjectId
        from PrincipalObjectAccess POA
             inner join SystemUserPrincipals sup
                 on POA.PrincipalId = sup.PrincipalId
             inner join SystemUserManagerMap summ
                on summ.SystemUserId = sup.SystemUserId
        where summ.ParentSystemUserId = @userid
              and POA.ObjectTypeCode = @otc
              and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1) = 1
)
