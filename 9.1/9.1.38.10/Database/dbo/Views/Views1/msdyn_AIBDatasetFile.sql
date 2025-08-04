


--
-- base view for msdyn_AIBDatasetFile
--
create view dbo.[msdyn_AIBDatasetFile]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [msdyn_AIBDatasetIdName],
    [msdyn_AIBFileIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [msdyn_AIBDatasetFileId],
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
    [msdyn_AIBDatasetId],
    [msdyn_AIBFileId],
    [msdyn_LastModifiedDate]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aibdatasetfile_modifiedby].[FullName],
    [lk_msdyn_aibdatasetfile_modifiedby].[YomiFullName],
    [msdyn_AIBDatasetFile_msdyn_AIBDatas].[msdyn_Name],
    [msdyn_AIBDatasetFile_msdyn_AIBuilde].[msdyn_Name],
    [lk_msdyn_aibdatasetfile_createdonbehalfby].[FullName],
    [lk_msdyn_aibdatasetfile_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aibdatasetfile_modifiedonbehalfby].[FullName],
    [lk_msdyn_aibdatasetfile_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aibdatasetfile_createdby].[FullName],
    [lk_msdyn_aibdatasetfile_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIBDatasetFileBase].OwnerId,
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
    [msdyn_AIBDatasetFileBase].[msdyn_AIBDatasetFileId],
    [msdyn_AIBDatasetFileBase].[CreatedOn],
    [msdyn_AIBDatasetFileBase].[CreatedBy],
    [msdyn_AIBDatasetFileBase].[ModifiedOn],
    [msdyn_AIBDatasetFileBase].[ModifiedBy],
    [msdyn_AIBDatasetFileBase].[CreatedOnBehalfBy],
    [msdyn_AIBDatasetFileBase].[ModifiedOnBehalfBy],
    [msdyn_AIBDatasetFileBase].[OwningBusinessUnit],
    [msdyn_AIBDatasetFileBase].[statecode],
    [msdyn_AIBDatasetFileBase].[statuscode],
    [msdyn_AIBDatasetFileBase].[VersionNumber],
    [msdyn_AIBDatasetFileBase].[ImportSequenceNumber],
    [msdyn_AIBDatasetFileBase].[OverriddenCreatedOn],
    [msdyn_AIBDatasetFileBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIBDatasetFileBase].[UTCConversionTimeZoneCode],
    [msdyn_AIBDatasetFileBase].[msdyn_Name],
    [msdyn_AIBDatasetFileBase].[msdyn_AIBDatasetId],
    [msdyn_AIBDatasetFileBase].[msdyn_AIBFileId],
    [msdyn_AIBDatasetFileBase].[msdyn_LastModifiedDate]
from [msdyn_AIBDatasetFileBase] 
    left join [SystemUserBase] [lk_msdyn_aibdatasetfile_createdby] on ([msdyn_AIBDatasetFileBase].[CreatedBy] = [lk_msdyn_aibdatasetfile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetfile_createdonbehalfby] on ([msdyn_AIBDatasetFileBase].[CreatedOnBehalfBy] = [lk_msdyn_aibdatasetfile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetfile_modifiedby] on ([msdyn_AIBDatasetFileBase].[ModifiedBy] = [lk_msdyn_aibdatasetfile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibdatasetfile_modifiedonbehalfby] on ([msdyn_AIBDatasetFileBase].[ModifiedOnBehalfBy] = [lk_msdyn_aibdatasetfile_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIBDatasetBase] [msdyn_AIBDatasetFile_msdyn_AIBDatas] on ([msdyn_AIBDatasetFileBase].[msdyn_AIBDatasetId] = [msdyn_AIBDatasetFile_msdyn_AIBDatas].[msdyn_AIBDatasetId])
    left join [msdyn_AIBFileBase] [msdyn_AIBDatasetFile_msdyn_AIBuilde] on ([msdyn_AIBDatasetFileBase].[msdyn_AIBFileId] = [msdyn_AIBDatasetFile_msdyn_AIBuilde].[msdyn_AIBFileId])
    left join OwnerBase XXowner on ([msdyn_AIBDatasetFileBase].OwnerId = XXowner.OwnerId)
