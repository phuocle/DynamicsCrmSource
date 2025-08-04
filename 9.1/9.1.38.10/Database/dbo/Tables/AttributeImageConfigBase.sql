CREATE TABLE [dbo].[AttributeImageConfigBase] (
    [AttributeImageConfigId]  UNIQUEIDENTIFIER NOT NULL,
    [AttributeLogicalName]    NVARCHAR (128)   NOT NULL,
    [ParentEntityLogicalName] NVARCHAR (128)   NOT NULL,
    [CanStoreFullImage]       BIT              NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ComponentIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_AttributeImageConfigBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_AttributeImageConfigBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_AttributeImageConfigBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_AttributeImageConfigBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_AttributeImageConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_AttributeImageConfigBase] PRIMARY KEY CLUSTERED ([AttributeImageConfigId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [ndx_EntityAttribute_Name] UNIQUE NONCLUSTERED ([ParentEntityLogicalName] ASC, [AttributeLogicalName] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_AttributeImageConfigBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);

