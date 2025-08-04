CREATE TABLE [dbo].[SdkMessageResponseFieldBase]
(
[PublicName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[SdkMessageResponseFieldIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageResponseFieldBase_SdkMessageResponseFieldIdUnique] DEFAULT (newid()),
[Value] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Formatter] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ClrFormatter] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageResponseFieldBase_CustomizationLevel] DEFAULT ((0)),
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Position] [int] NOT NULL CONSTRAINT [DF_SdkMessageResponseFieldBase_Position] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[SdkMessageResponseFieldId] [uniqueidentifier] NOT NULL,
[SdkMessageResponseId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ParameterBindingInformation] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageResponseField] PRIMARY KEY CLUSTERED  ([SdkMessageResponseFieldId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [UQ_SdkMessageResponseFieldBase_SdkMessageResponseFieldIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageResponseFieldIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageResponseFieldBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [createdby_sdkmessageresponsefield] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [createdonbehalfby_sdkmessageresponsefield] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [messageresponse_sdkmessageresponsefield] FOREIGN KEY ([SdkMessageResponseId]) REFERENCES [dbo].[SdkMessageResponseBaseIds] ([SdkMessageResponseId])
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [modifiedby_sdkmessageresponsefield] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageResponseFieldBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessageresponsefield] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
