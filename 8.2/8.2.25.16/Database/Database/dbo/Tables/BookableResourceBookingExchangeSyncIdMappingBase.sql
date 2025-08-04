CREATE TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] (
    [OwnerId]                                        UNIQUEIDENTIFIER NOT NULL,
    [LastSyncErrorCode]                              INT              NULL,
    [Retries]                                        INT              NULL,
    [LastSyncErrorOccurredOn]                        DATETIME         NULL,
    [ExchangeEntryId]                                NVARCHAR (1024)  NULL,
    [BookableResourceBookingId]                      UNIQUEIDENTIFIER NULL,
    [SyncVersionNumber]                              BIGINT           NULL,
    [OwningBusinessUnit]                             UNIQUEIDENTIFIER NULL,
    [SyncStatus]                                     INT              CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_SyncStatus] DEFAULT ((0)) NULL,
    [BookableResourceBookingExchangeSyncIdMappingId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                                  ROWVERSION       NULL,
    [IsDeletedInExchange]                            BIT              CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_IsDeletedInExchange] DEFAULT ((0)) NULL,
    [LastSyncError]                                  NVARCHAR (1024)  NULL,
    [ModifiedOn]                                     DATETIME         NULL,
    [UserId]                                         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                                      DATETIME         NULL,
    [OwnerIdType]                                    INT              CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcebookingexchangesyncidmappingBase] PRIMARY KEY CLUSTERED ([BookableResourceBookingExchangeSyncIdMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniquebookableresourcebookingid_mapping]
    ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]([BookableResourceBookingId] ASC, [UserId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid]
    ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]([ExchangeEntryId] ASC) WITH (FILLFACTOR = 80);

