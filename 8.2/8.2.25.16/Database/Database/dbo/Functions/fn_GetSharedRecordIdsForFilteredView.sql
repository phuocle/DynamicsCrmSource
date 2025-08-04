

create function [dbo].[fn_GetSharedRecordIdsForFilteredView](
    @userid uniqueidentifier,
    @objecttypecode int)
returns @t table (ObjectId uniqueidentifier) 
as
begin;
    -- If HSM is enabled for the org and not disabled for the entity, join with SystemUserManagerMap.
    if (exists (
            select 1
            from OrganizationBase
            where IsHierarchicalSecurityModelEnabled = 1)
        and not exists (
            select 1
            from HierarchySecurityConfiguration
            where ObjectTypeCode = @objecttypecode))
    begin;
        insert into @t (ObjectId)
        select distinct poa.ObjectId
        from PrincipalObjectAccess poa
             inner join SystemUserPrincipals sup
                 on poa.PrincipalId = sup.PrincipalId
             inner join SystemUserManagerMap summ
                 on sup.SystemUserId = summ.SystemUserId
        where summ.ParentSystemUserId = @userid
              and poa.ObjectTypeCode = @objecttypecode
              and ((poa.AccessRightsMask | poa.InheritedAccessRightsMask) & 1) = 1;
    end;
    else
    begin;
        -- HSM is disabled for the entity
        insert into @t (ObjectId)
        select distinct poa.ObjectId
        from PrincipalObjectAccess poa
             inner join SystemUserPrincipals sup
                 on poa.PrincipalId = sup.PrincipalId
        where sup.SystemUserId = @userid
              and poa.ObjectTypeCode = @objecttypecode
              and ((poa.AccessRightsMask | poa.InheritedAccessRightsMask) & 1) = 1;
    end;

    return;
end;