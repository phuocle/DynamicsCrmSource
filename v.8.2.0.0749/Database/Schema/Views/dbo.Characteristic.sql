SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for Characteristic
--
create view [dbo].[Characteristic]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [CharacteristicId],
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
    [Name],
    [CharacteristicType],
    [Description],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_characteristic_createdonbehalfby].[FullName],
    [lk_characteristic_createdonbehalfby].[YomiFullName],
    [lk_characteristic_modifiedby].[FullName],
    [lk_characteristic_modifiedby].[YomiFullName],
    [lk_characteristic_createdby].[FullName],
    [lk_characteristic_createdby].[YomiFullName],
    [lk_characteristic_modifiedonbehalfby].[FullName],
    [lk_characteristic_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_characteristic].[CurrencyName],

    -- ownership entries
    OwnerId = [CharacteristicBase].OwnerId,
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
    [CharacteristicBase].[CharacteristicId],
    [CharacteristicBase].[CreatedOn],
    [CharacteristicBase].[CreatedBy],
    [CharacteristicBase].[ModifiedOn],
    [CharacteristicBase].[ModifiedBy],
    [CharacteristicBase].[CreatedOnBehalfBy],
    [CharacteristicBase].[ModifiedOnBehalfBy],
    [CharacteristicBase].[OwningBusinessUnit],
    [CharacteristicBase].[StateCode],
    [CharacteristicBase].[StatusCode],
    [CharacteristicBase].[VersionNumber],
    [CharacteristicBase].[ImportSequenceNumber],
    [CharacteristicBase].[OverriddenCreatedOn],
    [CharacteristicBase].[TimeZoneRuleVersionNumber],
    [CharacteristicBase].[UTCConversionTimeZoneCode],
    [CharacteristicBase].[Name],
    [CharacteristicBase].[CharacteristicType],
    [CharacteristicBase].[Description],
    [CharacteristicBase].[ExchangeRate],
    [CharacteristicBase].[TransactionCurrencyId]
from [CharacteristicBase] 
    left join [SystemUserBase] [lk_characteristic_createdby] with(nolock) on ([CharacteristicBase].[CreatedBy] = [lk_characteristic_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_characteristic_createdonbehalfby] with(nolock) on ([CharacteristicBase].[CreatedOnBehalfBy] = [lk_characteristic_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_characteristic_modifiedby] with(nolock) on ([CharacteristicBase].[ModifiedBy] = [lk_characteristic_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_characteristic_modifiedonbehalfby] with(nolock) on ([CharacteristicBase].[ModifiedOnBehalfBy] = [lk_characteristic_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_characteristic] on ([CharacteristicBase].[TransactionCurrencyId] = [TransactionCurrency_characteristic].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([CharacteristicBase].OwnerId = XXowner.OwnerId)
GO
