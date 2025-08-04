


--
-- logical view for AppConfigLogical
--
create view dbo.[AppConfigLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [AppModuleId],
    [AppConfigId],
    [VersionNumber],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [OrganizationId],
    [AppConfigIdUnique],
    [StateCode],
    [StatusCode],
    [AppConfigImportXml]
) with view_metadata as
select
    -- logical attributes
    [lk_appconfig_createdonbehalfby].[YomiFullName],
    [lk_appconfig_createdby].[FullName],
    [lk_appconfig_modifiedonbehalfby].[FullName],
    [lk_appconfig_modifiedby].[FullName],
    [lk_appconfig_modifiedonbehalfby].[YomiFullName],
    [organization_appconfig].[Name],
    [lk_appconfig_createdonbehalfby].[FullName],

    -- physical attribute
    [T1].[AppModuleId],
    [T1].[AppConfigId],
    [T1].[VersionNumber],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[OrganizationId],
    [T1].[AppConfigIdUnique],
    [T1].[StateCode],
    [T1].[StatusCode],
    [T1].[AppConfigImportXml]
from [AppConfigBase] [T1]
    left join [SystemUserBase] [lk_appconfig_createdby] on ([T1].[CreatedBy] = [lk_appconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfig_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_appconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfig_modifiedby] on ([T1].[ModifiedBy] = [lk_appconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfig_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_appconfig_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appconfig] on ([T1].[OrganizationId] = [organization_appconfig].[OrganizationId])
where T1.OverwriteTime = 0