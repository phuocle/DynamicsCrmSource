CREATE TABLE [dbo].[ProcessStageBase] (
    [ProcessId]             UNIQUEIDENTIFIER NOT NULL,
    [StageName]             NVARCHAR (100)   NOT NULL,
    [StageCategory]         INT              NULL,
    [ProcessStageId]        UNIQUEIDENTIFIER NOT NULL,
    [PrimaryEntityTypeCode] INT              NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_ProcessStage] PRIMARY KEY CLUSTERED ([ProcessStageId] ASC) WITH (FILLFACTOR = 80)
);

