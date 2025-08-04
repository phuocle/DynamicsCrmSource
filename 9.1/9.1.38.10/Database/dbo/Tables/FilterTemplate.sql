CREATE TABLE [dbo].[FilterTemplate] (
    [FilterTemplateId] UNIQUEIDENTIFIER CONSTRAINT [DF_FilterTemplate_FilterTemplateId] DEFAULT (newid()) NOT NULL,
    [Name]             NVARCHAR (100)   NOT NULL,
    [FetchXml]         NVARCHAR (MAX)   NOT NULL,
    [ReturnedTypeCode] INT              NOT NULL,
    [QueryType]        INT              NOT NULL,
    [Description]      NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_FilterTemplate] PRIMARY KEY CLUSTERED ([FilterTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[FilterTemplate]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[FilterTemplate] SET (LOCK_ESCALATION = DISABLE);

