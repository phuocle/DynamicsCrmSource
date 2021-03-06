USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserMappingBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserMappingBase](
	[ModifiedBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[UserMappingId] [uniqueidentifier] NOT NULL,
	[PartnerApplicationType] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[SystemUserAttributeName] [nvarchar](160) NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[ClaimType] [nvarchar](160) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
 CONSTRAINT [PK_UserMappingBase] PRIMARY KEY CLUSTERED 
(
	[UserMappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserMappingBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserMappingBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserMappingBase] ADD  CONSTRAINT [DF_UserMappingBase_PartnerApplicationType]  DEFAULT ((0)) FOR [PartnerApplicationType]
GO
ALTER TABLE [dbo].[UserMappingBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_UserMapping] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserMappingBase] CHECK CONSTRAINT [TransactionCurrency_UserMapping]
GO
