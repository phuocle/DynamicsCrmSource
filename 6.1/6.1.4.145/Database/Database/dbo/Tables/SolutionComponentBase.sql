CREATE TABLE [dbo].[SolutionComponentBase] (
    [ModifiedOn]          DATETIME         NULL,
    [CreatedBy]           UNIQUEIDENTIFIER NULL,
    [ObjectId]            UNIQUEIDENTIFIER NULL,
    [IsMetadata]          BIT              NULL,
    [ModifiedBy]          UNIQUEIDENTIFIER NULL,
    [SolutionId]          UNIQUEIDENTIFIER NULL,
    [SolutionComponentId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]           DATETIME         NULL,
    [VersionNumber]       ROWVERSION       NULL,
    [ComponentType]       INT              CONSTRAINT [DF_SolutionComponentBase_ComponentType] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SolutionComponent] PRIMARY KEY CLUSTERED ([SolutionComponentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_solutioncomponent] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Solution_Component]
    ON [dbo].[SolutionComponentBase]([SolutionId] ASC, [ComponentType] ASC, [ObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SolutionComponentBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

