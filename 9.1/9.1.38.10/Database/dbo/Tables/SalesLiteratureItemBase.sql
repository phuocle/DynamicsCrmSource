CREATE TABLE [dbo].[SalesLiteratureItemBase] (
    [SalesLiteratureItemId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Title]                     NVARCHAR (200)   NULL,
    [Abstract]                  NVARCHAR (MAX)   NULL,
    [AttachedDocumentUrl]       NVARCHAR (500)   NULL,
    [AuthorName]                NVARCHAR (500)   NULL,
    [DocumentBody]              VARCHAR (MAX)    NULL,
    [FileName]                  NVARCHAR (255)   NULL,
    [FileSize]                  INT              NULL,
    [FileTypeCode]              INT              NULL,
    [IsCustomerViewable]        BIT              NULL,
    [KeyWords]                  NVARCHAR (MAX)   NULL,
    [MimeType]                  NVARCHAR (256)   NULL,
    [SalesLiteratureId]         UNIQUEIDENTIFIER NOT NULL,
    [FileType]                  INT              NULL,
    [Mode]                      NVARCHAR (256)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SalesLiteratureItem] PRIMARY KEY CLUSTERED ([SalesLiteratureItemId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [sales_literature_items] FOREIGN KEY ([SalesLiteratureId]) REFERENCES [dbo].[SalesLiteratureBase] ([SalesLiteratureId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SalesLiteratureItemBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SalesLiteratureItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SalesLiteratureItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sales_literature_items]
    ON [dbo].[SalesLiteratureItemBase]([SalesLiteratureId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A1CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[SalesLiteratureItemBase]([SalesLiteratureItemId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[SalesLiteratureItemBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A1CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[SalesLiteratureItemBase]([SalesLiteratureItemId] ASC)
    INCLUDE([Title], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A1CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[SalesLiteratureItemBase]([Title] ASC, [SalesLiteratureItemId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

