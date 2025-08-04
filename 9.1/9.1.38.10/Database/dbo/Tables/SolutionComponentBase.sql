CREATE TABLE [dbo].[SolutionComponentBase] (
    [ModifiedOn]              DATETIME         NULL,
    [RootSolutionComponentId] UNIQUEIDENTIFIER NULL,
    [ComponentType]           INT              CONSTRAINT [DF_SolutionComponentBase_ComponentType] DEFAULT ((0)) NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [IsMetadata]              BIT              NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [RootComponentBehavior]   INT              NULL,
    [SolutionComponentId]     UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER NULL,
    [ObjectId]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [CreatedOn]               DATETIME         NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SolutionComponent] PRIMARY KEY CLUSTERED ([SolutionComponentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_solutioncomponent] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]),
    CONSTRAINT [solutioncomponent_parent_solutioncomponent] FOREIGN KEY ([RootSolutionComponentId]) REFERENCES [dbo].[SolutionComponentBase] ([SolutionComponentId])
);


GO
ALTER TABLE [dbo].[SolutionComponentBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Solution_Component]
    ON [dbo].[SolutionComponentBase]([SolutionId] ASC, [ComponentType] ASC, [ObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SolutionComponentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_RootSolutionComponentId]
    ON [dbo].[SolutionComponentBase]([RootSolutionComponentId] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_ObjectIdSolutionId]
    ON [dbo].[SolutionComponentBase]([ObjectId] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

