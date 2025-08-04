


--
-- base view for TopicHistory
--
create view dbo.[TopicHistory]
 (
    -- logical attributes
    [TopicModelExecutionHistoryIdName],

    -- physical attributes
    [TopicHistoryId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [TopicModelExecutionHistoryId],
    [KeyPhrase],
    [Weight]
) with view_metadata as
select
    -- logical attributes
    [topicmodelexecutionhistory_topichistory].[TopicModelExecutionHistoryId],

    -- physical attribute
    [TopicHistoryBase].[TopicHistoryId],
    [TopicHistoryBase].[VersionNumber],
    [TopicHistoryBase].[ImportSequenceNumber],
    [TopicHistoryBase].[OverriddenCreatedOn],
    [TopicHistoryBase].[TimeZoneRuleVersionNumber],
    [TopicHistoryBase].[UTCConversionTimeZoneCode],
    [TopicHistoryBase].[Name],
    [TopicHistoryBase].[TopicModelExecutionHistoryId],
    [TopicHistoryBase].[KeyPhrase],
    [TopicHistoryBase].[Weight]
from [TopicHistoryBase] 
    left join [TopicModelExecutionHistoryBase] [topicmodelexecutionhistory_topichistory] on ([TopicHistoryBase].[TopicModelExecutionHistoryId] = [topicmodelexecutionhistory_topichistory].[TopicModelExecutionHistoryId])
