CREATE TABLE [dbo].[EntityImageConfigBase] (
    [EntityImageConfigId]     UNIQUEIDENTIFIER NOT NULL,
    [PrimaryImageAttribute]   NVARCHAR (128)   NOT NULL,
    [ParentEntityLogicalName] NVARCHAR (128)   NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ComponentIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_EntityImageConfigBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_EntityImageConfigBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_EntityImageConfigBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_EntityImageConfigBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_EntityImageConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_EntityImageConfigBase] PRIMARY KEY CLUSTERED ([EntityImageConfigId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [ndx_Entity_Name] UNIQUE NONCLUSTERED ([ParentEntityLogicalName] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_EntityImageConfigBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);

