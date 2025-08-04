


--
-- base view for CampaignActivity
--
create view dbo.[CampaignActivity]
 (
    -- logical attributes
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [PriorityCode],
    [IgnoreInactiveListMembers],
    [ModifiedOn],
    [ActualCost],
    [ActualEnd],
    [ChannelTypeCode],
    [IsWorkflowCreated],
    [ActualStart],
    [StatusCode],
    [OwningBusinessUnit],
    [BudgetedCost],
    [TypeCode],
    [ServiceId],
    [VersionNumber],
    [RegardingObjectId],
    [Description],
    [CreatedOn],
    [ScheduledEnd],
    [ScheduledDurationMinutes],
    [ActivityId],
    [Subject],
    [ActualDurationMinutes],
    [ExcludeIfContactedInXDays],
    [StateCode],
    [ModifiedBy],
    [Category],
    [DoNotSendOnOptOut],
    [Subcategory],
    [CreatedBy],
    [IsBilled],
    [ScheduledStart],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [ImportSequenceNumber],
    [ExchangeRate],
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [BudgetedCost_Base],
    [ActualCost_Base],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_campaignactivity_createdby].[YomiFullName],
    [lk_campaignactivity_modifiedby].[FullName],
    [lk_campaignactivity_modifiedby].[YomiFullName],
    [lk_campaignactivity_createdby].[FullName],
    [lk_campaignactivity_createdonbehalfby].[FullName],
    [lk_campaignactivity_createdonbehalfby].[YomiFullName],
    [lk_campaignactivity_modifiedonbehalfby].[FullName],
    [lk_campaignactivity_modifiedonbehalfby].[YomiFullName],
    [transactioncurrency_campaignactivity].[CurrencyName],

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
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[IgnoreInactiveListMembers],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ActualCost],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[CampActChannelTypeCode],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[BudgetedCost],
    [ActivityPointerBase].[TypeCode],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ExcludeIfContactedInXDays],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[CampActCategory],
    [ActivityPointerBase].[DoNotSendOnOptOut],
    [ActivityPointerBase].[CampActSubcategory],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[CampActImportSequenceNumber],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[CampActOverriddenCreatedOn],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[BudgetedCost_Base],
    [ActivityPointerBase].[ActualCost_Base],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_campaignactivity_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_campaignactivity_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_campaignactivity_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_campaignactivity_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_campaignactivity_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_campaignactivity_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_campaignactivity_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_campaignactivity_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_campaignactivity] on ([ActivityPointerBase].[TransactionCurrencyId] = [transactioncurrency_campaignactivity].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4402