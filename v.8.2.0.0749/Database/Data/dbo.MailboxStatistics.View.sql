USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[MailboxStatistics]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
