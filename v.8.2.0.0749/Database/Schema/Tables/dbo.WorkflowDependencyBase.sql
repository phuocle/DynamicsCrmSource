CREATE TABLE [dbo].[WorkflowDependencyBase]
(
[ParameterName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[RelatedEntityName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[RelatedAttributeName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[WorkflowId] [uniqueidentifier] NOT NULL,
[SdkMessageId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[Type] [int] NOT NULL,
[EntityAttributes] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CustomEntityName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DependentEntityName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DependentAttributeName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[WorkflowDependencyId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ParameterType] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowDependencyBase] ADD CONSTRAINT [cndx_PrimaryKey_WorkflowDependency] PRIMARY KEY CLUSTERED  ([WorkflowDependencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_sdkMessageId] ON [dbo].[WorkflowDependencyBase] ([SdkMessageId], [WorkflowId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber] ON [dbo].[WorkflowDependencyBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_workflowId] ON [dbo].[WorkflowDependencyBase] ([WorkflowId], [SdkMessageId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowDependencyBase] ADD CONSTRAINT [workflow_dependencies] FOREIGN KEY ([WorkflowId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId])
GO
