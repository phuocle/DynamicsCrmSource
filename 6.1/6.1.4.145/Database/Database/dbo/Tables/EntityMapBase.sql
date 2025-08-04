CREATE TABLE [dbo].[EntityMapBase] (
    [TargetEntityName]     NVARCHAR (50)    NOT NULL,
    [EntityMapId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [SourceEntityName]     NVARCHAR (50)    NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ComponentState]       INT              CONSTRAINT [DF_EntityMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_EntityMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_EntityMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [EntityMapIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_EntityMapBase_EntityMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_EntityMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_EntityMap] PRIMARY KEY CLUSTERED ([EntityMapId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_EntityMapBase_EntityMapIdUnique] UNIQUE NONCLUSTERED ([EntityMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EntityMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

