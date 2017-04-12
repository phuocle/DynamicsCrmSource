USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SystemForm]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for SystemForm
--
create view [dbo].[SystemForm]
 (
    -- logical attributes
    [AncestorFormIdName],
    [OrganizationIdName],

    -- physical attributes
    [ComponentState],
    [Description],
    [FormId],
    [FormIdUnique],
    [FormXml],
    [IsDefault],
    [Name],
    [ObjectTypeCode],
    [OrganizationId],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [Type],
    [Version],
    [VersionNumber],
    [IsManaged],
    [IsCustomizable],
    [PublishedOn],
    [AncestorFormId],
    [FormXmlManaged],
    [CanBeDeleted],
    [IntroducedVersion],
    [IsAIRMerged],
    [FormPresentation],
    [FormActivationState],
    [IsTabletEnabled],
    [UniqueName],
    [IsDesktopEnabled]
) with view_metadata as
select
    -- logical attributes
    [form_ancestor_form].[Name],
    [organization_systemforms].[Name],

    -- physical attribute
    [T1].[ComponentState],
    [T1].[Description],
    [T1].[FormId],
    [T1].[FormIdUnique],
    [T1].[FormXml],
    [T1].[IsDefault],
    [T1].[Name],
    [T1].[ObjectTypeCode],
    [T1].[OrganizationId],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[Type],
    [T1].[Version],
    [T1].[VersionNumber],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[PublishedOn],
    [T1].[AncestorFormId],
    [T1].[FormXmlManaged],
    [T1].[CanBeDeleted],
    [T1].[IntroducedVersion],
    [T1].[IsAIRMerged],
    [T1].[FormPresentation],
    [T1].[FormActivationState],
    [T1].[IsTabletEnabled],
    [T1].[UniqueName],
    [T1].[IsDesktopEnabled]
from [SystemFormBase] [T1]
    left join [SystemFormBase] [form_ancestor_form] on ([T1].[AncestorFormId] = [form_ancestor_form].[FormId] and [form_ancestor_form].OverwriteTime = 0 and [form_ancestor_form].ComponentState = 0)
    left join [OrganizationBase] [organization_systemforms] with(nolock) on ([T1].[OrganizationId] = [organization_systemforms].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
