CREATE TABLE [dbo].[SalesLiteratureItemBase] (
    [SalesLiteratureItemId] UNIQUEIDENTIFIER NOT NULL,
    [SalesLiteratureId]     UNIQUEIDENTIFIER NOT NULL,
    [IsCustomerViewable]    BIT              NULL,
    [AttachedDocumentUrl]   NVARCHAR (500)   NULL,
    [Title]                 NVARCHAR (200)   NULL,
    [MimeType]              NVARCHAR (256)   NULL,
    [AuthorName]            NVARCHAR (500)   NULL,
    [Abstract]              NVARCHAR (MAX)   NULL,
    [DocumentBody]          VARCHAR (MAX)    NULL,
    [CreatedOn]             DATETIME         NULL,
    [KeyWords]              NVARCHAR (MAX)   NULL,
    [FileName]              NVARCHAR (255)   NULL,
    [FileTypeCode]          INT              NULL,
    [FileSize]              INT              NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [ImportSequenceNumber]  INT              NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesLiteratureItem] PRIMARY KEY CLUSTERED ([SalesLiteratureItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [sales_literature_items] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesLiteratureItemBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesLiteratureItemBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_items]
    ON [dbo].[SalesLiteratureItemBase]([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[SalesLiteratureItemBase]([Title] ASC) WITH (FILLFACTOR = 80);

