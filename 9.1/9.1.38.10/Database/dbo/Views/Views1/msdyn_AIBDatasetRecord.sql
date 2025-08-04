


--
-- base view for msdyn_AIBDatasetRecord
--
create view dbo.[msdyn_AIBDatasetRecord]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [msdyn_AIBDatasetsIdName],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIBDatasetRecordId],
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
    [msdyn_AIBDatasetsId],
    [msdyn_Data],
    [msdyn_RecordType]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aibdatasetrecord_createdonbehalfby].[FullName],
    [lk_msdyn_aibdatasetrecord_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aibdatasetrecord_modifiedonbehalfby].[FullName],
    [lk_msdyn_aibdatasetrecord_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aibdatasetrecord_modifiedby].[FullName],
    [lk_msdyn_aibdatasetrecord_modifiedby].[YomiFullName],
    [msdyn_AIBDatasetRecord_msdyn_AIBDataset].[msdyn_Name],
    [lk_msdyn_aibdatasetrecord_createdby].[FullName],
    [lk_msdyn_aibdatasetrecord_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIBDatasetRecordBase].OwnerId,
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
    [msdyn_AIBDatasetRecordBase].[msdyn_AIBDatasetRecordId],
    [msdyn_AIBDatasetRecordBase].[CreatedOn],
    [msdyn_AIBDatasetRecordBase].[CreatedBy],
    [msdyn_AIBDatasetRecordBase].[ModifiedOn],
    [msdyn_AIBDatasetRecordBase].[ModifiedBy],
    [msdyn_AIBDatasetRecordBase].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetRecordBase].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetRecordBase].[OwningBusinessUnit],
    [msdyn_AIBDatasetRecordBase].[statecode],
    [msdyn_AIBDatasetRecordBase].[statuscode],
    [msdyn_AIBDatasetRecordBase].[VersionNumber],
    [msdyn_AIBDatasetRecordBase].[ImportSequenceNumber],
    [msdyn_AIBDatasetRecordBase].[OverriddenCreatedOn],
    [msdyn_AIBDatasetRecordBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetRecordBase].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetRecordBase].[msdyn_Name],
    [msdyn_AIBDatasetRecordBase].[msdyn_AIBDatasetsId],
    [msdyn_AIBDatasetRecordBase].[msdyn_Data],
    [msdyn_AIBDatasetRecordBase].[msdyn_RecordType]
from [msdyn_AIBDatasetRecordBase] 
    left join [SystemUserBase] [lk_msdyn_aibdatasetrecord_createdby] on ([msdyn_AIBDatasetRecordBase].[CreatedBy] = [lk_msdyn_aibdatasetrecord_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetrecord_createdonbehalfby] on ([msdyn_AIBDatasetRecordBase].[CreatedOnBehalfBy] = [lk_msdyn_aibdatasetrecord_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetrecord_modifiedby] on ([msdyn_AIBDatasetRecordBase].[ModifiedBy] = [lk_msdyn_aibdatasetrecord_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetrecord_modifiedonbehalfby] on ([msdyn_AIBDatasetRecordBase].[ModifiedOnBehalfBy] = [lk_msdyn_aibdatasetrecord_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIBDatasetBase] [msdyn_AIBDatasetRecord_msdyn_AIBDataset] on ([msdyn_AIBDatasetRecordBase].[msdyn_AIBDatasetsId] = [msdyn_AIBDatasetRecord_msdyn_AIBDataset].[msdyn_AIBDatasetId])
    left join OwnerBase XXowner on ([msdyn_AIBDatasetRecordBase].OwnerId = XXowner.OwnerId)
