CREATE TABLE [dbo].[RollupPropertiesBase]
(
[BootstrapStepNumber] [int] NULL,
[InitialValueCalculationStatus] [int] NOT NULL CONSTRAINT [DF_RollupPropertiesBase_InitialValueCalculationStatus] DEFAULT ((0)),
[RollupEntityPrimaryKeyPhysicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[AggregateType] [int] NOT NULL CONSTRAINT [DF_RollupPropertiesBase_AggregateType] DEFAULT ((0)),
[AggregateFilterAttributes] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RollupStateAttributePhysicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[RollupPropertiesId] [uniqueidentifier] NOT NULL,
[AllowHierarchyOnSource] [bit] NULL CONSTRAINT [DF_RollupPropertiesBase_AllowHierarchyOnSource] DEFAULT ((0)),
[AggregateEntityTypeCode] [int] NOT NULL,
[RollupAttributeLogicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[AggregateEntityLogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[BootstrapTargetPointer] [int] NULL,
[IncrementalRollupAsyncJobId] [uniqueidentifier] NULL,
[BootstrapRollupAsyncJobId] [uniqueidentifier] NULL,
[RollupFilterAttributes] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NULL,
[StateCode] [int] NOT NULL,
[DataType] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[LastCalculationTime] [datetime] NULL,
[AggregateRelationshipName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[SourceHierarchicalRelationshipName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BootstrapRetryCount] [int] NULL,
[RollupEntityBaseTableName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[RollupEntityLogicalName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NOT NULL,
[BootstrapCurrentDepth] [int] NULL,
[RollupEntityTypeCode] [int] NOT NULL,
[AggregateAttributeLogicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[IsActivityPartyIncluded] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RollupPropertiesBase] ADD CONSTRAINT [ndx_PrimaryKey_RollupProperty] PRIMARY KEY CLUSTERED  ([RollupPropertiesId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_RollupsByEntityCacheLoader] ON [dbo].[RollupPropertiesBase] ([RollupEntityTypeCode], [AllowHierarchyOnSource], [DataType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_RollupJobDequeue] ON [dbo].[RollupPropertiesBase] ([StateCode], [StatusCode], [InitialValueCalculationStatus]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RollupPropertiesBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
