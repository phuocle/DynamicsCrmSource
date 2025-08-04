CREATE TABLE [dbo].[ProcessStageBase] (
    [ProcessId]             UNIQUEIDENTIFIER NOT NULL,
    [StageName]             NVARCHAR (100)   NOT NULL,
    [StageCategory]         INT              NULL,
    [ProcessStageId]        UNIQUEIDENTIFIER NOT NULL,
    [PrimaryEntityTypeCode] INT              NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ClientData]            NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_ProcessStage] PRIMARY KEY CLUSTERED ([ProcessStageId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProcessStageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_ProcessStage_ProcessId]
    ON [dbo].[ProcessStageBase]([ProcessId] ASC) WITH (FILLFACTOR = 80);

