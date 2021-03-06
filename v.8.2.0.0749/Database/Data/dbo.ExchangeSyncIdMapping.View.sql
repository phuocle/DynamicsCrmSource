USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ExchangeSyncIdMapping]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for ExchangeSyncIdMapping
--
create view [dbo].[ExchangeSyncIdMapping]
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
    [ExchangeSyncIdmappingId],
    [ExchangeEntryId],
    [IsDeletedInExchange],
    [ObjectId],
    [ObjectTypeCode],
    [IsUnlinkedInCRM],
    [OwningBusinessUnit],
    [VersionNumber],
    [FromCrmChangeType],
    [ToCrmChangeType],
    [Retries],
    [LastSyncError],
    [UserDecision],
    [LastSyncErrorCode],
    [LastSyncErrorOccurredOn],
    [ModifiedOn],
    [CreatedOn]
) with view_metadata as
select

    -- ownership entries
    OwnerId = [ExchangeSyncIdMappingBase].OwnerId,
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
    [ExchangeSyncIdMappingBase].[ExchangeSyncIdmappingId],
    [ExchangeSyncIdMappingBase].[ExchangeEntryId],
    [ExchangeSyncIdMappingBase].[IsDeletedInExchange],
    [ExchangeSyncIdMappingBase].[ObjectId],
    [ExchangeSyncIdMappingBase].[ObjectTypeCode],
    [ExchangeSyncIdMappingBase].[IsUnlinkedInCRM],
    [ExchangeSyncIdMappingBase].[OwningBusinessUnit],
    [ExchangeSyncIdMappingBase].[VersionNumber],
    [ExchangeSyncIdMappingBase].[FromCrmChangeType],
    [ExchangeSyncIdMappingBase].[ToCrmChangeType],
    [ExchangeSyncIdMappingBase].[Retries],
    [ExchangeSyncIdMappingBase].[LastSyncError],
    [ExchangeSyncIdMappingBase].[UserDecision],
    [ExchangeSyncIdMappingBase].[LastSyncErrorCode],
    [ExchangeSyncIdMappingBase].[LastSyncErrorOccurredOn],
    [ExchangeSyncIdMappingBase].[ModifiedOn],
    [ExchangeSyncIdMappingBase].[CreatedOn]
from [ExchangeSyncIdMappingBase] 
    left join OwnerBase XXowner with(nolock) on ([ExchangeSyncIdMappingBase].OwnerId = XXowner.OwnerId)

GO
