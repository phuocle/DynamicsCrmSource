CREATE TABLE [dbo].[SubjectBase] (
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedByExternalParty]  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [Title]                   NVARCHAR (500)   NULL,
    [FeatureMask]             INT              NULL,
    [ImportSequenceNumber]    INT              NULL,
    [CreatedOn]               DATETIME         NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ModifiedByExternalParty] UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [SubjectId]               UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ParentSubject]           UNIQUEIDENTIFIER NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Subject] PRIMARY KEY CLUSTERED ([SubjectId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subject_parent_subject] FOREIGN KEY ([ParentSubject]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SubjectBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SubjectBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SubjectBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_parent_subject]
    ON [dbo].[SubjectBase]([ParentSubject] ASC) WHERE ([ParentSubject] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[SubjectBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4FAE4D6F8C094969980CCDC33486AAC2]
    ON [dbo].[SubjectBase]([Title] ASC, [SubjectId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4FAE4D6F8C094969980CCDC33486AAC2]
    ON [dbo].[SubjectBase]([SubjectId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4FAE4D6F8C094969980CCDC33486AAC2]
    ON [dbo].[SubjectBase]([SubjectId] ASC)
    INCLUDE([Title], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

