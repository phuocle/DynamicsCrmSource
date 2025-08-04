


--
-- base view for msdyn_aiodlabel_msdyn_aiconfiguration
--
create view dbo.[msdyn_aiodlabel_msdyn_aiconfiguration]
 (

    -- physical attributes
    [msdyn_aiodlabel_msdyn_aiconfigurationId],
    [VersionNumber],
    [msdyn_aiodlabelid],
    [msdyn_aiconfigurationid]
) with view_metadata as
select

    -- physical attribute
    [msdyn_aiodlabel_msdyn_aiconfigurationBase].[msdyn_aiodlabel_msdyn_aiconfigurationId],
    [msdyn_aiodlabel_msdyn_aiconfigurationBase].[VersionNumber],
    [msdyn_aiodlabel_msdyn_aiconfigurationBase].[msdyn_aiodlabelid],
    [msdyn_aiodlabel_msdyn_aiconfigurationBase].[msdyn_aiconfigurationid]
from [msdyn_aiodlabel_msdyn_aiconfigurationBase] 
