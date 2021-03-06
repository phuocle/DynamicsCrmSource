USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelAccessProfileEntityAccessLevelBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelAccessProfileEntityAccessLevelBase](
	[ChannelAccessProfileEntityAccessLevelIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ChannelAccessProfileEntityAccessLevelIdUnique]  DEFAULT (newid()),
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ChannelAccessProfileEntityAccessLevelId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ChannelAccessProfileEntityAccessLevelId]  DEFAULT (newid()),
	[EntityAccessLevelId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_IsManaged]  DEFAULT ((0)),
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_OverwriteTime]  DEFAULT ((0)),
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_ComponentState]  DEFAULT ((0)),
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_SolutionId]  DEFAULT ('00229848-a113-4019-bc48-5a8513fcf87f'),
	[EntityAccessLevelDepthMask] [int] NOT NULL CONSTRAINT [DF_ChannelAccessProfileEntityAccessLevelBase_EntityAccessLevelDepthMask]  DEFAULT ((0)),
	[ChannelAccessProfileId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ChannelAccessProfilEentityAccessLevels] PRIMARY KEY CLUSTERED 
(
	[ChannelAccessProfileEntityAccessLevelId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'3beb0061-7e26-4943-a392-fba582aada05', N'00000000-0000-0000-0000-000000000000', N'3a633762-f41d-e711-80d3-00155d00662d', N'd26fe964-230b-42dd-ad93-5cc879de411e', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'a651bd1c-002b-4556-aa9f-c0274c30959e', N'00000000-0000-0000-0000-000000000000', N'3b633762-f41d-e711-80d3-00155d00662d', N'886b280c-6396-4d56-a0a3-2c1b0a50ceb0', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'6749603c-e27f-4254-b342-15923de1fb91', N'00000000-0000-0000-0000-000000000000', N'3c633762-f41d-e711-80d3-00155d00662d', N'7863e80f-0ab2-4d67-a641-37d9f342c7e3', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'b18969a9-8132-4580-b91b-7a7d529e36e9', N'00000000-0000-0000-0000-000000000000', N'3d633762-f41d-e711-80d3-00155d00662d', N'a8bff87f-0df0-41d4-babd-f093faf1e32c', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'a9f2b2d6-7f6f-4e81-90f3-6326f821e9f6', N'00000000-0000-0000-0000-000000000000', N'3e633762-f41d-e711-80d3-00155d00662d', N'ba09ec92-12c4-4312-ba16-5715c2cbd6da', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'5280d00d-1460-4339-ba2c-d32a9754e09d', N'00000000-0000-0000-0000-000000000000', N'3f633762-f41d-e711-80d3-00155d00662d', N'65c22075-4e09-4f39-baec-e4bc3a950686', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'799de24c-f5e6-4fe5-86ab-1930a4802592', N'00000000-0000-0000-0000-000000000000', N'40633762-f41d-e711-80d3-00155d00662d', N'6cf9442b-e690-4cad-8b0a-e60464960b93', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'81fa34bd-8e56-4985-9993-16c649bfc5dd', N'00000000-0000-0000-0000-000000000000', N'41633762-f41d-e711-80d3-00155d00662d', N'c2aff40c-6e68-4437-a631-488a354a1860', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'0486ec2a-9da4-4698-99f7-a1489af4363f', N'00000000-0000-0000-0000-000000000000', N'42633762-f41d-e711-80d3-00155d00662d', N'7b26693f-1c0c-4e87-8918-f4cc7d219d70', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'025ab9ac-4070-425c-9122-0123f15b4c0f', N'00000000-0000-0000-0000-000000000000', N'43633762-f41d-e711-80d3-00155d00662d', N'60d420ca-7a88-4c0d-8286-c425b527fa98', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 8, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'b5871ceb-b701-4c72-94e0-9ecbd3ded35c', N'00000000-0000-0000-0000-000000000000', N'44633762-f41d-e711-80d3-00155d00662d', N'091df793-fe5e-44d4-b4ca-7e3f580c4664', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'2118c886-a68f-4a77-8577-775798a37e59', N'00000000-0000-0000-0000-000000000000', N'45633762-f41d-e711-80d3-00155d00662d', N'650c14fe-3521-45fe-a000-84138688e45d', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
INSERT [dbo].[ChannelAccessProfileEntityAccessLevelBase] ([ChannelAccessProfileEntityAccessLevelIdUnique], [SupportingSolutionId], [ChannelAccessProfileEntityAccessLevelId], [EntityAccessLevelId], [IsManaged], [OverwriteTime], [ComponentState], [SolutionId], [EntityAccessLevelDepthMask], [ChannelAccessProfileId]) VALUES (N'c5d5a684-ec36-4427-aa48-3efed95bd8e1', N'00000000-0000-0000-0000-000000000000', N'46633762-f41d-e711-80d3-00155d00662d', N'0dc8f72c-57d5-4b4d-8892-fe6aac0e4b81', 1, CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 1, N'ad781ef1-8c15-e511-a1ce-0023ae753112')
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_channelaccessprofile_entityaccesslevels]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_channelaccessprofile_entityaccesslevels] ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]
(
	[EntityAccessLevelId] ASC
)
INCLUDE ( 	[ComponentState]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_channelaccessprofileentityaccesslevels]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_channelaccessprofileentityaccesslevels] ON [dbo].[ChannelAccessProfileEntityAccessLevelBase]
(
	[ChannelAccessProfileEntityAccessLevelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
