CREATE TABLE [MetadataSchema].[AttributeTypes]
(
[AttributeTypeId] [uniqueidentifier] NOT NULL ROWGUIDCOL,
[Description] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[SQLServerType] [int] NULL,
[Quoted] [bit] NOT NULL,
[XmlType] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[IntroducedVersion] [nvarchar] (24) COLLATE Latin1_General_CI_AI NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[AttributeTypes] ADD CONSTRAINT [XPKAttributeTypes] PRIMARY KEY CLUSTERED  ([AttributeTypeId]) ON [PRIMARY]
GO
