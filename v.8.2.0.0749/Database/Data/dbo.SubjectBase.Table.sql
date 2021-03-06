USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SubjectBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubjectBase](
	[SubjectId] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](500) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
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
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Subject] PRIMARY KEY CLUSTERED 
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[SubjectBase] ([SubjectId], [Title], [OrganizationId], [Description], [ParentSubject], [FeatureMask], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [ImportSequenceNumber], [OverriddenCreatedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [CreatedByExternalParty], [ModifiedByExternalParty]) VALUES (N'c92378ba-0cfb-4a0b-8cdc-a116f3be74d2', N'Default Subject', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Default Subject populated for migration. You can change this to suit your organization.', NULL, 1, N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:04.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL)
/****** Object:  Index [fndx_for_cascaderelationship_subject_parent_subject]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_parent_subject] ON [dbo].[SubjectBase]
(
	[ParentSubject] ASC
)
WHERE ([ParentSubject] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SubjectBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubjectBase]  WITH CHECK ADD  CONSTRAINT [subject_parent_subject] FOREIGN KEY([ParentSubject])
REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[SubjectBase] CHECK CONSTRAINT [subject_parent_subject]
GO
