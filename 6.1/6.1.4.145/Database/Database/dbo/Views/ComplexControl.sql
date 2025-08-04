


--
-- base view for ComplexControl
--
create view dbo.[ComplexControl]
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
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [organization_complexcontrols].[Name],

    -- physical attribute
    [ComplexControlBase].[ComplexControlIdUnique],
    [ComplexControlBase].[ComplexControlId],
    [ComplexControlBase].[ComplexControlXml],
    [ComplexControlBase].[Description],
    [ComplexControlBase].[Name],
    [ComplexControlBase].[OrganizationId],
    [ComplexControlBase].[Type],
    [ComplexControlBase].[Version],
    [ComplexControlBase].[VersionNumber]
from [ComplexControlBase] 
    left join [OrganizationBase] [organization_complexcontrols] with(nolock) on ([ComplexControlBase].[OrganizationId] = [organization_complexcontrols].[OrganizationId])
