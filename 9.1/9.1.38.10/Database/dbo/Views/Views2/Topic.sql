


--
-- base view for Topic
--
create view dbo.[Topic]
 (
    -- logical attributes
    [IncidentIdName],

    -- physical attributes
    [TopicId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [IncidentId],
    [KeyPhrase],
    [Score]
) with view_metadata as
select
    -- logical attributes
    [incident_topic].[Title],

    -- physical attribute
    [TopicBase].[TopicId],
    [TopicBase].[VersionNumber],
    [TopicBase].[ImportSequenceNumber],
    [TopicBase].[OverriddenCreatedOn],
    [TopicBase].[TimeZoneRuleVersionNumber],
    [TopicBase].[UTCConversionTimeZoneCode],
    [TopicBase].[Name],
    [TopicBase].[IncidentId],
    [TopicBase].[KeyPhrase],
    [TopicBase].[Score]
from [TopicBase] 
    left join [IncidentBase] [incident_topic] on ([TopicBase].[IncidentId] = [incident_topic].[IncidentId])
