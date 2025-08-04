


--
-- base view for Appointment
--
create view dbo.[Appointment]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [IsAllDayEvent],
    [ActualEnd],
    [Subject],
    [ServiceId],
    [Category],
    [IsWorkflowCreated],
    [RegardingObjectId],
    [Description],
    [IsBilled],
    [ScheduledDurationMinutes],
    [ModifiedOn],
    [GlobalObjectId],
    [ScheduledStart],
    [StatusCode],
    [OutlookOwnerApptId],
    [ScheduledEnd],
    [ActualDurationMinutes],
    [Location],
    [ActualStart],
    [SubscriptionId],
    [VersionNumber],
    [ModifiedBy],
    [StateCode],
    [ActivityId],
    [OwningBusinessUnit],
    [PriorityCode],
    [Subcategory],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [RegardingObjectIdYomiName],
    [InstanceTypeCode],
    [ModifiedFieldsMask],
    [SeriesId],
    [OriginalStartDate],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [IsMapiPrivate],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_appointment_modifiedonbehalfby].[FullName],
    [lk_appointment_modifiedby].[FullName],
    [lk_appointment_createdonbehalfby].[YomiFullName],
    [lk_appointment_createdby].[FullName],
    [TransactionCurrency_Appointment].[CurrencyName],
    [lk_appointment_createdonbehalfby].[FullName],
    [lk_appointment_modifiedby].[YomiFullName],
    [lk_appointment_modifiedonbehalfby].[YomiFullName],
    [lk_appointment_createdby].[YomiFullName],

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
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[ApptIsAllDayEvent],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[ApptCategory],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ApptGlobalObjectId],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[ApptOutlookOwnerApptId],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ApptLocation],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[ApptSubscriptionId],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ApptSubcategory],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[ApptOverriddenCreatedOn],
    [ActivityPointerBase].[ApptImportSequenceNumber],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[InstanceTypeCode],
    [ActivityPointerBase].[ModifiedFieldsMask],
    [ActivityPointerBase].[SeriesId],
    [ActivityPointerBase].[OriginalStartDate],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[IsMapiPrivate],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_appointment_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_appointment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appointment_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_appointment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appointment_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_appointment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appointment_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_appointment_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Appointment] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Appointment].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4201