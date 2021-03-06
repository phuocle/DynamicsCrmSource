USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PluginTraceLogBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PluginTraceLogBase](
	[PerformanceConstructorDuration] [int] NULL,
	[PluginTraceLogId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[IsSystemCreated] [bit] NOT NULL,
	[PerformanceConstructorStartTime] [datetime] NULL,
	[PerformanceExecutionDuration] [int] NULL,
	[Configuration] [nvarchar](max) NULL,
	[PerformanceExecutionStartTime] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[PersistenceKey] [uniqueidentifier] NULL,
	[ExceptionDetails] [nvarchar](max) NULL,
	[MessageBlock] [nvarchar](max) NULL,
	[Profile] [nvarchar](max) NULL,
	[PrimaryEntity] [nvarchar](500) NULL,
	[RequestId] [uniqueidentifier] NULL,
	[CorrelationId] [uniqueidentifier] NULL,
	[OperationType] [int] NULL,
	[MessageName] [nvarchar](1024) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Depth] [int] NULL,
	[SecureConfiguration] [nvarchar](max) NULL,
	[Mode] [int] NULL,
	[PluginStepId] [uniqueidentifier] NULL,
	[TypeName] [nvarchar](1024) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_CreatedOn]    Script Date: 4/10/2017 9:59:21 PM ******/
CREATE UNIQUE CLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[PluginTraceLogBase]
(
	[CreatedOn] ASC,
	[PluginTraceLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [PK_PluginTraceLogBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PluginTraceLogBase] ADD  CONSTRAINT [PK_PluginTraceLogBase] PRIMARY KEY NONCLUSTERED 
(
	[PluginTraceLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Messagename]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Messagename] ON [dbo].[PluginTraceLogBase]
(
	[MessageName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Operationtype]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Operationtype] ON [dbo].[PluginTraceLogBase]
(
	[OperationType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PerformanceExecutionStartTime]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_PerformanceExecutionStartTime] ON [dbo].[PluginTraceLogBase]
(
	[PerformanceExecutionStartTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Typename]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Typename] ON [dbo].[PluginTraceLogBase]
(
	[TypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PluginTraceLogBase] ADD  CONSTRAINT [DF_PluginTraceLogBase_IsSystemCreated]  DEFAULT ((0)) FOR [IsSystemCreated]
GO
