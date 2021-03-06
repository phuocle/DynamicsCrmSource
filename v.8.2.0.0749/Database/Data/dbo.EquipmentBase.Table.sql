USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EquipmentBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EquipmentBase](
	[EquipmentId] [uniqueidentifier] NOT NULL,
	[SiteId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[Skills] [nvarchar](100) NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOn] [datetime] NULL,
	[TimeZoneCode] [int] NOT NULL,
	[DisplayInServiceViews] [bit] NULL,
	[IsDisabled] [bit] NULL,
	[Name] [nvarchar](160) NOT NULL,
	[CalendarId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Equipment] PRIMARY KEY CLUSTERED 
(
	[EquipmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_site_equipment]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_equipment] ON [dbo].[EquipmentBase]
(
	[SiteId] ASC
)
WHERE ([SiteId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EquipmentBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_calendar_equipment]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_equipment] ON [dbo].[EquipmentBase]
(
	[CalendarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[EquipmentBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EquipmentBase]  WITH CHECK ADD  CONSTRAINT [business_unit_equipment] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[EquipmentBase] CHECK CONSTRAINT [business_unit_equipment]
GO
ALTER TABLE [dbo].[EquipmentBase]  WITH CHECK ADD  CONSTRAINT [calendar_equipment] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[EquipmentBase] CHECK CONSTRAINT [calendar_equipment]
GO
ALTER TABLE [dbo].[EquipmentBase]  WITH CHECK ADD  CONSTRAINT [site_equipment] FOREIGN KEY([SiteId])
REFERENCES [dbo].[SiteBase] ([SiteId])
GO
ALTER TABLE [dbo].[EquipmentBase] CHECK CONSTRAINT [site_equipment]
GO
ALTER TABLE [dbo].[EquipmentBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Equipment] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[EquipmentBase] CHECK CONSTRAINT [TransactionCurrency_Equipment]
GO
