CREATE TABLE [dbo].[MailboxStatisticsBase]
(
[ItemsFailed] [int] NULL,
[MailboxProcessStartedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CrmItemsBacklog] [int] NULL,
[MailboxId] [uniqueidentifier] NOT NULL,
[MachineName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[MailboxStatisticsId] [uniqueidentifier] NOT NULL,
[MailboxProcessCompletedOn] [datetime] NULL,
[OperationTypeId] [int] NULL CONSTRAINT [DF_MailboxStatisticsBase_OperationTypeId] DEFAULT ((0)),
[ProcessResult] [bit] NULL CONSTRAINT [DF_MailboxStatisticsBase_ProcessResult] DEFAULT ((0)),
[ItemsProcessed] [int] NULL,
[MailboxProcessScheduledOn] [datetime] NULL,
[IndividualStepDurations] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ScheduledTimeIntervalInMinutes] [int] NULL CONSTRAINT [DF_MailboxStatisticsBase_ScheduledTimeIntervalInMinutes] DEFAULT ((0)),
[AsyncEventId] [uniqueidentifier] NULL CONSTRAINT [DF_MailboxStatisticsBase_AsyncEventId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ProcessTimeIntervalInMinutes] [int] NULL CONSTRAINT [DF_MailboxStatisticsBase_ProcessTimeIntervalInMinutes] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MailboxStatisticsBase] ADD CONSTRAINT [PK_MailboxStatisticsBase] PRIMARY KEY CLUSTERED  ([MailboxStatisticsId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MailboxStatisticsBase_MailboxProcessCompletedOn] ON [dbo].[MailboxStatisticsBase] ([MailboxProcessCompletedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_MailboxStatisticsBase_OperationTypeId] ON [dbo].[MailboxStatisticsBase] ([OperationTypeId]) WHERE ([OperationTypeId]<>(1)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MailboxStatisticsBase_ProcessResult] ON [dbo].[MailboxStatisticsBase] ([ProcessResult]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
