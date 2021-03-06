USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OrgInsightsMetricBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrgInsightsMetricBase](
	[MetricType] [int] NULL,
	[Name] [nvarchar](160) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[InternalName] [nvarchar](160) NULL,
	[OrgInsightsMetricId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Creates', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'ActiveUsersPerformingCreates', N'd35af5b1-fde3-462a-a69d-656f196597dc')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Deletes', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'ActiveUsersPerformingDeletes', N'29ab2087-8b13-4f0b-9826-e466b4ea93ed')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Updates', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'ActiveUsersPerformingUpdates', N'bcbd48ea-3091-4645-b33b-5951c01d0249')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Reads', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'ActiveUsersPerformingReads', N'8527f39b-10bb-47e1-99cc-833416542314')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Creates', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'NumberOfCreates', N'715593ed-0b35-4c71-af94-3573e9eedf2a')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Deletes', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'NumberOfDeletes', N'48566c61-9d46-46ff-85fe-4d111ced7acb')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Updates', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'NumberOfUpdates', N'f3c8e9ba-ecd7-4d97-ab3f-187c30a56c69')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Reads', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'NumberOfReads', N'ba260e30-8974-459e-8eb2-8ccd00e9793c')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Active Users', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'ActiveUsers', N'c1bcc999-d150-4591-b0a5-0684a6a0f618')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Dashboards', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'DashboardRequests', N'08058a0e-f2e2-4620-9e5a-891a2a1cb034')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Reports', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'ReportRequests', N'049020d9-f4a7-4918-8452-f67ac87f1d5d')
INSERT [dbo].[OrgInsightsMetricBase] ([MetricType], [Name], [OrganizationId], [CreatedOn], [InternalName], [OrgInsightsMetricId]) VALUES (1, N'Forms', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'FormRequests', N'dfed2e37-0317-4777-9fda-2e3556eddb96')
