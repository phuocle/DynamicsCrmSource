CREATE TABLE [dbo].[ImportMapBase]
(
[StatusCode] [int] NOT NULL CONSTRAINT [DF_ImportMapBase_StatusCode] DEFAULT ((1)),
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NOT NULL,
[TargetEntity] [int] NULL,
[ImportMapType] [int] NULL CONSTRAINT [DF_ImportMapBase_ImportMapType] DEFAULT ((1)),
[TargetUserIdentifierForSourceCRMUserLink] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[IsWizardCreated] [bit] NULL CONSTRAINT [DF_ImportMapBase_IsWizardCreated] DEFAULT ((0)),
[CreatedOn] [datetime] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ImportMapId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (320) COLLATE Latin1_General_CI_AI NULL,
[SourceUserIdentifierForSourceDataSourceUserLink] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SourceUserIdentifierForSourceCRMUserLink] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportMapBase_StateCode] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Source] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[IsValidForImport] [bit] NULL CONSTRAINT [DF_ImportMapBase_IsValidForImport] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportMapBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[SourceType] [int] NULL,
[MapCustomizations] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EntitiesPerFile] [int] NOT NULL CONSTRAINT [DF_ImportMapBase_EntitiesPerFile] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportMapBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportMapBase] ADD CONSTRAINT [cndx_PrimaryKey_ImportMap] PRIMARY KEY CLUSTERED  ([ImportMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Name] ON [dbo].[ImportMapBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportMapBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportMaps] ON [dbo].[ImportMapBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportMapBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportMapBase] ADD CONSTRAINT [BusinessUnit_ImportMaps] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportMapBase] ADD CONSTRAINT [owner_importmaps] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
