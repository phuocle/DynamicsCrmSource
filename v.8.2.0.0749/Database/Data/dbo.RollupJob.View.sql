USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RollupJob]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for RollupJob
--
create view [dbo].[RollupJob]
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

GO
