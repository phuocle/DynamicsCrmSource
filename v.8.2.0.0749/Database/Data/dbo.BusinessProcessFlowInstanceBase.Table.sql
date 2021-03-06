USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BusinessProcessFlowInstanceBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BusinessProcessFlowInstanceBase](
	[VersionNumber] [timestamp] NULL,
	[Entity4Id] [uniqueidentifier] NULL,
	[Entity2Id] [uniqueidentifier] NULL,
	[Entity5ObjectTypeCode] [int] NULL,
	[Entity5Id] [uniqueidentifier] NULL,
	[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
	[Entity3Id] [uniqueidentifier] NULL,
	[Entity3ObjectTypeCode] [int] NULL,
	[Entity2ObjectTypeCode] [int] NULL,
	[Entity1ObjectTypeCode] [int] NULL,
	[Entity1Id] [uniqueidentifier] NULL,
	[Entity4ObjectTypeCode] [int] NULL,
	[ProcessId] [uniqueidentifier] NOT NULL,
	[ProcessStageId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[Name] [nvarchar](200) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[CompletedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[ActiveStageStartedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_BusinessProcessFlowInstance] PRIMARY KEY CLUSTERED 
(
	[BusinessProcessFlowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_Entity1_ProcessId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [cndx_Entity1_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase]
(
	[Entity1Id] ASC,
	[Entity1ObjectTypeCode] ASC,
	[ProcessId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_Entity2_ProcessId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [cndx_Entity2_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase]
(
	[ProcessId] ASC,
	[Entity2Id] ASC,
	[Entity2ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_Entity3_ProcessId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [cndx_Entity3_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase]
(
	[ProcessId] ASC,
	[Entity3Id] ASC,
	[Entity3ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_Entity4_ProcessId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [cndx_Entity4_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase]
(
	[ProcessId] ASC,
	[Entity4Id] ASC,
	[Entity4ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_Entity5_ProcessId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [cndx_Entity5_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase]
(
	[ProcessId] ASC,
	[Entity5Id] ASC,
	[Entity5ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessProcessFlowInstanceBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessProcessFlowInstanceBase] ADD  CONSTRAINT [DF_BusinessProcessFlowInstanceBase_BusinessProcessFlowInstanceId]  DEFAULT (newid()) FOR [BusinessProcessFlowInstanceId]
GO
ALTER TABLE [dbo].[BusinessProcessFlowInstanceBase] ADD  CONSTRAINT [DF_BusinessProcessFlowInstanceBase_StatusCode]  DEFAULT ((1)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[BusinessProcessFlowInstanceBase] ADD  CONSTRAINT [DF_BusinessProcessFlowInstanceBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
