


--
-- base view for msdyn_AIBDataset
--
create view dbo.[msdyn_AIBDataset]
 (
    -- logical attributes
    [msdyn_AIBDatasetsContainerIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [msdyn_AIBDatasetId],
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
    [msdyn_AIBDatasetsContainerId],
    [msdyn_Metadata]
) with view_metadata as
select
    -- logical attributes
    [msdyn_AIBDataset_msdyn_AIBDatasetsContain].[msdyn_Name],
    [lk_msdyn_aibdataset_createdby].[FullName],
    [lk_msdyn_aibdataset_createdby].[YomiFullName],
    [lk_msdyn_aibdataset_createdonbehalfby].[FullName],
    [lk_msdyn_aibdataset_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aibdataset_modifiedonbehalfby].[FullName],
    [lk_msdyn_aibdataset_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aibdataset_modifiedby].[FullName],
    [lk_msdyn_aibdataset_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIBDatasetBase].OwnerId,
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
    [msdyn_AIBDatasetBase].[msdyn_AIBDatasetId],
    [msdyn_AIBDatasetBase].[CreatedOn],
    [msdyn_AIBDatasetBase].[CreatedBy],
    [msdyn_AIBDatasetBase].[ModifiedOn],
    [msdyn_AIBDatasetBase].[ModifiedBy],
    [msdyn_AIBDatasetBase].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetBase].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetBase].[OwningBusinessUnit],
    [msdyn_AIBDatasetBase].[statecode],
    [msdyn_AIBDatasetBase].[statuscode],
    [msdyn_AIBDatasetBase].[VersionNumber],
    [msdyn_AIBDatasetBase].[ImportSequenceNumber],
    [msdyn_AIBDatasetBase].[OverriddenCreatedOn],
    [msdyn_AIBDatasetBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetBase].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetBase].[msdyn_Name],
    [msdyn_AIBDatasetBase].[msdyn_AIBDatasetsContainerId],
    [msdyn_AIBDatasetBase].[msdyn_Metadata]
from [msdyn_AIBDatasetBase] 
    left join [SystemUserBase] [lk_msdyn_aibdataset_createdby] on ([msdyn_AIBDatasetBase].[CreatedBy] = [lk_msdyn_aibdataset_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdataset_createdonbehalfby] on ([msdyn_AIBDatasetBase].[CreatedOnBehalfBy] = [lk_msdyn_aibdataset_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdataset_modifiedby] on ([msdyn_AIBDatasetBase].[ModifiedBy] = [lk_msdyn_aibdataset_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdataset_modifiedonbehalfby] on ([msdyn_AIBDatasetBase].[ModifiedOnBehalfBy] = [lk_msdyn_aibdataset_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIBDatasetsContainerBase] [msdyn_AIBDataset_msdyn_AIBDatasetsContain] on ([msdyn_AIBDatasetBase].[msdyn_AIBDatasetsContainerId] = [msdyn_AIBDataset_msdyn_AIBDatasetsContain].[msdyn_AIBDatasetsContainerId])
    left join OwnerBase XXowner on ([msdyn_AIBDatasetBase].OwnerId = XXowner.OwnerId)
