CREATE TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]
(
[OwnerId] [uniqueidentifier] NOT NULL,
[LastSyncErrorCode] [int] NULL,
[Retries] [int] NULL,
[LastSyncErrorOccurredOn] [datetime] NULL,
[ExchangeEntryId] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[BookableResourceBookingId] [uniqueidentifier] NULL,
[SyncVersionNumber] [bigint] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[SyncStatus] [int] NULL CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_SyncStatus] DEFAULT ((0)),
[BookableResourceBookingExchangeSyncIdMappingId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[IsDeletedInExchange] [bit] NULL CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_IsDeletedInExchange] DEFAULT ((0)),
[LastSyncError] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[UserId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ADD CONSTRAINT [PK_bookableresourcebookingexchangesyncidmappingBase] PRIMARY KEY CLUSTERED  ([BookableResourceBookingExchangeSyncIdMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniquebookableresourcebookingid_mapping] ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ([BookableResourceBookingId], [UserId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid] ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ([ExchangeEntryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ADD CONSTRAINT [business_unit_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] ADD CONSTRAINT [owner_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
