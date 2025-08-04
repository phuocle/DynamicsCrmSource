


--
-- base view for CustomControlDefaultConfig
--
create view dbo.[CustomControlDefaultConfig]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],

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
    [EventsXml],
    [ControlDescriptionJson]
) with view_metadata as
select
    -- logical attributes
    [lk_customcontroldefaultconfig_modifiedby].[FullName],
    [lk_customcontroldefaultconfig_modifiedonbehalfby].[YomiFullName],
    [lk_customcontroldefaultconfig_createdby].[YomiFullName],
    [lk_customcontroldefaultconfig_modifiedby].[YomiFullName],
    [lk_customcontroldefaultconfig_modifiedonbehalfby].[FullName],
    [lk_customcontroldefaultconfig_createdonbehalfby].[YomiFullName],
    [lk_customcontroldefaultconfig_createdby].[FullName],
    [lk_customcontroldefaultconfig_createdonbehalfby].[FullName],
    [customcontroldefaultconfig_organization].[Name],

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
    [T1].[EventsXml],
    [T1].[ControlDescriptionJson]
from [CustomControlDefaultConfigBase] [T1]
    left join [OrganizationBase] [customcontroldefaultconfig_organization] on ([T1].[OrganizationId] = [customcontroldefaultconfig_organization].[OrganizationId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_createdby] on ([T1].[CreatedBy] = [lk_customcontroldefaultconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_customcontroldefaultconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_modifiedby] on ([T1].[ModifiedBy] = [lk_customcontroldefaultconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontroldefaultconfig_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_customcontroldefaultconfig_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0