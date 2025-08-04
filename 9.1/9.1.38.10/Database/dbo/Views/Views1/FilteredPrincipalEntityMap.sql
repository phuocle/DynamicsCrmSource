

--
-- report view for principalentitymap
--
create view dbo.[FilteredPrincipalEntityMap] (
    [objecttypecode],
    [principalentitymapid],
    [principalid],
    [versionnumber]
) with view_metadata as
select
    [PrincipalEntityMap].[ObjectTypeCode],
    [PrincipalEntityMap].[PrincipalEntityMapId],
    [PrincipalEntityMap].[PrincipalId],
    [PrincipalEntityMap].[VersionNumber]
from PrincipalEntityMap

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPrincipalEntityMap] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPrincipalEntityMap] TO [CRMReaderRole]
    AS [dbo];

