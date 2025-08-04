CREATE TABLE [dbo].[MailboxTrackingFolderBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeFolderId] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ExchangeFolderName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[MailboxId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OrganizationId] [uniqueidentifier] NOT NULL,
[FolderOnboardingStatus] [int] NOT NULL CONSTRAINT [DF_MailboxTrackingFolderBase_FolderOnboardingStatus] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[MailboxTrackingFolderId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerIdType] DEFAULT ((8)),
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] ADD CONSTRAINT [PK_mailboxTrackingFolderBase] PRIMARY KEY CLUSTERED  ([MailboxTrackingFolderId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueexchangefolderid] ON [dbo].[MailboxTrackingFolderBase] ([ExchangeFolderId], [OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MailboxBase_MailboxTrackingFolder] ON [dbo].[MailboxTrackingFolderBase] ([MailboxId], [ModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[MailboxTrackingFolderBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] ADD CONSTRAINT [businessunit_mailboxtrackingfolder] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] ADD CONSTRAINT [owner_mailboxtrackingfolder] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
