


--
-- base view for ServiceAppointment
--
create view dbo.[ServiceAppointment]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],
    [SiteIdName],
    [ServiceIdName],
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
    [IsWorkflowCreated],
    [PriorityCode],
    [ScheduledEnd],
    [Category],
    [CreatedBy],
    [SubscriptionId],
    [ModifiedOn],
    [ServiceId],
    [Location],
    [Subcategory],
    [ActualDurationMinutes],
    [ScheduledStart],
    [ActivityId],
    [ActualStart],
    [VersionNumber],
    [ModifiedBy],
    [IsAllDayEvent],
    [StatusCode],
    [SiteId],
    [OwningBusinessUnit],
    [StateCode],
    [Description],
    [ScheduledDurationMinutes],
    [CreatedOn],
    [IsBilled],
    [ActualEnd],
    [Subject],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [IsMapiPrivate],
    [ActivityAdditionalParams],
    [SLAId],
    [SLAInvokedId],
    [OnHoldTime],
    [LastOnHoldTime],
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_serviceappointment_modifiedonbehalfby].[FullName],
    [lk_serviceappointment_modifiedonbehalfby].[YomiFullName],
    [lk_serviceappointment_modifiedby].[FullName],
    [lk_serviceappointment_modifiedby].[YomiFullName],
    [lk_serviceappointment_createdonbehalfby].[YomiFullName],
    [lk_serviceappointment_createdonbehalfby].[FullName],
    [lk_serviceappointment_createdby].[FullName],
    [lk_serviceappointment_createdby].[YomiFullName],
    [TransactionCurrency_ServiceAppointment].[CurrencyName],
    [site_service_appointments].[Name],
    [service_service_appointments].[Name],
    [manualsla_serviceappointment].[Name],
    [sla_serviceappointment].[Name],

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
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[SvcApptCategory],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[SvcApptSubscriptionId],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[SvcApptLocation],
    [ActivityPointerBase].[SvcApptSubcategory],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[SvcApptIsAllDayEvent],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[SiteId],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[SvcApptOverriddenCreatedOn],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[SvcApptImportSequenceNumber],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[IsMapiPrivate],
    [ActivityPointerBase].[ActivityAdditionalParams],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[SLAInvokedId],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_serviceappointment_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_serviceappointment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_serviceappointment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_serviceappointment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_serviceappointment_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_serviceappointment] on ([ActivityPointerBase].[SLAId] = [manualsla_serviceappointment].[SLAId] and [manualsla_serviceappointment].OverwriteTime = 0 and [manualsla_serviceappointment].ComponentState = 0)
    left join [ServiceBase] [service_service_appointments] on ([ActivityPointerBase].[ServiceId] = [service_service_appointments].[ServiceId])
    left join [SiteBase] [site_service_appointments] on ([ActivityPointerBase].[SiteId] = [site_service_appointments].[SiteId])
    left join [SLABase] [sla_serviceappointment] on ([ActivityPointerBase].[SLAInvokedId] = [sla_serviceappointment].[SLAId] and [sla_serviceappointment].OverwriteTime = 0 and [sla_serviceappointment].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_ServiceAppointment] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_ServiceAppointment].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4214