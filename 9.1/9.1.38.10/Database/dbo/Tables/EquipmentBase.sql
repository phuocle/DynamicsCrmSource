CREATE TABLE [dbo].[EquipmentBase] (
    [EquipmentId]               UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [CalendarId]                UNIQUEIDENTIFIER NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [DisplayInServiceViews]     BIT              NULL,
    [EMailAddress]              NVARCHAR (100)   NULL,
    [IsDisabled]                BIT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [SiteId]                    UNIQUEIDENTIFIER NULL,
    [Skills]                    NVARCHAR (100)   NULL,
    [TimeZoneCode]              INT              NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Equipment] PRIMARY KEY CLUSTERED ([EquipmentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_equipment] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [calendar_equipment] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [site_equipment] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]),
    CONSTRAINT [TransactionCurrency_Equipment] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[EquipmentBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[EquipmentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EquipmentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EquipmentBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_equipment]
    ON [dbo].[EquipmentBase]([SiteId] ASC) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_equipment]
    ON [dbo].[EquipmentBase]([CalendarId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5689F1F287764C5E9818C22F33752FFD]
    ON [dbo].[EquipmentBase]([EquipmentId] ASC)
    INCLUDE([Name], [SiteId], [BusinessUnitId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5689F1F287764C5E9818C22F33752FFD]
    ON [dbo].[EquipmentBase]([EquipmentId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_5689F1F287764C5E9818C22F33752FFD]
    ON [dbo].[EquipmentBase]([Name] ASC, [EquipmentId] ASC)
    INCLUDE([SiteId], [BusinessUnitId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[EquipmentBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

