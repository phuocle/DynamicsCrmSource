USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelPropertyBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelPropertyBase](
	[statuscode] [int] NULL,
	[IsManaged] [bit] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[DataType] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[Description] [nvarchar](1000) NULL,
	[Applicationsource] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[ChannelPropertyIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[Name] [nvarchar](300) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ChannelPropertyId] [uniqueidentifier] NOT NULL,
	[statecode] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_ChannelProperty] PRIMARY KEY CLUSTERED 
(
	[ChannelPropertyId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ_ChannelPropertyBase_NameRegardingObjectIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ChannelPropertyBase] ADD  CONSTRAINT [UQ_ChannelPropertyBase_NameRegardingObjectIdUnique] UNIQUE NONCLUSTERED 
(
	[Name] ASC,
	[RegardingObjectId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ChannelPropertyBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_TitleChannelPropertyId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_TitleChannelPropertyId] ON [dbo].[ChannelPropertyBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD  CONSTRAINT [DF_ChannelPropertyBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD  CONSTRAINT [DF_ChannelPropertyBase_ChannelPropertyIdUnique]  DEFAULT (newid()) FOR [ChannelPropertyIdUnique]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD  CONSTRAINT [DF_ChannelPropertyBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD  CONSTRAINT [DF_ChannelPropertyBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ChannelPropertyBase] ADD  CONSTRAINT [DF_ChannelPropertyBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
