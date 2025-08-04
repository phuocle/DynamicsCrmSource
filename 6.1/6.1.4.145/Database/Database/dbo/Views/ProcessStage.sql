


--
-- base view for ProcessStage
--
create view dbo.[ProcessStage]
 (
    -- logical attributes
    [OwningBusinessUnit],
    [OwnerId],
    [ProcessIdName],
    [OwnerIdType],

    -- physical attributes
    [PrimaryEntityTypeCode],
    [ProcessId],
    [ProcessStageId],
    [StageCategory],
    [StageName],
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [process_processstage].[OwningBusinessUnit],
    [process_processstage].[OwnerId],
    [process_processstage].[Name],
    [process_processstage].[OwnerIdType],

    -- physical attribute
    [ProcessStageBase].[PrimaryEntityTypeCode],
    [ProcessStageBase].[ProcessId],
    [ProcessStageBase].[ProcessStageId],
    [ProcessStageBase].[StageCategory],
    [ProcessStageBase].[StageName],
    [ProcessStageBase].[VersionNumber]
from [ProcessStageBase] 
    left join [WorkflowBase] [process_processstage] on ([ProcessStageBase].[ProcessId] = [process_processstage].[WorkflowId] and [process_processstage].OverwriteTime = 0 and [process_processstage].ComponentState = 0)
