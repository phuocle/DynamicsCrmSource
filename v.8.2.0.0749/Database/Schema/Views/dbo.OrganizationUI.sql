SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for OrganizationUI
--
create view [dbo].[OrganizationUI]
 (
    -- logical attributes
    [OrganizationIdName],

    -- physical attributes
    [FormId],
    [OrganizationId],
    [FormXml],
    [FieldXml],
    [ObjectTypeCode],
    [PreviewXml],
    [PreviewColumnsetXml],
    [Version],
    [OutlookShortcutIcon],
    [VersionNumber],
    [GridIcon],
    [FormIdUnique],
    [LargeEntityIcon],
    [SolutionId],
    [SupportingSolutionId],
    [OverwriteTime],
    [ComponentState],
    [IsManaged],
    [IsCustomizable]
) with view_metadata as
select
    -- logical attributes
    [lk_organizationuibase_organizationid].[Name],

    -- physical attribute
    [T1].[FormId],
    [T1].[OrganizationId],
    [T1].[FormXml],
    [T1].[FieldXml],
    [T1].[ObjectTypeCode],
    [T1].[PreviewXml],
    [T1].[PreviewColumnsetXml],
    [T1].[Version],
    [T1].[OutlookShortcutIcon],
    [T1].[VersionNumber],
    [T1].[GridIcon],
    [T1].[FormIdUnique],
    [T1].[LargeEntityIcon],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [OrganizationUIBase] [T1]
    left join [OrganizationBase] [lk_organizationuibase_organizationid] with(nolock) on ([T1].[OrganizationId] = [lk_organizationuibase_organizationid].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
