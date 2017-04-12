CREATE TABLE [dbo].[SdkMessageBase]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsPrivate] [bit] NULL,
[SdkMessageId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CategoryName] [nvarchar] (25) COLLATE Latin1_General_CI_AI NOT NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageBase_CustomizationLevel] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SdkMessageIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageBase_SdkMessageIdUnique] DEFAULT (newid()),
[Expand] [bit] NULL,
[AutoTransact] [bit] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOn] [datetime] NULL,
[Availability] [int] NOT NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[Template] [bit] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ThrottleSettings] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IsActive] [bit] NULL,
[IsValidForExecuteAsync] [bit] NULL,
[WorkflowSdkStepEnabled] [bit] NULL CONSTRAINT [DF_SdkMessageBase_WorkflowSdkStepEnabled] DEFAULT ((0)),
[IsReadOnly] [bit] NOT NULL CONSTRAINT [DF_SdkMessageBase_IsReadOnly] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessage] PRIMARY KEY CLUSTERED  ([SdkMessageId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[SdkMessageBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageBase] ADD CONSTRAINT [UQ_SdkMessageBase_SdkMessageIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageBase] ADD CONSTRAINT [createdby_sdkmessage] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageBase] ADD CONSTRAINT [createdonbehalfbysdkmessage] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageBase] ADD CONSTRAINT [modifiedby_sdkmessage] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessage] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
