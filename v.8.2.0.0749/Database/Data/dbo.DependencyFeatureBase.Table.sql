USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DependencyFeatureBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DependencyFeatureBase](
	[IntroducedVersion] [nvarchar](48) NULL,
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_ComponentState]  DEFAULT ((0)),
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_IsManaged]  DEFAULT ((0)),
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[DependencyFeatureIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_DependencyFeatureBase_DependencyFeatureIdUnique]  DEFAULT (newid()),
	[DependencyFeatureId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_OverwriteTime]  DEFAULT ((0))
) ON [PRIMARY]

GO
INSERT [dbo].[DependencyFeatureBase] ([IntroducedVersion], [ComponentState], [IsManaged], [SupportingSolutionId], [SolutionId], [DependencyFeatureIdUnique], [DependencyFeatureId], [OverwriteTime]) VALUES (N'6.1', 0, 1, NULL, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'a63aea51-dea0-4def-aee1-b824666a38e1', N'21c4ee89-3867-46fc-94b3-b32fe5c4db73', CAST(N'1900-01-01 00:00:00.000' AS DateTime))
INSERT [dbo].[DependencyFeatureBase] ([IntroducedVersion], [ComponentState], [IsManaged], [SupportingSolutionId], [SolutionId], [DependencyFeatureIdUnique], [DependencyFeatureId], [OverwriteTime]) VALUES (N'7.1', 0, 1, NULL, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'76120faa-ac63-46ac-b839-ce3a67c5d25a', N'83fb9d5c-9d8e-4197-87a8-54d1d0102195', CAST(N'1900-01-01 00:00:00.000' AS DateTime))
INSERT [dbo].[DependencyFeatureBase] ([IntroducedVersion], [ComponentState], [IsManaged], [SupportingSolutionId], [SolutionId], [DependencyFeatureIdUnique], [DependencyFeatureId], [OverwriteTime]) VALUES (N'8.0', 0, 1, NULL, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'0eb078d4-0d0d-45b0-bfb0-f6b96ab91dad', N'778ff6ca-585d-4cce-b4e7-496884394548', CAST(N'1900-01-01 00:00:00.000' AS DateTime))
INSERT [dbo].[DependencyFeatureBase] ([IntroducedVersion], [ComponentState], [IsManaged], [SupportingSolutionId], [SolutionId], [DependencyFeatureIdUnique], [DependencyFeatureId], [OverwriteTime]) VALUES (N'8.1', 0, 1, NULL, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'08f84923-0e0c-440a-8c96-f8ec1ea6be25', N'1a677ace-2c56-456c-a148-357525209762', CAST(N'1900-01-01 00:00:00.000' AS DateTime))
INSERT [dbo].[DependencyFeatureBase] ([IntroducedVersion], [ComponentState], [IsManaged], [SupportingSolutionId], [SolutionId], [DependencyFeatureIdUnique], [DependencyFeatureId], [OverwriteTime]) VALUES (N'8.2', 0, 1, NULL, N'fd140aad-4df4-11dd-bd17-0019b9312238', N'7160d016-93ea-487c-97a9-b0b423c9df32', N'0f324556-5198-4d54-9d35-04160c21d813', CAST(N'1900-01-01 00:00:00.000' AS DateTime))
