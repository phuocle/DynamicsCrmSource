


--
-- base view for Annotation
--
create view dbo.[Annotation]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    ObjectIdTypeCode,
    -- physical attributes
    [AnnotationId],
    [ObjectTypeCode],
    [ObjectId],
    [OwningBusinessUnit],
    [Subject],
    [IsDocument],
    [NoteText],
    [MimeType],
    [LangId],
    [DocumentBody],
    [CreatedOn],
    [FileSize],
    [FileName],
    [CreatedBy],
    [IsPrivate],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [StepId],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_annotationbase_createdonbehalfby].[YomiFullName],
    [lk_annotationbase_modifiedonbehalfby].[FullName],
    [lk_annotationbase_createdonbehalfby].[FullName],
    [lk_annotationbase_modifiedonbehalfby].[YomiFullName],
    [lk_annotationbase_createdby].[FullName],
    [lk_annotationbase_modifiedby].[YomiFullName],
    [lk_annotationbase_createdby].[YomiFullName],
    [lk_annotationbase_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [AnnotationBase].OwnerId,
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

-- logical attribute 
AnnotationBase.ObjectTypeCode,    -- physical attribute
    [AnnotationBase].[AnnotationId],
    [AnnotationBase].[ObjectTypeCode],
    [AnnotationBase].[ObjectId],
    [AnnotationBase].[OwningBusinessUnit],
    [AnnotationBase].[Subject],
    [AnnotationBase].[IsDocument],
    [AnnotationBase].[NoteText],
    [AnnotationBase].[MimeType],
    [AnnotationBase].[LangId],
    [AnnotationBase].[DocumentBody],
    [AnnotationBase].[CreatedOn],
    [AnnotationBase].[FileSize],
    [AnnotationBase].[FileName],
    [AnnotationBase].[CreatedBy],
    [AnnotationBase].[IsPrivate],
    [AnnotationBase].[ModifiedBy],
    [AnnotationBase].[ModifiedOn],
    [AnnotationBase].[VersionNumber],
    [AnnotationBase].[StepId],
    [AnnotationBase].[OverriddenCreatedOn],
    [AnnotationBase].[ImportSequenceNumber],
    [AnnotationBase].[CreatedOnBehalfBy],
    [AnnotationBase].[ModifiedOnBehalfBy]
from [AnnotationBase] 
    left join [SystemUserBase] [lk_annotationbase_createdby] with(nolock) on ([AnnotationBase].[CreatedBy] = [lk_annotationbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_annotationbase_createdonbehalfby] with(nolock) on ([AnnotationBase].[CreatedOnBehalfBy] = [lk_annotationbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_annotationbase_modifiedby] with(nolock) on ([AnnotationBase].[ModifiedBy] = [lk_annotationbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_annotationbase_modifiedonbehalfby] with(nolock) on ([AnnotationBase].[ModifiedOnBehalfBy] = [lk_annotationbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([AnnotationBase].OwnerId = XXowner.OwnerId)
