CREATE TABLE [dbo].[PersonalDocumentTemplateBase]
(
[Status] [bit] NULL CONSTRAINT [DF_PersonalDocumentTemplateBase_Status] DEFAULT ((0)),
[AssociatedEntityTypeCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[Content] [varchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ClientData] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOn] [datetime] NULL,
[DocumentType] [int] NOT NULL,
[LanguageCode] [int] NOT NULL CONSTRAINT [DF_PersonalDocumentTemplateBase_LanguageCode] DEFAULT ((1033)),
[PersonalDocumentTemplateId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[PersonalDocumentTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_PersonalDocumentTemplate] PRIMARY KEY CLUSTERED  ([PersonalDocumentTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PersonalDocumentTemplateBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PersonalDocumentTemplateBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
