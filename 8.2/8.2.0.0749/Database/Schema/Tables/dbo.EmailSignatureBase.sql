CREATE TABLE [dbo].[EmailSignatureBase]
(
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_EmailSignatureBase_OverwriteTime] DEFAULT ((0)),
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_EmailSignatureBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[PresentationXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Body] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_EmailSignatureBase_IsCustomizable] DEFAULT ((1)),
[ImportSequenceNumber] [int] NULL,
[IsDefault] [bit] NULL CONSTRAINT [DF_EmailSignatureBase_IsDefault] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[LanguageCode] [int] NULL,
[EmailSignatureId] [uniqueidentifier] NOT NULL,
[IsPersonal] [bit] NULL CONSTRAINT [DF_EmailSignatureBase_IsPersonal] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[MimeType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[GenerationTypeCode] [int] NULL CONSTRAINT [DF_EmailSignatureBase_GenerationTypeCode] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_EmailSignatureBase_ComponentState] DEFAULT ((0)),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_EmailSignatureBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD CONSTRAINT [cndx_PrimaryKey_EmailSignature] PRIMARY KEY CLUSTERED  ([EmailSignatureId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[EmailSignatureBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_emailsignatures] ON [dbo].[EmailSignatureBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Title] ON [dbo].[EmailSignatureBase] ([Title], [LanguageCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
