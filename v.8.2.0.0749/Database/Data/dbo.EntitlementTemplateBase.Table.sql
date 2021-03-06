USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementTemplateBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementTemplateBase](
	[OverriddenCreatedOn] [datetime] NULL,
	[TotalTerms] [decimal](23, 10) NULL,
	[DecreaseRemainingOn] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[EntitlementTemplateId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](160) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[EndDate] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[RestrictCaseCreation] [bit] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[AllocationTypeCode] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[KbAccessLevel] [int] NULL,
	[StartDate] [datetime] NULL,
	[SLAId] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_EntitlementTemplate] PRIMARY KEY CLUSTERED 
(
	[EntitlementTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementTemplateBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_entitlementtemplate] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[EntitlementTemplateBase] CHECK CONSTRAINT [TransactionCurrency_entitlementtemplate]
GO
