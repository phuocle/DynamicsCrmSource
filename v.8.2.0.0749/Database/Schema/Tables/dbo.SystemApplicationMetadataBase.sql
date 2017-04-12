CREATE TABLE [dbo].[SystemApplicationMetadataBase]
(
[Version] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[MetadataType] [int] NULL,
[SourceId] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[FormFactor] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[Lcid] [int] NULL,
[AssociatedEntityLogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[SystemApplicationMetadataId] [uniqueidentifier] NOT NULL,
[DisplayName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[State] [int] NULL,
[IsDefault] [bit] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[MetadataSubtype] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Dependency] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SystemApplicationMetadataBase] ADD CONSTRAINT [cndx_PrimaryKey_SystemApplicationMetadataBase] PRIMARY KEY CLUSTERED  ([SystemApplicationMetadataId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_latte] ON [dbo].[SystemApplicationMetadataBase] ([FormFactor]) INCLUDE ([AssociatedEntityLogicalName], [Lcid], [MetadataType], [SourceId], [SystemApplicationMetadataId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_modifiedon] ON [dbo].[SystemApplicationMetadataBase] ([ModifiedOn] DESC) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SystemApplicationMetadataBase_sourceid] ON [dbo].[SystemApplicationMetadataBase] ([SourceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
