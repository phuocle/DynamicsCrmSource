SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_POARetrieveMultiple](
    @userid as uniqueidentifier,
    @otc as int,
    @isHeirarchicalSecurityModeEnabled as bit)
returns @poa table (
    ObjectId uniqueidentifier primary key clustered)
as
begin;
    if (@isHeirarchicalSecurityModeEnabled = 1)
    begin;
        insert into @poa
        select distinct POA.ObjectId
        from PrincipalObjectAccess POA
             inner join SystemUserPrincipals sup
                 on POA.PrincipalId = sup.PrincipalId
             inner join SystemUserManagerMap summ
                 on summ.SystemUserId = sup.SystemUserId
        where summ.ParentSystemUserId = @userid
              and POA.ObjectTypeCode = @otc
              and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1) = 1
        order by POA.ObjectId
        option(OPTIMIZE for UNKNOWN);
    end;
    else
    begin;
        insert into @poa
        select distinct POA.ObjectId
        from PrincipalObjectAccess POA
             inner join SystemUserPrincipals sup
                 on POA.PrincipalId = sup.PrincipalId
        where sup.SystemUserId = @userid
              and POA.ObjectTypeCode = @otc
              and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1) = 1
        order by POA.ObjectId
        option(OPTIMIZE for UNKNOWN);
    end;

    return;
end;
GO
