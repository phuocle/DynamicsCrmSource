CREATE TABLE [dbo].[CategoryBase]
(
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[Title] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CategoryNumber] [nvarchar] (127) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CategoryId] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_CategoryBase_CategoryId] DEFAULT (newid()),
[SequenceNumber] [int] NULL,
[ParentCategoryId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CategoryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_CategoryBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CategoryBase] ADD CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED  ([CategoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CategoryNumber] ON [dbo].[CategoryBase] ([CategoryNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_catgory_parentcategory] ON [dbo].[CategoryBase] ([ParentCategoryId], [SequenceNumber]) WHERE ([ParentCategoryId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Category_Title] ON [dbo].[CategoryBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CategoryBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CategoryBase] ADD CONSTRAINT [business_unit_category] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CategoryBase] ADD CONSTRAINT [owner_categories] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CategoryBase] ADD CONSTRAINT [transactioncurrency_category] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
