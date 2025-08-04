CREATE TABLE [dbo].[UserApplicationMetadataBase]
(
[State] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[AssociatedEntityLogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[DisplayName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[UserApplicationMetadataId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[MetadataType] [int] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FormFactor] [int] NULL,
[Lcid] [int] NULL,
[MetadataSubtype] [int] NULL,
[SourceId] [nvarchar] (36) COLLATE Latin1_General_CI_AI NULL,
[IsDefault] [bit] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_UserApplicationMetadataBase_OwnerIdType] DEFAULT ((8)),
[Dependency] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] ADD CONSTRAINT [cndx_PrimaryKey_UserApplicationMetadataBase] PRIMARY KEY CLUSTERED  ([UserApplicationMetadataId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_modifiedon] ON [dbo].[UserApplicationMetadataBase] ([ModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserApplicationMetadataBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_UserApplicationMetadataBase_sourceid] ON [dbo].[UserApplicationMetadataBase] ([SourceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] ADD CONSTRAINT [business_unit_userapplicationmetadata] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserApplicationMetadataBase] ADD CONSTRAINT [owner_userapplicationmetadata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
