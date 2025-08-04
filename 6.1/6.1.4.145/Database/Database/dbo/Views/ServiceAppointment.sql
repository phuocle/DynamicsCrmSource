


--
-- base view for ServiceAppointment
--
create view dbo.[ServiceAppointment]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByYomiName],
    [SiteIdName],
    [ModifiedByName],
    [ServiceIdName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
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
    [IsMapiPrivate]
) with view_metadata as
select
    -- logical attributes
    [TransactionCurrency_ServiceAppointment].[CurrencyName],
    [lk_serviceappointment_createdonbehalfby].[YomiFullName],
    [site_service_appointments].[Name],
    [lk_serviceappointment_modifiedby].[FullName],
    [service_service_appointments].[Name],
    [lk_serviceappointment_createdby].[FullName],
    [lk_serviceappointment_modifiedonbehalfby].[FullName],
    [lk_serviceappointment_modifiedonbehalfby].[YomiFullName],
    [lk_serviceappointment_createdonbehalfby].[FullName],
    [lk_serviceappointment_modifiedby].[YomiFullName],
    [lk_serviceappointment_createdby].[YomiFullName],

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
    [ActivityPointerBase].[IsMapiPrivate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_serviceappointment_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_serviceappointment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_serviceappointment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_serviceappointment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceappointment_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_serviceappointment_modifiedonbehalfby].[SystemUserId])
    left join [ServiceBase] [service_service_appointments] on ([ActivityPointerBase].[ServiceId] = [service_service_appointments].[ServiceId])
    left join [SiteBase] [site_service_appointments] on ([ActivityPointerBase].[SiteId] = [site_service_appointments].[SiteId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ServiceAppointment] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_ServiceAppointment].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4214