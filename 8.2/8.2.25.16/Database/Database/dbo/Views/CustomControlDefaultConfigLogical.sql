


--
-- logical view for CustomControlDefaultConfigLogical
--
create view dbo.[CustomControlDefaultConfigLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [CustomControlDefaultConfigId],
    [ControlDescriptionXML],
    [PrimaryEntityTypeCode],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [CustomControlDefaultConfigIdUnique],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [EventsXml]
) with view_metadata as
select
    -- logical attributes
    [lk_customcontroldefaultconfig_createdonbehalfby].[YomiFullName],
    [lk_customcontroldefaultconfig_createdonbehalfby].[FullName],
    [lk_customcontroldefaultconfig_createdby].[YomiFullName],
    [lk_customcontroldefaultconfig_createdby].[FullName],
    [customcontroldefaultconfig_organization].[Name],
    [lk_customcontroldefaultconfig_modifiedonbehalfby].[YomiFullName],
    [lk_customcontroldefaultconfig_modifiedonbehalfby].[FullName],
    [lk_customcontroldefaultconfig_modifiedby].[FullName],
    [lk_customcontroldefaultconfig_modifiedby].[YomiFullName],

    -- physical attribute
    [T1].[CustomControlDefaultConfigId],
    [T1].[ControlDescriptionXML],
    [T1].[PrimaryEntityTypeCode],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[CustomControlDefaultConfigIdUnique],
    [T1].[OrganizationId],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[VersionNumber],
    [T1].[EventsXml]
from [CustomControlDefaultConfigBase] [T1]
    left join [OrganizationBase] [customcontroldefaultconfig_organization] with(nolock) on ([T1].[OrganizationId] = [customcontroldefaultconfig_organization].[OrganizationId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_customcontroldefaultconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_customcontroldefaultconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_customcontroldefaultconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_customcontroldefaultconfig_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0