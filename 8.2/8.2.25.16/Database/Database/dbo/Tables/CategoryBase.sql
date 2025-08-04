CREATE TABLE [dbo].[CategoryBase] (
    [Description]           NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [Title]                 NVARCHAR (4000)  NULL,
    [CategoryNumber]        NVARCHAR (127)   NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [CategoryId]            UNIQUEIDENTIFIER CONSTRAINT [DF_CategoryBase_CategoryId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SequenceNumber]        INT              NULL,
    [ParentCategoryId]      UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]  INT              NULL,
    [OwnerId]               UNIQUEIDENTIFIER CONSTRAINT [DF_CategoryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]    UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [OwnerIdType]           INT              CONSTRAINT [DF_CategoryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED ([CategoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_category] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_categories] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_category] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CategoryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Category_Title]
    ON [dbo].[CategoryBase]([Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CategoryNumber]
    ON [dbo].[CategoryBase]([CategoryNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_catgory_parentcategory]
    ON [dbo].[CategoryBase]([ParentCategoryId] ASC, [SequenceNumber] ASC) WHERE ([ParentCategoryId] IS NOT NULL) WITH (FILLFACTOR = 80);

