CREATE TABLE [dbo].[RollupPropertiesBase] (
    [BootstrapStepNumber]                INT              NULL,
    [InitialValueCalculationStatus]      INT              CONSTRAINT [DF_RollupPropertiesBase_InitialValueCalculationStatus] DEFAULT ((0)) NOT NULL,
    [RollupEntityPrimaryKeyPhysicalName] NVARCHAR (64)    NULL,
    [AggregateType]                      INT              CONSTRAINT [DF_RollupPropertiesBase_AggregateType] DEFAULT ((0)) NOT NULL,
    [AggregateFilterAttributes]          NVARCHAR (4000)  NULL,
    [RollupStateAttributePhysicalName]   NVARCHAR (64)    NULL,
    [VersionNumber]                      ROWVERSION       NULL,
    [RollupPropertiesId]                 UNIQUEIDENTIFIER NOT NULL,
    [AllowHierarchyOnSource]             BIT              CONSTRAINT [DF_RollupPropertiesBase_AllowHierarchyOnSource] DEFAULT ((0)) NULL,
    [AggregateEntityTypeCode]            INT              NOT NULL,
    [RollupAttributeLogicalName]         NVARCHAR (50)    NOT NULL,
    [AggregateEntityLogicalName]         NVARCHAR (64)    NOT NULL,
    [BootstrapTargetPointer]             INT              NULL,
    [IncrementalRollupAsyncJobId]        UNIQUEIDENTIFIER NULL,
    [BootstrapRollupAsyncJobId]          UNIQUEIDENTIFIER NULL,
    [RollupFilterAttributes]             NVARCHAR (4000)  NULL,
    [StatusCode]                         INT              NULL,
    [StateCode]                          INT              NOT NULL,
    [DataType]                           NVARCHAR (64)    NOT NULL,
    [LastCalculationTime]                DATETIME         NULL,
    [AggregateRelationshipName]          NVARCHAR (4000)  NULL,
    [SourceHierarchicalRelationshipName] NVARCHAR (4000)  NULL,
    [BootstrapRetryCount]                INT              NULL,
    [RollupEntityBaseTableName]          NVARCHAR (64)    NULL,
    [RollupEntityLogicalName]            NVARCHAR (64)    NOT NULL,
    [BootstrapCurrentDepth]              INT              NULL,
    [RollupEntityTypeCode]               INT              NOT NULL,
    [AggregateAttributeLogicalName]      NVARCHAR (50)    NULL,
    [IsActivityPartyIncluded]            INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_RollupProperty] PRIMARY KEY CLUSTERED ([RollupPropertiesId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RollupPropertiesBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_RollupsByEntityCacheLoader]
    ON [dbo].[RollupPropertiesBase]([RollupEntityTypeCode] ASC, [AllowHierarchyOnSource] ASC, [DataType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_RollupJobDequeue]
    ON [dbo].[RollupPropertiesBase]([StateCode] ASC, [StatusCode] ASC, [InitialValueCalculationStatus] ASC) WITH (FILLFACTOR = 80);

