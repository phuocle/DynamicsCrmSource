USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[WorkflowLogBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkflowLogBase](
	[AsyncOperationId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NOT NULL,
	[CompletedOn] [datetime] NULL,
	[WorkflowLogId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Message] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StageName] [nvarchar](256) NULL,
	[CreatedOn] [datetime] NULL,
	[StepName] [nvarchar](160) NULL,
	[ModifiedOn] [datetime] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[Status] [int] NOT NULL,
	[ErrorCode] [int] NULL,
	[ActivityName] [nvarchar](160) NULL,
	[RegardingObjectIdName] [nvarchar](256) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](160) NULL,
	[InteractionActivityResult] [nvarchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ChildWorkflowInstanceId] [uniqueidentifier] NULL,
	[ChildWorkflowInstanceObjectTypeCode] [int] NULL,
	[AsyncOperationIdName] [nvarchar](4000) NULL,
	[ChildWorkflowInstanceIdName] [nvarchar](4000) NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[StartedOn] [datetime] NULL,
	[Duration]  AS ([dbo].[fn_UDF_f9af0a63aef347cfaeaef33121133b45]([StartedOn],[CompletedOn])),
 CONSTRAINT [cndx_PrimaryKey_WorkflowLog] PRIMARY KEY CLUSTERED 
(
	[WorkflowLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_for_cascaderelationship_lk_workflowlog_asyncoperations]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lk_workflowlog_asyncoperations] ON [dbo].[WorkflowLogBase]
(
	[AsyncOperationId] ASC,
	[ObjectTypeCode] ASC
)
INCLUDE ( 	[Status]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowLogBase] ADD  CONSTRAINT [DF_WorkflowLogBase_ObjectTypeCode]  DEFAULT ((4700)) FOR [ObjectTypeCode]
GO
