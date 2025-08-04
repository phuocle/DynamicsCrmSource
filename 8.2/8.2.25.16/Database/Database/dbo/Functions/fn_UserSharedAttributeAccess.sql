

create function [dbo].[fn_UserSharedAttributeAccess](
    @systemUserId uniqueidentifier,
    @attributeId uniqueidentifier,
    @objectTypeCode int)
returns @t table (
    ObjectId uniqueidentifier,
    ReadAccess int)
as
begin;
    -- Need distict to return only one sharing row for Read.
    insert into @t (ObjectId, ReadAccess)
    select distinct poaa.ObjectId,
           poaa.ReadAccess
    from PrincipalObjectAttributeAccess as poaa
    where poaa.AttributeId = @attributeId
          and poaa.PrincipalId in (
                  select PrincipalId
                  from SystemUserPrincipals
                  where SystemUserId = @systemUserId)
          and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
          and poaa.ObjectTypeCode = @objectTypeCode;
    return;
end;