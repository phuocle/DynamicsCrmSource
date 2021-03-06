USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[TopicHistory]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for TopicHistory
--
create view [dbo].[TopicHistory]
 (
    -- logical attributes
    [TopicModelExecutionHistoryIdName],

    -- physical attributes
    [TopicModelExecutionHistoryId],
    [TopicHistoryId],
    [KeyPhrase],
    [Weight]
) with view_metadata as
select
    -- logical attributes
    [topicmodelexecutionhistory_topichistory].[TopicModelExecutionHistoryId],

    -- physical attribute
    [TopicHistoryBase].[TopicModelExecutionHistoryId],
    [TopicHistoryBase].[TopicHistoryId],
    [TopicHistoryBase].[KeyPhrase],
    [TopicHistoryBase].[Weight]
from [TopicHistoryBase] 
    left join [TopicModelExecutionHistoryBase] [topicmodelexecutionhistory_topichistory] on ([TopicHistoryBase].[TopicModelExecutionHistoryId] = [topicmodelexecutionhistory_topichistory].[TopicModelExecutionHistoryId])

GO
