CREATE TABLE [dbo].[FilterTemplate]
(
[FetchXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[QueryType] [int] NOT NULL,
[FilterTemplateId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FilterTemplate_FilterTemplateId] DEFAULT (newid()),
[ReturnedTypeCode] [int] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[FilterTemplate] ADD CONSTRAINT [cndx_PrimaryKey_FilterTemplate] PRIMARY KEY CLUSTERED  ([FilterTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
