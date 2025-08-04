CREATE TABLE [dbo].[MailboxTrackingFolderBase] (
    [MailboxId]               UNIQUEIDENTIFIER NOT NULL,
    [FolderOnboardingStatus]  INT              CONSTRAINT [DF_MailboxTrackingFolderBase_FolderOnboardingStatus] DEFAULT ((0)) NOT NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [ModifiedOn]              DATETIME         NULL,
    [MailboxTrackingFolderId] UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [ExchangeFolderName]      NVARCHAR (256)   NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [ExchangeFolderId]        NVARCHAR (160)   NULL,
    [RegardingObjectIdName]   NVARCHAR (4000)  NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    [VersionNumber]           ROWVERSION       NULL,
    CONSTRAINT [PK_mailboxTrackingFolderBase] PRIMARY KEY CLUSTERED ([MailboxTrackingFolderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [businessunit_mailboxtrackingfolder] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_mailboxtrackingfolder] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[MailboxTrackingFolderBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailboxTrackingFolderBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueexchangefolderid]
    ON [dbo].[MailboxTrackingFolderBase]([ExchangeFolderId] ASC, [OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MailboxBase_MailboxTrackingFolder]
    ON [dbo].[MailboxTrackingFolderBase]([MailboxId] ASC, [ModifiedOn] ASC) WITH (FILLFACTOR = 80);

