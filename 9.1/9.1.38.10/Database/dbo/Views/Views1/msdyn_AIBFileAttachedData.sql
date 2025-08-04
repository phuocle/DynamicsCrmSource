


--
-- base view for msdyn_AIBFileAttachedData
--
create view dbo.[msdyn_AIBFileAttachedData]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [msdyn_AIBDatasetFileIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [msdyn_AIBFileAttachedDataId],
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
    [msdyn_Key],
    [msdyn_AIBDatasetFileId],
    [msdyn_Data],
    [msdyn_Type]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aibfileattacheddata_modifiedonbehalfby].[FullName],
    [lk_msdyn_aibfileattacheddata_modifiedonbehalfby].[YomiFullName],
    [msdyn_AIBFileAttachedData_msdyn_AIB].[msdyn_Name],
    [lk_msdyn_aibfileattacheddata_createdby].[FullName],
    [lk_msdyn_aibfileattacheddata_createdby].[YomiFullName],
    [lk_msdyn_aibfileattacheddata_createdonbehalfby].[FullName],
    [lk_msdyn_aibfileattacheddata_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aibfileattacheddata_modifiedby].[FullName],
    [lk_msdyn_aibfileattacheddata_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIBFileAttachedDataBase].OwnerId,
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
    [msdyn_AIBFileAttachedDataBase].[msdyn_AIBFileAttachedDataId],
    [msdyn_AIBFileAttachedDataBase].[CreatedOn],
    [msdyn_AIBFileAttachedDataBase].[CreatedBy],
    [msdyn_AIBFileAttachedDataBase].[ModifiedOn],
    [msdyn_AIBFileAttachedDataBase].[ModifiedBy],
    [msdyn_AIBFileAttachedDataBase].[CreatedOnBehalfBy],
    [msdyn_AIBFileAttachedDataBase].[ModifiedOnBehalfBy],
    [msdyn_AIBFileAttachedDataBase].[OwningBusinessUnit],
    [msdyn_AIBFileAttachedDataBase].[statecode],
    [msdyn_AIBFileAttachedDataBase].[statuscode],
    [msdyn_AIBFileAttachedDataBase].[VersionNumber],
    [msdyn_AIBFileAttachedDataBase].[ImportSequenceNumber],
    [msdyn_AIBFileAttachedDataBase].[OverriddenCreatedOn],
    [msdyn_AIBFileAttachedDataBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIBFileAttachedDataBase].[UTCConversionTimeZoneCode],
    [msdyn_AIBFileAttachedDataBase].[msdyn_Key],
    [msdyn_AIBFileAttachedDataBase].[msdyn_AIBDatasetFileId],
    [msdyn_AIBFileAttachedDataBase].[msdyn_Data],
    [msdyn_AIBFileAttachedDataBase].[msdyn_Type]
from [msdyn_AIBFileAttachedDataBase] 
    left join [SystemUserBase] [lk_msdyn_aibfileattacheddata_createdby] on ([msdyn_AIBFileAttachedDataBase].[CreatedBy] = [lk_msdyn_aibfileattacheddata_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibfileattacheddata_createdonbehalfby] on ([msdyn_AIBFileAttachedDataBase].[CreatedOnBehalfBy] = [lk_msdyn_aibfileattacheddata_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibfileattacheddata_modifiedby] on ([msdyn_AIBFileAttachedDataBase].[ModifiedBy] = [lk_msdyn_aibfileattacheddata_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibfileattacheddata_modifiedonbehalfby] on ([msdyn_AIBFileAttachedDataBase].[ModifiedOnBehalfBy] = [lk_msdyn_aibfileattacheddata_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIBDatasetFileBase] [msdyn_AIBFileAttachedData_msdyn_AIB] on ([msdyn_AIBFileAttachedDataBase].[msdyn_AIBDatasetFileId] = [msdyn_AIBFileAttachedData_msdyn_AIB].[msdyn_AIBDatasetFileId])
    left join OwnerBase XXowner on ([msdyn_AIBFileAttachedDataBase].OwnerId = XXowner.OwnerId)
