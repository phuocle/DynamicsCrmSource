


--
-- base view for KbArticle
--
create view dbo.[KbArticle]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [KbArticleTemplateIdTitle],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [EntityImage_URL],
    [EntityImage],
    [EntityImage_Timestamp],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],
    [SubjectIdName],

    -- physical attributes
    [KbArticleId],
    [KbArticleTemplateId],
    [OrganizationId],
    [SubjectId],
    [ArticleXml],
    [Title],
    [Number],
    [Content],
    [Description],
    [Comments],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [KeyWords],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [LanguageCode],
    [ExchangeRate],
    [TransactionCurrencyId],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_kbarticlebase_createdby].[FullName],
    [lk_kbarticlebase_createdby].[YomiFullName],
    [kb_article_template_kb_articles].[Title],
    [lk_kbarticlebase_modifiedonbehalfby].[YomiFullName],
    [lk_kbarticlebase_modifiedonbehalfby].[FullName],
    [lk_kbarticle_entityimage].[ImageURL],
    [lk_kbarticle_entityimage].[ImageData],
    [lk_kbarticle_entityimage].[ImageTimestamp],
    [lk_kbarticlebase_createdonbehalfby].[YomiFullName],
    [lk_kbarticlebase_createdonbehalfby].[FullName],
    [lk_kbarticlebase_modifiedby].[YomiFullName],
    [lk_kbarticlebase_modifiedby].[FullName],
    [organization_kb_articles].[Name],
    [TransactionCurrency_KbArticle].[CurrencyName],
    [subject_kb_articles].[Title],

    -- physical attribute
    [KbArticleBase].[KbArticleId],
    [KbArticleBase].[KbArticleTemplateId],
    [KbArticleBase].[OrganizationId],
    [KbArticleBase].[SubjectId],
    [KbArticleBase].[ArticleXml],
    [KbArticleBase].[Title],
    [KbArticleBase].[Number],
    [KbArticleBase].[Content],
    [KbArticleBase].[Description],
    [KbArticleBase].[Comments],
    [KbArticleBase].[CreatedOn],
    [KbArticleBase].[CreatedBy],
    [KbArticleBase].[ModifiedBy],
    [KbArticleBase].[ModifiedOn],
    [KbArticleBase].[StateCode],
    [KbArticleBase].[StatusCode],
    [KbArticleBase].[VersionNumber],
    [KbArticleBase].[KeyWords],
    [KbArticleBase].[ImportSequenceNumber],
    [KbArticleBase].[OverriddenCreatedOn],
    [KbArticleBase].[CreatedOnBehalfBy],
    [KbArticleBase].[ModifiedOnBehalfBy],
    [KbArticleBase].[LanguageCode],
    [KbArticleBase].[ExchangeRate],
    [KbArticleBase].[TransactionCurrencyId],
    [KbArticleBase].[EntityImageId]
from [KbArticleBase] 
    left join [KbArticleTemplateBase] [kb_article_template_kb_articles] on ([KbArticleBase].[KbArticleTemplateId] = [kb_article_template_kb_articles].[KbArticleTemplateId] and [kb_article_template_kb_articles].OverwriteTime = 0 and [kb_article_template_kb_articles].ComponentState = 0)
    left join [ImageDescriptor] [lk_kbarticle_entityimage] on ([KbArticleBase].[EntityImageId] = [lk_kbarticle_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_kbarticlebase_createdby] with(nolock) on ([KbArticleBase].[CreatedBy] = [lk_kbarticlebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlebase_createdonbehalfby] with(nolock) on ([KbArticleBase].[CreatedOnBehalfBy] = [lk_kbarticlebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlebase_modifiedby] with(nolock) on ([KbArticleBase].[ModifiedBy] = [lk_kbarticlebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlebase_modifiedonbehalfby] with(nolock) on ([KbArticleBase].[ModifiedOnBehalfBy] = [lk_kbarticlebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_kb_articles] with(nolock) on ([KbArticleBase].[OrganizationId] = [organization_kb_articles].[OrganizationId])
    left join [SubjectBase] [subject_kb_articles] on ([KbArticleBase].[SubjectId] = [subject_kb_articles].[SubjectId])
    left join [TransactionCurrencyBase] [TransactionCurrency_KbArticle] on ([KbArticleBase].[TransactionCurrencyId] = [TransactionCurrency_KbArticle].[TransactionCurrencyId])
