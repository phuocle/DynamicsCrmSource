CREATE TABLE [dbo].[BusinessDataLocalizedLabelBase] (
    [Label]                        NVARCHAR (MAX)   NOT NULL,
    [ObjectColumnNumber]           INT              NOT NULL,
    [BusinessDataLocalizedLabelId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [LanguageId]                   INT              NOT NULL,
    [ObjectId]                     UNIQUEIDENTIFIER NULL,
    [ObjectColumnName]             NVARCHAR (128)   NOT NULL,
    [ObjectIdTypeCode]             INT              NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_BusinessDataLocalizedLabelId] PRIMARY KEY NONCLUSTERED ([BusinessDataLocalizedLabelId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_BusinessDataLocalizedLabel]
    ON [dbo].[BusinessDataLocalizedLabelBase]([ObjectId] ASC, [ObjectIdTypeCode] ASC, [ObjectColumnNumber] ASC, [LanguageId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessDataLocalizedLabelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

