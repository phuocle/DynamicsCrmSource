


--
-- base view for KnowledgeArticle
--
create view dbo.[KnowledgeArticle]
 (
    -- logical attributes
    [primaryauthoridName],
    [LanguageLocaleIdName],
    [LanguageLocaleIdLocaleId],
    [TransactionCurrencyIdName],
    [PreviousArticleContentIdName],
    [SubjectIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ParentArticleContentIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [RootArticleIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [knowledgearticleId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [processid],
    [stageid],
    [traversedpath],
    [ExchangeRate],
    [TransactionCurrencyId],
    [Title],
    [Content],
    [Keywords],
    [PublishOn],
    [ExpirationDate],
    [ParentArticleContentId],
    [KnowledgeArticleViews],
    [Description],
    [MajorVersionNumber],
    [MinorVersionNumber],
    [LanguageLocaleId],
    [ScheduledStatusId],
    [ExpirationStatusId],
    [PublishStatusId],
    [IsPrimary],
    [ReadyForReview],
    [Review],
    [UpdateContent],
    [ExpiredReviewOptions],
    [SubjectId],
    [primaryauthorid],
    [IsRootArticle],
    [PreviousArticleContentId],
    [ArticlePublicNumber],
    [IsLatestVersion],
    [RootArticleId],
    [KnowledgeArticleViews_Date],
    [KnowledgeArticleViews_State],
    [Rating],
    [Rating_Date],
    [Rating_State],
    [Rating_Sum],
    [Rating_Count],
    [IsInternal],
    [SetCategoryAssociations],
    [ExpirationStateId],
    [SetProductAssociations]
) with view_metadata as
select
    -- logical attributes
    [knowledgearticle_primaryauthorid].[FullName],
    [knowledgearticle_languagelocaleid].[Name],
    [knowledgearticle_languagelocaleid].[LocaleId],
    [TransactionCurrency_knowledgearticle].[CurrencyName],
    [knowledgearticle_previousarticle_contentid].[Title],
    [subject_knowledgearticles].[Title],
    [lk_knowledgearticle_createdonbehalfby].[FullName],
    [lk_knowledgearticle_createdonbehalfby].[YomiFullName],
    [knowledgearticle_parentarticle_contentid].[Title],
    [lk_knowledgearticle_modifiedonbehalfby].[FullName],
    [lk_knowledgearticle_modifiedonbehalfby].[YomiFullName],
    [lk_knowledgearticle_createdby].[FullName],
    [lk_knowledgearticle_createdby].[YomiFullName],
    [lk_knowledgearticle_modifiedby].[FullName],
    [lk_knowledgearticle_modifiedby].[YomiFullName],
    [knowledgearticle_rootarticle_id].[Title],

    -- ownership entries
    OwnerId = [KnowledgeArticleBase].OwnerId,
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
    [KnowledgeArticleBase].[knowledgearticleId],
    [KnowledgeArticleBase].[CreatedOn],
    [KnowledgeArticleBase].[CreatedBy],
    [KnowledgeArticleBase].[ModifiedOn],
    [KnowledgeArticleBase].[ModifiedBy],
    [KnowledgeArticleBase].[CreatedOnBehalfBy],
    [KnowledgeArticleBase].[ModifiedOnBehalfBy],
    [KnowledgeArticleBase].[OwningBusinessUnit],
    [KnowledgeArticleBase].[StateCode],
    [KnowledgeArticleBase].[StatusCode],
    [KnowledgeArticleBase].[VersionNumber],
    [KnowledgeArticleBase].[ImportSequenceNumber],
    [KnowledgeArticleBase].[OverriddenCreatedOn],
    [KnowledgeArticleBase].[TimeZoneRuleVersionNumber],
    [KnowledgeArticleBase].[UTCConversionTimeZoneCode],
    [KnowledgeArticleBase].[processid],
    [KnowledgeArticleBase].[stageid],
    [KnowledgeArticleBase].[traversedpath],
    [KnowledgeArticleBase].[ExchangeRate],
    [KnowledgeArticleBase].[TransactionCurrencyId],
    [KnowledgeArticleBase].[Title],
    [KnowledgeArticleBase].[Content],
    [KnowledgeArticleBase].[Keywords],
    [KnowledgeArticleBase].[PublishOn],
    [KnowledgeArticleBase].[ExpirationDate],
    [KnowledgeArticleBase].[ParentArticleContentId],
    [KnowledgeArticleBase].[KnowledgeArticleViews],
    [KnowledgeArticleBase].[Description],
    [KnowledgeArticleBase].[MajorVersionNumber],
    [KnowledgeArticleBase].[MinorVersionNumber],
    [KnowledgeArticleBase].[LanguageLocaleId],
    [KnowledgeArticleBase].[ScheduledStatusId],
    [KnowledgeArticleBase].[ExpirationStatusId],
    [KnowledgeArticleBase].[PublishStatusId],
    [KnowledgeArticleBase].[IsPrimary],
    [KnowledgeArticleBase].[ReadyForReview],
    [KnowledgeArticleBase].[Review],
    [KnowledgeArticleBase].[UpdateContent],
    [KnowledgeArticleBase].[ExpiredReviewOptions],
    [KnowledgeArticleBase].[SubjectId],
    [KnowledgeArticleBase].[primaryauthorid],
    [KnowledgeArticleBase].[IsRootArticle],
    [KnowledgeArticleBase].[PreviousArticleContentId],
    [KnowledgeArticleBase].[ArticlePublicNumber],
    [KnowledgeArticleBase].[IsLatestVersion],
    [KnowledgeArticleBase].[RootArticleId],
    [KnowledgeArticleBase].[KnowledgeArticleViews_Date],
    [KnowledgeArticleBase].[KnowledgeArticleViews_State],
    [KnowledgeArticleBase].[Rating],
    [KnowledgeArticleBase].[Rating_Date],
    [KnowledgeArticleBase].[Rating_State],
    [KnowledgeArticleBase].[Rating_Sum],
    [KnowledgeArticleBase].[Rating_Count],
    [KnowledgeArticleBase].[IsInternal],
    [KnowledgeArticleBase].[SetCategoryAssociations],
    [KnowledgeArticleBase].[ExpirationStateId],
    [KnowledgeArticleBase].[SetProductAssociations]
from [KnowledgeArticleBase] 
    left join [LanguageLocale] [knowledgearticle_languagelocaleid] on ([KnowledgeArticleBase].[LanguageLocaleId] = [knowledgearticle_languagelocaleid].[LanguageLocaleId])
    left join [KnowledgeArticleBase] [knowledgearticle_parentarticle_contentid] on ([KnowledgeArticleBase].[ParentArticleContentId] = [knowledgearticle_parentarticle_contentid].[knowledgearticleId])
    left join [KnowledgeArticleBase] [knowledgearticle_previousarticle_contentid] on ([KnowledgeArticleBase].[PreviousArticleContentId] = [knowledgearticle_previousarticle_contentid].[knowledgearticleId])
    left join [SystemUserBase] [knowledgearticle_primaryauthorid] on ([KnowledgeArticleBase].[primaryauthorid] = [knowledgearticle_primaryauthorid].[SystemUserId])
    left join [KnowledgeArticleBase] [knowledgearticle_rootarticle_id] on ([KnowledgeArticleBase].[RootArticleId] = [knowledgearticle_rootarticle_id].[knowledgearticleId])
    left join [SystemUserBase] [lk_knowledgearticle_createdby] on ([KnowledgeArticleBase].[CreatedBy] = [lk_knowledgearticle_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticle_createdonbehalfby] on ([KnowledgeArticleBase].[CreatedOnBehalfBy] = [lk_knowledgearticle_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticle_modifiedby] on ([KnowledgeArticleBase].[ModifiedBy] = [lk_knowledgearticle_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticle_modifiedonbehalfby] on ([KnowledgeArticleBase].[ModifiedOnBehalfBy] = [lk_knowledgearticle_modifiedonbehalfby].[SystemUserId])
    left join [SubjectBase] [subject_knowledgearticles] on ([KnowledgeArticleBase].[SubjectId] = [subject_knowledgearticles].[SubjectId])
    left join [TransactionCurrencyBase] [TransactionCurrency_knowledgearticle] on ([KnowledgeArticleBase].[TransactionCurrencyId] = [TransactionCurrency_knowledgearticle].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([KnowledgeArticleBase].OwnerId = XXowner.OwnerId)
