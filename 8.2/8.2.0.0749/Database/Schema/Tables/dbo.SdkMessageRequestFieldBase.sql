CREATE TABLE [dbo].[SdkMessageRequestFieldBase]
(
[CreatedOn] [datetime] NULL,
[SdkMessageRequestFieldIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageRequestFieldBase_SdkMessageRequestFieldIdUnique] DEFAULT (newid()),
[Optional] [bit] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Position] [int] NOT NULL CONSTRAINT [DF_SdkMessageRequestFieldBase_Position] DEFAULT ((0)),
[ClrParser] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[PublicName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[SdkMessageRequestId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[Parser] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageRequestFieldBase_CustomizationLevel] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[SdkMessageRequestFieldId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[FieldMask] [int] NOT NULL CONSTRAINT [DF_SdkMessageRequestFieldBase_FieldMask] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ParameterBindingInformation] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageRequestField] PRIMARY KEY CLUSTERED  ([SdkMessageRequestFieldId], [CustomizationLevel]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [UQ_SdkMessageRequestFieldBase_SdkMessageRequestFieldIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageRequestFieldIdUnique]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageRequestId] ON [dbo].[SdkMessageRequestFieldBase] ([SdkMessageRequestId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageRequestFieldBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [createdby_sdkmessagerequestfield] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [createdonbehalfby_sdkmessagerequestfield] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [messagerequest_sdkmessagerequestfield] FOREIGN KEY ([SdkMessageRequestId]) REFERENCES [dbo].[SdkMessageRequestBaseIds] ([SdkMessageRequestId])
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [modifiedby_sdkmessagerequestfield] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SdkMessageRequestFieldBase] ADD CONSTRAINT [modifiedonbehalfby_sdkmessagerequestfield] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
