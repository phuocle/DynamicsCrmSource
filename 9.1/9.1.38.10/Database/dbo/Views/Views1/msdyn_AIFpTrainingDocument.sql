


--
-- base view for msdyn_AIFpTrainingDocument
--
create view dbo.[msdyn_AIFpTrainingDocument]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [msdyn_AIFpTrainingDocumentId],
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
    [msdyn_Checksum],
    [msdyn_Metadata],
    [msdyn_SourceType]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aifptrainingdocument_createdonbehalfby].[FullName],
    [lk_msdyn_aifptrainingdocument_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aifptrainingdocument_modifiedonbehalfby].[FullName],
    [lk_msdyn_aifptrainingdocument_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aifptrainingdocument_createdby].[FullName],
    [lk_msdyn_aifptrainingdocument_createdby].[YomiFullName],
    [lk_msdyn_aifptrainingdocument_modifiedby].[FullName],
    [lk_msdyn_aifptrainingdocument_modifiedby].[YomiFullName],
    [msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId].[msdyn_Name],

    -- ownership entries
    OwnerId = [msdyn_AIFpTrainingDocumentBase].OwnerId,
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
    [msdyn_AIFpTrainingDocumentBase].[msdyn_AIFpTrainingDocumentId],
    [msdyn_AIFpTrainingDocumentBase].[CreatedOn],
    [msdyn_AIFpTrainingDocumentBase].[CreatedBy],
    [msdyn_AIFpTrainingDocumentBase].[ModifiedOn],
    [msdyn_AIFpTrainingDocumentBase].[ModifiedBy],
    [msdyn_AIFpTrainingDocumentBase].[CreatedOnBehalfBy],
    [msdyn_AIFpTrainingDocumentBase].[ModifiedOnBehalfBy],
    [msdyn_AIFpTrainingDocumentBase].[OwningBusinessUnit],
    [msdyn_AIFpTrainingDocumentBase].[statecode],
    [msdyn_AIFpTrainingDocumentBase].[statuscode],
    [msdyn_AIFpTrainingDocumentBase].[VersionNumber],
    [msdyn_AIFpTrainingDocumentBase].[ImportSequenceNumber],
    [msdyn_AIFpTrainingDocumentBase].[OverriddenCreatedOn],
    [msdyn_AIFpTrainingDocumentBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIFpTrainingDocumentBase].[UTCConversionTimeZoneCode],
    [msdyn_AIFpTrainingDocumentBase].[msdyn_name],
    [msdyn_AIFpTrainingDocumentBase].[msdyn_AIConfigurationId],
    [msdyn_AIFpTrainingDocumentBase].[msdyn_Checksum],
    [msdyn_AIFpTrainingDocumentBase].[msdyn_Metadata],
    [msdyn_AIFpTrainingDocumentBase].[msdyn_SourceType]
from [msdyn_AIFpTrainingDocumentBase] 
    left join [SystemUserBase] [lk_msdyn_aifptrainingdocument_createdby] on ([msdyn_AIFpTrainingDocumentBase].[CreatedBy] = [lk_msdyn_aifptrainingdocument_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aifptrainingdocument_createdonbehalfby] on ([msdyn_AIFpTrainingDocumentBase].[CreatedOnBehalfBy] = [lk_msdyn_aifptrainingdocument_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aifptrainingdocument_modifiedby] on ([msdyn_AIFpTrainingDocumentBase].[ModifiedBy] = [lk_msdyn_aifptrainingdocument_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aifptrainingdocument_modifiedonbehalfby] on ([msdyn_AIFpTrainingDocumentBase].[ModifiedOnBehalfBy] = [lk_msdyn_aifptrainingdocument_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIConfigurationBase] [msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId] on ([msdyn_AIFpTrainingDocumentBase].[msdyn_AIConfigurationId] = [msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId].[msdyn_AIConfigurationId] and [msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId].OverwriteTime = 0 and [msdyn_msdyn_aiconfiguration_msdyn_aifptrainingdocument_AIConfigurationId].ComponentState = 0)
    left join OwnerBase XXowner on ([msdyn_AIFpTrainingDocumentBase].OwnerId = XXowner.OwnerId)
