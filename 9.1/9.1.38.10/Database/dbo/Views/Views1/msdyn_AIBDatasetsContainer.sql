


--
-- base view for msdyn_AIBDatasetsContainer
--
create view dbo.[msdyn_AIBDatasetsContainer]
 (
    -- logical attributes
    [msdyn_AIModelIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIBDatasetsContainerId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_Name],
    [msdyn_AIModelId]
) with view_metadata as
select
    -- logical attributes
    [msdyn_AIBDatasetsContainer_msdyn_AIModelI].[msdyn_Name],
    [lk_msdyn_aibdatasetscontainer_createdonbehalfby].[FullName],
    [lk_msdyn_aibdatasetscontainer_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aibdatasetscontainer_createdby].[FullName],
    [lk_msdyn_aibdatasetscontainer_createdby].[YomiFullName],
    [lk_msdyn_aibdatasetscontainer_modifiedonbehalfby].[FullName],
    [lk_msdyn_aibdatasetscontainer_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aibdatasetscontainer_modifiedby].[FullName],
    [lk_msdyn_aibdatasetscontainer_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIBDatasetsContainerBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [msdyn_AIBDatasetsContainerBase].[msdyn_AIBDatasetsContainerId],
    [msdyn_AIBDatasetsContainerBase].[CreatedOn],
    [msdyn_AIBDatasetsContainerBase].[CreatedBy],
    [msdyn_AIBDatasetsContainerBase].[ModifiedOn],
    [msdyn_AIBDatasetsContainerBase].[ModifiedBy],
    [msdyn_AIBDatasetsContainerBase].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetsContainerBase].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetsContainerBase].[OwningBusinessUnit],
    [msdyn_AIBDatasetsContainerBase].[statecode],
    [msdyn_AIBDatasetsContainerBase].[statuscode],
    [msdyn_AIBDatasetsContainerBase].[VersionNumber],
    [msdyn_AIBDatasetsContainerBase].[ImportSequenceNumber],
    [msdyn_AIBDatasetsContainerBase].[OverriddenCreatedOn],
    [msdyn_AIBDatasetsContainerBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetsContainerBase].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetsContainerBase].[msdyn_Name],
    [msdyn_AIBDatasetsContainerBase].[msdyn_AIModelId]
from [msdyn_AIBDatasetsContainerBase] 
    left join [SystemUserBase] [lk_msdyn_aibdatasetscontainer_createdby] on ([msdyn_AIBDatasetsContainerBase].[CreatedBy] = [lk_msdyn_aibdatasetscontainer_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetscontainer_createdonbehalfby] on ([msdyn_AIBDatasetsContainerBase].[CreatedOnBehalfBy] = [lk_msdyn_aibdatasetscontainer_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetscontainer_modifiedby] on ([msdyn_AIBDatasetsContainerBase].[ModifiedBy] = [lk_msdyn_aibdatasetscontainer_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetscontainer_modifiedonbehalfby] on ([msdyn_AIBDatasetsContainerBase].[ModifiedOnBehalfBy] = [lk_msdyn_aibdatasetscontainer_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIModelBase] [msdyn_AIBDatasetsContainer_msdyn_AIModelI] on ([msdyn_AIBDatasetsContainerBase].[msdyn_AIModelId] = [msdyn_AIBDatasetsContainer_msdyn_AIModelI].[msdyn_AIModelId] and [msdyn_AIBDatasetsContainer_msdyn_AIModelI].OverwriteTime = 0 and [msdyn_AIBDatasetsContainer_msdyn_AIModelI].ComponentState = 0)
    left join OwnerBase XXowner on ([msdyn_AIBDatasetsContainerBase].OwnerId = XXowner.OwnerId)
