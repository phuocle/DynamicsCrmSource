


--
-- base view for TopicHistory
--
create view dbo.[TopicHistory]
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
