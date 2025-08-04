CREATE TABLE [dbo].[AppModuleMetadataDependencyBase] (
    [State]                         INT              NOT NULL,
    [RequiredComponentSubType]      INT              CONSTRAINT [DF_AppModuleMetadataDependencyBase_RequiredComponentSubType] DEFAULT ((-1)) NOT NULL,
    [CreatedOn]                     DATETIME         NOT NULL,
    [RequiredComponentInternalId]   NVARCHAR (300)   NULL,
    [DependentComponentId]          UNIQUEIDENTIFIER NOT NULL,
    [RequiredComponentType]         INT              NOT NULL,
    [AppModuleMetadataDependencyId] UNIQUEIDENTIFIER NOT NULL,
    [RequiredComponentId]           UNIQUEIDENTIFIER NOT NULL,
    [RequiredComponentVersion]      BIGINT           NOT NULL,
    [ModifiedOn]                    DATETIME         NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModuleMetadataDependencyBase] PRIMARY KEY CLUSTERED ([AppModuleMetadataDependencyId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[AppModuleMetadataDependencyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_AppModuleMetadataDependencyBase_Unique]
    ON [dbo].[AppModuleMetadataDependencyBase]([DependentComponentId] ASC, [RequiredComponentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_AppModuleMetadataDependencyBase_dependentcomponentid]
    ON [dbo].[AppModuleMetadataDependencyBase]([DependentComponentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_DependentComponentId]
    ON [dbo].[AppModuleMetadataDependencyBase]([DependentComponentId] ASC)
    INCLUDE([State], [RequiredComponentSubType], [CreatedOn], [RequiredComponentInternalId], [RequiredComponentType], [RequiredComponentId], [RequiredComponentVersion], [ModifiedOn]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

