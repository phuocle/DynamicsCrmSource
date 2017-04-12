CREATE TABLE [dbo].[SolutionComponentBase]
(
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ObjectId] [uniqueidentifier] NULL,
[IsMetadata] [bit] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NULL,
[SolutionComponentId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ComponentType] [int] NOT NULL CONSTRAINT [DF_SolutionComponentBase_ComponentType] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[RootComponentBehavior] [int] NULL,
[RootSolutionComponentId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SolutionComponentBase] ADD CONSTRAINT [cndx_PrimaryKey_SolutionComponent] PRIMARY KEY CLUSTERED  ([SolutionComponentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RootSolutionComponentId] ON [dbo].[SolutionComponentBase] ([RootSolutionComponentId]) WHERE ([RootSolutionComponentId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Solution_Component] ON [dbo].[SolutionComponentBase] ([SolutionId], [ComponentType], [ObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SolutionComponentBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SolutionComponentBase] ADD CONSTRAINT [solution_solutioncomponent] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
GO
ALTER TABLE [dbo].[SolutionComponentBase] ADD CONSTRAINT [solutioncomponent_parent_solutioncomponent] FOREIGN KEY ([RootSolutionComponentId]) REFERENCES [dbo].[SolutionComponentBase] ([SolutionComponentId])
GO
