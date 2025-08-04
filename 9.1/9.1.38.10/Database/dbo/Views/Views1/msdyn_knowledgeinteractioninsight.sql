


--
-- base view for msdyn_knowledgeinteractioninsight
--
create view dbo.[msdyn_knowledgeinteractioninsight]
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

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_knowledgeinteractioninsightId],
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
    [msdyn_InteractionType],
    [msdyn_KnowledgeOperationId],
    [msdyn_KnowledgeOperationType],
    [msdyn_TimeStamp],
    [msdyn_ArticleRecordId],
    [msdyn_ArticleRelevance],
    [msdyn_ArticleRank],
    [msdyn_InteractionContext]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_knowledgeinteractioninsight_createdby].[FullName],
    [lk_msdyn_knowledgeinteractioninsight_createdby].[YomiFullName],
    [lk_msdyn_knowledgeinteractioninsight_createdonbehalfby].[FullName],
    [lk_msdyn_knowledgeinteractioninsight_createdonbehalfby].[YomiFullName],
    [lk_msdyn_knowledgeinteractioninsight_modifiedby].[FullName],
    [lk_msdyn_knowledgeinteractioninsight_modifiedby].[YomiFullName],
    [lk_msdyn_knowledgeinteractioninsight_modifiedonbehalfby].[FullName],
    [lk_msdyn_knowledgeinteractioninsight_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_knowledgeinteractioninsightBase].OwnerId,
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
    [msdyn_knowledgeinteractioninsightBase].[msdyn_knowledgeinteractioninsightId],
    [msdyn_knowledgeinteractioninsightBase].[CreatedOn],
    [msdyn_knowledgeinteractioninsightBase].[CreatedBy],
    [msdyn_knowledgeinteractioninsightBase].[ModifiedOn],
    [msdyn_knowledgeinteractioninsightBase].[ModifiedBy],
    [msdyn_knowledgeinteractioninsightBase].[CreatedOnBehalfBy],
    [msdyn_knowledgeinteractioninsightBase].[ModifiedOnBehalfBy],
    [msdyn_knowledgeinteractioninsightBase].[OwningBusinessUnit],
    [msdyn_knowledgeinteractioninsightBase].[statecode],
    [msdyn_knowledgeinteractioninsightBase].[statuscode],
    [msdyn_knowledgeinteractioninsightBase].[VersionNumber],
    [msdyn_knowledgeinteractioninsightBase].[ImportSequenceNumber],
    [msdyn_knowledgeinteractioninsightBase].[OverriddenCreatedOn],
    [msdyn_knowledgeinteractioninsightBase].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgeinteractioninsightBase].[UTCConversionTimeZoneCode],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_InteractionType],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_KnowledgeOperationId],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_KnowledgeOperationType],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_TimeStamp],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_ArticleRecordId],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_ArticleRelevance],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_ArticleRank],
    [msdyn_knowledgeinteractioninsightBase].[msdyn_InteractionContext]
from [msdyn_knowledgeinteractioninsightBase] 
    left join [SystemUserBase] [lk_msdyn_knowledgeinteractioninsight_createdby] on ([msdyn_knowledgeinteractioninsightBase].[CreatedBy] = [lk_msdyn_knowledgeinteractioninsight_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgeinteractioninsight_createdonbehalfby] on ([msdyn_knowledgeinteractioninsightBase].[CreatedOnBehalfBy] = [lk_msdyn_knowledgeinteractioninsight_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgeinteractioninsight_modifiedby] on ([msdyn_knowledgeinteractioninsightBase].[ModifiedBy] = [lk_msdyn_knowledgeinteractioninsight_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgeinteractioninsight_modifiedonbehalfby] on ([msdyn_knowledgeinteractioninsightBase].[ModifiedOnBehalfBy] = [lk_msdyn_knowledgeinteractioninsight_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_knowledgeinteractioninsightBase].OwnerId = XXowner.OwnerId)
