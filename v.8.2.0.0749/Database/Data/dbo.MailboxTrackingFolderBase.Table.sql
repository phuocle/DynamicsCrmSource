USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MailboxTrackingFolderBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MailboxTrackingFolderBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ExchangeFolderId] [nvarchar](160) NULL,
	[ExchangeFolderName] [nvarchar](256) NULL,
	[MailboxId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[FolderOnboardingStatus] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[MailboxTrackingFolderId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
 CONSTRAINT [PK_mailboxTrackingFolderBase] PRIMARY KEY CLUSTERED 
(
	[MailboxTrackingFolderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_MailboxBase_MailboxTrackingFolder]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_MailboxBase_MailboxTrackingFolder] ON [dbo].[MailboxTrackingFolderBase]
(
	[MailboxId] ASC,
	[ModifiedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[MailboxTrackingFolderBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_uniqueexchangefolderid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueexchangefolderid] ON [dbo].[MailboxTrackingFolderBase]
(
	[ExchangeFolderId] ASC,
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] ADD  CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] ADD  CONSTRAINT [DF_MailboxTrackingFolderBase_FolderOnboardingStatus]  DEFAULT ((0)) FOR [FolderOnboardingStatus]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] ADD  CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase]  WITH CHECK ADD  CONSTRAINT [businessunit_mailboxtrackingfolder] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] CHECK CONSTRAINT [businessunit_mailboxtrackingfolder]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase]  WITH CHECK ADD  CONSTRAINT [owner_mailboxtrackingfolder] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] CHECK CONSTRAINT [owner_mailboxtrackingfolder]
GO
