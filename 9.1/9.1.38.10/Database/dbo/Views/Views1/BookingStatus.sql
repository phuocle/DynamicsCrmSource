


--
-- base view for BookingStatus
--
create view dbo.[BookingStatus]
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
    [BookingStatusId],
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
    [Description],
    [StateCode],
    [Status],
    [StatusCode],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_bookingstatus_createdonbehalfby].[FullName],
    [lk_bookingstatus_createdonbehalfby].[YomiFullName],
    [lk_bookingstatus_createdby].[FullName],
    [lk_bookingstatus_createdby].[YomiFullName],
    [lk_bookingstatus_modifiedonbehalfby].[FullName],
    [lk_bookingstatus_modifiedonbehalfby].[YomiFullName],
    [lk_bookingstatus_modifiedby].[FullName],
    [lk_bookingstatus_modifiedby].[YomiFullName],
    [TransactionCurrency_bookingstatus].[CurrencyName],

    -- ownership entries
    OwnerId = [BookingStatusBase].OwnerId,
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
    [BookingStatusBase].[BookingStatusId],
    [BookingStatusBase].[CreatedOn],
    [BookingStatusBase].[CreatedBy],
    [BookingStatusBase].[ModifiedOn],
    [BookingStatusBase].[ModifiedBy],
    [BookingStatusBase].[CreatedOnBehalfBy],
    [BookingStatusBase].[ModifiedOnBehalfBy],
    [BookingStatusBase].[OwningBusinessUnit],
    [BookingStatusBase].[VersionNumber],
    [BookingStatusBase].[ImportSequenceNumber],
    [BookingStatusBase].[OverriddenCreatedOn],
    [BookingStatusBase].[TimeZoneRuleVersionNumber],
    [BookingStatusBase].[UTCConversionTimeZoneCode],
    [BookingStatusBase].[Name],
    [BookingStatusBase].[Description],
    [BookingStatusBase].[StateCode],
    [BookingStatusBase].[Status],
    [BookingStatusBase].[StatusCode],
    [BookingStatusBase].[ExchangeRate],
    [BookingStatusBase].[TransactionCurrencyId]
from [BookingStatusBase] 
    left join [SystemUserBase] [lk_bookingstatus_createdby]  on ([BookingStatusBase].[CreatedBy] = [lk_bookingstatus_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookingstatus_createdonbehalfby]  on ([BookingStatusBase].[CreatedOnBehalfBy] = [lk_bookingstatus_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookingstatus_modifiedby]  on ([BookingStatusBase].[ModifiedBy] = [lk_bookingstatus_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookingstatus_modifiedonbehalfby]  on ([BookingStatusBase].[ModifiedOnBehalfBy] = [lk_bookingstatus_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookingstatus] on ([BookingStatusBase].[TransactionCurrencyId] = [TransactionCurrency_bookingstatus].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([BookingStatusBase].OwnerId = XXowner.OwnerId)
