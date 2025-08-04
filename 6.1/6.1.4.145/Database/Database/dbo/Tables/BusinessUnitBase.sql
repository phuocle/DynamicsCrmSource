CREATE TABLE [dbo].[BusinessUnitBase] (
    [BusinessUnitId]        UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [UserGroupId]           UNIQUEIDENTIFIER NULL,
    [Name]                  NVARCHAR (160)   NOT NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [DivisionName]          NVARCHAR (100)   NULL,
    [FileAsName]            NVARCHAR (100)   NULL,
    [TickerSymbol]          NVARCHAR (10)    NULL,
    [StockExchange]         NVARCHAR (20)    NULL,
    [UTCOffset]             INT              NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CreditLimit]           FLOAT (53)       NULL,
    [CostCenter]            NVARCHAR (100)   NULL,
    [WebSiteUrl]            NVARCHAR (200)   NULL,
    [FtpSiteUrl]            NVARCHAR (200)   NULL,
    [EMailAddress]          NVARCHAR (100)   NULL,
    [InheritanceMask]       INT              NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [WorkflowSuspended]     BIT              NULL,
    [ParentBusinessUnitId]  UNIQUEIDENTIFIER NULL,
    [IsDisabled]            BIT              NULL,
    [DisabledReason]        NVARCHAR (500)   NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [Picture]               NVARCHAR (MAX)   NULL,
    [CalendarId]            UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [ImportSequenceNumber]  INT              NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_BusinessUnit] PRIMARY KEY CLUSTERED ([BusinessUnitId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_parent_business_unit] FOREIGN KEY ([ParentBusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [BusinessUnit_Calendar] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_BusinessUnit] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_BusinessUnitBase] UNIQUE NONCLUSTERED ([Name] ASC, [ParentBusinessUnitId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BusinessUnitBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessUnitBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_parent_business_unit]
    ON [dbo].[BusinessUnitBase]([ParentBusinessUnitId] ASC) WHERE ([ParentBusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Calendar]
    ON [dbo].[BusinessUnitBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);

