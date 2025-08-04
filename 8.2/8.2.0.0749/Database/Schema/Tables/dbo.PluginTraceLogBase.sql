CREATE TABLE [dbo].[PluginTraceLogBase]
(
[PerformanceConstructorDuration] [int] NULL,
[PluginTraceLogId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[IsSystemCreated] [bit] NOT NULL CONSTRAINT [DF_PluginTraceLogBase_IsSystemCreated] DEFAULT ((0)),
[PerformanceConstructorStartTime] [datetime] NULL,
[PerformanceExecutionDuration] [int] NULL,
[Configuration] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PerformanceExecutionStartTime] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[PersistenceKey] [uniqueidentifier] NULL,
[ExceptionDetails] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MessageBlock] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Profile] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PrimaryEntity] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[RequestId] [uniqueidentifier] NULL,
[CorrelationId] [uniqueidentifier] NULL,
[OperationType] [int] NULL,
[MessageName] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Depth] [int] NULL,
[SecureConfiguration] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Mode] [int] NULL,
[PluginStepId] [uniqueidentifier] NULL,
[TypeName] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTraceLogBase] ADD CONSTRAINT [PK_PluginTraceLogBase] PRIMARY KEY NONCLUSTERED  ([PluginTraceLogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[PluginTraceLogBase] ([CreatedOn], [PluginTraceLogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Messagename] ON [dbo].[PluginTraceLogBase] ([MessageName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Operationtype] ON [dbo].[PluginTraceLogBase] ([OperationType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_PerformanceExecutionStartTime] ON [dbo].[PluginTraceLogBase] ([PerformanceExecutionStartTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Typename] ON [dbo].[PluginTraceLogBase] ([TypeName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
