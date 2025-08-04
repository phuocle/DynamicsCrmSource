CREATE TABLE [dbo].[BusinessUnitBase] (
    [CreatedOn]             DATETIME         NULL,
    [IsDisabled]            BIT              NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [InheritanceMask]       INT              NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [CreditLimit]           FLOAT (53)       NULL,
    [Picture]               NVARCHAR (MAX)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [FtpSiteUrl]            NVARCHAR (200)   NULL,
    [Name]                  NVARCHAR (160)   NOT NULL,
    [BusinessUnitId]        UNIQUEIDENTIFIER NOT NULL,
    [DisabledReason]        NVARCHAR (500)   NULL,
    [CostCenter]            NVARCHAR (100)   NULL,
    [ImportSequenceNumber]  INT              NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [TickerSymbol]          NVARCHAR (10)    NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [ParentBusinessUnitId]  UNIQUEIDENTIFIER NULL,
    [EMailAddress]          NVARCHAR (100)   NULL,
    [DivisionName]          NVARCHAR (100)   NULL,
    [UserGroupId]           UNIQUEIDENTIFIER NULL,
    [WorkflowSuspended]     BIT              NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [FileAsName]            NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [UTCOffset]             INT              NULL,
    [ModifiedOn]            DATETIME         NULL,
    [WebSiteUrl]            NVARCHAR (200)   NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [CalendarId]            UNIQUEIDENTIFIER NULL,
    [StockExchange]         NVARCHAR (20)    NULL,
    CONSTRAINT [cndx_PrimaryKey_BusinessUnit] PRIMARY KEY CLUSTERED ([BusinessUnitId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_parent_business_unit] FOREIGN KEY ([ParentBusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [BusinessUnit_Calendar] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [TransactionCurrency_BusinessUnit] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_BusinessUnitBase] UNIQUE NONCLUSTERED ([Name] ASC, [ParentBusinessUnitId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BusinessUnitBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[BusinessUnitBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessUnitBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Calendar]
    ON [dbo].[BusinessUnitBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_parent_business_unit]
    ON [dbo].[BusinessUnitBase]([ParentBusinessUnitId] ASC) WHERE ([ParentBusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_ADFCCC5A2FAA4902A34691AE7D1E3EBD]
    ON [dbo].[BusinessUnitBase]([Name] ASC, [BusinessUnitId] ASC)
    INCLUDE([WebSiteUrl], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_ADFCCC5A2FAA4902A34691AE7D1E3EBD]
    ON [dbo].[BusinessUnitBase]([BusinessUnitId] ASC)
    INCLUDE([Name], [WebSiteUrl], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_ADFCCC5A2FAA4902A34691AE7D1E3EBD]
    ON [dbo].[BusinessUnitBase]([BusinessUnitId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

