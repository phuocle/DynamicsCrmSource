


--
-- base view for MailboxStatistics
--
create view dbo.[MailboxStatistics]
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
    [MailboxProcessCompletedOn]
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
    [MailboxStatisticsBase].[MailboxProcessCompletedOn]
from [MailboxStatisticsBase] 
