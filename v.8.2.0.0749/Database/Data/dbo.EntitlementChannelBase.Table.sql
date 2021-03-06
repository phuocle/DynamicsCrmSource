USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementChannelBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementChannelBase](
	[UTCConversionTimeZoneCode] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[TotalTerms] [decimal](23, 10) NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Channel] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[Name] [nvarchar](100) NULL,
	[EntitlementChannelId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[EntitlementId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[RemainingTerms] [decimal](23, 10) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_EntitlementChannel] PRIMARY KEY CLUSTERED 
(
	[EntitlementChannelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementChannelBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EntitlementId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntitlementId] ON [dbo].[EntitlementChannelBase]
(
	[EntitlementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementChannelBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementChannelBase]  WITH CHECK ADD  CONSTRAINT [entitlement_entitlementchannel_EntitlementId] FOREIGN KEY([EntitlementId])
REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[EntitlementChannelBase] CHECK CONSTRAINT [entitlement_entitlementchannel_EntitlementId]
GO
ALTER TABLE [dbo].[EntitlementChannelBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_entitlementchannel] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[EntitlementChannelBase] CHECK CONSTRAINT [TransactionCurrency_entitlementchannel]
GO
