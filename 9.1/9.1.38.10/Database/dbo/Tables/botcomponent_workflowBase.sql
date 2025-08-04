CREATE TABLE [dbo].[botcomponent_workflowBase] (
    [botcomponent_workflowId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [botcomponentid]          UNIQUEIDENTIFIER NOT NULL,
    [workflowid]              UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_botcomponent_workflowBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_botcomponent_workflowBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [ComponentState]          INT              CONSTRAINT [DF_botcomponent_workflowBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_botcomponent_workflowBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_botcomponent_workflowBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]          BIT              CONSTRAINT [DF_botcomponent_workflowBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_botcomponent_workflow] PRIMARY KEY CLUSTERED ([botcomponent_workflowId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [botcomponent_workflowOne] FOREIGN KEY ([botcomponentid]) REFERENCES [dbo].[botcomponentBaseIds] ([botcomponentId]),
    CONSTRAINT [botcomponent_workflowTwo] FOREIGN KEY ([workflowid]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId]),
    CONSTRAINT [UQ_botcomponent_workflowBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[botcomponent_workflowBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_botcomponent_workflow]
    ON [dbo].[botcomponent_workflowBase]([botcomponentid] ASC, [workflowid] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_workflowid]
    ON [dbo].[botcomponent_workflowBase]([workflowid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_solutionid]
    ON [dbo].[botcomponent_workflowBase]([SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[botcomponent_workflowBase]([botcomponent_workflowId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

