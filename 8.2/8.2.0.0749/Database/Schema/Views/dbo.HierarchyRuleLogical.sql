SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for HierarchyRuleLogical
--
create view [dbo].[HierarchyRuleLogical]
 (
    -- logical attributes
    [OrganizationIdName],

    -- physical attributes
    [HierarchyRuleID],
    [PrimaryEntityFormID],
    [RelatedEntityFormId],
    [PrimaryEntityLogicalName],
    [RelatedEntityLogicalName],
    [PublishedOn],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [HierarchyRuleIDUnique],
    [SortBy],
    [IsManaged],
    [ShowDisabled],
    [IntroducedVersion],
    [OrganizationId],
    [Name],
    [Description],
    [VersionNumber],
    [IsCustomizable]
) with view_metadata as
select
    -- logical attributes
    [organization_hierarchyrules].[Name],

    -- physical attribute
    [T1].[HierarchyRuleID],
    [T1].[PrimaryEntityFormID],
    [T1].[RelatedEntityFormId],
    [T1].[PrimaryEntityLogicalName],
    [T1].[RelatedEntityLogicalName],
    [T1].[PublishedOn],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[HierarchyRuleIDUnique],
    [T1].[SortBy],
    [T1].[IsManaged],
    [T1].[ShowDisabled],
    [T1].[IntroducedVersion],
    [T1].[OrganizationId],
    [T1].[Name],
    [T1].[Description],
    [T1].[VersionNumber],
    [T1].[IsCustomizable]
from [HierarchyRuleBase] [T1]
    left join [OrganizationBase] [organization_hierarchyrules] with(nolock) on ([T1].[OrganizationId] = [organization_hierarchyrules].[OrganizationId])
where T1.OverwriteTime = 0
GO
