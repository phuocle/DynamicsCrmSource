


--
-- base view for BookableResourceBookingHeader
--
create view dbo.[BookableResourceBookingHeader]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [Duration],
    [EndTime],
    [StartTime],
    [StateCode],
    [StatusCode],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcebookingheader_modifiedby].[FullName],
    [lk_bookableresourcebookingheader_modifiedby].[YomiFullName],
    [lk_bookableresourcebookingheader_modifiedonbehalfby].[FullName],
    [lk_bookableresourcebookingheader_modifiedonbehalfby].[YomiFullName],
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
    [BookableResourceBookingHeaderBase].[VersionNumber],
    [BookableResourceBookingHeaderBase].[ImportSequenceNumber],
    [BookableResourceBookingHeaderBase].[OverriddenCreatedOn],
    [BookableResourceBookingHeaderBase].[TimeZoneRuleVersionNumber],
    [BookableResourceBookingHeaderBase].[UTCConversionTimeZoneCode],
    [BookableResourceBookingHeaderBase].[Name],
    [BookableResourceBookingHeaderBase].[ProcessId],
    [BookableResourceBookingHeaderBase].[StageId],
    [BookableResourceBookingHeaderBase].[TraversedPath],
    [BookableResourceBookingHeaderBase].[Duration],
    [BookableResourceBookingHeaderBase].[EndTime],
    [BookableResourceBookingHeaderBase].[StartTime],
    [BookableResourceBookingHeaderBase].[StateCode],
    [BookableResourceBookingHeaderBase].[StatusCode],
    [BookableResourceBookingHeaderBase].[ExchangeRate],
    [BookableResourceBookingHeaderBase].[TransactionCurrencyId]
from [BookableResourceBookingHeaderBase] 
    left join [SystemUserBase] [lk_bookableresourcebookingheader_createdby]  on ([BookableResourceBookingHeaderBase].[CreatedBy] = [lk_bookableresourcebookingheader_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingheader_createdonbehalfby]  on ([BookableResourceBookingHeaderBase].[CreatedOnBehalfBy] = [lk_bookableresourcebookingheader_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingheader_modifiedby]  on ([BookableResourceBookingHeaderBase].[ModifiedBy] = [lk_bookableresourcebookingheader_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingheader_modifiedonbehalfby]  on ([BookableResourceBookingHeaderBase].[ModifiedOnBehalfBy] = [lk_bookableresourcebookingheader_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcebookingheader] on ([BookableResourceBookingHeaderBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcebookingheader].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([BookableResourceBookingHeaderBase].OwnerId = XXowner.OwnerId)
