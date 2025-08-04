CREATE TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] (
    [BookableResourceBookingExchangeSyncIdMappingId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                                      DATETIME         NULL,
    [CreatedBy]                                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                     DATETIME         NULL,
    [ModifiedBy]                                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                             UNIQUEIDENTIFIER NULL,
    [OwnerId]                                        UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                                    INT              CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                             UNIQUEIDENTIFIER NULL,
    [VersionNumber]                                  ROWVERSION       NULL,
    [ImportSequenceNumber]                           INT              NULL,
    [OverriddenCreatedOn]                            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]                      INT              NULL,
    [UTCConversionTimeZoneCode]                      INT              NULL,
    [Name]                                           NVARCHAR (100)   NULL,
    [ExchangeEntryId]                                NVARCHAR (1024)  NULL,
    [IsDeletedInExchange]                            BIT              CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_IsDeletedInExchange] DEFAULT ((0)) NULL,
    [BookableResourceBookingId]                      UNIQUEIDENTIFIER NULL,
    [LastSyncErrorOccurredOn]                        DATETIME         NULL,
    [Retries]                                        INT              NULL,
    [LastSyncErrorCode]                              INT              NULL,
    [LastSyncError]                                  NVARCHAR (1024)  NULL,
    [UserId]                                         UNIQUEIDENTIFIER NULL,
    [SyncStatus]                                     INT              CONSTRAINT [DF_BookableResourceBookingExchangeSyncIdMappingBase_SyncStatus] DEFAULT ((0)) NULL,
    [SyncVersionNumber]                              BIGINT           NULL,
    CONSTRAINT [PK_bookableresourcebookingexchangesyncidmappingBase] PRIMARY KEY CLUSTERED ([BookableResourceBookingExchangeSyncIdMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcebookingexchangesyncidmapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[BookableResourceBookingExchangeSyncIdMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniquebookableresourcebookingid_mapping]
    ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]([BookableResourceBookingId] ASC, [UserId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid]
    ON [dbo].[BookableResourceBookingExchangeSyncIdMappingBase]([ExchangeEntryId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

