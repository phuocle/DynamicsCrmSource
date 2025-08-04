CREATE TABLE [dbo].[DisplayStringMapBase] (
    [DisplayStringId]          UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]           INT              NOT NULL,
    [ComponentState]           INT              CONSTRAINT [DF_DisplayStringMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]               UNIQUEIDENTIFIER CONSTRAINT [DF_DisplayStringMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]     UNIQUEIDENTIFIER NULL,
    [DisplayStringMapId]       UNIQUEIDENTIFIER NOT NULL,
    [DisplayStringMapIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_DisplayStringMapBase_DisplayStringMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                BIT              CONSTRAINT [DF_DisplayStringMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]            DATETIME         CONSTRAINT [DF_DisplayStringMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_DisplayStringMap] PRIMARY KEY CLUSTERED ([DisplayStringMapId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_DisplayStringMapBase_DisplayStringMapIdUnique] UNIQUE NONCLUSTERED ([DisplayStringMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[DisplayStringMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_DisplayString_DisplayStringMaps]
    ON [dbo].[DisplayStringMapBase]([DisplayStringId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[DisplayStringMapBase]([DisplayStringMapId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

