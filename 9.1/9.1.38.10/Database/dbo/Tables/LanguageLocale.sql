CREATE TABLE [dbo].[LanguageLocale] (
    [LocaleId]         INT              NOT NULL,
    [OrganizationId]   UNIQUEIDENTIFIER NOT NULL,
    [statecode]        INT              NOT NULL,
    [Name]             NVARCHAR (256)   NOT NULL,
    [VersionNumber]    ROWVERSION       NULL,
    [LanguageLocaleId] UNIQUEIDENTIFIER NOT NULL,
    [Language]         NVARCHAR (256)   NOT NULL,
    [statuscode]       INT              NULL,
    [Code]             NVARCHAR (256)   NOT NULL,
    [Region]           NVARCHAR (256)   NULL,
    CONSTRAINT [PK_LanguageLocaleBase] PRIMARY KEY CLUSTERED ([LanguageLocaleId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[LanguageLocale] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LanguageLocale]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_code]
    ON [dbo].[LanguageLocale]([Code] ASC) WITH (FILLFACTOR = 80);

