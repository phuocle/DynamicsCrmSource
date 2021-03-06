USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MobileOfflineProfileItemBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MobileOfflineProfileItemBase](
	[IntroducedVersion] [nvarchar](48) NULL,
	[ComponentState] [int] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[MobileOfflineProfileItemId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[GetRelatedEntityRecords] [bit] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[IsManaged] [bit] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[PublishedOn] [datetime] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[StageId] [uniqueidentifier] NULL,
	[SelectedEntityTypeCode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CanBeFollowed] [bit] NULL,
	[ModifiedOn] [datetime] NULL,
	[IsVisibleInGrid] [bit] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[Name] [nvarchar](200) NULL,
	[ProfileItemRule] [uniqueidentifier] NULL,
	[ViewQuery] [nvarchar](max) NULL,
	[MobileOfflineProfileItemIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[SelectedEntityMetadata] [nvarchar](max) NULL,
	[EntityObjectTypeCode] [int] NULL,
	[IsValidated] [bit] NOT NULL,
	[RecordsOwnedByMe] [bit] NULL,
	[ProfileItemEntityFilter] [nvarchar](max) NULL,
	[RecordsOwnedByMyTeam] [bit] NULL,
	[RecordDistributionCriteria] [int] NULL,
	[RelationshipData] [nvarchar](max) NULL,
	[RecordsOwnedByMyBusinessUnit] [bit] NULL,
 CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItem] PRIMARY KEY CLUSTERED 
(
	[MobileOfflineProfileItemId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [UQ_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] UNIQUE NONCLUSTERED 
(
	[MobileOfflineProfileItemIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [UQ_MobileOfflineProfileItemBase_SelectedEntityTypeCodeRegardingObjectIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [UQ_MobileOfflineProfileItemBase_SelectedEntityTypeCodeRegardingObjectIdUnique] UNIQUE NONCLUSTERED 
(
	[RegardingObjectId] ASC,
	[SelectedEntityTypeCode] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MobileOfflineProfileItemBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_GetRelatedEntityRecords]  DEFAULT ((0)) FOR [GetRelatedEntityRecords]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_CanBeFollowed]  DEFAULT ((0)) FOR [CanBeFollowed]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_IsVisibleInGrid]  DEFAULT ((1)) FOR [IsVisibleInGrid]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique]  DEFAULT (newid()) FOR [MobileOfflineProfileItemIdUnique]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_EntityObjectTypeCode]  DEFAULT ((0)) FOR [EntityObjectTypeCode]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_IsValidated]  DEFAULT ((0)) FOR [IsValidated]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMe]  DEFAULT ((0)) FOR [RecordsOwnedByMe]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyTeam]  DEFAULT ((0)) FOR [RecordsOwnedByMyTeam]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordDistributionCriteria]  DEFAULT ((0)) FOR [RecordDistributionCriteria]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyBusinessUnit]  DEFAULT ((0)) FOR [RecordsOwnedByMyBusinessUnit]
GO
