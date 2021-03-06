USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SavedOrgInsightsConfigurationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SavedOrgInsightsConfigurationBase](
	[Lookback] [int] NULL,
	[IsDefault] [bit] NOT NULL CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDefault]  DEFAULT ((0)),
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[IsDrilldown] [bit] NOT NULL CONSTRAINT [DF_SavedOrgInsightsConfigurationBase_IsDrilldown]  DEFAULT ((0)),
	[JsonData] [nvarchar](max) NULL,
	[SavedOrgInsightsConfigurationId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedOn] [datetime] NULL,
	[Parameters] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[JsonDataEndTime] [datetime] NULL,
	[JsonDataStartTime] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](max) NULL,
	[MetricType] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[PlotOption] [int] NULL,
 CONSTRAINT [PK_SavedOrgInsightsConfigurationBase] PRIMARY KEY CLUSTERED 
(
	[SavedOrgInsightsConfigurationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[SavedOrgInsightsConfigurationBase] ([Lookback], [IsDefault], [OrganizationId], [CreatedOnBehalfBy], [IsDrilldown], [JsonData], [SavedOrgInsightsConfigurationId], [ModifiedOnBehalfBy], [Description], [ModifiedOn], [Parameters], [CreatedOn], [JsonDataEndTime], [JsonDataStartTime], [ModifiedBy], [Name], [MetricType], [CreatedBy], [PlotOption]) VALUES (3, 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, N'35699bd6-6e49-463d-9dc0-4e968750778f', NULL, N'Active Users Performing Specific Operations', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'<Parameters><MetricIds><MetricId>D35AF5B1-FDE3-462A-A69D-656F196597DC</MetricId><MetricId>8527F39B-10BB-47E1-99CC-833416542314</MetricId><MetricId>BCBD48EA-3091-4645-B33B-5951C01D0249</MetricId><MetricId>29AB2087-8B13-4F0B-9826-E466B4EA93ED</MetricId></MetricIds><DisplayOptions><ColorOptions><Colors>[''#50B432'', ''#ED561B'', ''#455450'', ''#058DC7'']</Colors></ColorOptions></DisplayOptions></Parameters>', CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'Active Users Performing Specific Operations', 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1)
INSERT [dbo].[SavedOrgInsightsConfigurationBase] ([Lookback], [IsDefault], [OrganizationId], [CreatedOnBehalfBy], [IsDrilldown], [JsonData], [SavedOrgInsightsConfigurationId], [ModifiedOnBehalfBy], [Description], [ModifiedOn], [Parameters], [CreatedOn], [JsonDataEndTime], [JsonDataStartTime], [ModifiedBy], [Name], [MetricType], [CreatedBy], [PlotOption]) VALUES (3, 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, N'4f1f5365-3e65-43b6-92ab-6a31d08a7891', NULL, N'Most Active Users Performing Changes', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'<Parameters><MetricIds><MetricId>715593ED-0B35-4C71-AF94-3573E9EEDF2A</MetricId><MetricId>F3C8E9BA-ECD7-4D97-AB3F-187C30A56C69</MetricId><MetricId>48566C61-9D46-46FF-85FE-4D111CED7ACB</MetricId></MetricIds><DisplayOptions><ColorOptions><Colors>[''#50B432'', ''#ED561B'', ''#455450'']</Colors></ColorOptions></DisplayOptions><DisplayMappings><DisplayMapping><InputEntityName>SystemUser</InputEntityName><InputAttributeDataType>Guid</InputAttributeDataType><InputAttributeName>SystemUserId</InputAttributeName><OutputAttributeName>FullName</OutputAttributeName></DisplayMapping></DisplayMappings></Parameters>', CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'Most Active Users (Changes)', 2, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 5)
INSERT [dbo].[SavedOrgInsightsConfigurationBase] ([Lookback], [IsDefault], [OrganizationId], [CreatedOnBehalfBy], [IsDrilldown], [JsonData], [SavedOrgInsightsConfigurationId], [ModifiedOnBehalfBy], [Description], [ModifiedOn], [Parameters], [CreatedOn], [JsonDataEndTime], [JsonDataStartTime], [ModifiedBy], [Name], [MetricType], [CreatedBy], [PlotOption]) VALUES (3, 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, N'd0401d82-6e7f-4b84-8d86-825d72c68ee6', NULL, N'Total Page Requests', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'<Parameters><MetricIds><MetricId>049020D9-F4A7-4918-8452-F67AC87F1D5D</MetricId><MetricId>08058A0E-F2E2-4620-9E5A-891A2A1CB034</MetricId><MetricId>DFED2E37-0317-4777-9FDA-2E3556EDDB96</MetricId></MetricIds><DisplayOptions><ColorOptions><Colors>[''#058DC7'', ''#50B432'', ''#ED561B'']</Colors></ColorOptions></DisplayOptions></Parameters>', CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'Total Page Requests', 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1)
INSERT [dbo].[SavedOrgInsightsConfigurationBase] ([Lookback], [IsDefault], [OrganizationId], [CreatedOnBehalfBy], [IsDrilldown], [JsonData], [SavedOrgInsightsConfigurationId], [ModifiedOnBehalfBy], [Description], [ModifiedOn], [Parameters], [CreatedOn], [JsonDataEndTime], [JsonDataStartTime], [ModifiedBy], [Name], [MetricType], [CreatedBy], [PlotOption]) VALUES (3, 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, N'b13d7ed8-06be-4b0e-b314-a16a84099f1e', NULL, N'Total Operations', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'<Parameters><MetricIds><MetricId>715593ED-0B35-4C71-AF94-3573E9EEDF2A</MetricId><MetricId>BA260E30-8974-459E-8EB2-8CCD00E9793C</MetricId><MetricId>F3C8E9BA-ECD7-4D97-AB3F-187C30A56C69</MetricId><MetricId>48566C61-9D46-46FF-85FE-4D111CED7ACB</MetricId></MetricIds><DisplayOptions><ColorOptions><Colors>[''#50B432'', ''#ED561B'', ''#455450'', ''#058DC7'']</Colors></ColorOptions></DisplayOptions></Parameters>', CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'Total Operations', 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1)
INSERT [dbo].[SavedOrgInsightsConfigurationBase] ([Lookback], [IsDefault], [OrganizationId], [CreatedOnBehalfBy], [IsDrilldown], [JsonData], [SavedOrgInsightsConfigurationId], [ModifiedOnBehalfBy], [Description], [ModifiedOn], [Parameters], [CreatedOn], [JsonDataEndTime], [JsonDataStartTime], [ModifiedBy], [Name], [MetricType], [CreatedBy], [PlotOption]) VALUES (3, 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, N'f35b8d37-808f-4ff7-8360-ccb366a85d39', NULL, N'Most Active Users Performing Reads', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'<Parameters><MetricIds><MetricId>BA260E30-8974-459E-8EB2-8CCD00E9793C</MetricId></MetricIds><DisplayOptions><ColorOptions><Colors>[''#058DC7'']</Colors></ColorOptions></DisplayOptions><DisplayMappings><DisplayMapping><InputEntityName>SystemUser</InputEntityName><InputAttributeDataType>Guid</InputAttributeDataType><InputAttributeName>SystemUserId</InputAttributeName><OutputAttributeName>FullName</OutputAttributeName></DisplayMapping></DisplayMappings></Parameters>', CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'Most Active Users (Reads)', 2, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 5)
INSERT [dbo].[SavedOrgInsightsConfigurationBase] ([Lookback], [IsDefault], [OrganizationId], [CreatedOnBehalfBy], [IsDrilldown], [JsonData], [SavedOrgInsightsConfigurationId], [ModifiedOnBehalfBy], [Description], [ModifiedOn], [Parameters], [CreatedOn], [JsonDataEndTime], [JsonDataStartTime], [ModifiedBy], [Name], [MetricType], [CreatedBy], [PlotOption]) VALUES (3, 1, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, NULL, N'9725801d-0eaf-4100-891c-db34400ab102', NULL, N'Active Users', CAST(N'2017-04-10 14:26:32.000' AS DateTime), N'<Parameters><MetricIds><MetricId>C1BCC999-D150-4591-B0A5-0684A6A0F618</MetricId></MetricIds><DisplayOptions><ColorOptions><Colors>[''#A83D1E'']</Colors></ColorOptions></DisplayOptions></Parameters>', CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'Active Users', 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 2)
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_RetrieveForControlInDashboard]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard] ON [dbo].[SavedOrgInsightsConfigurationBase]
(
	[SavedOrgInsightsConfigurationId] ASC
)
INCLUDE ( 	[Name],
	[PlotOption],
	[Lookback]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
