USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Topic]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Topic
--
create view [dbo].[Topic]
 (
    -- logical attributes
    [IncidentIdName],

    -- physical attributes
    [TopicId],
    [IncidentId],
    [KeyPhrase],
    [Score]
) with view_metadata as
select
    -- logical attributes
    [incident_topic].[Title],

    -- physical attribute
    [TopicBase].[TopicId],
    [TopicBase].[IncidentId],
    [TopicBase].[KeyPhrase],
    [TopicBase].[Score]
from [TopicBase] 
    left join [IncidentBase] [incident_topic] on ([TopicBase].[IncidentId] = [incident_topic].[IncidentId])

GO
