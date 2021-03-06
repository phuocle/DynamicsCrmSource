USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ActivityMimeAttachment]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActivityMimeAttachment](
	[AttachmentNumber] [int] NOT NULL,
	[ActivityMimeAttachmentId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[AttachmentId] [uniqueidentifier] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[IsManaged] [bit] NOT NULL,
	[ComponentState] [int] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[ActivityMimeAttachmentIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[ObjectId] [uniqueidentifier] NOT NULL,
	[AttachmentContentId] [nvarchar](250) NULL,
	[AnonymousLink] [nvarchar](2000) NULL,
	[IsFollowed] [bit] NULL,
 CONSTRAINT [cndx_PrimaryKey_ActivityMimeAttachment] PRIMARY KEY CLUSTERED 
(
	[ActivityMimeAttachmentId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ActivityMimeAttachmentBase_ActivityMimeAttachmentIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [UQ_ActivityMimeAttachmentBase_ActivityMimeAttachmentIdUnique] UNIQUE NONCLUSTERED 
(
	[ActivityMimeAttachmentIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActivityMimeAttachment]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_attachmentid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_attachmentid] ON [dbo].[ActivityMimeAttachment]
(
	[AttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_activity_pointer_activity_mime_attachments]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_activity_mime_attachments] ON [dbo].[ActivityMimeAttachment]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_AttachmentNumber]  DEFAULT ((0)) FOR [AttachmentNumber]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_ObjectTypeCode]  DEFAULT ((4202)) FOR [ObjectTypeCode]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_ActivityMimeAttachmentIdUnique]  DEFAULT (newid()) FOR [ActivityMimeAttachmentIdUnique]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_ObjectId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [ObjectId]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD  CONSTRAINT [DF_ActivityMimeAttachment_IsFollowed]  DEFAULT ((0)) FOR [IsFollowed]
GO
