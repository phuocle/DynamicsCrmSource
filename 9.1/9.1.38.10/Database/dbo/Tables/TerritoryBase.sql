CREATE TABLE [dbo].[TerritoryBase] (
    [TerritoryId]               UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (200)   NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [ManagerId]                 UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ParentTerritoryId]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Territory] PRIMARY KEY CLUSTERED ([TerritoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [system_user_territories] FOREIGN KEY ([ManagerId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [territory_parent_territory] FOREIGN KEY ([ParentTerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId]),
    CONSTRAINT [TransactionCurrency_Territory] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TerritoryBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TerritoryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TerritoryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_territory_parent_territory]
    ON [dbo].[TerritoryBase]([ParentTerritoryId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[TerritoryBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_territories]
    ON [dbo].[TerritoryBase]([ManagerId] ASC) WHERE ([ManagerId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_373B12C4DD144648BD7562DFF770017F]
    ON [dbo].[TerritoryBase]([TerritoryId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_373B12C4DD144648BD7562DFF770017F]
    ON [dbo].[TerritoryBase]([Name] ASC, [TerritoryId] ASC)
    INCLUDE([ManagerId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_373B12C4DD144648BD7562DFF770017F]
    ON [dbo].[TerritoryBase]([TerritoryId] ASC)
    INCLUDE([Name], [ManagerId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ManagerId]
    ON [dbo].[TerritoryBase]([ManagerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

