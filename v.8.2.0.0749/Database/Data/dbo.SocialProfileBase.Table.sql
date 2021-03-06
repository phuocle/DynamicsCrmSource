USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SocialProfileBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SocialProfileBase](
	[Blocked] [bit] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[Community] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[StatusCode] [int] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[ProfileLink] [nvarchar](100) NULL,
	[SocialProfileId] [uniqueidentifier] NOT NULL,
	[ProfileFullName] [nvarchar](160) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[ProfileName] [nvarchar](100) NULL,
	[InfluenceScore] [float] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[UniqueProfileID] [nvarchar](100) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [ndx_PrimaryKey_SocialProfile] PRIMARY KEY CLUSTERED 
(
	[SocialProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_socialprofiles]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_socialprofiles] ON [dbo].[SocialProfileBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_ProfileFullName]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_ProfileFullName] ON [dbo].[SocialProfileBase]
(
	[ProfileFullName] ASC
)
INCLUDE ( 	[TransactionCurrencyId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_SocialProfile_ProfileName]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_ProfileName] ON [dbo].[SocialProfileBase]
(
	[ProfileName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_SocialProfile_Search]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_Search] ON [dbo].[SocialProfileBase]
(
	[UniqueProfileID] ASC,
	[Community] ASC
)
WHERE ([UniqueProfileID] IS NOT NULL AND [Community] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SocialProfileBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_socialprofile_customer_accounts]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialprofile_customer_accounts] ON [dbo].[SocialProfileBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SocialProfileBase]
(
	[OwnerId] ASC,
	[StateCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SocialProfileBase] ADD  CONSTRAINT [DF_SocialProfileBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SocialProfileBase] ADD  CONSTRAINT [DF_SocialProfileBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SocialProfileBase]  WITH CHECK ADD  CONSTRAINT [business_unit_socialprofiles] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SocialProfileBase] CHECK CONSTRAINT [business_unit_socialprofiles]
GO
ALTER TABLE [dbo].[SocialProfileBase]  WITH CHECK ADD  CONSTRAINT [owner_SocialProfile] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SocialProfileBase] CHECK CONSTRAINT [owner_SocialProfile]
GO
ALTER TABLE [dbo].[SocialProfileBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_SocialProfile] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SocialProfileBase] CHECK CONSTRAINT [transactioncurrency_SocialProfile]
GO
