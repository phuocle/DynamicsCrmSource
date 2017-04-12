CREATE TABLE [dbo].[ExchangeSyncIdMappingBase]
(
[ExchangeSyncIdmappingId] [uniqueidentifier] NOT NULL,
[ObjectId] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[FromCrmChangeType] [int] NULL,
[IsDeletedInExchange] [bit] NULL CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsDeletedInExchange] DEFAULT ((0)),
[ObjectTypeCode] [int] NULL,
[LastSyncErrorCode] [int] NULL,
[UserDecision] [int] NULL,
[IsUnlinkedInCRM] [bit] NULL CONSTRAINT [DF_ExchangeSyncIdMappingBase_IsUnlinkedInCRM] DEFAULT ((0)),
[Retries] [int] NULL,
[ToCrmChangeType] [int] NULL,
[ExchangeEntryId] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[LastSyncError] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ExchangeSyncIdMappingBase_OwnerIdType] DEFAULT ((8)),
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[LastSyncErrorOccurredOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] ADD CONSTRAINT [PK_exchangesyncidmappingBase] PRIMARY KEY CLUSTERED  ([ExchangeSyncIdmappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_exchangeentryid] ON [dbo].[ExchangeSyncIdMappingBase] ([ExchangeEntryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueobjectidmapping] ON [dbo].[ExchangeSyncIdMappingBase] ([ObjectId], [OwnerId]) WHERE ([ObjectId]<>'00000000-0000-0000-0000-000000000000') WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ExchangeSyncIdMappingBase] ([OwnerId]) INCLUDE ([Retries]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] ADD CONSTRAINT [business_unit_exchangesyncidmapping] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ExchangeSyncIdMappingBase] ADD CONSTRAINT [owner_exchangesyncidmapping] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
