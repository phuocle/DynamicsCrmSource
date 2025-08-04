CREATE TABLE [dbo].[OrgInsightsMetricBase] (
    [MetricType]          INT              NULL,
    [Name]                NVARCHAR (160)   NULL,
    [OrganizationId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]           DATETIME         NULL,
    [InternalName]        NVARCHAR (160)   NULL,
    [OrgInsightsMetricId] UNIQUEIDENTIFIER NOT NULL
);

