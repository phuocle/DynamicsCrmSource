


--
-- base view for botcomponent_botcomponent
--
create view dbo.[botcomponent_botcomponent]
 (

    -- physical attributes
    [botcomponent_botcomponentId],
    [VersionNumber],
    [botcomponentidOne],
    [botcomponentidTwo],
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
    [T1].[botcomponent_botcomponentId],
    [T1].[VersionNumber],
    [T1].[botcomponentidOne],
    [T1].[botcomponentidTwo],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [botcomponent_botcomponentBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0