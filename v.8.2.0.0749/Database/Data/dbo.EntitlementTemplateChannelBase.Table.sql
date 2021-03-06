USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementTemplateChannelBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementTemplateChannelBase](
	[ExchangeRate] [decimal](23, 10) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[EntitlementTemplateId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[EntitlementTemplateChannelId] [uniqueidentifier] NOT NULL,
	[Channel] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[TotalTerms] [decimal](23, 10) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateChannel] PRIMARY KEY CLUSTERED 
(
	[EntitlementTemplateChannelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementTemplateChannelBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EntitlementTemplateId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntitlementTemplateId] ON [dbo].[EntitlementTemplateChannelBase]
(
	[EntitlementTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementTemplateChannelBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase]  WITH CHECK ADD  CONSTRAINT [entitlementtemplate_entitlementchannel_entitlementtemplateid] FOREIGN KEY([EntitlementTemplateId])
REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId])
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase] CHECK CONSTRAINT [entitlementtemplate_entitlementchannel_entitlementtemplateid]
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_entitlementtemplatechannel] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase] CHECK CONSTRAINT [TransactionCurrency_entitlementtemplatechannel]
GO
