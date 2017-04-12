CREATE TABLE [dbo].[SdkMessagePairBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[SdkMessagePairId] [uniqueidentifier] NOT NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessagePairBase_CustomizationLevel] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[SdkMessagePairIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessagePairBase_SdkMessagePairIdUnique] DEFAULT (newid()),
[Endpoint] [nvarchar] (128) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[Namespace] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[SdkMessageId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SdkMessageBindingInformation] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessagePair] PRIMARY KEY CLUSTERED  ([SdkMessagePairId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [UQ_SdkMessagePairBase_SdkMessagePairIdUnique] UNIQUE NONCLUSTERED  ([SdkMessagePairIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessagePairBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [createdby_sdkmessagepair] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [createdonbehalfby_sdkmessagepair] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [message_sdkmessagepair] FOREIGN KEY ([SdkMessageId]) REFERENCES [dbo].[SdkMessageBaseIds] ([SdkMessageId])
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [modifiedby_sdkmessagepair] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessagePairBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessagepair] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
