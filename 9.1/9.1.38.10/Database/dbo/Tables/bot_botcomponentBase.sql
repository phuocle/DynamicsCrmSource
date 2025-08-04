CREATE TABLE [dbo].[bot_botcomponentBase] (
    [bot_botcomponentId]   UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [botid]                UNIQUEIDENTIFIER NOT NULL,
    [botcomponentid]       UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_bot_botcomponentBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_bot_botcomponentBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [ComponentState]       INT              CONSTRAINT [DF_bot_botcomponentBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_bot_botcomponentBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_bot_botcomponentBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_bot_botcomponentBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_bot_botcomponent] PRIMARY KEY CLUSTERED ([bot_botcomponentId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [bot_botcomponentOne] FOREIGN KEY ([botid]) REFERENCES [dbo].[botBaseIds] ([botId]),
    CONSTRAINT [bot_botcomponentTwo] FOREIGN KEY ([botcomponentid]) REFERENCES [dbo].[botcomponentBaseIds] ([botcomponentId]),
    CONSTRAINT [UQ_bot_botcomponentBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[bot_botcomponentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_bot_botcomponent]
    ON [dbo].[bot_botcomponentBase]([botid] ASC, [botcomponentid] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_botcomponentid]
    ON [dbo].[bot_botcomponentBase]([botcomponentid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_solutionid]
    ON [dbo].[bot_botcomponentBase]([SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[bot_botcomponentBase]([bot_botcomponentId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

