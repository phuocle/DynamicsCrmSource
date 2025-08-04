


--
-- base view for Fax
--
create view dbo.[Fax]
 (
    -- logical attributes
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],
    [CreatedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [RegardingObjectId],
    [ScheduledDurationMinutes],
    [OwningBusinessUnit],
    [CreatedOn],
    [CoverPageName],
    [BillingCode],
    [ActualDurationMinutes],
    [StateCode],
    [NumberOfPages],
    [Description],
    [ScheduledEnd],
    [FaxNumber],
    [ServiceId],
    [Category],
    [ActualStart],
    [Tsid],
    [IsWorkflowCreated],
    [VersionNumber],
    [ActualEnd],
    [DirectionCode],
    [ModifiedOn],
    [ScheduledStart],
    [ActivityId],
    [ModifiedBy],
    [StatusCode],
    [Subject],
    [PriorityCode],
    [Subcategory],
    [IsBilled],
    [CreatedBy],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [SubscriptionId],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_fax_createdby].[YomiFullName],
    [lk_fax_modifiedby].[FullName],
    [lk_fax_createdonbehalfby].[FullName],
    [lk_fax_modifiedonbehalfby].[YomiFullName],
    [lk_fax_modifiedonbehalfby].[FullName],
    [lk_fax_createdonbehalfby].[YomiFullName],
    [lk_fax_modifiedby].[YomiFullName],
    [TransactionCurrency_Fax].[CurrencyName],
    [lk_fax_createdby].[FullName],

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
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[CoverPageName],
    [ActivityPointerBase].[BillingCode],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[NumberOfPages],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[FaxNumber],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[FaxCategory],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[Tsid],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[FaxDirectionCode],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[FaxSubcategory],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[FaxOverriddenCreatedOn],
    [ActivityPointerBase].[FaxSubscriptionId],
    [ActivityPointerBase].[FaxImportSequenceNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_fax_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_fax_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_fax_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_fax_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_fax_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_fax_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_fax_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_fax_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Fax] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Fax].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4204