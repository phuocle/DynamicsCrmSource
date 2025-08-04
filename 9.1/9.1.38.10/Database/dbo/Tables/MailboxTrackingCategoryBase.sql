CREATE TABLE [dbo].[MailboxTrackingCategoryBase] (
    [MailboxTrackingCategoryId] UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_MailboxTrackingCategoryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ExchangeCategoryColor]     INT              CONSTRAINT [DF_MailboxTrackingCategoryBase_ExchangeCategoryColor] DEFAULT ((22)) NOT NULL,
    [MailboxId]                 UNIQUEIDENTIFIER NOT NULL,
    [CategoryOnboardingStatus]  INT              CONSTRAINT [DF_MailboxTrackingCategoryBase_CategoryOnboardingStatus] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ExchangeCategoryId]        UNIQUEIDENTIFIER NULL,
    [ExchangeCategoryName]      NVARCHAR (256)   NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_MailboxTrackingCategoryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_mailboxTrackingCategoryBase] PRIMARY KEY CLUSTERED ([MailboxTrackingCategoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [businessunit_mailboxtrackingcategory] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [Mailbox_mailboxtrackingcategory] FOREIGN KEY ([MailboxId]) REFERENCES [dbo].[MailboxBase] ([MailboxId]),
    CONSTRAINT [owner_mailboxtrackingcategory] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[MailboxTrackingCategoryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[MailboxTrackingCategoryBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_uniqueexchangecategoryid]
    ON [dbo].[MailboxTrackingCategoryBase]([ExchangeCategoryId] ASC, [OwnerId] ASC, [MailboxId] ASC) WITH (FILLFACTOR = 100);

