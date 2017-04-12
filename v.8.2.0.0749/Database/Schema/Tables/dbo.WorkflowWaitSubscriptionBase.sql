CREATE TABLE [dbo].[WorkflowWaitSubscriptionBase]
(
[EntityId] [uniqueidentifier] NOT NULL,
[WorkflowWaitSubscriptionId] [uniqueidentifier] NOT NULL,
[AsyncOperationId] [uniqueidentifier] NOT NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[EntityName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[IsModified] [bit] NOT NULL,
[IsDeleted] [bit] NULL,
[WaitOnAttributeList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowWaitSubscriptionBase] ADD CONSTRAINT [cndx_PrimaryKey_WorkflowWaitSubscription] PRIMARY KEY CLUSTERED  ([WorkflowWaitSubscriptionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CascadeRelationship_AsyncOperation_WorkflowWaitSubscription] ON [dbo].[WorkflowWaitSubscriptionBase] ([AsyncOperationId]) INCLUDE ([IsModified]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Modified] ON [dbo].[WorkflowWaitSubscriptionBase] ([EntityId], [EntityName], [AsyncOperationId]) INCLUDE ([IsDeleted], [IsModified], [WaitOnAttributeList]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_IsDeleted] ON [dbo].[WorkflowWaitSubscriptionBase] ([IsDeleted]) INCLUDE ([AsyncOperationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_IsModified] ON [dbo].[WorkflowWaitSubscriptionBase] ([IsModified]) INCLUDE ([AsyncOperationId], [IsDeleted]) WHERE ([IsModified]=(1)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
