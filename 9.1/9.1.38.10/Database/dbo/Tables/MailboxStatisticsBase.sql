CREATE TABLE [dbo].[MailboxStatisticsBase] (
    [ItemsFailed]                    INT              NULL,
    [CrmItemsBacklog]                INT              NULL,
    [OrganizationId]                 UNIQUEIDENTIFIER NOT NULL,
    [IndividualStepDurations]        NVARCHAR (160)   NULL,
    [ScheduledTimeIntervalInMinutes] INT              CONSTRAINT [DF_MailboxStatisticsBase_ScheduledTimeIntervalInMinutes] DEFAULT ((0)) NULL,
    [MailboxProcessStartedOn]        DATETIME         NULL,
    [MachineName]                    NVARCHAR (160)   NULL,
    [MailboxId]                      UNIQUEIDENTIFIER NOT NULL,
    [OperationTypeId]                INT              CONSTRAINT [DF_MailboxStatisticsBase_OperationTypeId] DEFAULT ((0)) NULL,
    [AsyncEventId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_MailboxStatisticsBase_AsyncEventId] DEFAULT ('00000000-0000-0000-0000-000000000000') NULL,
    [ProcessTimeIntervalInMinutes]   INT              CONSTRAINT [DF_MailboxStatisticsBase_ProcessTimeIntervalInMinutes] DEFAULT ((0)) NULL,
    [ProcessResult]                  BIT              CONSTRAINT [DF_MailboxStatisticsBase_ProcessResult] DEFAULT ((0)) NULL,
    [ItemsProcessed]                 INT              NULL,
    [MailboxProcessScheduledOn]      DATETIME         NULL,
    [MailboxProcessCompletedOn]      DATETIME         NULL,
    [MailboxStatisticsId]            UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_MailboxStatisticsBase] PRIMARY KEY CLUSTERED ([MailboxStatisticsId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[MailboxStatisticsBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_MailboxStatisticsBase_MailboxProcessCompletedOn]
    ON [dbo].[MailboxStatisticsBase]([MailboxProcessCompletedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_MailboxStatisticsBase_ProcessResult]
    ON [dbo].[MailboxStatisticsBase]([ProcessResult] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_MailboxStatisticsBase_OperationTypeId]
    ON [dbo].[MailboxStatisticsBase]([OperationTypeId] ASC) WHERE ([OperationTypeId]<>(1)) WITH (FILLFACTOR = 80);

