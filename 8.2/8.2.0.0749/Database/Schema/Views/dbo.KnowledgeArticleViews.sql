SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for KnowledgeArticleViews
--
create view [dbo].[KnowledgeArticleViews]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OwnerIdType],
    [OwningBusinessUnit],
    [KnowledgeArticleIdName],
    [OwnerId],
    [OwningUser],
    [ModifiedByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [KnowledgeArticleViewsId],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [VersionNumber],
    [KnowledgeArticleView],
    [ViewDate],
    [KnowledgeArticleId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [statecode],
    [statuscode],
    [UTCConversionTimeZoneCode],
    [Location]
) with view_metadata as
select
    -- logical attributes
    [lk_knowledgearticleviews_createdby].[YomiFullName],
    [lk_knowledgearticleviews_createdby].[FullName],
    [lk_knowledgearticleviews_modifiedonbehalfby].[YomiFullName],
    [lk_knowledgearticleviews_modifiedonbehalfby].[FullName],
    [lk_knowledgearticleviews_createdonbehalfby].[FullName],
    [lk_knowledgearticleviews_createdonbehalfby].[YomiFullName],
    [knowledgearticle_views].[OwnerIdType],
    [knowledgearticle_views].[OwningBusinessUnit],
    [knowledgearticle_views].[Title],
    [knowledgearticle_views].[OwnerId],
    case when [knowledgearticle_views].OwnerIdType = 8
    then [knowledgearticle_views].OwnerId
    else null
    end,
    [lk_knowledgearticleviews_modifiedby].[FullName],
    [lk_knowledgearticleviews_modifiedby].[YomiFullName],
    [transactioncurrency_knowledgearticleviews].[CurrencyName],

    -- physical attribute
    [KnowledgeArticleViewsBase].[KnowledgeArticleViewsId],
    [KnowledgeArticleViewsBase].[TimeZoneRuleVersionNumber],
    [KnowledgeArticleViewsBase].[TransactionCurrencyId],
    [KnowledgeArticleViewsBase].[ExchangeRate],
    [KnowledgeArticleViewsBase].[ImportSequenceNumber],
    [KnowledgeArticleViewsBase].[OverriddenCreatedOn],
    [KnowledgeArticleViewsBase].[VersionNumber],
    [KnowledgeArticleViewsBase].[KnowledgeArticleView],
    [KnowledgeArticleViewsBase].[ViewDate],
    [KnowledgeArticleViewsBase].[KnowledgeArticleId],
    [KnowledgeArticleViewsBase].[CreatedBy],
    [KnowledgeArticleViewsBase].[CreatedOn],
    [KnowledgeArticleViewsBase].[CreatedOnBehalfBy],
    [KnowledgeArticleViewsBase].[ModifiedBy],
    [KnowledgeArticleViewsBase].[ModifiedOn],
    [KnowledgeArticleViewsBase].[ModifiedOnBehalfBy],
    [KnowledgeArticleViewsBase].[statecode],
    [KnowledgeArticleViewsBase].[statuscode],
    [KnowledgeArticleViewsBase].[UTCConversionTimeZoneCode],
    [KnowledgeArticleViewsBase].[Location]
from [KnowledgeArticleViewsBase] 
    left join [KnowledgeArticleBase] [knowledgearticle_views] on ([KnowledgeArticleViewsBase].[KnowledgeArticleId] = [knowledgearticle_views].[knowledgearticleId])
    left join [SystemUserBase] [lk_knowledgearticleviews_createdby] with(nolock) on ([KnowledgeArticleViewsBase].[CreatedBy] = [lk_knowledgearticleviews_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleviews_createdonbehalfby] with(nolock) on ([KnowledgeArticleViewsBase].[CreatedOnBehalfBy] = [lk_knowledgearticleviews_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleviews_modifiedby] with(nolock) on ([KnowledgeArticleViewsBase].[ModifiedBy] = [lk_knowledgearticleviews_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleviews_modifiedonbehalfby] with(nolock) on ([KnowledgeArticleViewsBase].[ModifiedOnBehalfBy] = [lk_knowledgearticleviews_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_knowledgearticleviews] on ([KnowledgeArticleViewsBase].[TransactionCurrencyId] = [transactioncurrency_knowledgearticleviews].[TransactionCurrencyId])
GO
