


--
-- logical view for ComplexControlLogical
--
create view dbo.[ComplexControlLogical]
 (
    -- logical attributes
    [OrganizationIdName],

    -- physical attributes
    [ComplexControlIdUnique],
    [ComplexControlId],
    [ComplexControlXml],
    [Description],
    [Name],
    [OrganizationId],
    [Type],
    [Version],
    [VersionNumber],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [organization_complexcontrols].[Name],

    -- physical attribute
    [T1].[ComplexControlIdUnique],
    [T1].[ComplexControlId],
    [T1].[ComplexControlXml],
    [T1].[Description],
    [T1].[Name],
    [T1].[OrganizationId],
    [T1].[Type],
    [T1].[Version],
    [T1].[VersionNumber],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion]
from [ComplexControlBase] [T1]
    left join [OrganizationBase] [organization_complexcontrols] on ([T1].[OrganizationId] = [organization_complexcontrols].[OrganizationId])
where T1.OverwriteTime = 0