


--
-- base view for datalakeworkspacepermission
--
create view dbo.[datalakeworkspacepermission]
 (
    -- logical attributes
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [workspaceidName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [datalakeworkspacepermissionId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [appid],
    [canexecute],
    [canread],
    [canwrite],
    [datalakeworkspacepermission_UniqueName],
    [tenantid],
    [whitelistedappid],
    [workspaceid]
) with view_metadata as
select
    -- logical attributes
    [organization_datalakeworkspacepermission].[Name],
    [lk_datalakeworkspacepermission_modifiedonbehalfby].[FullName],
    [lk_datalakeworkspacepermission_modifiedonbehalfby].[YomiFullName],
    [datalakeworkspace_workspacepermission].[name],
    [lk_datalakeworkspacepermission_createdby].[FullName],
    [lk_datalakeworkspacepermission_createdby].[YomiFullName],
    [lk_datalakeworkspacepermission_modifiedby].[FullName],
    [lk_datalakeworkspacepermission_modifiedby].[YomiFullName],
    [lk_datalakeworkspacepermission_createdonbehalfby].[FullName],
    [lk_datalakeworkspacepermission_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[datalakeworkspacepermissionId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[appid],
    [T1].[canexecute],
    [T1].[canread],
    [T1].[canwrite],
    [T1].[datalakeworkspacepermission_UniqueName],
    [T1].[tenantid],
    [T1].[whitelistedappid],
    [T1].[workspaceid]
from [datalakeworkspacepermissionBase] [T1]
    left join [datalakeworkspaceBase] [datalakeworkspace_workspacepermission] on ([T1].[workspaceid] = [datalakeworkspace_workspacepermission].[datalakeworkspaceId] and [datalakeworkspace_workspacepermission].OverwriteTime = 0 and [datalakeworkspace_workspacepermission].ComponentState = 0)
    left join [SystemUserBase] [lk_datalakeworkspacepermission_createdby] on ([T1].[CreatedBy] = [lk_datalakeworkspacepermission_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakeworkspacepermission_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_datalakeworkspacepermission_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakeworkspacepermission_modifiedby] on ([T1].[ModifiedBy] = [lk_datalakeworkspacepermission_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakeworkspacepermission_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_datalakeworkspacepermission_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_datalakeworkspacepermission] on ([T1].[OrganizationId] = [organization_datalakeworkspacepermission].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0