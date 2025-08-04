CREATE TABLE [MetadataSchema].[OrganizationLanguagePack] (
    [OrganizationId] UNIQUEIDENTIFIER NOT NULL,
    [LanguageId]     INT              NOT NULL,
    [IsEnabled]      BIT              DEFAULT ((0)) NOT NULL,
    [Version]        NVARCHAR (19)    NOT NULL
);

