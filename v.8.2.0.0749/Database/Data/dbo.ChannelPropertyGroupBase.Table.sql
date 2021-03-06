USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelPropertyGroupBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelPropertyGroupBase](
	[IsManaged] [bit] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ChannelPropertyGroupId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[statecode] [int] NULL,
	[RegardingTypeCode] [int] NULL,
	[ComponentState] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ChannelPropertyGroupIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[statuscode] [int] NULL,
	[CreatedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_ChannelPropertyGroup] PRIMARY KEY CLUSTERED 
(
	[ChannelPropertyGroupId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelPropertyGroupBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_TitleChannelPropertyGroupId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyGroupId] ON [dbo].[ChannelPropertyGroupBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] ADD  CONSTRAINT [DF_ChannelPropertyGroupBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] ADD  CONSTRAINT [DF_ChannelPropertyGroupBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] ADD  CONSTRAINT [DF_ChannelPropertyGroupBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] ADD  CONSTRAINT [DF_ChannelPropertyGroupBase_ChannelPropertyGroupIdUnique]  DEFAULT (newid()) FOR [ChannelPropertyGroupIdUnique]
GO
ALTER TABLE [dbo].[ChannelPropertyGroupBase] ADD  CONSTRAINT [DF_ChannelPropertyGroupBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
