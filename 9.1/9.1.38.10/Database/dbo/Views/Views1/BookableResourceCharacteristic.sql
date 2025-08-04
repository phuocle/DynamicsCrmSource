


--
-- base view for BookableResourceCharacteristic
--
create view dbo.[BookableResourceCharacteristic]
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
    [ResourceName],
    [CharacteristicName],
    [TransactionCurrencyIdName],
    [RatingValueName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [BookableResourceCharacteristicId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [Characteristic],
    [RatingValue],
    [Resource],
    [StateCode],
    [StatusCode],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcecharacteristic_modifiedby].[FullName],
    [lk_bookableresourcecharacteristic_modifiedby].[YomiFullName],
    [lk_bookableresourcecharacteristic_createdby].[FullName],
    [lk_bookableresourcecharacteristic_createdby].[YomiFullName],
    [lk_bookableresourcecharacteristic_createdonbehalfby].[FullName],
    [lk_bookableresourcecharacteristic_createdonbehalfby].[YomiFullName],
    [lk_bookableresourcecharacteristic_modifiedonbehalfby].[FullName],
    [lk_bookableresourcecharacteristic_modifiedonbehalfby].[YomiFullName],
    [bookableresource_bookableresourcecharacteristic_Resource].[Name],
    [characteristic_bookableresourcecharacteristic_Characteristic].[Name],
    [TransactionCurrency_bookableresourcecharacteristic].[CurrencyName],
    [ratingvalue_bookableresourcecharacteristic_RatingValue].[Name],

    -- ownership entries
    OwnerId = [BookableResourceCharacteristicBase].OwnerId,
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
    [BookableResourceCharacteristicBase].[BookableResourceCharacteristicId],
    [BookableResourceCharacteristicBase].[CreatedOn],
    [BookableResourceCharacteristicBase].[CreatedBy],
    [BookableResourceCharacteristicBase].[ModifiedOn],
    [BookableResourceCharacteristicBase].[ModifiedBy],
    [BookableResourceCharacteristicBase].[CreatedOnBehalfBy],
    [BookableResourceCharacteristicBase].[ModifiedOnBehalfBy],
    [BookableResourceCharacteristicBase].[OwningBusinessUnit],
    [BookableResourceCharacteristicBase].[VersionNumber],
    [BookableResourceCharacteristicBase].[ImportSequenceNumber],
    [BookableResourceCharacteristicBase].[OverriddenCreatedOn],
    [BookableResourceCharacteristicBase].[TimeZoneRuleVersionNumber],
    [BookableResourceCharacteristicBase].[UTCConversionTimeZoneCode],
    [BookableResourceCharacteristicBase].[Name],
    [BookableResourceCharacteristicBase].[ProcessId],
    [BookableResourceCharacteristicBase].[StageId],
    [BookableResourceCharacteristicBase].[TraversedPath],
    [BookableResourceCharacteristicBase].[Characteristic],
    [BookableResourceCharacteristicBase].[RatingValue],
    [BookableResourceCharacteristicBase].[Resource],
    [BookableResourceCharacteristicBase].[StateCode],
    [BookableResourceCharacteristicBase].[StatusCode],
    [BookableResourceCharacteristicBase].[ExchangeRate],
    [BookableResourceCharacteristicBase].[TransactionCurrencyId]
from [BookableResourceCharacteristicBase] 
    left join [BookableResourceBase] [bookableresource_bookableresourcecharacteristic_Resource] on ([BookableResourceCharacteristicBase].[Resource] = [bookableresource_bookableresourcecharacteristic_Resource].[BookableResourceId])
    left join [CharacteristicBase] [characteristic_bookableresourcecharacteristic_Characteristic] on ([BookableResourceCharacteristicBase].[Characteristic] = [characteristic_bookableresourcecharacteristic_Characteristic].[CharacteristicId])
    left join [SystemUserBase] [lk_bookableresourcecharacteristic_createdby]  on ([BookableResourceCharacteristicBase].[CreatedBy] = [lk_bookableresourcecharacteristic_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecharacteristic_createdonbehalfby]  on ([BookableResourceCharacteristicBase].[CreatedOnBehalfBy] = [lk_bookableresourcecharacteristic_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecharacteristic_modifiedby]  on ([BookableResourceCharacteristicBase].[ModifiedBy] = [lk_bookableresourcecharacteristic_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecharacteristic_modifiedonbehalfby]  on ([BookableResourceCharacteristicBase].[ModifiedOnBehalfBy] = [lk_bookableresourcecharacteristic_modifiedonbehalfby].[SystemUserId])
    left join [RatingValueBase] [ratingvalue_bookableresourcecharacteristic_RatingValue] on ([BookableResourceCharacteristicBase].[RatingValue] = [ratingvalue_bookableresourcecharacteristic_RatingValue].[RatingValueId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcecharacteristic] on ([BookableResourceCharacteristicBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcecharacteristic].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([BookableResourceCharacteristicBase].OwnerId = XXowner.OwnerId)
