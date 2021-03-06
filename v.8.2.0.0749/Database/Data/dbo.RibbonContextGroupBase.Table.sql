USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RibbonContextGroupBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RibbonContextGroupBase](
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_OverwriteTime]  DEFAULT ((0)),
	[VersionNumber] [timestamp] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_IsManaged]  DEFAULT ((0)),
	[Entity] [nvarchar](50) NULL,
	[RibbonContextGroupId] [uniqueidentifier] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ContextGroupXml] [nvarchar](max) NULL,
	[RibbonContextGroupUniqueId] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_RibbonContextGroupUniqueId]  DEFAULT (newid()),
	[ContextGroupId] [nvarchar](max) NOT NULL,
	[RibbonCustomizationId] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_RibbonContextGroupBase_ComponentState]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_RibbonContextGroup] PRIMARY KEY CLUSTERED 
(
	[RibbonContextGroupId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[RibbonContextGroupBase] ([OverwriteTime], [OrganizationId], [IsManaged], [Entity], [RibbonContextGroupId], [SolutionId], [SupportingSolutionId], [ContextGroupXml], [RibbonContextGroupUniqueId], [ContextGroupId], [RibbonCustomizationId], [ComponentState]) VALUES (CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'94f9b696-f31d-e711-80d3-00155d00662d', 1, NULL, N'e6868be6-f31d-e711-80d3-00155d00662d', N'fd140aad-4df4-11dd-bd17-0019b9312238', NULL, N'<CustomAction Id="Visualization Tools Contextual Group" Location="Mscrm.Tabs._children" Sequence="90"><CommandUIDefinition><ContextualGroup Id="Mscrm.VisualizationTools" Command="Mscrm.VisualizationTools.Command" Color="Orange" ContextualGroupId="Mscrm.VisualizationTools" Title="$Resources:Ribbon.VisualizationTools.FlareHeading" Sequence="1000" /></CommandUIDefinition></CustomAction>', N'9a9c41ea-f8f5-4c7e-9a13-002803035378', N'Mscrm.VisualizationTools', N'5e818be6-f31d-e711-80d3-00155d00662d', 0)
INSERT [dbo].[RibbonContextGroupBase] ([OverwriteTime], [OrganizationId], [IsManaged], [Entity], [RibbonContextGroupId], [SolutionId], [SupportingSolutionId], [ContextGroupXml], [RibbonContextGroupUniqueId], [ContextGroupId], [RibbonCustomizationId], [ComponentState]) VALUES (CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'94f9b696-f31d-e711-80d3-00155d00662d', 1, NULL, N'f88b83ec-f31d-e711-80d3-00155d00662d', N'fd140aad-4df4-11dd-bd17-0019b9312238', NULL, N'<CustomAction Id="Article Search Contextual Group" Location="Mscrm.Tabs._children" Sequence="130"><CommandUIDefinition><ContextualGroup Id="Mscrm.ArticleSearch" Command="Mscrm.ArticleSearch.Command" Color="Green" ContextualGroupId="Mscrm.ArticleSearch" Title="$Resources:Ribbon.ArticleSearch.FlareHeading" Sequence="1001" /></CommandUIDefinition></CustomAction>', N'18c0400e-1250-4c3d-9b5b-e6cd018ebe4c', N'Mscrm.ArticleSearch', N'5e818be6-f31d-e711-80d3-00155d00662d', 0)
INSERT [dbo].[RibbonContextGroupBase] ([OverwriteTime], [OrganizationId], [IsManaged], [Entity], [RibbonContextGroupId], [SolutionId], [SupportingSolutionId], [ContextGroupXml], [RibbonContextGroupUniqueId], [ContextGroupId], [RibbonCustomizationId], [ComponentState]) VALUES (CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'94f9b696-f31d-e711-80d3-00155d00662d', 1, NULL, N'308c83ec-f31d-e711-80d3-00155d00662d', N'fd140aad-4df4-11dd-bd17-0019b9312238', NULL, N'<CustomAction Id="Documents Tab" Location="Mscrm.Tabs._children" Sequence="140"><CommandUIDefinition><ContextualGroup Id="Mscrm.DocumentsContextualTab" Command="Mscrm.DocumentsContextualTab.Command" Color="LightBlue" ContextualGroupId="Mscrm.DocumentsContextualTab" Title="$Resources:Ribbon.Documents.TabHeading" Sequence="1002" /></CommandUIDefinition></CustomAction>', N'e5c4eb87-6586-4991-8b4d-31fc851aaf2a', N'Mscrm.DocumentsContextualTab', N'5e818be6-f31d-e711-80d3-00155d00662d', 0)
INSERT [dbo].[RibbonContextGroupBase] ([OverwriteTime], [OrganizationId], [IsManaged], [Entity], [RibbonContextGroupId], [SolutionId], [SupportingSolutionId], [ContextGroupXml], [RibbonContextGroupUniqueId], [ContextGroupId], [RibbonCustomizationId], [ComponentState]) VALUES (CAST(N'1900-01-01 00:00:00.000' AS DateTime), N'94f9b696-f31d-e711-80d3-00155d00662d', 1, NULL, N'db8e83ec-f31d-e711-80d3-00155d00662d', N'fd140aad-4df4-11dd-bd17-0019b9312238', NULL, N'<CustomAction Id="Subgrid Contextual Group" Location="Mscrm.ContextualTabs._children" Sequence="570"><CommandUIDefinition><ContextualGroup Id="Mscrm.SubGrid.{!EntityLogicalName}.ContextualTabs" Command="Mscrm.SubGrid.{!EntityLogicalName}.ContextualTabs" Color="LightBlue" ContextualGroupId="Mscrm.SubGrid.{!EntityLogicalName}.ContextualTabs" Title="$Resources:Ribbon.SubGridFlare" Sequence="10" /></CommandUIDefinition></CustomAction>', N'72a5b801-3150-4577-b55f-a1d29658e128', N'Mscrm.SubGrid.{!EntityLogicalName}.ContextualTabs', N'5e818be6-f31d-e711-80d3-00155d00662d', 0)
/****** Object:  Index [UQ_RibbonContextGroupBase_UniqueRowId]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[RibbonContextGroupBase] ADD  CONSTRAINT [UQ_RibbonContextGroupBase_UniqueRowId] UNIQUE NONCLUSTERED 
(
	[RibbonContextGroupUniqueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RibbonContextGroupBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
