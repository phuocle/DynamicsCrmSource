


--
-- base view for KnowledgeArticleIncident
--
create view dbo.[KnowledgeArticleIncident]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],
    [IncidentIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OwningUser],
    [OwningBusinessUnit],
    [OwnerId],
    [KnowledgeArticleIdName],
    [OwnerIdType],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwningTeam,

    -- physical attributes
    [KnowledgeArticleIncidentId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [IncidentId],
    [KnowledgeArticleId],
    [KnowledgeUsage],
    [IsSentToCustomer],
    [statecode],
    [statuscode],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_knowledgearticleincident_modifiedby].[FullName],
    [lk_knowledgearticleincident_modifiedby].[YomiFullName],
    [transactioncurrency_knowledgearticleincident].[CurrencyName],
    [knowledgearticle_incidents].[Title],
    [lk_knowledgearticleincident_modifiedonbehalfby].[FullName],
    [lk_knowledgearticleincident_modifiedonbehalfby].[YomiFullName],
    [lk_knowledgearticleincident_createdonbehalfby].[FullName],
    [lk_knowledgearticleincident_createdonbehalfby].[YomiFullName],
    case when [incident_knowledgearticles].OwnerIdType = 8
    then [incident_knowledgearticles].OwnerId
    else null
    end,
    [incident_knowledgearticles].[OwningBusinessUnit],
    [incident_knowledgearticles].[OwnerId],
    [incident_knowledgearticles].[Title],
    [incident_knowledgearticles].[OwnerIdType],
    [lk_knowledgearticleincident_createdby].[FullName],
    [lk_knowledgearticleincident_createdby].[YomiFullName],

    -- ownership entries
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [KnowledgeArticleIncidentBase].[KnowledgeArticleIncidentId],
    [KnowledgeArticleIncidentBase].[CreatedOn],
    [KnowledgeArticleIncidentBase].[CreatedBy],
    [KnowledgeArticleIncidentBase].[ModifiedOn],
    [KnowledgeArticleIncidentBase].[ModifiedBy],
    [KnowledgeArticleIncidentBase].[CreatedOnBehalfBy],
    [KnowledgeArticleIncidentBase].[ModifiedOnBehalfBy],
    [KnowledgeArticleIncidentBase].[VersionNumber],
    [KnowledgeArticleIncidentBase].[ImportSequenceNumber],
    [KnowledgeArticleIncidentBase].[OverriddenCreatedOn],
    [KnowledgeArticleIncidentBase].[TimeZoneRuleVersionNumber],
    [KnowledgeArticleIncidentBase].[UTCConversionTimeZoneCode],
    [KnowledgeArticleIncidentBase].[IncidentId],
    [KnowledgeArticleIncidentBase].[KnowledgeArticleId],
    [KnowledgeArticleIncidentBase].[KnowledgeUsage],
    [KnowledgeArticleIncidentBase].[IsSentToCustomer],
    [KnowledgeArticleIncidentBase].[statecode],
    [KnowledgeArticleIncidentBase].[statuscode],
    [KnowledgeArticleIncidentBase].[TransactionCurrencyId],
    [KnowledgeArticleIncidentBase].[ExchangeRate]
from [KnowledgeArticleIncidentBase] 
    left join [KnowledgeArticleBase] [incident_knowledgearticles] on ([KnowledgeArticleIncidentBase].[KnowledgeArticleId] = [incident_knowledgearticles].[knowledgearticleId])
    left join [IncidentBase] [knowledgearticle_incidents] on ([KnowledgeArticleIncidentBase].[IncidentId] = [knowledgearticle_incidents].[IncidentId])
    left join [SystemUserBase] [lk_knowledgearticleincident_createdby] on ([KnowledgeArticleIncidentBase].[CreatedBy] = [lk_knowledgearticleincident_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleincident_createdonbehalfby] on ([KnowledgeArticleIncidentBase].[CreatedOnBehalfBy] = [lk_knowledgearticleincident_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleincident_modifiedby] on ([KnowledgeArticleIncidentBase].[ModifiedBy] = [lk_knowledgearticleincident_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgearticleincident_modifiedonbehalfby] on ([KnowledgeArticleIncidentBase].[ModifiedOnBehalfBy] = [lk_knowledgearticleincident_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_knowledgearticleincident] on ([KnowledgeArticleIncidentBase].[TransactionCurrencyId] = [transactioncurrency_knowledgearticleincident].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([incident_knowledgearticles].OwnerId = XXowner.OwnerId)
