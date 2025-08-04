


--
-- base view for BookableResourceBooking
--
create view dbo.[BookableResourceBooking]
 (
    -- logical attributes
    [BookingStatusName],
    [ResourceName],
    [HeaderName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [BookableResourceBookingId],
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
    [BookingType],
    [Duration],
    [EndTime],
    [StartTime],
    [Resource],
    [Header],
    [BookingStatus],
    [ExchangeRate],
    [TransactionCurrencyId],
    [ProcessId],
    [StageId],
    [TraversedPath]
) with view_metadata as
select
    -- logical attributes
    [bookingstatus_bookableresourcebooking_BookingStatus].[Name],
    [bookableresource_bookableresourcebooking_Resource].[Name],
    [bookableresourcebookingheader_bookableresourcebooking_Header].[Name],
    [lk_bookableresourcebooking_createdby].[FullName],
    [lk_bookableresourcebooking_createdby].[YomiFullName],
    [lk_bookableresourcebooking_createdonbehalfby].[FullName],
    [lk_bookableresourcebooking_createdonbehalfby].[YomiFullName],
    [lk_bookableresourcebooking_modifiedonbehalfby].[FullName],
    [lk_bookableresourcebooking_modifiedonbehalfby].[YomiFullName],
    [lk_bookableresourcebooking_modifiedby].[FullName],
    [lk_bookableresourcebooking_modifiedby].[YomiFullName],
    [TransactionCurrency_bookableresourcebooking].[CurrencyName],

    -- ownership entries
    OwnerId = [BookableResourceBookingBase].OwnerId,
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
    [BookableResourceBookingBase].[BookableResourceBookingId],
    [BookableResourceBookingBase].[CreatedOn],
    [BookableResourceBookingBase].[CreatedBy],
    [BookableResourceBookingBase].[ModifiedOn],
    [BookableResourceBookingBase].[ModifiedBy],
    [BookableResourceBookingBase].[CreatedOnBehalfBy],
    [BookableResourceBookingBase].[ModifiedOnBehalfBy],
    [BookableResourceBookingBase].[OwningBusinessUnit],
    [BookableResourceBookingBase].[StateCode],
    [BookableResourceBookingBase].[StatusCode],
    [BookableResourceBookingBase].[VersionNumber],
    [BookableResourceBookingBase].[ImportSequenceNumber],
    [BookableResourceBookingBase].[OverriddenCreatedOn],
    [BookableResourceBookingBase].[TimeZoneRuleVersionNumber],
    [BookableResourceBookingBase].[UTCConversionTimeZoneCode],
    [BookableResourceBookingBase].[Name],
    [BookableResourceBookingBase].[BookingType],
    [BookableResourceBookingBase].[Duration],
    [BookableResourceBookingBase].[EndTime],
    [BookableResourceBookingBase].[StartTime],
    [BookableResourceBookingBase].[Resource],
    [BookableResourceBookingBase].[Header],
    [BookableResourceBookingBase].[BookingStatus],
    [BookableResourceBookingBase].[ExchangeRate],
    [BookableResourceBookingBase].[TransactionCurrencyId],
    [BookableResourceBookingBase].[ProcessId],
    [BookableResourceBookingBase].[StageId],
    [BookableResourceBookingBase].[TraversedPath]
from [BookableResourceBookingBase] 
    left join [BookableResourceBase] [bookableresource_bookableresourcebooking_Resource] on ([BookableResourceBookingBase].[Resource] = [bookableresource_bookableresourcebooking_Resource].[BookableResourceId])
    left join [BookableResourceBookingHeaderBase] [bookableresourcebookingheader_bookableresourcebooking_Header] on ([BookableResourceBookingBase].[Header] = [bookableresourcebookingheader_bookableresourcebooking_Header].[BookableResourceBookingHeaderId])
    left join [BookingStatusBase] [bookingstatus_bookableresourcebooking_BookingStatus] on ([BookableResourceBookingBase].[BookingStatus] = [bookingstatus_bookableresourcebooking_BookingStatus].[BookingStatusId])
    left join [SystemUserBase] [lk_bookableresourcebooking_createdby] with(nolock) on ([BookableResourceBookingBase].[CreatedBy] = [lk_bookableresourcebooking_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebooking_createdonbehalfby] with(nolock) on ([BookableResourceBookingBase].[CreatedOnBehalfBy] = [lk_bookableresourcebooking_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebooking_modifiedby] with(nolock) on ([BookableResourceBookingBase].[ModifiedBy] = [lk_bookableresourcebooking_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebooking_modifiedonbehalfby] with(nolock) on ([BookableResourceBookingBase].[ModifiedOnBehalfBy] = [lk_bookableresourcebooking_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcebooking] on ([BookableResourceBookingBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcebooking].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([BookableResourceBookingBase].OwnerId = XXowner.OwnerId)
