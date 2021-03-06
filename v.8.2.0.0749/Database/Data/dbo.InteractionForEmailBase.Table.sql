USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[InteractionForEmailBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InteractionForEmailBase](
	[InteractionUserAgent] [nvarchar](1250) NULL,
	[InteractedComponentText] [nvarchar](1250) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[EmailActivityId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[statecode] [int] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[statuscode] [int] NULL,
	[InteractionType] [int] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[InteractionReplyId] [nvarchar](1250) NULL,
	[InteractionRepliedBy] [nvarchar](1250) NULL,
	[name] [nvarchar](100) NULL,
	[InteractionForEmailId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[EmailInteractionReplyId] [uniqueidentifier] NULL,
	[EmailInteractionTime] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[InteractionLocation] [nvarchar](1250) NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedOn] [datetime] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_InteractionForEmailBase] PRIMARY KEY CLUSTERED 
(
	[InteractionForEmailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InteractionForEmailBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[InteractionForEmailBase]
(
	[statecode] ASC,
	[statuscode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[InteractionForEmailBase]
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[InteractionForEmailBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InteractionForEmailBase] ADD  CONSTRAINT [DF_InteractionForEmailBase_InteractionType]  DEFAULT ((0)) FOR [InteractionType]
GO
ALTER TABLE [dbo].[InteractionForEmailBase] ADD  CONSTRAINT [DF_InteractionForEmailBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[InteractionForEmailBase]  WITH CHECK ADD  CONSTRAINT [business_unit_interactionforemail] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[InteractionForEmailBase] CHECK CONSTRAINT [business_unit_interactionforemail]
GO
ALTER TABLE [dbo].[InteractionForEmailBase]  WITH CHECK ADD  CONSTRAINT [owner_interactionforemail] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[InteractionForEmailBase] CHECK CONSTRAINT [owner_interactionforemail]
GO
ALTER TABLE [dbo].[InteractionForEmailBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_InteractionForEmail] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[InteractionForEmailBase] CHECK CONSTRAINT [TransactionCurrency_InteractionForEmail]
GO
