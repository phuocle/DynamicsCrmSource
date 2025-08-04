CREATE TABLE [dbo].[SdkMessageRequestBase]
(
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageRequestBase_CustomizationLevel] DEFAULT ((0)),
[SdkMessagePairId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[SdkMessageRequestIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageRequestBase_SdkMessageRequestIdUnique] DEFAULT (newid()),
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[SdkMessageRequestId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PrimaryObjectTypeCode] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageRequest] PRIMARY KEY CLUSTERED  ([SdkMessageRequestId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name_CustomizationLevel] ON [dbo].[SdkMessageRequestBase] ([Name], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [UQ_SdkMessageRequestBase_SdkMessageRequestIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageRequestIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageRequestBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [createdby_sdkmessagerequest] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [createdonbehalfby_sdkmessagerequest] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [messagepair_sdkmessagerequest] FOREIGN KEY ([SdkMessagePairId]) REFERENCES [dbo].[SdkMessagePairBaseIds] ([SdkMessagePairId])
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [modifiedby_sdkmessagerequest] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageRequestBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessagerequest] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
