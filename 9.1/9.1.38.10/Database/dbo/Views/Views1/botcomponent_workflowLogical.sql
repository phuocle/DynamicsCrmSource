


--
-- logical view for botcomponent_workflowLogical
--
create view dbo.[botcomponent_workflowLogical]
 (

    -- physical attributes
    [botcomponent_workflowId],
    [VersionNumber],
    [botcomponentid],
    [workflowid],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable]
) with view_metadata as
select

    -- physical attribute
    [T1].[botcomponent_workflowId],
    [T1].[VersionNumber],
    [T1].[botcomponentid],
    [T1].[workflowid],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [botcomponent_workflowBase] [T1]
where T1.OverwriteTime = 0