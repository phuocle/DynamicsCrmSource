USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RollupJobBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RollupJobBase](
	[RegardingObjectId] [uniqueidentifier] NULL,
	[PostponeUntil] [datetime] NULL,
	[SourceEntityTypeCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[RollupJobId] [bigint] IDENTITY(1,1) NOT NULL,
	[RecordCreatedOn] [datetime] NULL,
	[StateCode] [int] NULL,
	[DepthProcessed] [int] NULL,
	[RollupPropertiesId] [uniqueidentifier] NOT NULL,
	[RetryCount] [int] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [ndx_PrimaryKey_RollupJob] PRIMARY KEY CLUSTERED 
(
	[RollupJobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_RollupId_UpdateLastCalculated]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RollupId_UpdateLastCalculated] ON [dbo].[RollupJobBase]
(
	[RollupPropertiesId] ASC,
	[RecordCreatedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RollupJob_Dequeue]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RollupJob_Dequeue] ON [dbo].[RollupJobBase]
(
	[SourceEntityTypeCode] ASC,
	[StateCode] ASC,
	[RetryCount] ASC,
	[RollupJobId] ASC
)
INCLUDE ( 	[RollupPropertiesId],
	[PostponeUntil]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RollupJob_FindNearestPostponeTime]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RollupJob_FindNearestPostponeTime] ON [dbo].[RollupJobBase]
(
	[SourceEntityTypeCode] ASC,
	[StateCode] ASC,
	[RetryCount] ASC,
	[PostponeUntil] ASC
)
INCLUDE ( 	[RollupPropertiesId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RollupJobBase] ADD  CONSTRAINT [DF_RollupJobBase_StatusCode]  DEFAULT ((0)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[RollupJobBase] ADD  CONSTRAINT [DF_RollupJobBase_RecordCreatedOn]  DEFAULT (getutcdate()) FOR [RecordCreatedOn]
GO
ALTER TABLE [dbo].[RollupJobBase] ADD  CONSTRAINT [DF_RollupJobBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[RollupJobBase] ADD  CONSTRAINT [DF_RollupJobBase_RetryCount]  DEFAULT ((0)) FOR [RetryCount]
GO
