CREATE TABLE [dbo].[LanguageLocale]
(
[statecode] [int] NOT NULL,
[Code] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[Region] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[LocaleId] [int] NOT NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Language] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[statuscode] [int] NULL,
[LanguageLocaleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LanguageLocale] ADD CONSTRAINT [PK_LanguageLocaleBase] PRIMARY KEY CLUSTERED  ([LanguageLocaleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_code] ON [dbo].[LanguageLocale] ([Code]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LanguageLocale] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
