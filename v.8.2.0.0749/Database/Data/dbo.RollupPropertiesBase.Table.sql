USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RollupPropertiesBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RollupPropertiesBase](
	[BootstrapStepNumber] [int] NULL,
	[InitialValueCalculationStatus] [int] NOT NULL CONSTRAINT [DF_RollupPropertiesBase_InitialValueCalculationStatus]  DEFAULT ((0)),
	[RollupEntityPrimaryKeyPhysicalName] [nvarchar](64) NULL,
	[AggregateType] [int] NOT NULL CONSTRAINT [DF_RollupPropertiesBase_AggregateType]  DEFAULT ((0)),
	[AggregateFilterAttributes] [nvarchar](4000) NULL,
	[RollupStateAttributePhysicalName] [nvarchar](64) NULL,
	[VersionNumber] [timestamp] NULL,
	[RollupPropertiesId] [uniqueidentifier] NOT NULL,
	[AllowHierarchyOnSource] [bit] NULL CONSTRAINT [DF_RollupPropertiesBase_AllowHierarchyOnSource]  DEFAULT ((0)),
	[AggregateEntityTypeCode] [int] NOT NULL,
	[RollupAttributeLogicalName] [nvarchar](50) NOT NULL,
	[AggregateEntityLogicalName] [nvarchar](64) NOT NULL,
	[BootstrapTargetPointer] [int] NULL,
	[IncrementalRollupAsyncJobId] [uniqueidentifier] NULL,
	[BootstrapRollupAsyncJobId] [uniqueidentifier] NULL,
	[RollupFilterAttributes] [nvarchar](4000) NULL,
	[StatusCode] [int] NULL,
	[StateCode] [int] NOT NULL,
	[DataType] [nvarchar](64) NOT NULL,
	[LastCalculationTime] [datetime] NULL,
	[AggregateRelationshipName] [nvarchar](4000) NULL,
	[SourceHierarchicalRelationshipName] [nvarchar](4000) NULL,
	[BootstrapRetryCount] [int] NULL,
	[RollupEntityBaseTableName] [nvarchar](64) NULL,
	[RollupEntityLogicalName] [nvarchar](64) NOT NULL,
	[BootstrapCurrentDepth] [int] NULL,
	[RollupEntityTypeCode] [int] NOT NULL,
	[AggregateAttributeLogicalName] [nvarchar](50) NULL,
	[IsActivityPartyIncluded] [int] NULL,
 CONSTRAINT [ndx_PrimaryKey_RollupProperty] PRIMARY KEY CLUSTERED 
(
	[RollupPropertiesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[RollupPropertiesBase] ([BootstrapStepNumber], [InitialValueCalculationStatus], [RollupEntityPrimaryKeyPhysicalName], [AggregateType], [AggregateFilterAttributes], [RollupStateAttributePhysicalName], [RollupPropertiesId], [AllowHierarchyOnSource], [AggregateEntityTypeCode], [RollupAttributeLogicalName], [AggregateEntityLogicalName], [BootstrapTargetPointer], [IncrementalRollupAsyncJobId], [BootstrapRollupAsyncJobId], [RollupFilterAttributes], [StatusCode], [StateCode], [DataType], [LastCalculationTime], [AggregateRelationshipName], [SourceHierarchicalRelationshipName], [BootstrapRetryCount], [RollupEntityBaseTableName], [RollupEntityLogicalName], [BootstrapCurrentDepth], [RollupEntityTypeCode], [AggregateAttributeLogicalName], [IsActivityPartyIncluded]) VALUES (1, 3, N'AccountId', 1, N'estimatedvalue,statecode', N'OpenRevenue_State', N'306845ef-446a-42e5-8df8-11c31bafaded', 1, 3, N'openrevenue', N'opportunity', 0, N'5ebaf16e-0b63-4713-915d-752732899802', N'e8989373-f193-4c80-ac08-051879e24ada', NULL, 1, 0, N'money', CAST(N'2017-04-10 14:58:56.920' AS DateTime), N'opportunity_parent_account', N'account_parent_account', 0, N'AccountBase', N'account', NULL, 1, N'estimatedvalue', NULL)
INSERT [dbo].[RollupPropertiesBase] ([BootstrapStepNumber], [InitialValueCalculationStatus], [RollupEntityPrimaryKeyPhysicalName], [AggregateType], [AggregateFilterAttributes], [RollupStateAttributePhysicalName], [RollupPropertiesId], [AllowHierarchyOnSource], [AggregateEntityTypeCode], [RollupAttributeLogicalName], [AggregateEntityLogicalName], [BootstrapTargetPointer], [IncrementalRollupAsyncJobId], [BootstrapRollupAsyncJobId], [RollupFilterAttributes], [StatusCode], [StateCode], [DataType], [LastCalculationTime], [AggregateRelationshipName], [SourceHierarchicalRelationshipName], [BootstrapRetryCount], [RollupEntityBaseTableName], [RollupEntityLogicalName], [BootstrapCurrentDepth], [RollupEntityTypeCode], [AggregateAttributeLogicalName], [IsActivityPartyIncluded]) VALUES (1, 3, N'knowledgearticleId', 1, N'knowledgearticleview', N'KnowledgeArticleViews_State', N'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5', 1, 9955, N'knowledgearticleviews', N'knowledgearticleviews', 0, N'c805522d-bbb3-4375-815d-fe9bcb847978', N'0e36019a-e3e5-4edd-a2ac-f83deb1ca4a7', NULL, 1, 0, N'int', CAST(N'2017-04-10 14:59:02.247' AS DateTime), N'knowledgearticle_views', N'knowledgearticle_rootarticle_id', 0, N'KnowledgeArticleBase', N'knowledgearticle', NULL, 9953, N'knowledgearticleview', NULL)
INSERT [dbo].[RollupPropertiesBase] ([BootstrapStepNumber], [InitialValueCalculationStatus], [RollupEntityPrimaryKeyPhysicalName], [AggregateType], [AggregateFilterAttributes], [RollupStateAttributePhysicalName], [RollupPropertiesId], [AllowHierarchyOnSource], [AggregateEntityTypeCode], [RollupAttributeLogicalName], [AggregateEntityLogicalName], [BootstrapTargetPointer], [IncrementalRollupAsyncJobId], [BootstrapRollupAsyncJobId], [RollupFilterAttributes], [StatusCode], [StateCode], [DataType], [LastCalculationTime], [AggregateRelationshipName], [SourceHierarchicalRelationshipName], [BootstrapRetryCount], [RollupEntityBaseTableName], [RollupEntityLogicalName], [BootstrapCurrentDepth], [RollupEntityTypeCode], [AggregateAttributeLogicalName], [IsActivityPartyIncluded]) VALUES (1, 3, N'AccountId', 0, N'statecode', N'OpenDeals_State', N'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd', 1, 3, N'opendeals', N'opportunity', 0, N'5ebaf16e-0b63-4713-915d-752732899802', N'04aa7dee-3e0c-4eb0-936c-e523751cb4b1', NULL, 1, 0, N'int', CAST(N'2017-04-10 14:59:10.537' AS DateTime), N'opportunity_parent_account', N'account_parent_account', 0, N'AccountBase', N'account', NULL, 1, N'parentaccountid', NULL)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RollupPropertiesBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_RollupJobDequeue]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_RollupJobDequeue] ON [dbo].[RollupPropertiesBase]
(
	[StateCode] ASC,
	[StatusCode] ASC,
	[InitialValueCalculationStatus] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_for_RollupsByEntityCacheLoader]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_RollupsByEntityCacheLoader] ON [dbo].[RollupPropertiesBase]
(
	[RollupEntityTypeCode] ASC,
	[AllowHierarchyOnSource] ASC,
	[DataType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
