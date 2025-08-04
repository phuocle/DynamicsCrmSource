CREATE TABLE [dbo].[ConnectionBase]
(
[Record2RoleId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Record2Id] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ConnectionId] [uniqueidentifier] NOT NULL,
[IsMaster] [bit] NOT NULL CONSTRAINT [DF_ConnectionBase_IsMaster] DEFAULT ((1)),
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ConnectionBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[VersionNumber] [timestamp] NULL,
[Record2ObjectTypeCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[StateCode] [int] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EffectiveStart] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[Record1Id] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Record1ObjectTypeCode] [int] NULL,
[RelatedConnectionId] [uniqueidentifier] NULL,
[Record1RoleId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[EffectiveEnd] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[Record2IdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Record1IdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ConnectionBase_OwnerIdType] DEFAULT ((8)),
[Record2IdObjectTypeCode] [int] NULL,
[Record1IdObjectTypeCode] [int] NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [cndx_PrimaryKey_Connection] PRIMARY KEY CLUSTERED  ([ConnectionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ConnectionBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record1] ON [dbo].[ConnectionBase] ([Record1Id], [Record1IdObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_covering_record1_record2] ON [dbo].[ConnectionBase] ([Record1Id], [Record2Id]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_search_record1_type_code] ON [dbo].[ConnectionBase] ([Record1ObjectTypeCode]) WHERE ([Record1ObjectTypeCode] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections1] ON [dbo].[ConnectionBase] ([Record1RoleId]) WHERE ([Record1RoleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record2] ON [dbo].[ConnectionBase] ([Record2Id], [Record2IdObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_search_record2_type_code] ON [dbo].[ConnectionBase] ([Record2ObjectTypeCode]) WHERE ([Record2ObjectTypeCode] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections2] ON [dbo].[ConnectionBase] ([Record2RoleId]) WHERE ([Record2RoleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_related_connection] ON [dbo].[ConnectionBase] ([RelatedConnectionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [business_unit_connections] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [connection_related_connection] FOREIGN KEY ([RelatedConnectionId]) REFERENCES [dbo].[ConnectionBase] ([ConnectionId])
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [connection_role_connections1] FOREIGN KEY ([Record1RoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [connection_role_connections2] FOREIGN KEY ([Record2RoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [owner_connections] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ConnectionBase] ADD CONSTRAINT [TransactionCurrency_Connection] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
