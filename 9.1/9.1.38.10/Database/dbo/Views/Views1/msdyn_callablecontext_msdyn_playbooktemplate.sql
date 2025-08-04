


--
-- base view for msdyn_callablecontext_msdyn_playbooktemplate
--
create view dbo.[msdyn_callablecontext_msdyn_playbooktemplate]
 (

    -- physical attributes
    [msdyn_callablecontext_msdyn_playbooktemplateId],
    [VersionNumber],
    [msdyn_callablecontextid],
    [msdyn_playbooktemplateid]
) with view_metadata as
select

    -- physical attribute
    [msdyn_callablecontext_msdyn_playbooktemplateBase].[msdyn_callablecontext_msdyn_playbooktemplateId],
    [msdyn_callablecontext_msdyn_playbooktemplateBase].[VersionNumber],
    [msdyn_callablecontext_msdyn_playbooktemplateBase].[msdyn_callablecontextid],
    [msdyn_callablecontext_msdyn_playbooktemplateBase].[msdyn_playbooktemplateid]
from [msdyn_callablecontext_msdyn_playbooktemplateBase] 
