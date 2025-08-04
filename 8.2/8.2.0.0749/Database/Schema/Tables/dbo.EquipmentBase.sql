CREATE TABLE [dbo].[EquipmentBase]
(
[EquipmentId] [uniqueidentifier] NOT NULL,
[SiteId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[Skills] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOn] [datetime] NULL,
[TimeZoneCode] [int] NOT NULL,
[DisplayInServiceViews] [bit] NULL,
[IsDisabled] [bit] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[CalendarId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[EquipmentBase] ADD CONSTRAINT [cndx_PrimaryKey_Equipment] PRIMARY KEY CLUSTERED  ([EquipmentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[EquipmentBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_equipment] ON [dbo].[EquipmentBase] ([CalendarId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[EquipmentBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_equipment] ON [dbo].[EquipmentBase] ([SiteId]) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EquipmentBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EquipmentBase] ADD CONSTRAINT [business_unit_equipment] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[EquipmentBase] ADD CONSTRAINT [calendar_equipment] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[EquipmentBase] ADD CONSTRAINT [site_equipment] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[EquipmentBase] ADD CONSTRAINT [TransactionCurrency_Equipment] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
