CREATE TABLE [dbo].[WorkflowBaseIds] (
    [WorkflowId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_WorkflowBaseIds] PRIMARY KEY CLUSTERED ([WorkflowId] ASC)
);


GO
ALTER TABLE [dbo].[WorkflowBaseIds] SET (LOCK_ESCALATION = DISABLE);

