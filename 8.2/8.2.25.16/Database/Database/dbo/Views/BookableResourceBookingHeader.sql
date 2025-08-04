


--
-- base view for BookableResourceBookingHeader
--
create view dbo.[BookableResourceBookingHeader]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [BookableResourceBookingHeaderId],
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
    [Duration],
    [EndTime],
    [StartTime],
    [ExchangeRate],
    [TransactionCurrencyId],
    [ProcessId],
    [StageId],
    [TraversedPath]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcebookingheader_modifiedonbehalfby].[FullName],
    [lk_bookableresourcebookingheader_modifiedonbehalfby].[YomiFullName],
    [lk_bookableresourcebookingheader_modifiedby].[FullName],
    [lk_bookableresourcebookingheader_modifiedby].[YomiFullName],
    [lk_bookableresourcebookingheader_createdby].[FullName],
    [lk_bookableresourcebookingheader_createdby].[YomiFullName],
    [lk_bookableresourcebookingheader_createdonbehalfby].[FullName],
    [lk_bookableresourcebookingheader_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_bookableresourcebookingheader].[CurrencyName],

    -- ownership entries
    OwnerId = [BookableResourceBookingHeaderBase].OwnerId,
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
    [BookableResourceBookingHeaderBase].[BookableResourceBookingHeaderId],
    [BookableResourceBookingHeaderBase].[CreatedOn],
    [BookableResourceBookingHeaderBase].[CreatedBy],
    [BookableResourceBookingHeaderBase].[ModifiedOn],
    [BookableResourceBookingHeaderBase].[ModifiedBy],
    [BookableResourceBookingHeaderBase].[CreatedOnBehalfBy],
    [BookableResourceBookingHeaderBase].[ModifiedOnBehalfBy],
    [BookableResourceBookingHeaderBase].[OwningBusinessUnit],
    [BookableResourceBookingHeaderBase].[StateCode],
    [BookableResourceBookingHeaderBase].[StatusCode],
    [BookableResourceBookingHeaderBase].[VersionNumber],
    [BookableResourceBookingHeaderBase].[ImportSequenceNumber],
    [BookableResourceBookingHeaderBase].[OverriddenCreatedOn],
    [BookableResourceBookingHeaderBase].[TimeZoneRuleVersionNumber],
    [BookableResourceBookingHeaderBase].[UTCConversionTimeZoneCode],
    [BookableResourceBookingHeaderBase].[Name],
    [BookableResourceBookingHeaderBase].[Duration],
    [BookableResourceBookingHeaderBase].[EndTime],
    [BookableResourceBookingHeaderBase].[StartTime],
    [BookableResourceBookingHeaderBase].[ExchangeRate],
    [BookableResourceBookingHeaderBase].[TransactionCurrencyId],
    [BookableResourceBookingHeaderBase].[ProcessId],
    [BookableResourceBookingHeaderBase].[StageId],
    [BookableResourceBookingHeaderBase].[TraversedPath]
from [BookableResourceBookingHeaderBase] 
    left join [SystemUserBase] [lk_bookableresourcebookingheader_createdby] with(nolock) on ([BookableResourceBookingHeaderBase].[CreatedBy] = [lk_bookableresourcebookingheader_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingheader_createdonbehalfby] with(nolock) on ([BookableResourceBookingHeaderBase].[CreatedOnBehalfBy] = [lk_bookableresourcebookingheader_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingheader_modifiedby] with(nolock) on ([BookableResourceBookingHeaderBase].[ModifiedBy] = [lk_bookableresourcebookingheader_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingheader_modifiedonbehalfby] with(nolock) on ([BookableResourceBookingHeaderBase].[ModifiedOnBehalfBy] = [lk_bookableresourcebookingheader_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcebookingheader] on ([BookableResourceBookingHeaderBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcebookingheader].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([BookableResourceBookingHeaderBase].OwnerId = XXowner.OwnerId)
