CREATE TABLE [dbo].[AnnotationBase]
(
[AnnotationId] [uniqueidentifier] NOT NULL,
[ObjectTypeCode] [int] NULL,
[ObjectId] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Subject] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[IsDocument] [bit] NOT NULL CONSTRAINT [Set_To_Zero98] DEFAULT ((0)),
[NoteText] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[LangId] [nvarchar] (2) COLLATE Latin1_General_CI_AI NULL,
[DocumentBody] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[FileSize] [int] NULL,
[FileName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[IsPrivate] [bit] NULL CONSTRAINT [Set_To_Zero99] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[StepId] [nvarchar] (32) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AnnotationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_AnnotationBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AnnotationBase] ADD CONSTRAINT [ndx_PrimaryKey_Annotation] PRIMARY KEY NONCLUSTERED  ([AnnotationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AnnotationModifiedOn] ON [dbo].[AnnotationBase] ([ModifiedOn] DESC, [AnnotationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [cndx_Annotation] ON [dbo].[AnnotationBase] ([ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[AnnotationBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_annotations] ON [dbo].[AnnotationBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AnnotationBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AnnotationBase] ADD CONSTRAINT [business_unit_annotations] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[AnnotationBase] ADD CONSTRAINT [owner_annotations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
