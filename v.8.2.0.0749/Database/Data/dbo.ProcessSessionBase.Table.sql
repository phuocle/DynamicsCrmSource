USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ProcessSessionBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ProcessSessionBase](
	[ExecutedBy] [uniqueidentifier] NULL,
	[ErrorCode] [int] NULL,
	[ExecutedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Comments] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ActivityName] [nvarchar](256) NULL,
	[ProcessSessionId] [uniqueidentifier] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[StartedOn] [datetime] NULL,
	[CompletedOn] [datetime] NULL,
	[StatusCode] [int] NULL,
	[NextLinkedSessionId] [uniqueidentifier] NULL,
	[Name] [nvarchar](256) NULL,
	[OriginatingSessionId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[PreviousLinkedSessionId] [uniqueidentifier] NULL,
	[StartedBy] [uniqueidentifier] NULL,
	[ProtectionKey] [varchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ProcessState] [varchar](max) NULL,
	[StepName] [nvarchar](256) NULL,
	[InputArguments] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[ProcessStageName] [nvarchar](256) NULL,
	[StateCode] [int] NOT NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[CanceledOn] [datetime] NULL,
	[CompletedBy] [uniqueidentifier] NULL,
	[CanceledBy] [uniqueidentifier] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_processsessionid] PRIMARY KEY CLUSTERED 
(
	[ProcessSessionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_processsessionview]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_processsessionview] ON [dbo].[ProcessSessionBase]
(
	[ExecutedOn] ASC,
	[OwnerId] ASC,
	[StatusCode] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_regardingObjectIdRegardingObjectTypeCode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_regardingObjectIdRegardingObjectTypeCode] ON [dbo].[ProcessSessionBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ProcessSessionBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_startedonstartedby]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_startedonstartedby] ON [dbo].[ProcessSessionBase]
(
	[StartedOn] ASC,
	[StartedBy] ASC,
	[RegardingObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProcessSessionBase] ADD  CONSTRAINT [DF_ProcessSessionBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ProcessSessionBase] ADD  CONSTRAINT [DF_ProcessSessionBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ProcessSessionBase]  WITH CHECK ADD  CONSTRAINT [lk_processsession_processid] FOREIGN KEY([ProcessId])
REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId])
GO
ALTER TABLE [dbo].[ProcessSessionBase] CHECK CONSTRAINT [lk_processsession_processid]
GO
ALTER TABLE [dbo].[ProcessSessionBase]  WITH CHECK ADD  CONSTRAINT [owner_processsessions] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ProcessSessionBase] CHECK CONSTRAINT [owner_processsessions]
GO
ALTER TABLE [dbo].[ProcessSessionBase]  WITH CHECK ADD  CONSTRAINT [Owning_businessunit_processsessions] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ProcessSessionBase] CHECK CONSTRAINT [Owning_businessunit_processsessions]
GO
