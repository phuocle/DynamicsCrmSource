CREATE TABLE [dbo].[MetadataDifference] (
    [IntroducedVersionString] NVARCHAR (48)    NULL,
    [DifferenceXml]           NVARCHAR (MAX)   NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [MetadataDifferenceId]    UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [IntroducedVersion]       FLOAT (53)       NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MetadataDifference] PRIMARY KEY CLUSTERED ([MetadataDifferenceId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MetadataDifference]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MetadataDifference] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_VersionNumber]
    ON [dbo].[MetadataDifference]([IntroducedVersion] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 80);

