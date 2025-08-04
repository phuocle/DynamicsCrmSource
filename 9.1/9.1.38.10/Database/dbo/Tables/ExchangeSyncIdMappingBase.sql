CREATE TABLE [dbo].[ExchangeSyncIdMappingBase] (
    [ExchangeSyncIdmappingId] UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]                UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [FromCrmChangeType]       INT              NULL,
    [IsDeletedInExchange]     BIT              CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsDeletedInExchange] DEFAULT ((0)) NULL,
    [Retries]                 INT              NULL,
    [ObjectTypeCode]          INT              NULL,
    [CreatedOn]               DATETIME         NULL,
    [LastSyncErrorCode]       INT              NULL,
    [UserDecision]            INT              NULL,
    [LastSyncErrorOccurredOn] DATETIME         NULL,
    [IsUnlinkedInCRM]         BIT              CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsUnlinkedInCRM] DEFAULT ((0)) NULL,
    [ExchangeEntryId]         NVARCHAR (1024)  NULL,
    [ToCrmChangeType]         INT              NULL,
    [OwnerId]                 UNIQUEIDENTIFIER NOT NULL,
    [LastSyncError]           NVARCHAR (1024)  NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_ExchangeSyncIdMappingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ItemSubject]             NVARCHAR (1024)  NULL,
    CONSTRAINT [PK_exchangesyncidmappingBase] PRIMARY KEY CLUSTERED ([ExchangeSyncIdmappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_exchangesyncidmapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_exchangesyncidmapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ExchangeSyncIdMappingBase]([OwnerId] ASC)
    INCLUDE([Retries]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueobjectidmapping]
    ON [dbo].[ExchangeSyncIdMappingBase]([ObjectId] ASC, [OwnerId] ASC) WHERE ([ObjectId]<>'00000000-0000-0000-0000-000000000000') WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ProcessSyncDiffs]
    ON [dbo].[ExchangeSyncIdMappingBase]([ObjectId] ASC, [ExchangeEntryId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid]
    ON [dbo].[ExchangeSyncIdMappingBase]([ExchangeEntryId] ASC)
    INCLUDE([OwnerId]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_ItemSubject]
    ON [dbo].[ExchangeSyncIdMappingBase]([ItemSubject] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_B898EB278DAA4C34AF8FE6538972141B]
    ON [dbo].[ExchangeSyncIdMappingBase]([ExchangeSyncIdmappingId] ASC)
    INCLUDE([ExchangeEntryId], [ItemSubject]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B898EB278DAA4C34AF8FE6538972141B]
    ON [dbo].[ExchangeSyncIdMappingBase]([ExchangeSyncIdmappingId] ASC)
    INCLUDE([ItemSubject], [ExchangeEntryId], [LastSyncErrorOccurredOn], [LastSyncError], [ObjectTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

