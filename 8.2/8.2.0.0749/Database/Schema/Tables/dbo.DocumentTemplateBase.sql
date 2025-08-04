CREATE TABLE [dbo].[DocumentTemplateBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[Content] [varchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[AssociatedEntityTypeCode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[DocumentType] [int] NOT NULL,
[DocumentTemplateId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ClientData] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LanguageCode] [int] NOT NULL CONSTRAINT [DF_DocumentTemplateBase_LanguageCode] DEFAULT ((1033)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Status] [bit] NULL CONSTRAINT [DF_DocumentTemplateBase_Status] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[DocumentTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_DocumentTemplate] PRIMARY KEY CLUSTERED  ([DocumentTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Document_Type] ON [dbo].[DocumentTemplateBase] ([DocumentType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Document_Name] ON [dbo].[DocumentTemplateBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DocumentTemplateBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
