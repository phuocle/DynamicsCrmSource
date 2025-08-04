


--
-- base view for RollupJob
--
create view dbo.[RollupJob]
 (

    -- physical attributes
    [RollupJobId],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [RollupPropertiesId],
    [PostponeUntil],
    [StateCode],
    [StatusCode],
    [RetryCount],
    [SourceEntityTypeCode],
    [RecordCreatedOn],
    [DepthProcessed]
) with view_metadata as
select

    -- physical attribute
    [RollupJobBase].[RollupJobId],
    [RollupJobBase].[RegardingObjectId],
    [RollupJobBase].[RegardingObjectTypeCode],
    [RollupJobBase].[RollupPropertiesId],
    [RollupJobBase].[PostponeUntil],
    [RollupJobBase].[StateCode],
    [RollupJobBase].[StatusCode],
    [RollupJobBase].[RetryCount],
    [RollupJobBase].[SourceEntityTypeCode],
    [RollupJobBase].[RecordCreatedOn],
    [RollupJobBase].[DepthProcessed]
from [RollupJobBase] 
