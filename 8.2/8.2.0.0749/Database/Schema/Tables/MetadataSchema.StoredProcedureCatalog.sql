CREATE TABLE [MetadataSchema].[StoredProcedureCatalog]
(
[StoredProcedureId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (255) COLLATE Latin1_General_CI_AI NOT NULL,
[DatabaseName] [nvarchar] (255) COLLATE Latin1_General_CI_AI NOT NULL,
[TargetMask] [int] NULL,
[Description] [ntext] COLLATE Latin1_General_CI_AI NULL,
[InstallationSequence] [int] NOT NULL CONSTRAINT [DF__StoredPro__Insta__79DF8032] DEFAULT ((1))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[StoredProcedureCatalog] ADD CONSTRAINT [XPKStoredProcedureCatalog] PRIMARY KEY CLUSTERED  ([StoredProcedureId]) ON [PRIMARY]
GO
