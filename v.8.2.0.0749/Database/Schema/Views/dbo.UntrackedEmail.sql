SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for UntrackedEmail
--
create view [dbo].[UntrackedEmail]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
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
    [ActivityId],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [VersionNumber],
    [Description],
    [ModifiedBy],
    [OwningBusinessUnit],
    [Subject],
    [ModifiedOn],
    [ExchangeWebLink],
    [ExchangeItemId],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [CreatedBy],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_untrackedemail_modifiedby].[FullName],
    [lk_untrackedemail_modifiedby].[YomiFullName],
    [lk_untrackedemail_modifiedonbehalfby].[FullName],
    [lk_untrackedemail_modifiedonbehalfby].[YomiFullName],
    [lk_untrackedemail_createdby].[FullName],
    [lk_untrackedemail_createdonbehalfby].[YomiFullName],
    [lk_untrackedemail_createdonbehalfby].[FullName],
    [TransactionCurrency_UntrackedEmail].[CurrencyName],

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
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ExchangeWebLink],
    [ActivityPointerBase].[ExchangeItemId],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_untrackedemail_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_untrackedemail_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_untrackedemail_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_untrackedemail_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_untrackedemail_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_untrackedemail_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_untrackedemail_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_untrackedemail_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_UntrackedEmail] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_UntrackedEmail].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4220
GO
