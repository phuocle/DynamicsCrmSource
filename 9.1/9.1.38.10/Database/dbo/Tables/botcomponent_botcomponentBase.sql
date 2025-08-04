CREATE TABLE [dbo].[botcomponent_botcomponentBase] (
    [botcomponent_botcomponentId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [botcomponentidOne]           UNIQUEIDENTIFIER NOT NULL,
    [botcomponentidTwo]           UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_botcomponent_botcomponentBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_botcomponent_botcomponentBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [ComponentState]              INT              CONSTRAINT [DF_botcomponent_botcomponentBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]           UNIQUEIDENTIFIER CONSTRAINT [DF_botcomponent_botcomponentBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_botcomponent_botcomponentBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_botcomponent_botcomponentBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_botcomponent_botcomponent] PRIMARY KEY CLUSTERED ([botcomponent_botcomponentId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [botcomponent_botcomponentOne] FOREIGN KEY ([botcomponentidOne]) REFERENCES [dbo].[botcomponentBaseIds] ([botcomponentId]),
    CONSTRAINT [botcomponent_botcomponentTwo] FOREIGN KEY ([botcomponentidTwo]) REFERENCES [dbo].[botcomponentBaseIds] ([botcomponentId]),
    CONSTRAINT [UQ_botcomponent_botcomponentBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[botcomponent_botcomponentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_botcomponent_botcomponent]
    ON [dbo].[botcomponent_botcomponentBase]([botcomponentidOne] ASC, [botcomponentidTwo] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_botcomponentidtwo]
    ON [dbo].[botcomponent_botcomponentBase]([botcomponentidTwo] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_solutionid]
    ON [dbo].[botcomponent_botcomponentBase]([SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[botcomponent_botcomponentBase]([botcomponent_botcomponentId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

