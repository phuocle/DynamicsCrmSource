CREATE TABLE [MetadataSchema].[OrganizationLanguagePack]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[LanguageId] [int] NOT NULL,
[IsEnabled] [bit] NOT NULL CONSTRAINT [DF__Organizat__IsEna__2FE4F47A] DEFAULT ((0)),
[Version] [nvarchar] (19) COLLATE Latin1_General_CI_AI NOT NULL,
[LabelCacheSharingEnabled] [bit] NOT NULL CONSTRAINT [DF_OgLangPack_LabelCacheSharingEnabled] DEFAULT ((0))
) ON [PRIMARY]
GO
