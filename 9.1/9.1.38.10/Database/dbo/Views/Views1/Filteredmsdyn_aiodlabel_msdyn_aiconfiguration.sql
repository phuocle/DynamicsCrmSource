

--
-- report view for msdyn_aiodlabel_msdyn_aiconfiguration
--
create view dbo.[Filteredmsdyn_aiodlabel_msdyn_aiconfiguration] 
(
    [msdyn_aiconfigurationid],
    [msdyn_aiodlabelid],
    [msdyn_aiodlabel_msdyn_aiconfigurationid],
    [versionnumber]
) with view_metadata as
select
    [msdyn_aiodlabel_msdyn_aiconfiguration].[msdyn_aiconfigurationid],
    [msdyn_aiodlabel_msdyn_aiconfiguration].[msdyn_aiodlabelid],
    [msdyn_aiodlabel_msdyn_aiconfiguration].[msdyn_aiodlabel_msdyn_aiconfigurationId],
    [msdyn_aiodlabel_msdyn_aiconfiguration].[VersionNumber]
from msdyn_aiodlabel_msdyn_aiconfiguration

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_aiodlabel_msdyn_aiconfiguration] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_aiodlabel_msdyn_aiconfiguration] TO [CRMReaderRole]
    AS [dbo];

