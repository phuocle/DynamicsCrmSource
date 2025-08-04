


--
-- base view for BusinessUnitNewsArticle
--
create view dbo.[BusinessUnitNewsArticle]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],

    -- physical attributes
    [OrganizationId],
    [BusinessUnitNewsArticleId],
    [ActiveOn],
    [ActiveUntil],
    [NewsArticle],
    [ArticleTypeCode],
    [ShowOnHomepage],
    [ArticleTitle],
    [ArticleUrl],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_businessunitnewsarticlebase_modifiedby].[FullName],
    [lk_businessunitnewsarticlebase_createdonbehalfby].[FullName],
    [lk_businessunitnewsarticlebase_createdonbehalfby].[YomiFullName],
    [lk_businessunitnewsarticlebase_modifiedby].[YomiFullName],
    [lk_businessunitnewsarticlebase_createdby].[YomiFullName],
    [lk_businessunitnewsarticlebase_modifiedonbehalfby].[YomiFullName],
    [lk_businessunitnewsarticlebase_createdby].[FullName],
    [lk_businessunitnewsarticlebase_modifiedonbehalfby].[FullName],
    [organization_business_unit_news_articles].[Name],

    -- physical attribute
    [BusinessUnitNewsArticleBase].[OrganizationId],
    [BusinessUnitNewsArticleBase].[BusinessUnitNewsArticleId],
    [BusinessUnitNewsArticleBase].[ActiveOn],
    [BusinessUnitNewsArticleBase].[ActiveUntil],
    [BusinessUnitNewsArticleBase].[NewsArticle],
    [BusinessUnitNewsArticleBase].[ArticleTypeCode],
    [BusinessUnitNewsArticleBase].[ShowOnHomepage],
    [BusinessUnitNewsArticleBase].[ArticleTitle],
    [BusinessUnitNewsArticleBase].[ArticleUrl],
    [BusinessUnitNewsArticleBase].[CreatedOn],
    [BusinessUnitNewsArticleBase].[CreatedBy],
    [BusinessUnitNewsArticleBase].[ModifiedBy],
    [BusinessUnitNewsArticleBase].[ModifiedOn],
    [BusinessUnitNewsArticleBase].[VersionNumber],
    [BusinessUnitNewsArticleBase].[UTCConversionTimeZoneCode],
    [BusinessUnitNewsArticleBase].[OverriddenCreatedOn],
    [BusinessUnitNewsArticleBase].[TimeZoneRuleVersionNumber],
    [BusinessUnitNewsArticleBase].[ImportSequenceNumber],
    [BusinessUnitNewsArticleBase].[CreatedOnBehalfBy],
    [BusinessUnitNewsArticleBase].[ModifiedOnBehalfBy]
from [BusinessUnitNewsArticleBase] 
    left join [SystemUserBase] [lk_businessunitnewsarticlebase_createdby] with(nolock) on ([BusinessUnitNewsArticleBase].[CreatedBy] = [lk_businessunitnewsarticlebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_businessunitnewsarticlebase_createdonbehalfby] with(nolock) on ([BusinessUnitNewsArticleBase].[CreatedOnBehalfBy] = [lk_businessunitnewsarticlebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_businessunitnewsarticlebase_modifiedby] with(nolock) on ([BusinessUnitNewsArticleBase].[ModifiedBy] = [lk_businessunitnewsarticlebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_businessunitnewsarticlebase_modifiedonbehalfby] with(nolock) on ([BusinessUnitNewsArticleBase].[ModifiedOnBehalfBy] = [lk_businessunitnewsarticlebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_business_unit_news_articles] with(nolock) on ([BusinessUnitNewsArticleBase].[OrganizationId] = [organization_business_unit_news_articles].[OrganizationId])
