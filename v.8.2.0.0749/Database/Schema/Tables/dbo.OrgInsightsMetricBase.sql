CREATE TABLE [dbo].[OrgInsightsMetricBase]
(
[MetricType] [int] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[InternalName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[OrgInsightsMetricId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
