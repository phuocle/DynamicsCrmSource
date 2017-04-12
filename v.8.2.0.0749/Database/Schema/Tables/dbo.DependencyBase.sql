CREATE TABLE [dbo].[DependencyBase]
(
[DependencyId] [uniqueidentifier] NOT NULL,
[DependentComponentNodeId] [uniqueidentifier] NULL,
[DependencyType] [int] NOT NULL CONSTRAINT [DF_DependencyBase_DependencyType] DEFAULT ((0)),
[RequiredComponentNodeId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DependencyBase] ADD CONSTRAINT [cndx_Unique_Dependency] PRIMARY KEY CLUSTERED  ([DependencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_DependencyType] ON [dbo].[DependencyBase] ([DependencyType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Descendent] ON [dbo].[DependencyBase] ([DependentComponentNodeId]) INCLUDE ([DependencyId]) WHERE ([DependentComponentNodeId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Ancestor] ON [dbo].[DependencyBase] ([RequiredComponentNodeId]) INCLUDE ([DependencyId]) WHERE ([RequiredComponentNodeId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueDependencyNodes] ON [dbo].[DependencyBase] ([RequiredComponentNodeId], [DependentComponentNodeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DependencyBase] ADD CONSTRAINT [dependencynode_ancestor_dependency] FOREIGN KEY ([RequiredComponentNodeId]) REFERENCES [dbo].[DependencyNodeBase] ([DependencyNodeId])
GO
ALTER TABLE [dbo].[DependencyBase] ADD CONSTRAINT [dependencynode_descendent_dependency] FOREIGN KEY ([DependentComponentNodeId]) REFERENCES [dbo].[DependencyNodeBase] ([DependencyNodeId])
GO
