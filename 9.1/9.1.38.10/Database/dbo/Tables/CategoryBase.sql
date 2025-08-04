CREATE TABLE [dbo].[CategoryBase] (
    [ImportSequenceNumber]  INT              NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [Title]                 NVARCHAR (4000)  NULL,
    [CategoryNumber]        NVARCHAR (127)   NOT NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]    UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedOn]            DATETIME         NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [OwnerId]               UNIQUEIDENTIFIER CONSTRAINT [DF_CategoryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [SequenceNumber]        INT              NULL,
    [CategoryId]            UNIQUEIDENTIFIER CONSTRAINT [DF_CategoryBase_CategoryId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ParentCategoryId]      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [OwnerIdType]           INT              CONSTRAINT [DF_CategoryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED ([CategoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_category] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_categories] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_category] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CategoryBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CategoryBase] SET (LOCK_ESCALATION = DISABLE);


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


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_58738C1E58B441BDB266015430707CEC]
    ON [dbo].[CategoryBase]([CategoryId] ASC)
    INCLUDE([Title], [CategoryNumber], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_58738C1E58B441BDB266015430707CEC]
    ON [dbo].[CategoryBase]([CategoryId] ASC)
    INCLUDE([CategoryNumber], [Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_categories]
    ON [dbo].[CategoryBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

