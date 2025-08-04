CREATE TABLE [dbo].[TerritoryBase] (
    [TerritoryId]           UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [ManagerId]             UNIQUEIDENTIFIER NULL,
    [Name]                  NVARCHAR (200)   NOT NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [CreatedOn]             DATETIME         NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ImportSequenceNumber]  INT              NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [EntityImageId]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Territory] PRIMARY KEY CLUSTERED ([TerritoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [system_user_territories] FOREIGN KEY ([ManagerId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [TransactionCurrency_Territory] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TerritoryBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[TerritoryBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TerritoryBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_territories]
    ON [dbo].[TerritoryBase]([ManagerId] ASC) WHERE ([ManagerId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ManagerId]
    ON [dbo].[TerritoryBase]([ManagerId] ASC) WITH (FILLFACTOR = 80);

