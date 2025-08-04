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
    [Record1RoleId]           UNIQUEIDENTIFIER NULL,
    [EffectiveStart]          DATETIME         NULL,
    [ModifiedOn]              DATETIME         NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [EntityImageId]           UNIQUEIDENTIFIER NULL,
    [Record1Id]               UNIQUEIDENTIFIER NULL,
    [StatusCode]              INT              NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Record1ObjectTypeCode]   INT              NULL,
    [RelatedConnectionId]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [EffectiveEnd]            DATETIME         NULL,
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [Record2IdName]           NVARCHAR (4000)  NULL,
    [Record1IdName]           NVARCHAR (4000)  NULL,
    [Record2IdObjectTypeCode] INT              NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_ConnectionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Record1IdObjectTypeCode] INT              NULL,
    [Record2IdName_QF_prefix] AS               (CONVERT([nvarchar](850),substring([Record2IdName],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_Connection] PRIMARY KEY CLUSTERED ([ConnectionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_connections] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [connection_related_connection] FOREIGN KEY ([RelatedConnectionId]) REFERENCES [dbo].[ConnectionBase] ([ConnectionId]),
    CONSTRAINT [connection_role_connections1] FOREIGN KEY ([Record1RoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]),
    CONSTRAINT [connection_role_connections2] FOREIGN KEY ([Record2RoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]),
    CONSTRAINT [owner_connections] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_Connection] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ConnectionBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ConnectionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ConnectionBase]([OwnerId] ASC)
    INCLUDE([OwningBusinessUnit]) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConnectionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections2]
    ON [dbo].[ConnectionBase]([Record2RoleId] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_search_record1_type_code]
    ON [dbo].[ConnectionBase]([Record1ObjectTypeCode] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_covering_record1_record2]
    ON [dbo].[ConnectionBase]([Record1Id] ASC, [Record2Id] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_role_connections1]
    ON [dbo].[ConnectionBase]([Record1RoleId] ASC) WHERE ([Record1RoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_connection_related_connection]
    ON [dbo].[ConnectionBase]([RelatedConnectionId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_search_record2_type_code]
    ON [dbo].[ConnectionBase]([Record2ObjectTypeCode] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record1]
    ON [dbo].[ConnectionBase]([Record1Id] ASC, [Record1IdObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_record2]
    ON [dbo].[ConnectionBase]([Record2Id] ASC, [Record2IdObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_C094716F097A4D739F6A52F87D7490EB]
    ON [dbo].[ConnectionBase]([ConnectionId] ASC)
    INCLUDE([Record2IdName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_C094716F097A4D739F6A52F87D7490EB]
    ON [dbo].[ConnectionBase]([ConnectionId] ASC)
    INCLUDE([Record2Id], [Record2IdObjectTypeCode], [Record2IdName], [Record2RoleId], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Record2IdName]
    ON [dbo].[ConnectionBase]([Record2IdName_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

