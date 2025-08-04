CREATE TABLE [dbo].[ConnectionBase] (
    [Record2RoleId]           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [Record2Id]               UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ConnectionId]            UNIQUEIDENTIFIER NOT NULL,
    [IsMaster]                BIT              CONSTRAINT [DF_ConnectionBase_IsMaster] DEFAULT ((1)) NOT NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectionBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [Record2ObjectTypeCode]   INT              NULL,
    [ImportSequenceNumber]    INT              NULL,
    [StateCode]               INT              NOT NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [EffectiveStart]          DATETIME         NULL,
    [ModifiedOn]              DATETIME         NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [Record1Id]               UNIQUEIDENTIFIER NULL,
    [StatusCode]              INT              NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Record1ObjectTypeCode]   INT              NULL,
    [RelatedConnectionId]     UNIQUEIDENTIFIER NULL,
    [Record1RoleId]           UNIQUEIDENTIFIER NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [EffectiveEnd]            DATETIME         NULL,
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [Record2IdName]           NVARCHAR (4000)  NULL,
    [Record1IdName]           NVARCHAR (4000)  NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_ConnectionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Record2IdObjectTypeCode] INT              NULL,
    [Record1IdObjectTypeCode] INT              NULL,
    [EntityImageId]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Connection] PRIMARY KEY CLUSTERED ([ConnectionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_connections] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [connection_related_connection] FOREIGN KEY ([RelatedConnectionId]) REFERENCES [dbo].[ConnectionBase] ([ConnectionId]) NOT FOR REPLICATION,
    CONSTRAINT [connection_role_connections1] FOREIGN KEY ([Record1RoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]) NOT FOR REPLICATION,
    CONSTRAINT [connection_role_connections2] FOREIGN KEY ([Record2RoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_connections] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_Connection] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConnectionBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record1]
    ON [dbo].[ConnectionBase]([Record1Id] ASC, [Record1IdObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_search_record1_type_code]
    ON [dbo].[ConnectionBase]([Record1ObjectTypeCode] ASC) WHERE ([Record1ObjectTypeCode] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record2]
    ON [dbo].[ConnectionBase]([Record2Id] ASC, [Record2IdObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections1]
    ON [dbo].[ConnectionBase]([Record1RoleId] ASC) WHERE ([Record1RoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ConnectionBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections2]
    ON [dbo].[ConnectionBase]([Record2RoleId] ASC) WHERE ([Record2RoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_search_record2_type_code]
    ON [dbo].[ConnectionBase]([Record2ObjectTypeCode] ASC) WHERE ([Record2ObjectTypeCode] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_related_connection]
    ON [dbo].[ConnectionBase]([RelatedConnectionId] ASC) WITH (FILLFACTOR = 80);

