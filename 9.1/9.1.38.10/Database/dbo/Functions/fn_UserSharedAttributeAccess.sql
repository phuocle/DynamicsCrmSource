

create function [dbo].[fn_UserSharedAttributeAccess](
    @systemUserId uniqueidentifier,
    @attributeId uniqueidentifier,
    @objectTypeCode int)
returns Table
as
return
(
    -- Need distict to return only one sharing row for Read.
    select distinct poaa.ObjectId as ObjectId,
           poaa.ReadAccess as ReadAccess
    from PrincipalObjectAttributeAccess as poaa
    where poaa.AttributeId = @attributeId
          and poaa.PrincipalId in (
                  select PrincipalId
                  from SystemUserPrincipals
                  where SystemUserId = @systemUserId)
          and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
          and poaa.ObjectTypeCode = @objectTypeCode
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_UserSharedAttributeAccess] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_UserSharedAttributeAccess] TO [CRMReaderRole]
    AS [dbo];

