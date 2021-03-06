USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RollupProperties]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for RollupProperties
--
create view [dbo].[RollupProperties]
 (

    -- physical attributes
    [RollupPropertiesId],
    [AggregateType],
    [AllowHierarchyOnSource],
    [RollupEntityLogicalName],
    [RollupEntityTypeCode],
    [RollupAttributeLogicalName],
    [RollupFilterAttributes],
    [AggregateEntityLogicalName],
    [AggregateEntityTypeCode],
    [AggregateAttributeLogicalName],
    [AggregateFilterAttributes],
    [AggregateRelationshipName],
    [SourceHierarchicalRelationshipName],
    [LastCalculationTime],
    [InitialValueCalculationStatus],
    [BootstrapRollupAsyncJobId],
    [IncrementalRollupAsyncJobId],
    [BootstrapRetryCount],
    [BootstrapStepNumber],
    [RollupEntityBaseTableName],
    [RollupEntityPrimaryKeyPhysicalName],
    [RollupStateAttributePhysicalName],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [DataType],
    [BootstrapTargetPointer],
    [BootstrapCurrentDepth],
    [IsActivityPartyIncluded]
) with view_metadata as
select

    -- physical attribute
    [RollupPropertiesBase].[RollupPropertiesId],
    [RollupPropertiesBase].[AggregateType],
    [RollupPropertiesBase].[AllowHierarchyOnSource],
    [RollupPropertiesBase].[RollupEntityLogicalName],
    [RollupPropertiesBase].[RollupEntityTypeCode],
    [RollupPropertiesBase].[RollupAttributeLogicalName],
    [RollupPropertiesBase].[RollupFilterAttributes],
    [RollupPropertiesBase].[AggregateEntityLogicalName],
    [RollupPropertiesBase].[AggregateEntityTypeCode],
    [RollupPropertiesBase].[AggregateAttributeLogicalName],
    [RollupPropertiesBase].[AggregateFilterAttributes],
    [RollupPropertiesBase].[AggregateRelationshipName],
    [RollupPropertiesBase].[SourceHierarchicalRelationshipName],
    [RollupPropertiesBase].[LastCalculationTime],
    [RollupPropertiesBase].[InitialValueCalculationStatus],
    [RollupPropertiesBase].[BootstrapRollupAsyncJobId],
    [RollupPropertiesBase].[IncrementalRollupAsyncJobId],
    [RollupPropertiesBase].[BootstrapRetryCount],
    [RollupPropertiesBase].[BootstrapStepNumber],
    [RollupPropertiesBase].[RollupEntityBaseTableName],
    [RollupPropertiesBase].[RollupEntityPrimaryKeyPhysicalName],
    [RollupPropertiesBase].[RollupStateAttributePhysicalName],
    [RollupPropertiesBase].[StateCode],
    [RollupPropertiesBase].[StatusCode],
    [RollupPropertiesBase].[VersionNumber],
    [RollupPropertiesBase].[DataType],
    [RollupPropertiesBase].[BootstrapTargetPointer],
    [RollupPropertiesBase].[BootstrapCurrentDepth],
    [RollupPropertiesBase].[IsActivityPartyIncluded]
from [RollupPropertiesBase] 

GO
