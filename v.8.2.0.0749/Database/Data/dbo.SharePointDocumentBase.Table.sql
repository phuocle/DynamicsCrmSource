USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SharePointDocumentBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharePointDocumentBase](
	[CopySource] [nvarchar](200) NULL,
	[AbsoluteUrl] [nvarchar](200) NULL,
	[Author] [nvarchar](2000) NULL,
	[Edit] [nvarchar](200) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[Version] [nvarchar](200) NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[SharePointCreatedOn] [datetime] NULL,
	[CheckInComment] [nvarchar](200) NULL,
	[EditUrl] [nvarchar](200) NULL,
	[ContentType] [nvarchar](200) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[AppCreatedBy] [nvarchar](200) NULL,
	[ContentTypeId] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CheckedOutTo] [nvarchar](200) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[IsCheckedOut] [bit] NULL,
	[DocumentId] [int] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ChildFolderCount] [int] NULL,
	[LocationId] [nvarchar](2000) NULL,
	[CreatedOn] [datetime] NULL,
	[FileType] [nvarchar](200) NULL,
	[AppModifiedBy] [nvarchar](200) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ReadUrl] [nvarchar](200) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ChildItemCount] [int] NULL,
	[SharePointDocumentId] [uniqueidentifier] NOT NULL,
	[Modified] [datetime] NULL,
	[FullName] [nvarchar](160) NULL,
	[SharePointModifiedBy] [nvarchar](200) NULL,
	[BusinessUnitId] [uniqueidentifier] NULL,
	[IsFolder] [bit] NULL,
	[Title] [nvarchar](2000) NULL,
	[FileSize] [int] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[RelativeLocation] [nvarchar](200) NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[ServiceType] [int] NULL,
	[IconClassName] [nvarchar](160) NULL,
	[DocumentLocationType] [int] NULL,
	[IsRecursiveFetch] [bit] NULL,
 CONSTRAINT [ndx_PrimaryKey_SharePointDocument] PRIMARY KEY CLUSTERED 
(
	[SharePointDocumentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_QuickFind_SharePointDocument]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_QuickFind_SharePointDocument] ON [dbo].[SharePointDocumentBase]
(
	[LocationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_regardingobjectid]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid] ON [dbo].[SharePointDocumentBase]
(
	[RegardingObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD  CONSTRAINT [DF_SharePointDocumentBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD  CONSTRAINT [DF_SharePointDocumentBase_IsCheckedOut]  DEFAULT ((0)) FOR [IsCheckedOut]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD  CONSTRAINT [DF_SharePointDocumentBase_IsFolder]  DEFAULT ((0)) FOR [IsFolder]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD  CONSTRAINT [DF_SharePointDocumentBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD  CONSTRAINT [DF_SharePointDocumentBase_IsRecursiveFetch]  DEFAULT ((1)) FOR [IsRecursiveFetch]
GO
ALTER TABLE [dbo].[SharePointDocumentBase]  WITH CHECK ADD  CONSTRAINT [business_unit_sharepointdocument] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] CHECK CONSTRAINT [business_unit_sharepointdocument]
GO
ALTER TABLE [dbo].[SharePointDocumentBase]  WITH CHECK ADD  CONSTRAINT [business_unit_sharepointdocument2] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] CHECK CONSTRAINT [business_unit_sharepointdocument2]
GO
ALTER TABLE [dbo].[SharePointDocumentBase]  WITH CHECK ADD  CONSTRAINT [owner_sharepointdocument] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] CHECK CONSTRAINT [owner_sharepointdocument]
GO
ALTER TABLE [dbo].[SharePointDocumentBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_SharePointDocument] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] CHECK CONSTRAINT [TransactionCurrency_SharePointDocument]
GO
