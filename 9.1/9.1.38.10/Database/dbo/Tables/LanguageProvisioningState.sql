CREATE TABLE [dbo].[LanguageProvisioningState] (
    [SolutionUniqueName]          NVARCHAR (256)   NOT NULL,
    [ApplicationVersion]          NVARCHAR (256)   NOT NULL,
    [LanguageId]                  INT              NOT NULL,
    [SolutionFileVersion]         NVARCHAR (256)   NOT NULL,
    [ProvisioningStage]           INT              NOT NULL,
    [LanguageProvisioningStateId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_LanguageProvisioningState] PRIMARY KEY CLUSTERED ([LanguageProvisioningStateId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[LanguageProvisioningState] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_states_for_LanguageProvisioningState]
    ON [dbo].[LanguageProvisioningState]([SolutionUniqueName] ASC, [SolutionFileVersion] ASC, [ApplicationVersion] ASC, [LanguageId] ASC, [ProvisioningStage] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

