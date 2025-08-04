

--
-- report view for msdyn_callablecontext_msdyn_playbooktemplate
--
create view dbo.[Filteredmsdyn_callablecontext_msdyn_playbooktemplate] 
(
    [msdyn_callablecontextid],
    [msdyn_callablecontext_msdyn_playbooktemplateid],
    [msdyn_playbooktemplateid],
    [versionnumber]
) with view_metadata as
select
    [msdyn_callablecontext_msdyn_playbooktemplate].[msdyn_callablecontextid],
    [msdyn_callablecontext_msdyn_playbooktemplate].[msdyn_callablecontext_msdyn_playbooktemplateId],
    [msdyn_callablecontext_msdyn_playbooktemplate].[msdyn_playbooktemplateid],
    [msdyn_callablecontext_msdyn_playbooktemplate].[VersionNumber]
from msdyn_callablecontext_msdyn_playbooktemplate

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_callablecontext_msdyn_playbooktemplate] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_callablecontext_msdyn_playbooktemplate] TO [CRMReaderRole]
    AS [dbo];

