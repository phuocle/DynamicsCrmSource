


--
-- base view for msdyn_knowledgesearchinsight
--
create view dbo.[msdyn_knowledgesearchinsight]
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
    [msdyn_knowledgesearchinsightId],
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
    [msdyn_SearchTerm],
    [msdyn_TimeStamp],
    [msdyn_ResultCount],
    [msdyn_ApplicationName],
    [msdyn_EntityType],
    [msdyn_EntityRecordId],
    [msdyn_CorrelationId],
    [msdyn_SearchProviderName],
    [msdyn_SearchProviderId],
    [msdyn_CustomControlId],
    [msdyn_SortBy],
    [msdyn_Filters],
    [msdyn_ResponseTime],
    [msdyn_SearchType],
    [msdyn_InitiatedBy]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_knowledgesearchinsight_createdby].[FullName],
    [lk_msdyn_knowledgesearchinsight_createdby].[YomiFullName],
    [lk_msdyn_knowledgesearchinsight_createdonbehalfby].[FullName],
    [lk_msdyn_knowledgesearchinsight_createdonbehalfby].[YomiFullName],
    [lk_msdyn_knowledgesearchinsight_modifiedby].[FullName],
    [lk_msdyn_knowledgesearchinsight_modifiedby].[YomiFullName],
    [lk_msdyn_knowledgesearchinsight_modifiedonbehalfby].[FullName],
    [lk_msdyn_knowledgesearchinsight_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_knowledgesearchinsightBase].OwnerId,
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
    [msdyn_knowledgesearchinsightBase].[msdyn_knowledgesearchinsightId],
    [msdyn_knowledgesearchinsightBase].[CreatedOn],
    [msdyn_knowledgesearchinsightBase].[CreatedBy],
    [msdyn_knowledgesearchinsightBase].[ModifiedOn],
    [msdyn_knowledgesearchinsightBase].[ModifiedBy],
    [msdyn_knowledgesearchinsightBase].[CreatedOnBehalfBy],
    [msdyn_knowledgesearchinsightBase].[ModifiedOnBehalfBy],
    [msdyn_knowledgesearchinsightBase].[OwningBusinessUnit],
    [msdyn_knowledgesearchinsightBase].[statecode],
    [msdyn_knowledgesearchinsightBase].[statuscode],
    [msdyn_knowledgesearchinsightBase].[VersionNumber],
    [msdyn_knowledgesearchinsightBase].[ImportSequenceNumber],
    [msdyn_knowledgesearchinsightBase].[OverriddenCreatedOn],
    [msdyn_knowledgesearchinsightBase].[TimeZoneRuleVersionNumber],
    [msdyn_knowledgesearchinsightBase].[UTCConversionTimeZoneCode],
    [msdyn_knowledgesearchinsightBase].[msdyn_SearchTerm],
    [msdyn_knowledgesearchinsightBase].[msdyn_TimeStamp],
    [msdyn_knowledgesearchinsightBase].[msdyn_ResultCount],
    [msdyn_knowledgesearchinsightBase].[msdyn_ApplicationName],
    [msdyn_knowledgesearchinsightBase].[msdyn_EntityType],
    [msdyn_knowledgesearchinsightBase].[msdyn_EntityRecordId],
    [msdyn_knowledgesearchinsightBase].[msdyn_CorrelationId],
    [msdyn_knowledgesearchinsightBase].[msdyn_SearchProviderName],
    [msdyn_knowledgesearchinsightBase].[msdyn_SearchProviderId],
    [msdyn_knowledgesearchinsightBase].[msdyn_CustomControlId],
    [msdyn_knowledgesearchinsightBase].[msdyn_SortBy],
    [msdyn_knowledgesearchinsightBase].[msdyn_Filters],
    [msdyn_knowledgesearchinsightBase].[msdyn_ResponseTime],
    [msdyn_knowledgesearchinsightBase].[msdyn_SearchType],
    [msdyn_knowledgesearchinsightBase].[msdyn_InitiatedBy]
from [msdyn_knowledgesearchinsightBase] 
    left join [SystemUserBase] [lk_msdyn_knowledgesearchinsight_createdby] on ([msdyn_knowledgesearchinsightBase].[CreatedBy] = [lk_msdyn_knowledgesearchinsight_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgesearchinsight_createdonbehalfby] on ([msdyn_knowledgesearchinsightBase].[CreatedOnBehalfBy] = [lk_msdyn_knowledgesearchinsight_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgesearchinsight_modifiedby] on ([msdyn_knowledgesearchinsightBase].[ModifiedBy] = [lk_msdyn_knowledgesearchinsight_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_knowledgesearchinsight_modifiedonbehalfby] on ([msdyn_knowledgesearchinsightBase].[ModifiedOnBehalfBy] = [lk_msdyn_knowledgesearchinsight_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_knowledgesearchinsightBase].OwnerId = XXowner.OwnerId)
