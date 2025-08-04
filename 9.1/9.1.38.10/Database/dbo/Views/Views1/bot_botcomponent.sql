


--
-- base view for bot_botcomponent
--
create view dbo.[bot_botcomponent]
 (

    -- physical attributes
    [bot_botcomponentId],
    [VersionNumber],
    [botid],
    [botcomponentid],
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
    [T1].[bot_botcomponentId],
    [T1].[VersionNumber],
    [T1].[botid],
    [T1].[botcomponentid],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [bot_botcomponentBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0