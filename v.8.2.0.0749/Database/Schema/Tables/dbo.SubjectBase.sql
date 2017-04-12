CREATE TABLE [dbo].[SubjectBase]
(
[SubjectId] [uniqueidentifier] NOT NULL,
[Title] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ParentSubject] [uniqueidentifier] NULL,
[FeatureMask] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubjectBase] ADD CONSTRAINT [cndx_PrimaryKey_Subject] PRIMARY KEY CLUSTERED  ([SubjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_parent_subject] ON [dbo].[SubjectBase] ([ParentSubject]) WHERE ([ParentSubject] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SubjectBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubjectBase] ADD CONSTRAINT [subject_parent_subject] FOREIGN KEY ([ParentSubject]) REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
