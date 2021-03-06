USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Letter]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Letter
--
create view [dbo].[Letter]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [SLAInvokedIdName],
    [SLAName],

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
    [ServiceId],
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
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_letter_modifiedby].[YomiFullName],
    [lk_letter_modifiedby].[FullName],
    [lk_letter_modifiedonbehalfby].[YomiFullName],
    [lk_letter_modifiedonbehalfby].[FullName],
    [lk_letter_createdby].[YomiFullName],
    [lk_letter_createdby].[FullName],
    [lk_letter_createdonbehalfby].[FullName],
    [lk_letter_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_Letter].[CurrencyName],
    [sla_letter].[Name],
    [manualsla_letter].[Name],

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
    [ActivityPointerBase].[ServiceId],
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
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_letter_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_letter_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_letter_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_letter_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_letter_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_letter_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_letter_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_letter_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_letter] on ([ActivityPointerBase].[SLAId] = [manualsla_letter].[SLAId] and [manualsla_letter].OverwriteTime = 0 and [manualsla_letter].ComponentState = 0)
    left join [SLABase] [sla_letter] on ([ActivityPointerBase].[SLAInvokedId] = [sla_letter].[SLAId] and [sla_letter].OverwriteTime = 0 and [sla_letter].ComponentState = 0)
    left join [TransactionCurrencyBase] [TransactionCurrency_Letter] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_Letter].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4207
GO
