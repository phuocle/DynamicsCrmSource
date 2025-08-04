CREATE TABLE [dbo].[SubjectBase] (
    [SubjectId]            UNIQUEIDENTIFIER NOT NULL,
    [Title]                NVARCHAR (500)   NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [ParentSubject]        UNIQUEIDENTIFIER NULL,
    [FeatureMask]          INT              NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ImportSequenceNumber] INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Subject] PRIMARY KEY CLUSTERED ([SubjectId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subject_parent_subject] FOREIGN KEY ([ParentSubject]) REFERENCES [dbo].[SubjectBase] ([SubjectId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SubjectBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_parent_subject]
    ON [dbo].[SubjectBase]([ParentSubject] ASC) WHERE ([ParentSubject] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SubjectBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

