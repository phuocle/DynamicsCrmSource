CREATE TABLE [dbo].[DocumentIndex] (
    [DocumentIndexId]    UNIQUEIDENTIFIER NOT NULL,
    [SubjectId]          UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [IsPublished]        BIT              NULL,
    [DocumentTypeCode]   INT              NOT NULL,
    [DocumentId]         UNIQUEIDENTIFIER NOT NULL,
    [Location]           NVARCHAR (500)   NULL,
    [Title]              NVARCHAR (500)   NULL,
    [Number]             NVARCHAR (100)   NULL,
    [KeyWords]           NVARCHAR (MAX)   NULL,
    [SearchText]         NVARCHAR (MAX)   NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedOn]          DATETIME         NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_DocumentIndex] PRIMARY KEY CLUSTERED ([DocumentIndexId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [is_primary_subject_for] FOREIGN KEY ([SubjectId]) REFERENCES [dbo].[SubjectBase] ([SubjectId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DocumentIndex]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_is_primary_subject_for]
    ON [dbo].[DocumentIndex]([SubjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DocumentIndex]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_KbArticle_DocumentIndex]
    ON [dbo].[DocumentIndex]([DocumentId] ASC) WITH (FILLFACTOR = 80);

