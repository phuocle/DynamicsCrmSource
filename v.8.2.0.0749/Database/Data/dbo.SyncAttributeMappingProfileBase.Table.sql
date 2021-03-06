USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SyncAttributeMappingProfileBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SyncAttributeMappingProfileBase](
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[Description] [nvarchar](max) NULL,
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_OverwriteTime]  DEFAULT ((0)),
	[VersionNumber] [timestamp] NULL,
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_ComponentState]  DEFAULT ((0)),
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_IsManaged]  DEFAULT ((0)),
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[SyncAttributeMappingProfileId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[SyncAttributeMappingProfileIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_SyncAttributeMappingProfileBase_SyncAttributeMappingProfileIdUnique]  DEFAULT (newid())
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[SyncAttributeMappingProfileBase] ([SolutionId], [Description], [OverwriteTime], [ComponentState], [IsManaged], [OrganizationId], [CreatedBy], [ModifiedBy], [CreatedOn], [SyncAttributeMappingProfileId], [Name], [SupportingSolutionId], [CreatedOnBehalfBy], [ModifiedOn], [ModifiedOnBehalfBy], [SyncAttributeMappingProfileIdUnique]) VALUES (N'fd140aad-4df4-11dd-bd17-0019b9312238', N'The default profile for system admin user.', CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, 0, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, NULL, CAST(N'2017-04-10 13:52:06.000' AS DateTime), N'94ee15e0-f41d-e711-80d3-00155d00662d', N'SysAdminProfile', NULL, NULL, CAST(N'2017-04-10 14:26:32.000' AS DateTime), NULL, N'caad0cc7-d8fd-466f-b327-c3bec07d03cc')
