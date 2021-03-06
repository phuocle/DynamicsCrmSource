USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SharePointSiteBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharePointSiteBase](
	[IsGridPresent] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[AbsoluteURL] [nvarchar](2000) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[Description] [nvarchar](max) NULL,
	[FolderStructureEntity] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ValidationStatus] [int] NULL,
	[RelativeUrl] [nvarchar](160) NULL,
	[SharePointSiteId] [uniqueidentifier] NOT NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[SiteCollectionId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ImportSequenceNumber] [int] NULL,
	[IsDefault] [bit] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[ValidationStatusErrorCode] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[Name] [nvarchar](160) NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[LastValidated] [datetime] NULL,
	[ParentSite] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[ParentSiteObjectTypeCode] [int] NULL,
	[ParentSiteName] [nvarchar](4000) NULL,
	[IsPowerBISite] [bit] NOT NULL,
	[ServiceType] [int] NOT NULL,
	[UserId] [uniqueidentifier] NULL,
 CONSTRAINT [ndx_PrimaryKey_SharePointSite] PRIMARY KEY CLUSTERED 
(
	[SharePointSiteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SharePointSiteBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SharePointSiteBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_business_unit_sharepointsites]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointsites] ON [dbo].[SharePointSiteBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_sharepointsite_parentsite_sharepointsite]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointsite_parentsite_sharepointsite] ON [dbo].[SharePointSiteBase]
(
	[ParentSite] ASC,
	[ParentSiteObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SharePointSiteBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD  CONSTRAINT [DF_SharePointSiteBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD  CONSTRAINT [DF_SharePointSiteBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD  CONSTRAINT [DF_SharePointSiteBase_IsPowerBISite]  DEFAULT ((0)) FOR [IsPowerBISite]
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD  CONSTRAINT [DF_SharePointSiteBase_ServiceType]  DEFAULT ((0)) FOR [ServiceType]
GO
ALTER TABLE [dbo].[SharePointSiteBase]  WITH CHECK ADD  CONSTRAINT [business_unit_sharepointsites] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointSiteBase] CHECK CONSTRAINT [business_unit_sharepointsites]
GO
ALTER TABLE [dbo].[SharePointSiteBase]  WITH CHECK ADD  CONSTRAINT [owner_sharepointsite] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SharePointSiteBase] CHECK CONSTRAINT [owner_sharepointsite]
GO
ALTER TABLE [dbo].[SharePointSiteBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_SharePointSite] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SharePointSiteBase] CHECK CONSTRAINT [TransactionCurrency_SharePointSite]
GO
