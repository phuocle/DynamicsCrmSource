CREATE TABLE [dbo].[MetadataDifference] (
    [CreatedOn]               DATETIME         NULL,
    [IntroducedVersionString] NVARCHAR (48)    NULL,
    [ModifiedOn]              DATETIME         NULL,
    [DifferenceXml]           NVARCHAR (MAX)   NOT NULL,
    [MetadataDifferenceId]    UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER NOT NULL,
    [IntroducedVersion]       FLOAT (53)       NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_MetadataDifference] PRIMARY KEY CLUSTERED ([MetadataDifferenceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_VersionNumber]
    ON [dbo].[MetadataDifference]([IntroducedVersion] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 80);

