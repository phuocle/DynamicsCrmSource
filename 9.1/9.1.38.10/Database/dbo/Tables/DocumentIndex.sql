CREATE TABLE [dbo].[DocumentIndex] (
    [Location]           NVARCHAR (500)   NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [DocumentTypeCode]   INT              NOT NULL,
    [KeyWords]           NVARCHAR (MAX)   NULL,
    [SearchText]         NVARCHAR (MAX)   NULL,
    [Number]             NVARCHAR (100)   NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [Title]              NVARCHAR (500)   NULL,
    [ModifiedOn]         DATETIME         NULL,
    [IsPublished]        BIT              NULL,
    [DocumentId]         UNIQUEIDENTIFIER NOT NULL,
    [DocumentIndexId]    UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [SubjectId]          UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]          DATETIME         NULL,
    [IsLatestVersion]    BIT              CONSTRAINT [DF_DocumentIndex_IsLatestVersion] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_DocumentIndex] PRIMARY KEY CLUSTERED ([DocumentIndexId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [is_primary_subject_for] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DocumentIndex]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DocumentIndex] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DocumentIndex]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_is_primary_subject_for]
    ON [dbo].[DocumentIndex]([SubjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_KbArticle_DocumentIndex]
    ON [dbo].[DocumentIndex]([DocumentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_KnowledgeArticle_DocumentIndex]
    ON [dbo].[DocumentIndex]([IsPublished] ASC, [IsLatestVersion] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_123FE0A8C270461C8454C77299D1692D]
    ON [dbo].[DocumentIndex]([DocumentIndexId] ASC)
    INCLUDE([Title], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_123FE0A8C270461C8454C77299D1692D]
    ON [dbo].[DocumentIndex]([Title] ASC, [DocumentIndexId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_123FE0A8C270461C8454C77299D1692D]
    ON [dbo].[DocumentIndex]([DocumentIndexId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

