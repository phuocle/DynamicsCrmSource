


--
-- base view for ServicePlanAppModules
--
create view dbo.[ServicePlanAppModules]
 (

    -- physical attributes
    [ServicePlanAppModulesId],
    [VersionNumber],
    [ServicePlanId],
    [AppModuleId],
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
    [T1].[ServicePlanAppModulesId],
    [T1].[VersionNumber],
    [T1].[ServicePlanId],
    [T1].[AppModuleId],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [ServicePlanAppModulesBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0