

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
    ON OBJECT::[dbo].[FilteredPrincipalEntityMap] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPrincipalEntityMap] TO [CRMReaderRole]
    AS [dbo];

