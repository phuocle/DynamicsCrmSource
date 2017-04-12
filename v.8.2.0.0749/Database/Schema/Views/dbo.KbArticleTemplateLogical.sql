SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for KbArticleTemplateLogical
--
create view [dbo].[KbArticleTemplateLogical]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [KbArticleTemplateId],
    [StructureXml],
    [OrganizationId],
    [FormatXml],
    [Title],
    [VersionNumber],
    [Description],
    [IsActive],
    [CreatedBy],
    [ModifiedBy],
    [CreatedOn],
    [ModifiedOn],
    [OverriddenCreatedOn],
    [LanguageCode],
    [ImportSequenceNumber],
    [KbArticleTemplateIdUnique],
    [ComponentState],
    [SupportingSolutionId],
    [SolutionId],
    [OverwriteTime],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_kbarticletemplatebase_modifiedby].[FullName],
    [lk_kbarticletemplatebase_modifiedby].[YomiFullName],
    [lk_kbarticletemplatebase_modifiedonbehalfby].[FullName],
    [lk_kbarticletemplatebase_modifiedonbehalfby].[YomiFullName],
    [lk_kbarticletemplatebase_createdby].[YomiFullName],
    [lk_kbarticletemplatebase_createdby].[FullName],
    [lk_kbarticletemplatebase_createdonbehalfby].[FullName],
    [lk_kbarticletemplatebase_createdonbehalfby].[YomiFullName],
    [organization_kb_article_templates].[Name],

    -- physical attribute
    [T1].[KbArticleTemplateId],
    [T1].[StructureXml],
    [T1].[OrganizationId],
    [T1].[FormatXml],
    [T1].[Title],
    [T1].[VersionNumber],
    [T1].[Description],
    [T1].[IsActive],
    [T1].[CreatedBy],
    [T1].[ModifiedBy],
    [T1].[CreatedOn],
    [T1].[ModifiedOn],
    [T1].[OverriddenCreatedOn],
    [T1].[LanguageCode],
    [T1].[ImportSequenceNumber],
    [T1].[KbArticleTemplateIdUnique],
    [T1].[ComponentState],
    [T1].[SupportingSolutionId],
    [T1].[SolutionId],
    [T1].[OverwriteTime],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [KbArticleTemplateBase] [T1]
    left join [SystemUserBase] [lk_kbarticletemplatebase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_kbarticletemplatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticletemplatebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_kbarticletemplatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticletemplatebase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_kbarticletemplatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticletemplatebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_kbarticletemplatebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_kb_article_templates] with(nolock) on ([T1].[OrganizationId] = [organization_kb_article_templates].[OrganizationId])
where T1.OverwriteTime = 0
GO
