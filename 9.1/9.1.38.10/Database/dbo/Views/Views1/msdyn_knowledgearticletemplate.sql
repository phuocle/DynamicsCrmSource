


--
-- base view for msdyn_knowledgearticletemplate
--
create view dbo.[msdyn_knowledgearticletemplate]
 (
    -- logical attributes
    [msdyn_subjectidName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [msdyn_knowledgearticletemplateId],
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
    [msdyn_Content],
    [msdyn_Description],
    [msdyn_isinternal],
    [msdyn_keywords],
    [msdyn_subjectid],
    [msdyn_title],
    [msdyn_languagelocaleid],
    [msdyn_LanguageLocaleIdName]
) with view_metadata as
select
    -- logical attributes
    [msdyn_subject_knowledgearticletemplate_subjectid].[Title],
    [lk_msdyn_knowledgearticletemplate_modifiedonbehalfby].[FullName],
    [lk_msdyn_knowledgearticletemplate_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_knowledgearticletemplate_modifiedby].[FullName],
    [lk_msdyn_knowledgearticletemplate_modifiedby].[YomiFullName],
    [lk_msdyn_knowledgearticletemplate_createdonbehalfby].[FullName],
    [lk_msdyn_knowledgearticletemplate_createdonbehalfby].[YomiFullName],
    [lk_msdyn_knowledgearticletemplate_createdby].[FullName],
    [lk_msdyn_knowledgearticletemplate_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_knowledgearticletemplateBase].OwnerId,
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
    [msdyn_knowledgearticletemplateBase].[msdyn_knowledgearticletemplateId],
    [msdyn_knowledgearticletemplateBase].[CreatedOn],
    [msdyn_knowledgearticletemplateBase].[CreatedBy],
    [msdyn_knowledgearticletemplateBase].[ModifiedOn],
    [msdyn_knowledgearticletemplateBase].[ModifiedBy],
    [msdyn_knowledgearticletemplateBase].[CreatedOnBehalfBy],
    [msdyn_knowledgearticletemplateBase].[ModifiedOnBehalfBy],
    [msdyn_knowledgearticletemplateBase].[OwningBusinessUnit],
    [msdyn_knowledgearticletemplateBase].[statecode],
    [msdyn_knowledgearticletemplateBase].[statuscode],
    [msdyn_knowledgearticletemplateBase].[VersionNumber],
    [msdyn_knowledgearticletemplateBase].[ImportSequenceNumber],
    [msdyn_knowledgearticletemplateBase].[OverriddenCreatedOn],
    [msdyn_knowledgearticletemplateBase].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgearticletemplateBase].[UTCConversionTimeZoneCode],
    [msdyn_knowledgearticletemplateBase].[msdyn_name],
    [msdyn_knowledgearticletemplateBase].[msdyn_Content],
    [msdyn_knowledgearticletemplateBase].[msdyn_Description],
    [msdyn_knowledgearticletemplateBase].[msdyn_isinternal],
    [msdyn_knowledgearticletemplateBase].[msdyn_keywords],
    [msdyn_knowledgearticletemplateBase].[msdyn_subjectid],
    [msdyn_knowledgearticletemplateBase].[msdyn_title],
    [msdyn_knowledgearticletemplateBase].[msdyn_languagelocaleid],
    [msdyn_knowledgearticletemplateBase].[msdyn_LanguageLocaleIdName]
from [msdyn_knowledgearticletemplateBase] 
    left join [SystemUserBase] [lk_msdyn_knowledgearticletemplate_createdby] on ([msdyn_knowledgearticletemplateBase].[CreatedBy] = [lk_msdyn_knowledgearticletemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticletemplate_createdonbehalfby] on ([msdyn_knowledgearticletemplateBase].[CreatedOnBehalfBy] = [lk_msdyn_knowledgearticletemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticletemplate_modifiedby] on ([msdyn_knowledgearticletemplateBase].[ModifiedBy] = [lk_msdyn_knowledgearticletemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticletemplate_modifiedonbehalfby] on ([msdyn_knowledgearticletemplateBase].[ModifiedOnBehalfBy] = [lk_msdyn_knowledgearticletemplate_modifiedonbehalfby].[SystemUserId])
    left join [SubjectBase] [msdyn_subject_knowledgearticletemplate_subjectid] on ([msdyn_knowledgearticletemplateBase].[msdyn_subjectid] = [msdyn_subject_knowledgearticletemplate_subjectid].[SubjectId])
    left join OwnerBase XXowner on ([msdyn_knowledgearticletemplateBase].OwnerId = XXowner.OwnerId)
