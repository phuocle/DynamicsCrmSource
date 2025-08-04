CREATE TABLE [dbo].[OrgInsightsMetricBase] (
    [MetricType]          INT              NULL,
    [InternalName]        NVARCHAR (160)   NULL,
    [OrgInsightsMetricId] UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]           DATETIME         NULL,
    [Name]                NVARCHAR (160)   NULL
);


GO
ALTER TABLE [dbo].[OrgInsightsMetricBase] SET (LOCK_ESCALATION = DISABLE);

