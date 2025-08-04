


--
-- base view for msdyn_knowledgearticleimage
--
create view dbo.[msdyn_knowledgearticleimage]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [msdyn_BlobFile_Name],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_knowledgearticleimageId],
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
    [msdyn_FileName],
    [msdyn_BlobFile],
    [msdyn_ParentKnowledgeArticleID]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_knowledgearticleimage_createdby].[FullName],
    [lk_msdyn_knowledgearticleimage_createdby].[YomiFullName],
    [lk_msdyn_knowledgearticleimage_createdonbehalfby].[FullName],
    [lk_msdyn_knowledgearticleimage_createdonbehalfby].[YomiFullName],
    [lk_msdyn_knowledgearticleimage_modifiedby].[FullName],
    [lk_msdyn_knowledgearticleimage_modifiedby].[YomiFullName],
    [lk_msdyn_knowledgearticleimage_modifiedonbehalfby].[FullName],
    [lk_msdyn_knowledgearticleimage_modifiedonbehalfby].[YomiFullName],
    [FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile].[FileName],

    -- ownership entries
    OwnerId = [msdyn_knowledgearticleimageBase].OwnerId,
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
    [msdyn_knowledgearticleimageBase].[msdyn_knowledgearticleimageId],
    [msdyn_knowledgearticleimageBase].[CreatedOn],
    [msdyn_knowledgearticleimageBase].[CreatedBy],
    [msdyn_knowledgearticleimageBase].[ModifiedOn],
    [msdyn_knowledgearticleimageBase].[ModifiedBy],
    [msdyn_knowledgearticleimageBase].[CreatedOnBehalfBy],
    [msdyn_knowledgearticleimageBase].[ModifiedOnBehalfBy],
    [msdyn_knowledgearticleimageBase].[OwningBusinessUnit],
    [msdyn_knowledgearticleimageBase].[statecode],
    [msdyn_knowledgearticleimageBase].[statuscode],
    [msdyn_knowledgearticleimageBase].[VersionNumber],
    [msdyn_knowledgearticleimageBase].[ImportSequenceNumber],
    [msdyn_knowledgearticleimageBase].[OverriddenCreatedOn],
    [msdyn_knowledgearticleimageBase].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgearticleimageBase].[UTCConversionTimeZoneCode],
    [msdyn_knowledgearticleimageBase].[msdyn_FileName],
    [msdyn_knowledgearticleimageBase].[msdyn_BlobFile],
    [msdyn_knowledgearticleimageBase].[msdyn_ParentKnowledgeArticleID]
from [msdyn_knowledgearticleimageBase] 
    left join [FileAttachmentBase] [FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile] on ([msdyn_knowledgearticleimageBase].[msdyn_BlobFile] = [FileAttachment_msdyn_knowledgearticleimage_msdyn_BlobFile].[FileAttachmentId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticleimage_createdby] on ([msdyn_knowledgearticleimageBase].[CreatedBy] = [lk_msdyn_knowledgearticleimage_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticleimage_createdonbehalfby] on ([msdyn_knowledgearticleimageBase].[CreatedOnBehalfBy] = [lk_msdyn_knowledgearticleimage_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticleimage_modifiedby] on ([msdyn_knowledgearticleimageBase].[ModifiedBy] = [lk_msdyn_knowledgearticleimage_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgearticleimage_modifiedonbehalfby] on ([msdyn_knowledgearticleimageBase].[ModifiedOnBehalfBy] = [lk_msdyn_knowledgearticleimage_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_knowledgearticleimageBase].OwnerId = XXowner.OwnerId)
