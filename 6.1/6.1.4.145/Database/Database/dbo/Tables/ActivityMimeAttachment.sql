CREATE TABLE [dbo].[ActivityMimeAttachment] (
    [AttachmentNumber]               INT              CONSTRAINT [DF_ActivityMimeAttachment_AttachmentNumber] DEFAULT ((0)) NOT NULL,
    [ActivityMimeAttachmentId]       UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [SolutionId]                     UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityMimeAttachment_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [AttachmentId]                   UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]           UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]                 INT              CONSTRAINT [DF_ActivityMimeAttachment_ObjectTypeCode] DEFAULT ((4202)) NOT NULL,
    [IsManaged]                      BIT              CONSTRAINT [DF_ActivityMimeAttachment_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]                 INT              CONSTRAINT [DF_ActivityMimeAttachment_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                  DATETIME         CONSTRAINT [DF_ActivityMimeAttachment_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ActivityMimeAttachmentIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityMimeAttachment_ActivityMimeAttachmentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ObjectId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_ActivityMimeAttachment_ObjectId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [AttachmentContentId]            NVARCHAR (250)   NULL,
    CONSTRAINT [cndx_PrimaryKey_ActivityMimeAttachment] PRIMARY KEY CLUSTERED ([ActivityMimeAttachmentId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ActivityMimeAttachmentBase_ActivityMimeAttachmentIdUnique] UNIQUE NONCLUSTERED ([ActivityMimeAttachmentIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ActivityMimeAttachment]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActivityMimeAttachment]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_activity_mime_attachments]
    ON [dbo].[ActivityMimeAttachment]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_attachmentid]
    ON [dbo].[ActivityMimeAttachment]([AttachmentId] ASC) WITH (FILLFACTOR = 80);

