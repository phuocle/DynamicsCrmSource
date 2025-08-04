CREATE TABLE [dbo].[FunctionMitigationsToPersistThroughUpgrade] (
    [FunctionName]       NVARCHAR (257) NOT NULL,
    [FunctionType]       NVARCHAR (30)  NOT NULL,
    [OriginalDefinition] NVARCHAR (MAX) NOT NULL,
    [NewDefinition]      NVARCHAR (MAX) NOT NULL,
    [ExpiryDate]         DATE           NOT NULL,
    [CreatedBy]          NVARCHAR (100) NULL,
    [CreatedDateTime]    DATETIME       NULL,
    PRIMARY KEY CLUSTERED ([FunctionName] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[FunctionMitigationsToPersistThroughUpgrade]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[FunctionMitigationsToPersistThroughUpgrade] SET (LOCK_ESCALATION = DISABLE);

