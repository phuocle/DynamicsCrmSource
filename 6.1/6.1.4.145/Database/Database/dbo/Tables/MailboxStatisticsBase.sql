CREATE TABLE [dbo].[MailboxStatisticsBase] (
    [ItemsFailed]               INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [MailboxProcessStartedOn]   DATETIME         NULL,
    [MailboxProcessCompletedOn] DATETIME         NULL,
    [MailboxId]                 UNIQUEIDENTIFIER NOT NULL,
    [MachineName]               NVARCHAR (160)   NULL,
    [MailboxStatisticsId]       UNIQUEIDENTIFIER NOT NULL,
    [OperationTypeId]           INT              CONSTRAINT [DF_MailboxStatisticsBase_OperationTypeId] DEFAULT ((0)) NULL,
    [CrmItemsBacklog]           INT              NULL,
    [ProcessResult]             BIT              CONSTRAINT [DF_MailboxStatisticsBase_ProcessResult] DEFAULT ((0)) NULL,
    [ItemsProcessed]            INT              NULL,
    [MailboxProcessScheduledOn] DATETIME         NULL
);

