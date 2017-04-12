CREATE TABLE [dbo].[ComplexControlBase]
(
[Type] [int] NULL CONSTRAINT [DF_ComplexControlBase_Type] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ComplexControlId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ComplexControlIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ComplexControlBase_ComplexControlIdUnique] DEFAULT (newid()),
[ComplexControlXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[Version] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ComplexControlBase] ADD CONSTRAINT [cndx_PrimaryKey_ComplexControl] PRIMARY KEY CLUSTERED  ([ComplexControlId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ComplexControlBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
