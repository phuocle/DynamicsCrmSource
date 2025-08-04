


--
-- base view for BookableResourceBookingExchangeSyncIdMapping
--
create view dbo.[BookableResourceBookingExchangeSyncIdMapping]
 (

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ExchangeEntryId],
    [BookableResourceBookingExchangeSyncIdMappingId],
    [IsDeletedInExchange],
    [BookableResourceBookingId],
    [LastSyncErrorOccurredOn],
    [Retries],
    [LastSyncErrorCode],
    [LastSyncError],
    [UserId],
    [OwningBusinessUnit],
    [VersionNumber],
    [ModifiedOn],
    [CreatedOn],
    [SyncStatus],
    [SyncVersionNumber]
) with view_metadata as
select

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
    [BookableResourceBookingExchangeSyncIdMappingBase].[ExchangeEntryId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[BookableResourceBookingExchangeSyncIdMappingId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[IsDeletedInExchange],
    [BookableResourceBookingExchangeSyncIdMappingBase].[BookableResourceBookingId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[LastSyncErrorOccurredOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[Retries],
    [BookableResourceBookingExchangeSyncIdMappingBase].[LastSyncErrorCode],
    [BookableResourceBookingExchangeSyncIdMappingBase].[LastSyncError],
    [BookableResourceBookingExchangeSyncIdMappingBase].[UserId],
    [BookableResourceBookingExchangeSyncIdMappingBase].[OwningBusinessUnit],
    [BookableResourceBookingExchangeSyncIdMappingBase].[VersionNumber],
    [BookableResourceBookingExchangeSyncIdMappingBase].[ModifiedOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[CreatedOn],
    [BookableResourceBookingExchangeSyncIdMappingBase].[SyncStatus],
    [BookableResourceBookingExchangeSyncIdMappingBase].[SyncVersionNumber]
from [BookableResourceBookingExchangeSyncIdMappingBase] 
    left join OwnerBase XXowner with(nolock) on ([BookableResourceBookingExchangeSyncIdMappingBase].OwnerId = XXowner.OwnerId)
