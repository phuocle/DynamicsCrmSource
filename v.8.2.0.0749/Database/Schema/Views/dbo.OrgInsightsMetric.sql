SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for OrgInsightsMetric
--
create view [dbo].[OrgInsightsMetric]
 (
    -- logical attributes
    [OrganizationIdName],

    -- physical attributes
    [OrgInsightsMetricId],
    [OrganizationId],
    [CreatedOn],
    [InternalName],
    [Name],
    [MetricType]
) with view_metadata as
select
    -- logical attributes
    [organization_orginsightsmetric].[Name],

    -- physical attribute
    [OrgInsightsMetricBase].[OrgInsightsMetricId],
    [OrgInsightsMetricBase].[OrganizationId],
    [OrgInsightsMetricBase].[CreatedOn],
    [OrgInsightsMetricBase].[InternalName],
    [OrgInsightsMetricBase].[Name],
    [OrgInsightsMetricBase].[MetricType]
from [OrgInsightsMetricBase] 
    left join [OrganizationBase] [organization_orginsightsmetric] with(nolock) on ([OrgInsightsMetricBase].[OrganizationId] = [organization_orginsightsmetric].[OrganizationId])
GO
