CREATE TABLE [dbo].[BusinessDataLocalizedLabelBase] (
    [Label]                        NVARCHAR (MAX)   NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ObjectColumnNumber]           INT              NOT NULL,
    [BusinessDataLocalizedLabelId] UNIQUEIDENTIFIER NOT NULL,
    [LanguageId]                   INT              NOT NULL,
    [ObjectId]                     UNIQUEIDENTIFIER NULL,
    [ObjectColumnName]             NVARCHAR (128)   NOT NULL,
    [ObjectIdTypeCode]             INT              NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_BusinessDataLocalizedLabelId] PRIMARY KEY NONCLUSTERED ([BusinessDataLocalizedLabelId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[BusinessDataLocalizedLabelBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[BusinessDataLocalizedLabelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_BusinessDataLocalizedLabel]
    ON [dbo].[BusinessDataLocalizedLabelBase]([ObjectId] ASC, [ObjectIdTypeCode] ASC, [ObjectColumnNumber] ASC, [LanguageId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessDataLocalizedLabelBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

