CREATE TABLE [dbo].[ProcessStageBase] (
    [ClientData]            NVARCHAR (MAX)   NULL,
    [StageName]             NVARCHAR (100)   NOT NULL,
    [StageCategory]         INT              NULL,
    [ProcessStageId]        UNIQUEIDENTIFIER NOT NULL,
    [PrimaryEntityTypeCode] INT              NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ProcessId]             UNIQUEIDENTIFIER NOT NULL,
    [Connector]             NVARCHAR (100)   NULL,
    [OperationId]           NVARCHAR (100)   NULL,
    [IsTrigger]             BIT              NULL,
    [OperationType]         INT              NULL,
    [OperationKind]         INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ProcessStage] PRIMARY KEY CLUSTERED ([ProcessStageId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ProcessStageBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ProcessStageBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ProcessStageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_ProcessStage_ProcessId]
    ON [dbo].[ProcessStageBase]([ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_StageName]
    ON [dbo].[ProcessStageBase]([StageName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

