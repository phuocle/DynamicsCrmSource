CREATE TABLE [dbo].[RollupPropertiesBase] (
    [InitialValueCalculationStatus]      INT              CONSTRAINT [DF_RollupPropertiesBase_InitialValueCalculationStatus] DEFAULT ((0)) NOT NULL,
    [RollupEntityPrimaryKeyPhysicalName] NVARCHAR (64)    NULL,
    [AggregateFilterAttributes]          NVARCHAR (4000)  NULL,
    [VersionNumber]                      ROWVERSION       NULL,
    [RollupPropertiesId]                 UNIQUEIDENTIFIER NOT NULL,
    [AggregateEntityTypeCode]            INT              NOT NULL,
    [RollupAttributeLogicalName]         NVARCHAR (128)   NOT NULL,
    [SourceHierarchicalRelationshipName] NVARCHAR (4000)  NULL,
    [AggregateEntityLogicalName]         NVARCHAR (128)   NOT NULL,
    [BootstrapTargetPointer]             INT              NULL,
    [IncrementalRollupAsyncJobId]        UNIQUEIDENTIFIER NULL,
    [AllowHierarchyOnSource]             BIT              CONSTRAINT [DF_RollupPropertiesBase_AllowHierarchyOnSource] DEFAULT ((0)) NULL,
    [DataType]                           NVARCHAR (64)    NOT NULL,
    [BootstrapCurrentDepth]              INT              NULL,
    [BootstrapRetryCount]                INT              NULL,
    [RollupFilterAttributes]             NVARCHAR (4000)  NULL,
    [StateCode]                          INT              NOT NULL,
    [AggregateRelationshipName]          NVARCHAR (4000)  NULL,
    [LastCalculationTime]                DATETIME         NULL,
    [BootstrapStepNumber]                INT              NULL,
    [StatusCode]                         INT              NULL,
    [IsActivityPartyIncluded]            INT              NULL,
    [BootstrapRollupAsyncJobId]          UNIQUEIDENTIFIER NULL,
    [AggregateType]                      INT              CONSTRAINT [DF_RollupPropertiesBase_AggregateType] DEFAULT ((0)) NOT NULL,
    [RollupEntityBaseTableName]          NVARCHAR (64)    NULL,
    [RollupEntityLogicalName]            NVARCHAR (128)   NOT NULL,
    [RollupEntityTypeCode]               INT              NOT NULL,
    [AggregateAttributeLogicalName]      NVARCHAR (128)   NULL,
    [RollupStateAttributePhysicalName]   NVARCHAR (64)    NULL,
    CONSTRAINT [ndx_PrimaryKey_RollupProperty] PRIMARY KEY CLUSTERED ([RollupPropertiesId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RollupPropertiesBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RollupPropertiesBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_RollupJobDequeue]
    ON [dbo].[RollupPropertiesBase]([StateCode] ASC, [StatusCode] ASC, [InitialValueCalculationStatus] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_RollupsByEntityCacheLoader]
    ON [dbo].[RollupPropertiesBase]([RollupEntityTypeCode] ASC, [AllowHierarchyOnSource] ASC, [DataType] ASC) WITH (FILLFACTOR = 80);

