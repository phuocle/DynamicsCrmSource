CREATE TABLE [dbo].[ProcessTriggerBase] (
    [ControlType]            INT              NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_ProcessTriggerBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [PrimaryEntityTypeCode]  INT              NOT NULL,
    [FormId]                 UNIQUEIDENTIFIER NULL,
    [IsCustomizable]         BIT              CONSTRAINT [DF_ProcessTriggerBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_ProcessTriggerBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ProcessTriggerIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ProcessTriggerBase_ProcessTriggerIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ControlName]            NVARCHAR (100)   NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [Scope]                  INT              CONSTRAINT [DF_ProcessTriggerBase_Scope] DEFAULT ((1)) NOT NULL,
    [MethodId]               UNIQUEIDENTIFIER NULL,
    [Event]                  NVARCHAR (100)   NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ComponentState]         INT              CONSTRAINT [DF_ProcessTriggerBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ProcessId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [PipelineStage]          INT              CONSTRAINT [DF_ProcessTriggerBase_PipelineStage] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [ProcessTriggerId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_ProcessTriggerBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ProcessTrigger] PRIMARY KEY CLUSTERED ([ProcessTriggerId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ProcessTriggerBase_ProcessTrigerIdUnique] UNIQUE NONCLUSTERED ([ProcessTriggerIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ProcessTriggerBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[ProcessTriggerBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_process_processtrigger]
    ON [dbo].[ProcessTriggerBase]([ProcessId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ProcessTriggerBase]([ProcessTriggerId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

