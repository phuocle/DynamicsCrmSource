USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MobileOfflineProfileBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MobileOfflineProfileBase](
	[PublishedOn] [datetime] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[IsManaged] [bit] NOT NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[Description] [nvarchar](max) NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[MobileOfflineProfileId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL,
	[MobileOfflineProfileIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[Name] [nvarchar](200) NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[SelectedEntityMetadata] [nvarchar](max) NULL,
	[IsValidated] [bit] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfile] PRIMARY KEY CLUSTERED 
(
	[MobileOfflineProfileId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_MobileOfflineProfileBase_MobileOfflineProfileIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [UQ_MobileOfflineProfileBase_MobileOfflineProfileIdUnique] UNIQUE NONCLUSTERED 
(
	[MobileOfflineProfileIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ_MobileOfflineProfileBase_NameUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [UQ_MobileOfflineProfileBase_NameUnique] UNIQUE NONCLUSTERED 
(
	[Name] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MobileOfflineProfileBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [DF_MobileOfflineProfileBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [DF_MobileOfflineProfileBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [DF_MobileOfflineProfileBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [DF_MobileOfflineProfileBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [DF_MobileOfflineProfileBase_MobileOfflineProfileIdUnique]  DEFAULT (newid()) FOR [MobileOfflineProfileIdUnique]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBase] ADD  CONSTRAINT [DF_MobileOfflineProfileBase_IsValidated]  DEFAULT ((0)) FOR [IsValidated]
GO
