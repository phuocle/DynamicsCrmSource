CREATE TABLE [dbo].[EntityMapBase] (
    [VersionNumber]        ROWVERSION       NULL,
    [ComponentState]       INT              CONSTRAINT [DF_EntityMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_EntityMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [EntityMapId]          UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_EntityMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [SourceEntityName]     NVARCHAR (128)   NOT NULL,
    [EntityMapIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_EntityMapBase_EntityMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOn]           DATETIME         NULL,
    [TargetEntityName]     NVARCHAR (128)   NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_EntityMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_EntityMap] PRIMARY KEY CLUSTERED ([EntityMapId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_EntityMapBase_EntityMapIdUnique] UNIQUE NONCLUSTERED ([EntityMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[EntityMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntityMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_TargetEntityName]
    ON [dbo].[EntityMapBase]([TargetEntityName] ASC, [EntityMapId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SourceEntityName]
    ON [dbo].[EntityMapBase]([SourceEntityName] ASC, [EntityMapId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[EntityMapBase]([EntityMapId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

