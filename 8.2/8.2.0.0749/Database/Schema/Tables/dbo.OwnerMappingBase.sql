CREATE TABLE [dbo].[OwnerMappingBase]
(
[CreatedOn] [datetime] NOT NULL,
[TargetUserValueForSourceCRMUserLink] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_OwnerMappingBase_StatusCode] DEFAULT ((0)),
[ImportMapId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwnerMappingId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_OwnerMappingBase_ProcessCode] DEFAULT ((1)),
[SourceSystemUserName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[TargetSystemUserId] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_OwnerMappingBase_StateCode] DEFAULT ((0)),
[SourceUserValueForSourceCRMUserLink] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[TargetSystemUserDomainName] [nvarchar] (260) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OwnerMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_OwnerMapping] PRIMARY KEY CLUSTERED  ([OwnerMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[OwnerMappingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OwnerMappingBase] ADD CONSTRAINT [OwnerMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
ALTER TABLE [dbo].[OwnerMappingBase] ADD CONSTRAINT [OwnerMapping_SystemUser] FOREIGN KEY ([TargetSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
