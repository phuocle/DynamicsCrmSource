SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for KnowledgeArticleIncident
--
create view [dbo].[KnowledgeArticleIncident]
 (
    -- logical attributes
    [OwningUser],
    [OwningBusinessUnit],
    [OwnerId],
    [KnowledgeArticleIdName],
    [OwnerIdType],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [IncidentIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [KnowledgeArticleIncidentId],
    [IncidentId],
    [KnowledgeArticleId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [KnowledgeUsage],
    [IsSentToCustomer],
    [statecode],
    [statuscode],
    [VersionNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode]
) with view_metadata as
select
    -- logical attributes
    case when [incident_knowledgearticles].OwnerIdType = 8
    then [incident_knowledgearticles].OwnerId
    else null
    end,
    [incident_knowledgearticles].[OwningBusinessUnit],
    [incident_knowledgearticles].[OwnerId],
    [incident_knowledgearticles].[Title],
    [incident_knowledgearticles].[OwnerIdType],
    [lk_knowledgearticleincident_modifiedonbehalfby].[FullName],
    [lk_knowledgearticleincident_modifiedonbehalfby].[YomiFullName],
    [lk_knowledgearticleincident_createdby].[FullName],
    [lk_knowledgearticleincident_createdby].[YomiFullName],
    [knowledgearticle_incidents].[Title],
    [lk_knowledgearticleincident_createdonbehalfby].[YomiFullName],
    [lk_knowledgearticleincident_createdonbehalfby].[FullName],
    [lk_knowledgearticleincident_modifiedby].[YomiFullName],
    [lk_knowledgearticleincident_modifiedby].[FullName],
    [transactioncurrency_knowledgearticleincident].[CurrencyName],

    -- physical attribute
    [KnowledgeArticleIncidentBase].[KnowledgeArticleIncidentId],
    [KnowledgeArticleIncidentBase].[IncidentId],
    [KnowledgeArticleIncidentBase].[KnowledgeArticleId],
    [KnowledgeArticleIncidentBase].[CreatedBy],
    [KnowledgeArticleIncidentBase].[CreatedOn],
    [KnowledgeArticleIncidentBase].[CreatedOnBehalfBy],
    [KnowledgeArticleIncidentBase].[ModifiedBy],
    [KnowledgeArticleIncidentBase].[ModifiedOn],
    [KnowledgeArticleIncidentBase].[ModifiedOnBehalfBy],
    [KnowledgeArticleIncidentBase].[KnowledgeUsage],
    [KnowledgeArticleIncidentBase].[IsSentToCustomer],
    [KnowledgeArticleIncidentBase].[statecode],
    [KnowledgeArticleIncidentBase].[statuscode],
    [KnowledgeArticleIncidentBase].[VersionNumber],
    [KnowledgeArticleIncidentBase].[OverriddenCreatedOn],
    [KnowledgeArticleIncidentBase].[TransactionCurrencyId],
    [KnowledgeArticleIncidentBase].[ExchangeRate],
    [KnowledgeArticleIncidentBase].[ImportSequenceNumber],
    [KnowledgeArticleIncidentBase].[TimeZoneRuleVersionNumber],
    [KnowledgeArticleIncidentBase].[UTCConversionTimeZoneCode]
from [KnowledgeArticleIncidentBase] 
    left join [KnowledgeArticleBase] [incident_knowledgearticles] on ([KnowledgeArticleIncidentBase].[KnowledgeArticleId] = [incident_knowledgearticles].[knowledgearticleId])
    left join [IncidentBase] [knowledgearticle_incidents] on ([KnowledgeArticleIncidentBase].[IncidentId] = [knowledgearticle_incidents].[IncidentId])
    left join [SystemUserBase] [lk_knowledgearticleincident_createdby] with(nolock) on ([KnowledgeArticleIncidentBase].[CreatedBy] = [lk_knowledgearticleincident_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleincident_createdonbehalfby] with(nolock) on ([KnowledgeArticleIncidentBase].[CreatedOnBehalfBy] = [lk_knowledgearticleincident_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleincident_modifiedby] with(nolock) on ([KnowledgeArticleIncidentBase].[ModifiedBy] = [lk_knowledgearticleincident_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleincident_modifiedonbehalfby] with(nolock) on ([KnowledgeArticleIncidentBase].[ModifiedOnBehalfBy] = [lk_knowledgearticleincident_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_knowledgearticleincident] on ([KnowledgeArticleIncidentBase].[TransactionCurrencyId] = [transactioncurrency_knowledgearticleincident].[TransactionCurrencyId])
GO
