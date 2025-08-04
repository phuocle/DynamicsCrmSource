


--
-- logical view for datalakeworkspaceLogical
--
create view dbo.[datalakeworkspaceLogical]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [datalakeworkspaceId],
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
    [containerendpoint],
    [datalakeworkspace_UniqueName],
    [path],
    [iscustomercapacity],
    [isprivate],
    [isdeepcopyenabled],
    [owningappid],
    [tenantid],
    [whitelistedappid]
) with view_metadata as
select
    -- logical attributes
    [lk_datalakeworkspace_createdby].[FullName],
    [lk_datalakeworkspace_createdby].[YomiFullName],
    [organization_datalakeworkspace].[Name],
    [lk_datalakeworkspace_modifiedonbehalfby].[FullName],
    [lk_datalakeworkspace_modifiedonbehalfby].[YomiFullName],
    [lk_datalakeworkspace_modifiedby].[FullName],
    [lk_datalakeworkspace_modifiedby].[YomiFullName],
    [lk_datalakeworkspace_createdonbehalfby].[FullName],
    [lk_datalakeworkspace_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[datalakeworkspaceId],
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
    [T1].[containerendpoint],
    [T1].[datalakeworkspace_UniqueName],
    [T1].[path],
    [T1].[iscustomercapacity],
    [T1].[isprivate],
    [T1].[isdeepcopyenabled],
    [T1].[owningappid],
    [T1].[tenantid],
    [T1].[whitelistedappid]
from [datalakeworkspaceBase] [T1]
    left join [SystemUserBase] [lk_datalakeworkspace_createdby] on ([T1].[CreatedBy] = [lk_datalakeworkspace_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakeworkspace_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_datalakeworkspace_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakeworkspace_modifiedby] on ([T1].[ModifiedBy] = [lk_datalakeworkspace_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakeworkspace_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_datalakeworkspace_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_datalakeworkspace] on ([T1].[OrganizationId] = [organization_datalakeworkspace].[OrganizationId])
where T1.OverwriteTime = 0