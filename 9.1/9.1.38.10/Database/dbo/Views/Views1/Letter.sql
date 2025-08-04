


--
-- base view for Letter
--
create view dbo.[Letter]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [SLAInvokedIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [SLAName],
    [CreatedByYomiName],
    [CreatedByName],
    [ServiceIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

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
    [CreatedBy],
    [DirectionCode],
    [VersionNumber],
    [ModifiedOn],
    [IsBilled],
    [Address],
    [ScheduledStart],
    [CreatedOn],
    [Subject],
    [Subcategory],
    [ActualEnd],
    [ActivityId],
    [ActualDurationMinutes],
    [IsWorkflowCreated],
    [ScheduledEnd],
    [ScheduledDurationMinutes],
    [StatusCode],
    [Category],
    [OwningBusinessUnit],
    [StateCode],
    [Description],
    [PriorityCode],
    [ModifiedBy],
    [ActualStart],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [SubscriptionId],
    [TimeZoneRuleVersionNumber],
    [RegardingObjectIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [SLAId],
    [SLAInvokedId],
    [OnHoldTime],
    [LastOnHoldTime],
    [SortDate],
    [ServiceId]
) with view_metadata as
select
    -- logical attributes
    [TransactionCurrency_Letter].[CurrencyName],
    [sla_letter].[Name],
    [lk_letter_modifiedby].[YomiFullName],
    [lk_letter_modifiedby].[FullName],
    [lk_letter_modifiedonbehalfby].[YomiFullName],
    [lk_letter_modifiedonbehalfby].[FullName],
    [manualsla_letter].[Name],
    [lk_letter_createdby].[YomiFullName],
    [lk_letter_createdby].[FullName],
    [service_letters].[Name],
    [lk_letter_createdonbehalfby].[FullName],
    [lk_letter_createdonbehalfby].[YomiFullName],

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
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[LetterDirectionCode],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[Address],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[LetterSubcategory],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[LetterCategory],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[LetterImportSequenceNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[LetterOverriddenCreatedOn],
    [ActivityPointerBase].[LetterSubscriptionId],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[TraversedPath],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[SLAInvokedId],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[SortDate],
    [ActivityPointerBase].[ServiceId]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_letter_createdby] on ([ActivityPointerBase].[CreatedBy] = [lk_letter_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_letter_createdonbehalfby] on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_letter_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_letter_modifiedby] on ([ActivityPointerBase].[ModifiedBy] = [lk_letter_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_letter_modifiedonbehalfby] on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_letter_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_letter] on ([ActivityPointerBase].[SLAId] = [manualsla_letter].[SLAId] and [manualsla_letter].OverwriteTime = 0 and [manualsla_letter].ComponentState = 0)
    left join [ServiceBase] [service_letters] on ([ActivityPointerBase].[ServiceId] = [service_letters].[ServiceId])
    left join [SLABase] [sla_letter] on ([ActivityPointerBase].[SLAInvokedId] = [sla_letter].[SLAId] and [sla_letter].OverwriteTime = 0 and [sla_letter].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_Letter] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Letter].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4207