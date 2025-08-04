


--
-- base view for InteractionForEmail
--
create view dbo.[InteractionForEmail]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [InteractionForEmailId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [name],
    [InteractedComponentText],
    [ExchangeRate],
    [TransactionCurrencyId],
    [InteractionLocation],
    [InteractionType],
    [InteractionRepliedBy],
    [InteractionUserAgent],
    [EmailInteractionTime],
    [EmailActivityId],
    [EmailInteractionReplyId],
    [InteractionReplyId],
    [EmailAddress],
    [InteractionPartyId],
    [InteractionPartyTypecode]
) with view_metadata as
select
    -- logical attributes
    [lk_interactionforemail_modifiedby].[FullName],
    [lk_interactionforemail_modifiedby].[YomiFullName],
    [lk_interactionforemail_createdonbehalfby].[FullName],
    [lk_interactionforemail_createdonbehalfby].[YomiFullName],
    [lk_interactionforemail_createdby].[FullName],
    [lk_interactionforemail_createdby].[YomiFullName],
    [lk_interactionforemail_modifiedonbehalfby].[FullName],
    [lk_interactionforemail_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_InteractionForEmail].[CurrencyName],

    -- ownership entries
    OwnerId = [InteractionForEmailBase].OwnerId,
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
    [InteractionForEmailBase].[InteractionForEmailId],
    [InteractionForEmailBase].[CreatedOn],
    [InteractionForEmailBase].[CreatedBy],
    [InteractionForEmailBase].[ModifiedOn],
    [InteractionForEmailBase].[ModifiedBy],
    [InteractionForEmailBase].[CreatedOnBehalfBy],
    [InteractionForEmailBase].[ModifiedOnBehalfBy],
    [InteractionForEmailBase].[OwningBusinessUnit],
    [InteractionForEmailBase].[statecode],
    [InteractionForEmailBase].[statuscode],
    [InteractionForEmailBase].[VersionNumber],
    [InteractionForEmailBase].[ImportSequenceNumber],
    [InteractionForEmailBase].[OverriddenCreatedOn],
    [InteractionForEmailBase].[TimeZoneRuleVersionNumber],
    [InteractionForEmailBase].[UTCConversionTimeZoneCode],
    [InteractionForEmailBase].[name],
    [InteractionForEmailBase].[InteractedComponentText],
    [InteractionForEmailBase].[ExchangeRate],
    [InteractionForEmailBase].[TransactionCurrencyId],
    [InteractionForEmailBase].[InteractionLocation],
    [InteractionForEmailBase].[InteractionType],
    [InteractionForEmailBase].[InteractionRepliedBy],
    [InteractionForEmailBase].[InteractionUserAgent],
    [InteractionForEmailBase].[EmailInteractionTime],
    [InteractionForEmailBase].[EmailActivityId],
    [InteractionForEmailBase].[EmailInteractionReplyId],
    [InteractionForEmailBase].[InteractionReplyId],
    [InteractionForEmailBase].[EmailAddress],
    [InteractionForEmailBase].[InteractionPartyId],
    [InteractionForEmailBase].[InteractionPartyTypecode]
from [InteractionForEmailBase] 
    left join [SystemUserBase] [lk_interactionforemail_createdby]  on ([InteractionForEmailBase].[CreatedBy] = [lk_interactionforemail_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_interactionforemail_createdonbehalfby]  on ([InteractionForEmailBase].[CreatedOnBehalfBy] = [lk_interactionforemail_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_interactionforemail_modifiedby]  on ([InteractionForEmailBase].[ModifiedBy] = [lk_interactionforemail_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_interactionforemail_modifiedonbehalfby]  on ([InteractionForEmailBase].[ModifiedOnBehalfBy] = [lk_interactionforemail_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_InteractionForEmail] on ([InteractionForEmailBase].[TransactionCurrencyId] = [TransactionCurrency_InteractionForEmail].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([InteractionForEmailBase].OwnerId = XXowner.OwnerId)
