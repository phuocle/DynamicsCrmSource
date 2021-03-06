USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[HierarchyRuleBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HierarchyRuleBase](
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_IsManaged]  DEFAULT ((0)),
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_ComponentState]  DEFAULT ((0)),
	[RelatedEntityLogicalName] [nvarchar](50) NOT NULL,
	[HierarchyRuleID] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[PrimaryEntityLogicalName] [nvarchar](50) NOT NULL,
	[SortBy] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ShowDisabled] [bit] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_ShowDisabled]  DEFAULT ((0)),
	[IntroducedVersion] [nvarchar](48) NULL,
	[Name] [nvarchar](100) NOT NULL,
	[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_IsCustomizable]  DEFAULT ((1)),
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[PrimaryEntityFormID] [uniqueidentifier] NULL,
	[RelatedEntityFormId] [uniqueidentifier] NULL,
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_HierarchyRuleBase_OverwriteTime]  DEFAULT ((0)),
	[PublishedOn] [datetime] NULL,
	[HierarchyRuleIDUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_HierarchyRuleBase_HierarchyRuleIDUnique]  DEFAULT (newid()),
 CONSTRAINT [cndx_PrimaryKey_HierarchyRuleID] PRIMARY KEY CLUSTERED 
(
	[HierarchyRuleID] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[HierarchyRuleBase] ([IsManaged], [ComponentState], [RelatedEntityLogicalName], [HierarchyRuleID], [Description], [SupportingSolutionId], [PrimaryEntityLogicalName], [SortBy], [OrganizationId], [ShowDisabled], [IntroducedVersion], [Name], [IsCustomizable], [SolutionId], [PrimaryEntityFormID], [RelatedEntityFormId], [OverwriteTime], [PublishedOn], [HierarchyRuleIDUnique]) VALUES (1, 0, N'account', N'4ef9fbbf-dcca-e311-b3e2-0024e84720c0', N'This is the account hierarchy definition.', NULL, N'account', N'a1965545-44bc-4b7b-b1ae-93074d0e3f2a', N'94f9b696-f31d-e711-80d3-00155d00662d', 1, N'7.0.0.0', N'Account Hierarchy', 1, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'69cff312-cfb6-4289-9631-249ab85d2c62', N'69cff312-cfb6-4289-9631-249ab85d2c62', CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:48:18.000' AS DateTime), N'f81e3350-3818-4449-b01e-9f42c1dd5799')
INSERT [dbo].[HierarchyRuleBase] ([IsManaged], [ComponentState], [RelatedEntityLogicalName], [HierarchyRuleID], [Description], [SupportingSolutionId], [PrimaryEntityLogicalName], [SortBy], [OrganizationId], [ShowDisabled], [IntroducedVersion], [Name], [IsCustomizable], [SolutionId], [PrimaryEntityFormID], [RelatedEntityFormId], [OverwriteTime], [PublishedOn], [HierarchyRuleIDUnique]) VALUES (1, 0, N'product', N'85977f8c-24b9-4041-98e4-219614a9b073', N'This is the product hierarchy definition.', NULL, N'product', N'aeb98021-3f7e-4d25-8c5d-05b662636407', N'94f9b696-f31d-e711-80d3-00155d00662d', 1, N'7.0.0.0', N'Product Hierarchy', 1, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'44c9f1ee-9bce-4c6f-9a7f-6568be05c41c', N'44c9f1ee-9bce-4c6f-9a7f-6568be05c41c', CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:48:18.000' AS DateTime), N'74fdf004-3154-4d1c-a6a7-f89ccc783aea')
INSERT [dbo].[HierarchyRuleBase] ([IsManaged], [ComponentState], [RelatedEntityLogicalName], [HierarchyRuleID], [Description], [SupportingSolutionId], [PrimaryEntityLogicalName], [SortBy], [OrganizationId], [ShowDisabled], [IntroducedVersion], [Name], [IsCustomizable], [SolutionId], [PrimaryEntityFormID], [RelatedEntityFormId], [OverwriteTime], [PublishedOn], [HierarchyRuleIDUnique]) VALUES (1, 0, N'systemuser', N'809e575f-4801-42e6-8329-aa83bc5cc835', N'This is the user hierarchy definition.', NULL, N'systemuser', N'ffde4a75-024b-4f2a-8df8-90b91dc4d825', N'94f9b696-f31d-e711-80d3-00155d00662d', 1, N'7.0.0.0', N'User Hierarchy', 1, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'c68d6c09-d7a7-4959-8d0f-44b8cff9b452', N'c68d6c09-d7a7-4959-8d0f-44b8cff9b452', CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:48:19.000' AS DateTime), N'8d74c0a0-3d12-42a1-aeab-ddfdc89b18e8')
INSERT [dbo].[HierarchyRuleBase] ([IsManaged], [ComponentState], [RelatedEntityLogicalName], [HierarchyRuleID], [Description], [SupportingSolutionId], [PrimaryEntityLogicalName], [SortBy], [OrganizationId], [ShowDisabled], [IntroducedVersion], [Name], [IsCustomizable], [SolutionId], [PrimaryEntityFormID], [RelatedEntityFormId], [OverwriteTime], [PublishedOn], [HierarchyRuleIDUnique]) VALUES (1, 0, N'category', N'76ebff28-15fd-475f-a6e2-cf34c708a834', N'This is the category hierarchy definition.', NULL, N'category', N'4d19a417-2c6d-4942-8b6c-5017ed8e9088', N'94f9b696-f31d-e711-80d3-00155d00662d', 1, N'8.1.0.0', N'Category Hierarchy', 1, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'7e09001d-5c89-4a8e-8cbf-276cbdbc0702', N'7e09001d-5c89-4a8e-8cbf-276cbdbc0702', CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 14:24:42.000' AS DateTime), N'7197d53e-b9a0-4f89-89b8-bc9c185555f3')
INSERT [dbo].[HierarchyRuleBase] ([IsManaged], [ComponentState], [RelatedEntityLogicalName], [HierarchyRuleID], [Description], [SupportingSolutionId], [PrimaryEntityLogicalName], [SortBy], [OrganizationId], [ShowDisabled], [IntroducedVersion], [Name], [IsCustomizable], [SolutionId], [PrimaryEntityFormID], [RelatedEntityFormId], [OverwriteTime], [PublishedOn], [HierarchyRuleIDUnique]) VALUES (1, 0, N'position', N'6de193d2-e4ad-42d6-ab53-faf2c8e0d73d', N'This is the Position hierarchy definition.', NULL, N'position', N'a2750f35-13ae-e311-80c2-00155d9dac1a', N'94f9b696-f31d-e711-80d3-00155d00662d', 1, N'7.0.0.0', N'Position Hierarchy', 1, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'a9969603-c28d-4a12-9d03-b9ed677a345a', N'a9969603-c28d-4a12-9d03-b9ed677a345a', CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:48:18.000' AS DateTime), N'a9bcd957-ea3e-4ac6-b9c5-e90576ad3188')
/****** Object:  Index [UQ_HierarchyRuleBase_HierarchyRuleIDUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[HierarchyRuleBase] ADD  CONSTRAINT [UQ_HierarchyRuleBase_HierarchyRuleIDUnique] UNIQUE NONCLUSTERED 
(
	[HierarchyRuleIDUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[HierarchyRuleBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
