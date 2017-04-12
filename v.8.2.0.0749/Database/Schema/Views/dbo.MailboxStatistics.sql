SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for MailboxStatistics
--
create view [dbo].[MailboxStatistics]
 (

    -- physical attributes
    [MailboxStatisticsId],
    [OrganizationId],
    [MailboxId],
    [OperationTypeId],
    [ItemsProcessed],
    [ItemsFailed],
    [ProcessResult],
    [MailboxProcessScheduledOn],
    [MachineName],
    [MailboxProcessStartedOn],
    [CrmItemsBacklog],
    [MailboxProcessCompletedOn],
    [IndividualStepDurations],
    [ScheduledTimeIntervalInMinutes],
    [ProcessTimeIntervalInMinutes],
    [AsyncEventId]
) with view_metadata as
select

    -- physical attribute
    [MailboxStatisticsBase].[MailboxStatisticsId],
    [MailboxStatisticsBase].[OrganizationId],
    [MailboxStatisticsBase].[MailboxId],
    [MailboxStatisticsBase].[OperationTypeId],
    [MailboxStatisticsBase].[ItemsProcessed],
    [MailboxStatisticsBase].[ItemsFailed],
    [MailboxStatisticsBase].[ProcessResult],
    [MailboxStatisticsBase].[MailboxProcessScheduledOn],
    [MailboxStatisticsBase].[MachineName],
    [MailboxStatisticsBase].[MailboxProcessStartedOn],
    [MailboxStatisticsBase].[CrmItemsBacklog],
    [MailboxStatisticsBase].[MailboxProcessCompletedOn],
    [MailboxStatisticsBase].[IndividualStepDurations],
    [MailboxStatisticsBase].[ScheduledTimeIntervalInMinutes],
    [MailboxStatisticsBase].[ProcessTimeIntervalInMinutes],
    [MailboxStatisticsBase].[AsyncEventId]
from [MailboxStatisticsBase] 
GO
