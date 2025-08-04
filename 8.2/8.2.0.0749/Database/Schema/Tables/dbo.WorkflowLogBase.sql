CREATE TABLE [dbo].[WorkflowLogBase]
(
[AsyncOperationId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NOT NULL,
[CompletedOn] [datetime] NULL,
[WorkflowLogId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Message] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StageName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[StepName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[Status] [int] NOT NULL,
[ErrorCode] [int] NULL,
[ActivityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[InteractionActivityResult] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ChildWorkflowInstanceId] [uniqueidentifier] NULL,
[ChildWorkflowInstanceObjectTypeCode] [int] NULL,
[AsyncOperationIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ChildWorkflowInstanceIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ObjectTypeCode] [int] NOT NULL CONSTRAINT [DF_WorkflowLogBase_ObjectTypeCode] DEFAULT ((4700)),
[StartedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_f9af0a63aef347cfaeaef33121133b45]([StartedOn],[CompletedOn]))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowLogBase] ADD CONSTRAINT [cndx_PrimaryKey_WorkflowLog] PRIMARY KEY CLUSTERED  ([WorkflowLogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lk_workflowlog_asyncoperations] ON [dbo].[WorkflowLogBase] ([AsyncOperationId], [ObjectTypeCode]) INCLUDE ([Status]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
