


--
-- base view for msdyn_AIOdTrainingImage
--
create view dbo.[msdyn_AIOdTrainingImage]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [msdyn_AIOdImageIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [msdyn_AIConfigurationIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIOdTrainingImageId],
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
    [msdyn_name],
    [msdyn_AIConfigurationId],
    [msdyn_AIOdImageId],
    [msdyn_LastModifiedDate],
    [msdyn_SourceType]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aiodtrainingimage_createdby].[FullName],
    [lk_msdyn_aiodtrainingimage_createdby].[YomiFullName],
    [lk_msdyn_aiodtrainingimage_modifiedonbehalfby].[FullName],
    [lk_msdyn_aiodtrainingimage_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aiodtrainingimage_createdonbehalfby].[FullName],
    [lk_msdyn_aiodtrainingimage_createdonbehalfby].[YomiFullName],
    [msdyn_aiodimage_msdyn_aiodtrainingimage].[msdyn_name],
    [lk_msdyn_aiodtrainingimage_modifiedby].[FullName],
    [lk_msdyn_aiodtrainingimage_modifiedby].[YomiFullName],
    [msdyn_aiconfiguration_msdyn_aiodtrainingimage].[msdyn_Name],

    -- ownership entries
    OwnerId = [msdyn_AIOdTrainingImageBase].OwnerId,
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
    [msdyn_AIOdTrainingImageBase].[msdyn_AIOdTrainingImageId],
    [msdyn_AIOdTrainingImageBase].[CreatedOn],
    [msdyn_AIOdTrainingImageBase].[CreatedBy],
    [msdyn_AIOdTrainingImageBase].[ModifiedOn],
    [msdyn_AIOdTrainingImageBase].[ModifiedBy],
    [msdyn_AIOdTrainingImageBase].[CreatedOnBehalfBy],
    [msdyn_AIOdTrainingImageBase].[ModifiedOnBehalfBy],
    [msdyn_AIOdTrainingImageBase].[OwningBusinessUnit],
    [msdyn_AIOdTrainingImageBase].[statecode],
    [msdyn_AIOdTrainingImageBase].[statuscode],
    [msdyn_AIOdTrainingImageBase].[VersionNumber],
    [msdyn_AIOdTrainingImageBase].[ImportSequenceNumber],
    [msdyn_AIOdTrainingImageBase].[OverriddenCreatedOn],
    [msdyn_AIOdTrainingImageBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdTrainingImageBase].[UTCConversionTimeZoneCode],
    [msdyn_AIOdTrainingImageBase].[msdyn_name],
    [msdyn_AIOdTrainingImageBase].[msdyn_AIConfigurationId],
    [msdyn_AIOdTrainingImageBase].[msdyn_AIOdImageId],
    [msdyn_AIOdTrainingImageBase].[msdyn_LastModifiedDate],
    [msdyn_AIOdTrainingImageBase].[msdyn_SourceType]
from [msdyn_AIOdTrainingImageBase] 
    left join [SystemUserBase] [lk_msdyn_aiodtrainingimage_createdby] on ([msdyn_AIOdTrainingImageBase].[CreatedBy] = [lk_msdyn_aiodtrainingimage_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodtrainingimage_createdonbehalfby] on ([msdyn_AIOdTrainingImageBase].[CreatedOnBehalfBy] = [lk_msdyn_aiodtrainingimage_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodtrainingimage_modifiedby] on ([msdyn_AIOdTrainingImageBase].[ModifiedBy] = [lk_msdyn_aiodtrainingimage_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodtrainingimage_modifiedonbehalfby] on ([msdyn_AIOdTrainingImageBase].[ModifiedOnBehalfBy] = [lk_msdyn_aiodtrainingimage_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIConfigurationBase] [msdyn_aiconfiguration_msdyn_aiodtrainingimage] on ([msdyn_AIOdTrainingImageBase].[msdyn_AIConfigurationId] = [msdyn_aiconfiguration_msdyn_aiodtrainingimage].[msdyn_AIConfigurationId] and [msdyn_aiconfiguration_msdyn_aiodtrainingimage].OverwriteTime = 0 and [msdyn_aiconfiguration_msdyn_aiodtrainingimage].ComponentState = 0)
    left join [msdyn_AIOdImageBase] [msdyn_aiodimage_msdyn_aiodtrainingimage] on ([msdyn_AIOdTrainingImageBase].[msdyn_AIOdImageId] = [msdyn_aiodimage_msdyn_aiodtrainingimage].[msdyn_AIOdImageId])
    left join OwnerBase XXowner on ([msdyn_AIOdTrainingImageBase].OwnerId = XXowner.OwnerId)
