CREATE TABLE [dbo].[EquipmentBase] (
    [EquipmentId]               UNIQUEIDENTIFIER NOT NULL,
    [SiteId]                    UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NOT NULL,
    [Skills]                    NVARCHAR (100)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedOn]                 DATETIME         NULL,
    [TimeZoneCode]              INT              NOT NULL,
    [DisplayInServiceViews]     BIT              NULL,
    [IsDisabled]                BIT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [CalendarId]                UNIQUEIDENTIFIER NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EMailAddress]              NVARCHAR (100)   NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Equipment] PRIMARY KEY CLUSTERED ([EquipmentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_equipment] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [calendar_equipment] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION,
    CONSTRAINT [site_equipment] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_Equipment] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[EquipmentBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EquipmentBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_equipment]
    ON [dbo].[EquipmentBase]([SiteId] ASC) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EquipmentBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_equipment]
    ON [dbo].[EquipmentBase]([CalendarId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[EquipmentBase]([Name] ASC) WITH (FILLFACTOR = 80);

