USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RecurringAppointmentMaster]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for RecurringAppointmentMaster
--
create view [dbo].[RecurringAppointmentMaster]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [EffectiveStartDate],
    [FirstDayOfWeek],
    [EffectiveEndDate],
    [DayOfMonth],
    [RecurrencePatternType],
    [EndTime],
    [Interval],
    [PatternStartDate],
    [IsWeekDayPattern],
    [DaysOfWeekMask],
    [PatternEndType],
    [IsRegenerate],
    [Occurrences],
    [RuleId],
    [Duration],
    [Instance],
    [PatternEndDate],
    [StartTime],
    [IsNthMonthly],
    [IsNthYearly],
    [MonthOfYear],
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
    [OverriddenCreatedOn],
    [StateCode],
    [ModifiedOn],
    [OwningBusinessUnit],
    [GroupId],
    [UTCConversionTimeZoneCode],
    [SubscriptionId],
    [LastExpandedInstanceDate],
    [IsWorkflowCreated],
    [InstanceTypeCode],
    [Subcategory],
    [Category],
    [ImportSequenceNumber],
    [OutlookOwnerApptId],
    [NextExpansionInstanceDate],
    [ExpansionStateCode],
    [PriorityCode],
    [IsBilled],
    [TimeZoneRuleVersionNumber],
    [GlobalObjectId],
    [StatusCode],
    [RegardingObjectId],
    [IsAllDayEvent],
    [SeriesStatus],
    [CreatedOn],
    [CreatedBy],
    [ServiceId],
    [Subject],
    [Description],
    [ActivityId],
    [ModifiedBy],
    [DeletedExceptionsList],
    [VersionNumber],
    [Location],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [RegardingObjectIdYomiName],
    [ScheduledStart],
    [ScheduledEnd],
    [ActivityTypeCode],
    [IsRegularActivity],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [IsMapiPrivate],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_recurringappointmentmaster_modifiedby].[FullName],
    [lk_recurringappointmentmaster_modifiedby].[YomiFullName],
    [lk_recurringappointmentmaster_createdby].[FullName],
    [lk_recurringappointmentmaster_createdby].[YomiFullName],
    [lk_recurringappointmentmaster_createdonbehalfby].[FullName],
    [lk_recurringappointmentmaster_createdonbehalfby].[YomiFullName],
    [lk_recurringappointmentmaster_modifiedonbehalfby].[FullName],
    [lk_recurringappointmentmaster_modifiedonbehalfby].[YomiFullName],
    [recurrencerule_recurringappointmentmaster].[EffectiveStartDate],
    [recurrencerule_recurringappointmentmaster].[FirstDayOfWeek],
    [recurrencerule_recurringappointmentmaster].[EffectiveEndDate],
    [recurrencerule_recurringappointmentmaster].[DayOfMonth],
    [recurrencerule_recurringappointmentmaster].[RecurrencePatternType],
    [recurrencerule_recurringappointmentmaster].[EndTime],
    [recurrencerule_recurringappointmentmaster].[Interval],
    [recurrencerule_recurringappointmentmaster].[PatternStartDate],
    [recurrencerule_recurringappointmentmaster].[IsWeekDayPattern],
    [recurrencerule_recurringappointmentmaster].[DaysOfWeekMask],
    [recurrencerule_recurringappointmentmaster].[PatternEndType],
    [recurrencerule_recurringappointmentmaster].[IsRegenerate],
    [recurrencerule_recurringappointmentmaster].[Occurrences],
    [recurrencerule_recurringappointmentmaster].[RuleId],
    [recurrencerule_recurringappointmentmaster].[Duration],
    [recurrencerule_recurringappointmentmaster].[Instance],
    [recurrencerule_recurringappointmentmaster].[PatternEndDate],
    [recurrencerule_recurringappointmentmaster].[StartTime],
    [recurrencerule_recurringappointmentmaster].[IsNthMonthly],
    [recurrencerule_recurringappointmentmaster].[IsNthYearly],
    [recurrencerule_recurringappointmentmaster].[MonthOfYear],
    [TransactionCurrency_RecurringAppointmentMaster].[CurrencyName],

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
    [ActivityPointerBase].[RecApptMstrOverriddenCreatedOn],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[GroupId],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[RecApptMstrSubscriptionId],
    [ActivityPointerBase].[LastExpandedInstanceDate],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[InstanceTypeCode],
    [ActivityPointerBase].[RecApptMstrSubcategory],
    [ActivityPointerBase].[RecApptMstrCategory],
    [ActivityPointerBase].[RecApptMstrImportSequenceNumber],
    [ActivityPointerBase].[RecApptMstrOutlookOwnerApptId],
    [ActivityPointerBase].[NextExpansionInstanceDate],
    [ActivityPointerBase].[ExpansionStateCode],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[RecApptMstrGlobalObjectId],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[RecApptMstrIsAllDayEvent],
    [ActivityPointerBase].[SeriesStatus],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[DeletedExceptionsList],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[RecApptMstrLocation],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[IsMapiPrivate],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[TraversedPath],
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_recurringappointmentmaster_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_recurringappointmentmaster_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_recurringappointmentmaster_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_recurringappointmentmaster_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_recurringappointmentmaster_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_recurringappointmentmaster_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_recurringappointmentmaster_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_recurringappointmentmaster_modifiedonbehalfby].[SystemUserId])
    left join [RecurrenceRuleBase] [recurrencerule_recurringappointmentmaster] with(nolock) on ([ActivityPointerBase].[ActivityId] = [recurrencerule_recurringappointmentmaster].[ObjectId])
    left join [TransactionCurrencyBase] [TransactionCurrency_RecurringAppointmentMaster] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_RecurringAppointmentMaster].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4251
GO
