CREATE TABLE [dbo].[MailboxTrackingFolderBase] (
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ExchangeFolderId]        NVARCHAR (160)   NULL,
    [ExchangeFolderName]      NVARCHAR (256)   NULL,
    [MailboxId]               UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [FolderOnboardingStatus]  INT              CONSTRAINT [DF_MailboxTrackingFolderBase_FolderOnboardingStatus] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [MailboxTrackingFolderId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [RegardingObjectId]       UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_MailboxTrackingFolderBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    [RegardingObjectIdName]   NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_mailboxTrackingFolderBase] PRIMARY KEY CLUSTERED ([MailboxTrackingFolderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [businessunit_mailboxtrackingfolder] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_mailboxtrackingfolder] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailboxTrackingFolderBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MailboxBase_MailboxTrackingFolder]
    ON [dbo].[MailboxTrackingFolderBase]([MailboxId] ASC, [ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueexchangefolderid]
    ON [dbo].[MailboxTrackingFolderBase]([ExchangeFolderId] ASC, [OwnerId] ASC) WITH (FILLFACTOR = 80);

