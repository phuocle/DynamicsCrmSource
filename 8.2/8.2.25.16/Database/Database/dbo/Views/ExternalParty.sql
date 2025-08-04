


--
-- base view for ExternalParty
--
create view dbo.[ExternalParty]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [ExternalPartyId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [FullName],
    [ExchangeRate],
    [TransactionCurrencyId],
    [EmailAddress],
    [LastEnabledOn],
    [LastDisabledOn],
    [Type],
    [CorrelationKey],
    [FirstName],
    [LastName],
    [ExternalPartyIdUnique],
    [MiddleName],
    [YomiFirstName],
    [YomiFullName],
    [YomiLastName],
    [YomiMiddleName]
) with view_metadata as
select
    -- logical attributes
    [lk_externalparty_createdonbehalfby].[FullName],
    [lk_externalparty_createdonbehalfby].[YomiFullName],
    [lk_externalparty_createdby].[FullName],
    [lk_externalparty_createdby].[YomiFullName],
    [lk_externalparty_modifiedonbehalfby].[FullName],
    [lk_externalparty_modifiedonbehalfby].[YomiFullName],
    [lk_externalparty_modifiedby].[FullName],
    [lk_externalparty_modifiedby].[YomiFullName],
    [TransactionCurrency_ExternalParty].[CurrencyName],

    -- ownership entries
    OwnerId = [ExternalPartyBase].OwnerId,
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
    [ExternalPartyBase].[ExternalPartyId],
    [ExternalPartyBase].[CreatedOn],
    [ExternalPartyBase].[CreatedBy],
    [ExternalPartyBase].[ModifiedOn],
    [ExternalPartyBase].[ModifiedBy],
    [ExternalPartyBase].[CreatedOnBehalfBy],
    [ExternalPartyBase].[ModifiedOnBehalfBy],
    [ExternalPartyBase].[OwningBusinessUnit],
    [ExternalPartyBase].[StateCode],
    [ExternalPartyBase].[StatusCode],
    [ExternalPartyBase].[VersionNumber],
    [ExternalPartyBase].[ImportSequenceNumber],
    [ExternalPartyBase].[OverriddenCreatedOn],
    [ExternalPartyBase].[TimeZoneRuleVersionNumber],
    [ExternalPartyBase].[UTCConversionTimeZoneCode],
    [ExternalPartyBase].[FullName],
    [ExternalPartyBase].[ExchangeRate],
    [ExternalPartyBase].[TransactionCurrencyId],
    [ExternalPartyBase].[EmailAddress],
    [ExternalPartyBase].[LastEnabledOn],
    [ExternalPartyBase].[LastDisabledOn],
    [ExternalPartyBase].[Type],
    [ExternalPartyBase].[CorrelationKey],
    [ExternalPartyBase].[FirstName],
    [ExternalPartyBase].[LastName],
    [ExternalPartyBase].[ExternalPartyIdUnique],
    [ExternalPartyBase].[MiddleName],
    [ExternalPartyBase].[YomiFirstName],
    [ExternalPartyBase].[YomiFullName],
    [ExternalPartyBase].[YomiLastName],
    [ExternalPartyBase].[YomiMiddleName]
from [ExternalPartyBase] 
    left join [SystemUserBase] [lk_externalparty_createdby] with(nolock) on ([ExternalPartyBase].[CreatedBy] = [lk_externalparty_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_externalparty_createdonbehalfby] with(nolock) on ([ExternalPartyBase].[CreatedOnBehalfBy] = [lk_externalparty_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_externalparty_modifiedby] with(nolock) on ([ExternalPartyBase].[ModifiedBy] = [lk_externalparty_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_externalparty_modifiedonbehalfby] with(nolock) on ([ExternalPartyBase].[ModifiedOnBehalfBy] = [lk_externalparty_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ExternalParty] on ([ExternalPartyBase].[TransactionCurrencyId] = [TransactionCurrency_ExternalParty].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ExternalPartyBase].OwnerId = XXowner.OwnerId)
