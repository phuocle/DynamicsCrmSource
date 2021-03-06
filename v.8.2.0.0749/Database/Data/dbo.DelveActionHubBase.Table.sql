USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DelveActionHubBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DelveActionHubBase](
	[MailWebLink] [nvarchar](250) NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[SenderImageUrl] [nvarchar](250) NULL,
	[MessageId] [nvarchar](320) NULL,
	[Description] [nvarchar](max) NULL,
	[Subject] [nvarchar](200) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedTime] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[CreatedTime] [datetime] NULL,
	[StatusCode] [int] NULL,
	[SenderEntityObjectTypeCode] [int] NULL,
	[MessageTime] [datetime] NULL,
	[RecordId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CardType] [int] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[DelveActionHubId] [uniqueidentifier] NOT NULL,
	[IconClassName] [nvarchar](160) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[Sender] [nvarchar](250) NULL,
	[RelatedMailIds] [nvarchar](max) NULL,
	[SenderEntityId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RecordIdObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RecordIdName] [nvarchar](4000) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[DelveActionHubBase] ADD  CONSTRAINT [DF_DelveActionHubBase_CardType]  DEFAULT ((0)) FOR [CardType]
GO
ALTER TABLE [dbo].[DelveActionHubBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_delveactionhub] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[DelveActionHubBase] CHECK CONSTRAINT [TransactionCurrency_delveactionhub]
GO
