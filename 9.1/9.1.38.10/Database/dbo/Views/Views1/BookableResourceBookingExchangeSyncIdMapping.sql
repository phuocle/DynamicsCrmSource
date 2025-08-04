


--
-- base view for BookableResourceBookingExchangeSyncIdMapping
--
create view dbo.[BookableResourceBookingExchangeSyncIdMapping]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [BookableResourceBookingExchangeSyncIdMappingId],
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
    [ExchangeEntryId],
    [IsDeletedInExchange],
    [BookableResourceBookingId],
    [LastSyncErrorOccurredOn],
    [Retries],
    [LastSyncErrorCode],
    [LastSyncError],
    [UserId],
    [SyncStatus],
    [SyncVersionNumber]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcebookingexchangesyncidmapping_createdby].[FullName],
    [lk_bookableresourcebookingexchangesyncidmapping_createdby].[YomiFullName],
    [lk_bookableresourcebookingexchangesyncidmapping_modifiedonbehalfby].[FullName],
    [lk_bookableresourcebookingexchangesyncidmapping_modifiedonbehalfby].[YomiFullName],
    [lk_bookableresourcebookingexchangesyncidmapping_createdonbehalfby].[FullName],
    [lk_bookableresourcebookingexchangesyncidmapping_createdonbehalfby].[YomiFullName],
    [lk_bookableresourcebookingexchangesyncidmapping_modifiedby].[FullName],
    [lk_bookableresourcebookingexchangesyncidmapping_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [BookableResourceBookingExchangeSyncIdMappingBase].OwnerId,
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
    [BookableResourceBookingExchangeSyncIdMappingBase].[BookableResourceBookingExchangeSyncIdMappingId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[CreatedOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[CreatedBy],
    [BookableResourceBookingExchangeSyncIdMappingBase].[ModifiedOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[ModifiedBy],
    [BookableResourceBookingExchangeSyncIdMappingBase].[CreatedOnBehalfBy],
    [BookableResourceBookingExchangeSyncIdMappingBase].[ModifiedOnBehalfBy],
    [BookableResourceBookingExchangeSyncIdMappingBase].[OwningBusinessUnit],
    [BookableResourceBookingExchangeSyncIdMappingBase].[VersionNumber],
    [BookableResourceBookingExchangeSyncIdMappingBase].[ImportSequenceNumber],
    [BookableResourceBookingExchangeSyncIdMappingBase].[OverriddenCreatedOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[TimeZoneRuleVersionNumber],
    [BookableResourceBookingExchangeSyncIdMappingBase].[UTCConversionTimeZoneCode],
    [BookableResourceBookingExchangeSyncIdMappingBase].[Name],
    [BookableResourceBookingExchangeSyncIdMappingBase].[ExchangeEntryId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[IsDeletedInExchange],
    [BookableResourceBookingExchangeSyncIdMappingBase].[BookableResourceBookingId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[LastSyncErrorOccurredOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[Retries],
    [BookableResourceBookingExchangeSyncIdMappingBase].[LastSyncErrorCode],
    [BookableResourceBookingExchangeSyncIdMappingBase].[LastSyncError],
    [BookableResourceBookingExchangeSyncIdMappingBase].[UserId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[SyncStatus],
    [BookableResourceBookingExchangeSyncIdMappingBase].[SyncVersionNumber]
from [BookableResourceBookingExchangeSyncIdMappingBase] 
    left join [SystemUserBase] [lk_bookableresourcebookingexchangesyncidmapping_createdby]  on ([BookableResourceBookingExchangeSyncIdMappingBase].[CreatedBy] = [lk_bookableresourcebookingexchangesyncidmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingexchangesyncidmapping_createdonbehalfby]  on ([BookableResourceBookingExchangeSyncIdMappingBase].[CreatedOnBehalfBy] = [lk_bookableresourcebookingexchangesyncidmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingexchangesyncidmapping_modifiedby]  on ([BookableResourceBookingExchangeSyncIdMappingBase].[ModifiedBy] = [lk_bookableresourcebookingexchangesyncidmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcebookingexchangesyncidmapping_modifiedonbehalfby]  on ([BookableResourceBookingExchangeSyncIdMappingBase].[ModifiedOnBehalfBy] = [lk_bookableresourcebookingexchangesyncidmapping_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner  on ([BookableResourceBookingExchangeSyncIdMappingBase].OwnerId = XXowner.OwnerId)
