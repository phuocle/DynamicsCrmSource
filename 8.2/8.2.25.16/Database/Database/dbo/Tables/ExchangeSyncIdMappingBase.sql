CREATE TABLE [dbo].[ExchangeSyncIdMappingBase] (
    [ExchangeSyncIdmappingId] UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]                UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER NOT NULL,
    [FromCrmChangeType]       INT              NULL,
    [IsDeletedInExchange]     BIT              CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsDeletedInExchange] DEFAULT ((0)) NULL,
    [ObjectTypeCode]          INT              NULL,
    [LastSyncErrorCode]       INT              NULL,
    [UserDecision]            INT              NULL,
    [IsUnlinkedInCRM]         BIT              CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsUnlinkedInCRM] DEFAULT ((0)) NULL,
    [Retries]                 INT              NULL,
    [ToCrmChangeType]         INT              NULL,
    [ExchangeEntryId]         NVARCHAR (1024)  NULL,
    [LastSyncError]           NVARCHAR (1024)  NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_ExchangeSyncIdMappingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [CreatedOn]               DATETIME         NULL,
    [LastSyncErrorOccurredOn] DATETIME         NULL,
    [ItemSubject]             NVARCHAR (1024)  NULL,
    CONSTRAINT [PK_exchangesyncidmappingBase] PRIMARY KEY CLUSTERED ([ExchangeSyncIdmappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_exchangesyncidmapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_exchangesyncidmapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ExchangeSyncIdMappingBase]([OwnerId] ASC)
    INCLUDE([Retries]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid]
    ON [dbo].[ExchangeSyncIdMappingBase]([ExchangeEntryId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueobjectidmapping]
    ON [dbo].[ExchangeSyncIdMappingBase]([ObjectId] ASC, [OwnerId] ASC) WHERE ([ObjectId]<>'00000000-0000-0000-0000-000000000000') WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ItemSubject]
    ON [dbo].[ExchangeSyncIdMappingBase]([ItemSubject] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ProcessSyncDiffs]
    ON [dbo].[ExchangeSyncIdMappingBase]([ObjectId] ASC, [ExchangeEntryId] ASC) WITH (FILLFACTOR = 80);

