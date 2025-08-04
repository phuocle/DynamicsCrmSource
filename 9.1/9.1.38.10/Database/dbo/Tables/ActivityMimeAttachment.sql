CREATE TABLE [dbo].[ActivityMimeAttachment] (
    [SolutionId]                     UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityMimeAttachment_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ActivityMimeAttachmentId]       UNIQUEIDENTIFIER NOT NULL,
    [ActivityMimeAttachmentIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityMimeAttachment_ActivityMimeAttachmentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsFollowed]                     BIT              CONSTRAINT [DF_ActivityMimeAttachment_IsFollowed] DEFAULT ((0)) NULL,
    [AttachmentNumber]               INT              CONSTRAINT [DF_ActivityMimeAttachment_AttachmentNumber] DEFAULT ((0)) NOT NULL,
    [AnonymousLink]                  NVARCHAR (2000)  NULL,
    [ObjectTypeCode]                 INT              CONSTRAINT [DF_ActivityMimeAttachment_ObjectTypeCode] DEFAULT ((4202)) NOT NULL,
    [AttachmentContentId]            NVARCHAR (250)   NULL,
    [ComponentState]                 INT              CONSTRAINT [DF_ActivityMimeAttachment_ComponentState] DEFAULT ((0)) NOT NULL,
    [ObjectId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityMimeAttachment_ObjectId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [IsManaged]                      BIT              CONSTRAINT [DF_ActivityMimeAttachment_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                  DATETIME         CONSTRAINT [DF_ActivityMimeAttachment_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [AttachmentId]                   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ActivityMimeAttachment] PRIMARY KEY CLUSTERED ([ActivityMimeAttachmentId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_ActivityMimeAttachmentBase_ActivityMimeAttachmentIdUnique] UNIQUE NONCLUSTERED ([ActivityMimeAttachmentIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ActivityMimeAttachment] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActivityMimeAttachment]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_activity_mime_attachments]
    ON [dbo].[ActivityMimeAttachment]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_attachmentid]
    ON [dbo].[ActivityMimeAttachment]([AttachmentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ActivityMimeAttachment]([ActivityMimeAttachmentId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1D94CD66C69041C2A358339E6331B98E]
    ON [dbo].[ActivityMimeAttachment]([ActivityMimeAttachmentId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

