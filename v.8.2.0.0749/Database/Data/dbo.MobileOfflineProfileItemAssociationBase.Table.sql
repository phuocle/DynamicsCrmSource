USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MobileOfflineProfileItemAssociationBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MobileOfflineProfileItemAssociationBase](
	[Name] [nvarchar](200) NULL,
	[ProfileItemAssociationEntityFilter] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[StageId] [uniqueidentifier] NULL,
	[IsManaged] [bit] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[PublishedOn] [datetime] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[MobileOfflineProfileItemAssociationIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[MobileOfflineProfileItemId] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL,
	[IsValidated] [bit] NOT NULL,
	[RelationshipName] [nvarchar](200) NULL,
	[RelationshipData] [nvarchar](max) NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[RelationshipDisplayName] [nvarchar](200) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[RelationshipId] [uniqueidentifier] NOT NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[SelectedRelationShipsSchema] [int] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[MobileOfflineProfileItemAssociationId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItemAssociation] PRIMARY KEY CLUSTERED 
(
	[MobileOfflineProfileItemAssociationId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique] UNIQUE NONCLUSTERED 
(
	[MobileOfflineProfileItemAssociationIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemIdRelationshipIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [UQ_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemIdRelationshipIdUnique] UNIQUE NONCLUSTERED 
(
	[RelationshipId] ASC,
	[MobileOfflineProfileItemId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MobileOfflineProfileItemAssociationBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_MobileOfflineProfileItemAssociationIdUnique]  DEFAULT (newid()) FOR [MobileOfflineProfileItemAssociationIdUnique]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_IsValidated]  DEFAULT ((0)) FOR [IsValidated]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBase] ADD  CONSTRAINT [DF_MobileOfflineProfileItemAssociationBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
