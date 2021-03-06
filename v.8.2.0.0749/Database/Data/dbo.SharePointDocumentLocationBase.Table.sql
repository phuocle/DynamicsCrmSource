USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SharePointDocumentLocationBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharePointDocumentLocationBase](
	[VersionNumber] [timestamp] NULL,
	[StateCode] [int] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[RelativeUrl] [nvarchar](255) NULL,
	[AbsoluteURL] [nvarchar](2000) NULL,
	[Name] [nvarchar](160) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[SiteCollectionId] [uniqueidentifier] NULL,
	[SharePointDocumentLocationId] [uniqueidentifier] NOT NULL,
	[ParentSiteOrLocation] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ParentSiteOrLocationName] [nvarchar](4000) NULL,
	[ParentSiteOrLocationTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[ServiceType] [int] NOT NULL,
	[UserId] [uniqueidentifier] NULL,
	[LocationType] [int] NULL,
 CONSTRAINT [ndx_PrimaryKey_SharePointDocumentLocation] PRIMARY KEY CLUSTERED 
(
	[SharePointDocumentLocationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SharePointDocumentLocationBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SharePointDocumentLocationBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_business_unit_sharepointdocumentlocations]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointdocumentlocations] ON [dbo].[SharePointDocumentLocationBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_sharepointdocumentlocation_parent_sharepointsite]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointdocumentlocation_parent_sharepointsite] ON [dbo].[SharePointDocumentLocationBase]
(
	[ParentSiteOrLocation] ASC,
	[ParentSiteOrLocationTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RegardingObjectId_SharePointDocumentLocation]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectId_SharePointDocumentLocation] ON [dbo].[SharePointDocumentLocationBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SharePointDocumentLocationBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD  CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD  CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD  CONSTRAINT [DF_SharePointDocumentLocationBase_ServiceType]  DEFAULT ((0)) FOR [ServiceType]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD  CONSTRAINT [DF_SharePointDocumentLocationBase_LocationType]  DEFAULT ((0)) FOR [LocationType]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase]  WITH CHECK ADD  CONSTRAINT [business_unit_sharepointdocumentlocation] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] CHECK CONSTRAINT [business_unit_sharepointdocumentlocation]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase]  WITH CHECK ADD  CONSTRAINT [owner_sharepointdocumentlocation] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] CHECK CONSTRAINT [owner_sharepointdocumentlocation]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_SharePointDocumentLocation] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] CHECK CONSTRAINT [TransactionCurrency_SharePointDocumentLocation]
GO
