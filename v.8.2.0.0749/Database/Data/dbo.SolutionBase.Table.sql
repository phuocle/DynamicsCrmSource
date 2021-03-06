USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SolutionBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SolutionBase](
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[PinpointAssetId] [nvarchar](255) NULL,
	[UniqueName] [nvarchar](65) NOT NULL,
	[Description] [nvarchar](2000) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[PinpointSolutionId] [bigint] NULL,
	[PinpointSolutionDefaultLocale] [nvarchar](16) NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[FriendlyName] [nvarchar](256) NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[IsVisible] [bit] NULL CONSTRAINT [DF_SolutionBase_IsVisible]  DEFAULT ((1)),
	[Version] [nvarchar](256) NOT NULL CONSTRAINT [DF_SolutionBase_Version]  DEFAULT (''),
	[ConfigurationPageId] [uniqueidentifier] NULL,
	[IsManaged] [bit] NULL,
	[CreatedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[PublisherId] [uniqueidentifier] NOT NULL,
	[InstalledOn] [datetime] NULL,
	[SolutionPackageVersion] [nvarchar](256) NULL,
	[ParentSolutionId] [uniqueidentifier] NULL,
	[IsInternal] [bit] NULL CONSTRAINT [DF_SolutionBase_IsInternal]  DEFAULT ((0)),
	[SolutionType] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_Solution] PRIMARY KEY CLUSTERED 
(
	[SolutionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 13:44:28.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'System', N'Internal CRM System Solution', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'System Solution', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'5.0', NULL, 1, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, N'd21aab70-79e7-11dd-8874-00188b01e34f', CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, NULL, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 13:44:28.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'Active', N'Placeholder solution marker for all customizations for any components', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'fd140aae-4df4-11dd-bd17-0019b9312238', N'Active Solution', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'1.0', NULL, 0, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, N'd21aab71-79e7-11dd-8874-00188b01e34f', CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, NULL, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 13:44:28.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'Default', N'Solution that contains all components in the system', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'fd140aaf-4df4-11dd-bd17-0019b9312238', N'Default Solution', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1, N'1.0', NULL, 0, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, N'd21aab71-79e7-11dd-8874-00188b01e34f', CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, NULL, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 13:44:28.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'Basic', N'Placeholder solution marker for all those components that do not and should not belong to any other solutions', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'25a01723-9f63-4449-a3e0-046cc23a2902', N'Basic Solution', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'1.0', NULL, 0, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, N'd21aab70-79e7-11dd-8874-00188b01e34f', CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, NULL, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 14:28:30.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'ActivityFeedsCore', NULL, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'64a53cec-344d-4db2-a691-4e0323426a9e', N'Activity Feeds', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'8.2.0.0', NULL, 1, CAST(N'2017-04-10 14:06:07.000' AS DateTime), NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', CAST(N'2017-04-10 14:06:07.000' AS DateTime), N'8.0', NULL, 0, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 14:21:51.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'CustomControlsCore', NULL, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'feef47e8-53ba-4670-8345-5f5f45808c48', N'Custom Controls Core', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'8.2.0000.0749', NULL, 1, CAST(N'2017-04-10 14:21:37.000' AS DateTime), NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', CAST(N'2017-04-10 14:21:37.000' AS DateTime), N'7.0', NULL, 0, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 14:29:19.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'AppModuleWebResources', NULL, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'8ec35281-d55e-49c4-8799-85f3c6fe13cb', N'App module webresource import solution', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'2.0', NULL, 1, CAST(N'2017-04-10 14:29:12.000' AS DateTime), NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', CAST(N'2017-04-10 14:29:12.000' AS DateTime), N'8.2', NULL, 0, NULL)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 14:21:36.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'SnapshotSolution80', N'Snapshot solution to be used for outlook backcompat for version 8.0', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'ddf5082c-f8f5-4c87-ad45-c5996e204a55', N'Snapshot Solution 8.0', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'8.0', NULL, 1, CAST(N'2017-04-10 14:21:36.000' AS DateTime), NULL, N'd21aab70-79e7-11dd-8874-00188b01e34f', CAST(N'2017-04-10 14:21:36.000' AS DateTime), NULL, NULL, 0, 1)
INSERT [dbo].[SolutionBase] ([ModifiedOn], [ModifiedBy], [PinpointAssetId], [UniqueName], [Description], [CreatedOnBehalfBy], [OrganizationId], [PinpointSolutionId], [PinpointSolutionDefaultLocale], [SolutionId], [FriendlyName], [CreatedBy], [IsVisible], [Version], [ConfigurationPageId], [IsManaged], [CreatedOn], [ModifiedOnBehalfBy], [PublisherId], [InstalledOn], [SolutionPackageVersion], [ParentSolutionId], [IsInternal], [SolutionType]) VALUES (CAST(N'2017-04-10 14:29:02.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'GuidedHelp', NULL, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, N'a3ba0ca1-6c04-4210-bb46-d34f65b7484d', N'GuidedHelp', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'1.2.0.0', NULL, 1, CAST(N'2017-04-10 14:28:57.000' AS DateTime), NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', CAST(N'2017-04-10 14:28:57.000' AS DateTime), N'8.0', NULL, 0, NULL)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SolutionBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_UniqueName]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName] ON [dbo].[SolutionBase]
(
	[UniqueName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SolutionBase]  WITH CHECK ADD  CONSTRAINT [publisher_solution] FOREIGN KEY([PublisherId])
REFERENCES [dbo].[PublisherBase] ([PublisherId])
GO
ALTER TABLE [dbo].[SolutionBase] CHECK CONSTRAINT [publisher_solution]
GO
ALTER TABLE [dbo].[SolutionBase]  WITH CHECK ADD  CONSTRAINT [solution_configuration_webresource] FOREIGN KEY([ConfigurationPageId])
REFERENCES [dbo].[WebResourceBaseIds] ([WebResourceId])
GO
ALTER TABLE [dbo].[SolutionBase] CHECK CONSTRAINT [solution_configuration_webresource]
GO
ALTER TABLE [dbo].[SolutionBase]  WITH CHECK ADD  CONSTRAINT [solution_parent_solution] FOREIGN KEY([ParentSolutionId])
REFERENCES [dbo].[SolutionBase] ([SolutionId])
GO
ALTER TABLE [dbo].[SolutionBase] CHECK CONSTRAINT [solution_parent_solution]
GO
