

create function [dbo].[fn_UserSharedAttributeAccessForObject]( 
    @systemUserId uniqueidentifier, 
    @attributeId uniqueidentifier,
    @objectId uniqueidentifier,
    @objectTypeCode int) 
returns bit
as
begin;
    declare @returnValue bit = 0;

    -- Need distinct to return only one sharing row for Read.
    --
    if exists (
        select distinct poaa.ReadAccess
        from PrincipalObjectAttributeAccess as poaa
        where poaa.AttributeId = @attributeId 
              and poaa.PrincipalId in (
                    select PrincipalId
                    from SystemUserPrincipals
                    where SystemUserId = @systemUserId)
              and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
              and poaa.ObjectId = @objectId
              and poaa.ObjectTypeCode = @objectTypeCode)
    begin;
        set @returnValue = 1;
    end;

    return @returnValue;
end;