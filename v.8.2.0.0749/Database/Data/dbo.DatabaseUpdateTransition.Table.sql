USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DatabaseUpdateTransition]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DatabaseUpdateTransition](
	[TransitionDateTime] [datetime] NULL,
	[CurrentBuildVersion] [nvarchar](48) NULL,
	[CurrentMetadataVersion] [nvarchar](48) NULL,
	[CurrentMetadataForMetadataVersion] [nvarchar](48) NULL,
	[TargetVersion] [nvarchar](48) NULL,
	[IsUninstall] [bit] NULL
) ON [PRIMARY]

GO
INSERT [dbo].[DatabaseUpdateTransition] ([TransitionDateTime], [CurrentBuildVersion], [CurrentMetadataVersion], [CurrentMetadataForMetadataVersion], [TargetVersion], [IsUninstall]) VALUES (CAST(N'2014-09-16 11:30:06.503' AS DateTime), N'6.0.0.301', N'6.0.0.301', N'6.0.0.301', N'7.0.0.2019', 0)
INSERT [dbo].[DatabaseUpdateTransition] ([TransitionDateTime], [CurrentBuildVersion], [CurrentMetadataVersion], [CurrentMetadataForMetadataVersion], [TargetVersion], [IsUninstall]) VALUES (CAST(N'2014-09-18 23:11:39.360' AS DateTime), N'7.0.0.2019', N'7.0.0.2019', N'7.0.0.2019', N'7.0.0.3027', 0)
INSERT [dbo].[DatabaseUpdateTransition] ([TransitionDateTime], [CurrentBuildVersion], [CurrentMetadataVersion], [CurrentMetadataForMetadataVersion], [TargetVersion], [IsUninstall]) VALUES (CAST(N'2015-09-17 07:51:35.800' AS DateTime), N'7.0.0.3027', N'7.0.0.3027', N'7.0.0.3027', N'8.0.0.528', 0)
INSERT [dbo].[DatabaseUpdateTransition] ([TransitionDateTime], [CurrentBuildVersion], [CurrentMetadataVersion], [CurrentMetadataForMetadataVersion], [TargetVersion], [IsUninstall]) VALUES (CAST(N'2017-04-10 14:12:30.200' AS DateTime), N'8.0.0.528', N'8.0.0.528', N'8.0.0.528', N'8.2.0.749', 0)
