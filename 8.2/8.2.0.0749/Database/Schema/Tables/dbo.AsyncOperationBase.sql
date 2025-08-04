CREATE TABLE [dbo].[AsyncOperationBase]
(
[MessageName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[Depth] [int] NOT NULL,
[PrimaryEntityType] [int] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[WorkflowStageName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[OperationType] [int] NULL,
[DependencyToken] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[RecurrencePattern] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[PostponeUntil] [datetime] NULL,
[WorkflowState] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NOT NULL,
[IsWaitingForEvent] [bit] NULL,
[CreatedBy] [uniqueidentifier] NOT NULL,
[ErrorCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NOT NULL,
[CorrelationId] [uniqueidentifier] NOT NULL,
[RecurrenceStartTime] [datetime] NULL,
[StatusCode] [int] NULL,
[AsyncOperationId] [uniqueidentifier] NOT NULL,
[Sequence] [bigint] NOT NULL IDENTITY(1, 1),
[RequestId] [uniqueidentifier] NULL,
[WorkflowIsBlocked] [bit] NULL,
[ModifiedOn] [datetime] NULL,
[Message] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StartedOn] [datetime] NULL,
[HostId] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[WorkflowActivationId] [uniqueidentifier] NULL,
[CompletedOn] [datetime] NULL,
[CorrelationUpdatedTime] [datetime] NOT NULL CONSTRAINT [DF_AsyncOperationBase_CorrelationUpdatedTime] DEFAULT (getutcdate()),
[UTCConversionTimeZoneCode] [int] NULL,
[RetryCount] [int] NULL,
[CreatedOn] [datetime] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[FriendlyMessage] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ExecutionTimeSpan] [float] NOT NULL CONSTRAINT [DF_AsyncOperationBase_ExecutionTimeSpan] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwningExtensionId] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AsyncOperationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwningExtensionIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwningExtensionTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_AsyncOperationBase_OwnerIdType] DEFAULT ((8)),
[Subtype] [int] NULL CONSTRAINT [DF_AsyncOperationBase_Subtype] DEFAULT ((1)),
[ParentPluginExecutionId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AsyncOperationBase] ADD CONSTRAINT [cndx_PrimaryKey_AsyncOperation] PRIMARY KEY CLUSTERED  ([AsyncOperationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_StateStatus_AsyncOperation] ON [dbo].[AsyncOperationBase] ([AsyncOperationId], [StateCode]) INCLUDE ([CreatedBy], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SpecialTransitions_AsyncOperation] ON [dbo].[AsyncOperationBase] ([HostId], [StateCode], [StatusCode]) INCLUDE ([AsyncOperationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[AsyncOperationBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OperationType_StartedOn_AsyncOperation] ON [dbo].[AsyncOperationBase] ([OperationType], [StartedOn] DESC) INCLUDE ([RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_asyncoperation] ON [dbo].[AsyncOperationBase] ([OwningBusinessUnit]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RecurrenceStateTime_AsyncOperation] ON [dbo].[AsyncOperationBase] ([RecurrenceStartTime], [Name], [StatusCode], [OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_AsyncOperation] ON [dbo].[AsyncOperationBase] ([RegardingObjectId]) INCLUDE ([OperationType], [RegardingObjectTypeCode], [StateCode], [StatusCode]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RequestId_AsyncOperation] ON [dbo].[AsyncOperationBase] ([RequestId]) WHERE ([RequestId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_StartedOn_AsyncOperation] ON [dbo].[AsyncOperationBase] ([StartedOn] DESC) INCLUDE ([RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Cover_AsyncOperation] ON [dbo].[AsyncOperationBase] ([StateCode], [Sequence], [DependencyToken], [PostponeUntil], [Subtype]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lk_asyncoperation_workflowactivationid] ON [dbo].[AsyncOperationBase] ([WorkflowActivationId]) INCLUDE ([OperationType]) WHERE ([WorkflowActivationId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
