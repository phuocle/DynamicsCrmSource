USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ReplicationBacklog]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for ReplicationBacklog
--
create view [dbo].[ReplicationBacklog]
 (
    -- logical attributes
    [TargetObjectIdName],

    -- physical attributes
    [Data],
    [ReplicationBacklogId],
    [ReplicationBacklogType],
    [TargetObjectId],
    [TargetObjectTypeCode],
    [TargetDatacenterId]
) with view_metadata as
select
    -- logical attributes
    [replicationbacklog_target_report].[Name],

    -- physical attribute
    [ReplicationBacklogBase].[Data],
    [ReplicationBacklogBase].[ReplicationBacklogId],
    [ReplicationBacklogBase].[ReplicationBacklogType],
    [ReplicationBacklogBase].[TargetObjectId],
    [ReplicationBacklogBase].[TargetObjectTypeCode],
    [ReplicationBacklogBase].[TargetDatacenterId]
from [ReplicationBacklogBase] 
    left join [ReportBase] [replicationbacklog_target_report] on ([ReplicationBacklogBase].[TargetObjectId] = [replicationbacklog_target_report].[ReportId] and [replicationbacklog_target_report].OverwriteTime = 0 and [replicationbacklog_target_report].ComponentState = 0)

GO
