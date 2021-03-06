USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MailboxStatisticsBase]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MailboxStatisticsBase](
	[ItemsFailed] [int] NULL,
	[MailboxProcessStartedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CrmItemsBacklog] [int] NULL,
	[MailboxId] [uniqueidentifier] NOT NULL,
	[MachineName] [nvarchar](160) NULL,
	[MailboxStatisticsId] [uniqueidentifier] NOT NULL,
	[MailboxProcessCompletedOn] [datetime] NULL,
	[OperationTypeId] [int] NULL,
	[ProcessResult] [bit] NULL,
	[ItemsProcessed] [int] NULL,
	[MailboxProcessScheduledOn] [datetime] NULL,
	[IndividualStepDurations] [nvarchar](160) NULL,
	[ScheduledTimeIntervalInMinutes] [int] NULL,
	[AsyncEventId] [uniqueidentifier] NULL,
	[ProcessTimeIntervalInMinutes] [int] NULL,
 CONSTRAINT [PK_MailboxStatisticsBase] PRIMARY KEY CLUSTERED 
(
	[MailboxStatisticsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_MailboxStatisticsBase_OperationTypeId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_MailboxStatisticsBase_OperationTypeId] ON [dbo].[MailboxStatisticsBase]
(
	[OperationTypeId] ASC
)
WHERE ([OperationTypeId]<>(1))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_MailboxStatisticsBase_MailboxProcessCompletedOn]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_MailboxStatisticsBase_MailboxProcessCompletedOn] ON [dbo].[MailboxStatisticsBase]
(
	[MailboxProcessCompletedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_MailboxStatisticsBase_ProcessResult]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_MailboxStatisticsBase_ProcessResult] ON [dbo].[MailboxStatisticsBase]
(
	[ProcessResult] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxStatisticsBase] ADD  CONSTRAINT [DF_MailboxStatisticsBase_OperationTypeId]  DEFAULT ((0)) FOR [OperationTypeId]
GO
ALTER TABLE [dbo].[MailboxStatisticsBase] ADD  CONSTRAINT [DF_MailboxStatisticsBase_ProcessResult]  DEFAULT ((0)) FOR [ProcessResult]
GO
ALTER TABLE [dbo].[MailboxStatisticsBase] ADD  CONSTRAINT [DF_MailboxStatisticsBase_ScheduledTimeIntervalInMinutes]  DEFAULT ((0)) FOR [ScheduledTimeIntervalInMinutes]
GO
ALTER TABLE [dbo].[MailboxStatisticsBase] ADD  CONSTRAINT [DF_MailboxStatisticsBase_AsyncEventId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [AsyncEventId]
GO
ALTER TABLE [dbo].[MailboxStatisticsBase] ADD  CONSTRAINT [DF_MailboxStatisticsBase_ProcessTimeIntervalInMinutes]  DEFAULT ((0)) FOR [ProcessTimeIntervalInMinutes]
GO
