SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for PhoneCall
--
create view [dbo].[PhoneCall]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [TransactionCurrencyIdName],
    [SLAName],
    [SLAInvokedIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [Subject],
    [ModifiedBy],
    [OwningBusinessUnit],
    [ActualEnd],
    [ActivityId],
    [CreatedBy],
    [PhoneNumber],
    [DirectionCode],
    [RegardingObjectId],
    [IsBilled],
    [ModifiedOn],
    [ScheduledEnd],
    [CreatedOn],
    [VersionNumber],
    [IsWorkflowCreated],
    [PriorityCode],
    [ActualStart],
    [Category],
    [ScheduledDurationMinutes],
    [Description],
    [StateCode],
    [Subcategory],
    [ActualDurationMinutes],
    [StatusCode],
    [ScheduledStart],
    [ServiceId],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [SubscriptionId],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [LeftVoiceMail],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [ActivityAdditionalParams],
    [SLAInvokedId],
    [OnHoldTime],
    [LastOnHoldTime],
    [SLAId],
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_phonecall_modifiedonbehalfby].[FullName],
    [lk_phonecall_modifiedonbehalfby].[YomiFullName],
    [lk_phonecall_modifiedby].[FullName],
    [lk_phonecall_modifiedby].[YomiFullName],
    [lk_phonecall_createdonbehalfby].[YomiFullName],
    [lk_phonecall_createdonbehalfby].[FullName],
    [lk_phonecall_createdby].[YomiFullName],
    [lk_phonecall_createdby].[FullName],
    [TransactionCurrency_PhoneCall].[CurrencyName],
    [manualsla_phonecall].[Name],
    [sla_phonecall].[Name],

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
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[PhoneNumber],
    [ActivityPointerBase].[PhoneDirectionCode],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[PhoneCategory],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[PhoneSubcategory],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[PhoneImportSequenceNumber],
    [ActivityPointerBase].[PhoneOverriddenCreatedOn],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[PhoneSubscriptionId],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[LeftVoiceMail],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[TraversedPath],
    [ActivityPointerBase].[ActivityAdditionalParams],
    [ActivityPointerBase].[SLAInvokedId],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_phonecall_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_phonecall_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_phonecall_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_phonecall_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_phonecall_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_phonecall_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_phonecall_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_phonecall_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_phonecall] on ([ActivityPointerBase].[SLAId] = [manualsla_phonecall].[SLAId] and [manualsla_phonecall].OverwriteTime = 0 and [manualsla_phonecall].ComponentState = 0)
    left join [SLABase] [sla_phonecall] on ([ActivityPointerBase].[SLAInvokedId] = [sla_phonecall].[SLAId] and [sla_phonecall].OverwriteTime = 0 and [sla_phonecall].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_PhoneCall] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_PhoneCall].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4210
GO
