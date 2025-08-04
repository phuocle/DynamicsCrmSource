


--
-- base view for OpportunityClose
--
create view dbo.[OpportunityClose]
 (
    -- logical attributes
    [CompetitorIdName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CompetitorIdYomiName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ModifiedBy],
    [CreatedOn],
    [ActualStart],
    [ActualDurationMinutes],
    [ActivityId],
    [CreatedBy],
    [ActualRevenue],
    [ScheduledStart],
    [IsWorkflowCreated],
    [StateCode],
    [StatusCode],
    [CompetitorId],
    [ServiceId],
    [IsBilled],
    [Subject],
    [OwningBusinessUnit],
    [Description],
    [ActualEnd],
    [ScheduledEnd],
    [Category],
    [ScheduledDurationMinutes],
    [OpportunityId],
    [Subcategory],
    [VersionNumber],
    [ModifiedOn],
    [OpportunityIdName],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [ExchangeRate],
    [OverriddenCreatedOn],
    [ActualRevenue_Base],
    [OpportunityIdType],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity]
) with view_metadata as
select
    -- logical attributes
    [competitor_opportunity_activities].[Name],
    [lk_opportunityclose_createdby].[FullName],
    [lk_opportunityclose_createdonbehalfby].[FullName],
    [lk_opportunityclose_modifiedonbehalfby].[YomiFullName],
    [lk_opportunityclose_createdby].[YomiFullName],
    [lk_opportunityclose_modifiedby].[FullName],
    [lk_opportunityclose_modifiedonbehalfby].[FullName],
    [lk_opportunityclose_createdonbehalfby].[YomiFullName],
    [competitor_opportunity_activities].[YomiName],
    [lk_opportunityclose_modifiedby].[YomiFullName],
    [transactioncurrency_opportunityclose].[CurrencyName],

    -- ownership entries
    OwnerId = [ActivityPointerBase].OwnerId,
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
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[ActualRevenue],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[CompetitorId],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[OppCloseCategory],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[OppCloseSubcategory],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[OppCloseImportSequenceNumber],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[OppCloseOverriddenCreatedOn],
    [ActivityPointerBase].[ActualRevenue_Base],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity]
from [ActivityPointerBase] 
    left join [CompetitorBase] [competitor_opportunity_activities] on ([ActivityPointerBase].[CompetitorId] = [competitor_opportunity_activities].[CompetitorId])
    left join [SystemUserBase] [lk_opportunityclose_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_opportunityclose_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityclose_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_opportunityclose_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityclose_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_opportunityclose_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunityclose_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_opportunityclose_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_opportunityclose] on ([ActivityPointerBase].[TransactionCurrencyId] = [transactioncurrency_opportunityclose].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4208