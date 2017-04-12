SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for RecommendationModelVersionHistory
--
create view [dbo].[RecommendationModelVersionHistory]
 (
    -- logical attributes
    [RecommendationModelVersionIdName],
    [OrganizationIdName],

    -- physical attributes
    [Duration],
    [EndTime],
    [NumberRecordsSynchronized],
    [RecommendationModelVersionHistoryId],
    [RecommendationModelVersionId],
    [StartTime],
    [WorkflowStep],
    [WorkflowStepStatus],
    [OrganizationId],
    [ErrorCount],
    [ErrorDetails]
) with view_metadata as
select
    -- logical attributes
    [recommendationmodelversion_recommendationmodelversionhistory].[Name],
    [organization_recommendationmodelversionhistory].[Name],

    -- physical attribute
    [RecommendationModelVersionHistoryBase].[Duration],
    [RecommendationModelVersionHistoryBase].[EndTime],
    [RecommendationModelVersionHistoryBase].[NumberRecordsSynchronized],
    [RecommendationModelVersionHistoryBase].[RecommendationModelVersionHistoryId],
    [RecommendationModelVersionHistoryBase].[RecommendationModelVersionId],
    [RecommendationModelVersionHistoryBase].[StartTime],
    [RecommendationModelVersionHistoryBase].[WorkflowStep],
    [RecommendationModelVersionHistoryBase].[WorkflowStepStatus],
    [RecommendationModelVersionHistoryBase].[OrganizationId],
    [RecommendationModelVersionHistoryBase].[ErrorCount],
    [RecommendationModelVersionHistoryBase].[ErrorDetails]
from [RecommendationModelVersionHistoryBase] 
    left join [OrganizationBase] [organization_recommendationmodelversionhistory] with(nolock) on ([RecommendationModelVersionHistoryBase].[OrganizationId] = [organization_recommendationmodelversionhistory].[OrganizationId])
    left join [RecommendationModelVersionBase] [recommendationmodelversion_recommendationmodelversionhistory] on ([RecommendationModelVersionHistoryBase].[RecommendationModelVersionId] = [recommendationmodelversion_recommendationmodelversionhistory].[RecommendationModelVersionId])
GO
