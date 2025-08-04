CREATE TABLE [dbo].[FilterTemplate] (
    [FetchXml]         NVARCHAR (MAX)   NULL,
    [Description]      NVARCHAR (MAX)   NULL,
    [QueryType]        INT              NOT NULL,
    [FilterTemplateId] UNIQUEIDENTIFIER CONSTRAINT [DF_FilterTemplate_FilterTemplateId] DEFAULT (newid()) NOT NULL,
    [ReturnedTypeCode] INT              NOT NULL,
    [Name]             NVARCHAR (100)   NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_FilterTemplate] PRIMARY KEY CLUSTERED ([FilterTemplateId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[FilterTemplate]', @OptionName = N'text in row', @OptionValue = N'7000';

