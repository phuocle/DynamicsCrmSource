CREATE TABLE [dbo].[RuntimeDependencyBase] (
    [RequiredComponentNodeId]       NVARCHAR (300)   NULL,
    [DependentComponentType]        INT              NULL,
    [RequiredComponentModifiedTime] DATETIME         NULL,
    [RequiredComponentType]         INT              NULL,
    [DependentComponentNodeId]      UNIQUEIDENTIFIER NULL,
    [IsPublished]                   BIT              CONSTRAINT [DF_RuntimeDependencyBase_IsPublished] DEFAULT ((1)) NOT NULL,
    [CreatedTime]                   DATETIME         NULL,
    [DependencyId]                  UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_Unique_RtDependency] PRIMARY KEY CLUSTERED ([DependencyId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RuntimeDependencyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_RtRequiredComponentType]
    ON [dbo].[RuntimeDependencyBase]([RequiredComponentType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RtDescendent]
    ON [dbo].[RuntimeDependencyBase]([DependentComponentNodeId] ASC, [RequiredComponentNodeId] ASC, [DependentComponentType] ASC, [RequiredComponentType] ASC) WHERE ([DependentComponentNodeId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RtDependentType]
    ON [dbo].[RuntimeDependencyBase]([DependentComponentType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RtDependentTypeIdInfo]
    ON [dbo].[RuntimeDependencyBase]([DependentComponentType] ASC)
    INCLUDE([DependentComponentNodeId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

