CREATE TABLE [MetadataSchema].[OrganizationLanguagePack] (
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [LanguageId]               INT              NOT NULL,
    [IsEnabled]                BIT              DEFAULT ((0)) NOT NULL,
    [Version]                  NVARCHAR (19)    NOT NULL,
    [LabelCacheSharingEnabled] BIT              CONSTRAINT [DF_OgLangPack_LabelCacheSharingEnabled] DEFAULT ((0)) NOT NULL
);


GO
ALTER TABLE [MetadataSchema].[OrganizationLanguagePack] SET (LOCK_ESCALATION = DISABLE);

