

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
    ON OBJECT::[dbo].[FilteredPrincipalEntityMap] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPrincipalEntityMap] TO [CRMReaderRole]
    AS [dbo];

