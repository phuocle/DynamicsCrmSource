CREATE TABLE [dbo].[SystemApplicationMetadataChild]
(
[Id] [uniqueidentifier] NOT NULL,
[MetadataType] [int] NULL,
[FormFactor] [int] NULL,
[SourceId] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[Lcid] [int] NULL,
[AssociatedEntityLogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[ChildMetadataType] [int] NULL,
[ChildSourceId] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[ChildAssociatedEntityLogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[SystemApplicationMetadataId] [uniqueidentifier] NULL,
[SystemApplicationMetadataChildId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemApplicationMetadataChild] ADD CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataChild] PRIMARY KEY CLUSTERED  ([Id]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_latte] ON [dbo].[SystemApplicationMetadataChild] ([FormFactor], [Lcid], [SystemApplicationMetadataId]) INCLUDE ([AssociatedEntityLogicalName], [ChildAssociatedEntityLogicalName], [ChildMetadataType], [ChildSourceId], [Id], [MetadataType], [SourceId]) ON [PRIMARY]
GO
