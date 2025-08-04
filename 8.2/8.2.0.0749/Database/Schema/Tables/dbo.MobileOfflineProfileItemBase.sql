CREATE TABLE [dbo].[MobileOfflineProfileItemBase]
(
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_ComponentState] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[MobileOfflineProfileItemId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[GetRelatedEntityRecords] [bit] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_GetRelatedEntityRecords] DEFAULT ((0)),
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[ProcessId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_IsManaged] DEFAULT ((0)),
[RegardingObjectId] [uniqueidentifier] NULL,
[PublishedOn] [datetime] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[StageId] [uniqueidentifier] NULL,
[SelectedEntityTypeCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CanBeFollowed] [bit] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_CanBeFollowed] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[IsVisibleInGrid] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_IsVisibleInGrid] DEFAULT ((1)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ProfileItemRule] [uniqueidentifier] NULL,
[ViewQuery] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MobileOfflineProfileItemIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] DEFAULT (newid()),
[OrganizationId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_OverwriteTime] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SelectedEntityMetadata] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EntityObjectTypeCode] [int] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_EntityObjectTypeCode] DEFAULT ((0)),
[IsValidated] [bit] NOT NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_IsValidated] DEFAULT ((0)),
[RecordsOwnedByMe] [bit] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMe] DEFAULT ((0)),
[ProfileItemEntityFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RecordsOwnedByMyTeam] [bit] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyTeam] DEFAULT ((0)),
[RecordDistributionCriteria] [int] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordDistributionCriteria] DEFAULT ((0)),
[RelationshipData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RecordsOwnedByMyBusinessUnit] [bit] NULL CONSTRAINT [DF_MobileOfflineProfileItemBase_RecordsOwnedByMyBusinessUnit] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD CONSTRAINT [cndx_PrimaryKey_MobileOfflineProfileItem] PRIMARY KEY CLUSTERED  ([MobileOfflineProfileItemId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD CONSTRAINT [UQ_MobileOfflineProfileItemBase_MobileOfflineProfileItemIdUnique] UNIQUE NONCLUSTERED  ([MobileOfflineProfileItemIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBase] ADD CONSTRAINT [UQ_MobileOfflineProfileItemBase_SelectedEntityTypeCodeRegardingObjectIdUnique] UNIQUE NONCLUSTERED  ([RegardingObjectId], [SelectedEntityTypeCode], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MobileOfflineProfileItemBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
