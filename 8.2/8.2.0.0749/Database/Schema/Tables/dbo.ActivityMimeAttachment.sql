CREATE TABLE [dbo].[ActivityMimeAttachment]
(
[AttachmentNumber] [int] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_AttachmentNumber] DEFAULT ((0)),
[ActivityMimeAttachmentId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[AttachmentId] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[ObjectTypeCode] [int] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_ObjectTypeCode] DEFAULT ((4202)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_IsManaged] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_ComponentState] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_OverwriteTime] DEFAULT ((0)),
[ActivityMimeAttachmentIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ActivityMimeAttachment_ActivityMimeAttachmentIdUnique] DEFAULT (newid()),
[ObjectId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ActivityMimeAttachment_ObjectId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[AttachmentContentId] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[AnonymousLink] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[IsFollowed] [bit] NULL CONSTRAINT [DF_ActivityMimeAttachment_IsFollowed] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD CONSTRAINT [cndx_PrimaryKey_ActivityMimeAttachment] PRIMARY KEY CLUSTERED  ([ActivityMimeAttachmentId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityMimeAttachment] ADD CONSTRAINT [UQ_ActivityMimeAttachmentBase_ActivityMimeAttachmentIdUnique] UNIQUE NONCLUSTERED  ([ActivityMimeAttachmentIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_attachmentid] ON [dbo].[ActivityMimeAttachment] ([AttachmentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_activity_mime_attachments] ON [dbo].[ActivityMimeAttachment] ([ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActivityMimeAttachment] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
