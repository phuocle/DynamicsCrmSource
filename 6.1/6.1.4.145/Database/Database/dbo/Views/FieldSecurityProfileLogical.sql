


--
-- logical view for FieldSecurityProfileLogical
--
create view dbo.[FieldSecurityProfileLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [Description],
    [FieldSecurityProfileId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [SolutionId],
    [SupportingSolutionId],
    [OverwriteTime],
    [ComponentState],
    [FieldSecurityProfileIdUnique],
    [VersionNumber],
    [OrganizationId],
    [IsManaged]
) with view_metadata as
select
    -- logical attributes
    [lk_fieldsecurityprofilebase_createdonbehalfby].[YomiFullName],
    [lk_fieldsecurityprofilebase_modifiedonbehalfby].[FullName],
    [lk_fieldsecurityprofilebase_organizationid].[Name],
    [lk_fieldsecurityprofilebase_modifiedby].[FullName],
    [lk_fieldsecurityprofilebase_modifiedby].[YomiFullName],
    [lk_fieldsecurityprofilebase_createdonbehalfby].[FullName],
    [lk_fieldsecurityprofilebase_modifiedonbehalfby].[YomiFullName],
    [lk_fieldsecurityprofilebase_createdby].[FullName],
    [lk_fieldsecurityprofilebase_createdby].[YomiFullName],

    -- physical attribute
    [T1].[Description],
    [T1].[FieldSecurityProfileId],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[Name],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[FieldSecurityProfileIdUnique],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[IsManaged]
from [FieldSecurityProfileBase] [T1]
    left join [SystemUserBase] [lk_fieldsecurityprofilebase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_fieldsecurityprofilebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_fieldsecurityprofilebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_fieldsecurityprofilebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_fieldsecurityprofilebase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_fieldsecurityprofilebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_fieldsecurityprofilebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_fieldsecurityprofilebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [lk_fieldsecurityprofilebase_organizationid] with(nolock) on ([T1].[OrganizationId] = [lk_fieldsecurityprofilebase_organizationid].[OrganizationId])
where T1.OverwriteTime = 0