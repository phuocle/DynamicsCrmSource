USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceCategoryAssnBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceCategoryAssnBase](
	[ImportSequenceNumber] [int] NULL,
	[ResourceCategory] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[Resource] [uniqueidentifier] NULL,
	[BookableResourceCategoryAssnId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[StateCode] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[Name] [nvarchar](100) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourcecategoryassnBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceCategoryAssnId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceCategoryAssnBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceCategoryAssnBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceCategoryAssnBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceCategoryAssnBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD  CONSTRAINT [DF_BookableResourceCategoryAssnBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase]  WITH CHECK ADD  CONSTRAINT [bookableresource_bookableresourcecategoryassn_Resource] FOREIGN KEY([Resource])
REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] CHECK CONSTRAINT [bookableresource_bookableresourcecategoryassn_Resource]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase]  WITH CHECK ADD  CONSTRAINT [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory] FOREIGN KEY([ResourceCategory])
REFERENCES [dbo].[BookableResourceCategoryBase] ([BookableResourceCategoryId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] CHECK CONSTRAINT [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresourcecategoryassn] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] CHECK CONSTRAINT [business_unit_bookableresourcecategoryassn]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresourcecategoryassn] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] CHECK CONSTRAINT [owner_bookableresourcecategoryassn]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_bookableresourcecategoryassn] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] CHECK CONSTRAINT [TransactionCurrency_bookableresourcecategoryassn]
GO
