CREATE TABLE [dbo].[WorkflowBaseIds]
(
[WorkflowId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowBaseIds] ADD CONSTRAINT [PK_WorkflowBaseIds] PRIMARY KEY CLUSTERED  ([WorkflowId]) ON [PRIMARY]
GO
