


--
-- logical view for TemplateLogical
--
create view dbo.[TemplateLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [TemplateId],
    [Subject],
    [OwningBusinessUnit],
    [IsPersonal],
    [MimeType],
    [TemplateTypeCode],
    [Body],
    [Title],
    [Description],
    [CreatedBy],
    [PresentationXml],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [SubjectPresentationXml],
    [GenerationTypeCode],
    [LanguageCode],
    [ImportSequenceNumber],
    [OverwriteTime],
    [ComponentState],
    [SolutionId],
    [SupportingSolutionId],
    [TemplateIdUnique],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_templatebase_modifiedonbehalfby].[FullName],
    [lk_templatebase_createdby].[FullName],
    [lk_templatebase_modifiedby].[FullName],
    [lk_templatebase_createdonbehalfby].[YomiFullName],
    [lk_templatebase_createdby].[YomiFullName],
    [lk_templatebase_createdonbehalfby].[FullName],
    [lk_templatebase_modifiedonbehalfby].[YomiFullName],
    [lk_templatebase_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
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
    [T1].[TemplateId],
    [T1].[Subject],
    [T1].[OwningBusinessUnit],
    [T1].[IsPersonal],
    [T1].[MimeType],
    [T1].[TemplateTypeCode],
    [T1].[Body],
    [T1].[Title],
    [T1].[Description],
    [T1].[CreatedBy],
    [T1].[PresentationXml],
    [T1].[CreatedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[SubjectPresentationXml],
    [T1].[GenerationTypeCode],
    [T1].[LanguageCode],
    [T1].[ImportSequenceNumber],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[TemplateIdUnique],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [TemplateBase] [T1]
    left join [SystemUserBase] [lk_templatebase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_templatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_templatebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_templatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_templatebase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_templatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_templatebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_templatebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0