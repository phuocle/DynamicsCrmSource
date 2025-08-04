CREATE TABLE [dbo].[SdkMessageResponseBase]
(
[VersionNumber] [timestamp] NULL,
[SdkMessageResponseIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageResponseBase_SdkMessageResponseIdUnique] DEFAULT (newid()),
[ModifiedBy] [uniqueidentifier] NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageResponseBase_CustomizationLevel] DEFAULT ((0)),
[SdkMessageRequestId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SdkMessageResponseId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageResponse] PRIMARY KEY CLUSTERED  ([SdkMessageResponseId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [UQ_SdkMessageResponseBase_SdkMessageResponseIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageResponseIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageResponseBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [createdby_sdkmessageresponse] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [createdonbehalfby_sdkmessageresponse] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [messagerequest_sdkmessageresponse] FOREIGN KEY ([SdkMessageRequestId]) REFERENCES [dbo].[SdkMessageRequestBaseIds] ([SdkMessageRequestId])
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [modifiedby_sdkmessageresponse] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageResponseBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessageresponse] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
