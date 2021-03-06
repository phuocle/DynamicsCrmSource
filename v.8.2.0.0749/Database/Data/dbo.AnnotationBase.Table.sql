USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AnnotationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[AnnotationBase](
	[AnnotationId] [uniqueidentifier] NOT NULL,
	[ObjectTypeCode] [int] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[Subject] [nvarchar](500) NULL,
	[IsDocument] [bit] NOT NULL,
	[NoteText] [nvarchar](max) NULL,
	[MimeType] [nvarchar](256) NULL,
	[LangId] [nvarchar](2) NULL,
	[DocumentBody] [varchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[FileSize] [int] NULL,
	[FileName] [nvarchar](255) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[IsPrivate] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[StepId] [nvarchar](32) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [cndx_Annotation]    Script Date: 4/10/2017 9:59:20 PM ******/
CREATE CLUSTERED INDEX [cndx_Annotation] ON [dbo].[AnnotationBase]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrimaryKey_Annotation]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[AnnotationBase] ADD  CONSTRAINT [ndx_PrimaryKey_Annotation] PRIMARY KEY NONCLUSTERED 
(
	[AnnotationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_annotations]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_annotations] ON [dbo].[AnnotationBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AnnotationBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[AnnotationBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AnnotationBase] ADD  CONSTRAINT [Set_To_Zero98]  DEFAULT ((0)) FOR [IsDocument]
GO
ALTER TABLE [dbo].[AnnotationBase] ADD  CONSTRAINT [Set_To_Zero99]  DEFAULT ((0)) FOR [IsPrivate]
GO
ALTER TABLE [dbo].[AnnotationBase] ADD  CONSTRAINT [DF_AnnotationBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[AnnotationBase] ADD  CONSTRAINT [DF_AnnotationBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[AnnotationBase]  WITH CHECK ADD  CONSTRAINT [business_unit_annotations] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[AnnotationBase] CHECK CONSTRAINT [business_unit_annotations]
GO
ALTER TABLE [dbo].[AnnotationBase]  WITH CHECK ADD  CONSTRAINT [owner_annotations] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[AnnotationBase] CHECK CONSTRAINT [owner_annotations]
GO
