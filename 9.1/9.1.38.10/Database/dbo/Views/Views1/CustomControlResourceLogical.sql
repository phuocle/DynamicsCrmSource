


--
-- logical view for CustomControlResourceLogical
--
create view dbo.[CustomControlResourceLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [CustomControlResourceId],
    [CustomControlId],
    [WebResourceId],
    [Name],
    [Version],
    [VersionRequirement],
    [OrganizationId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [CustomControlResourceIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_customcontrolresource_modifiedonbehalfby].[FullName],
    [lk_customcontrolresource_createdonbehalfby].[FullName],
    [lk_customcontrolresource_modifiedby].[YomiFullName],
    [lk_customcontrolresource_createdby].[YomiFullName],
    [lk_customcontrolresource_createdby].[FullName],
    [customcontrolresource_organization].[Name],
    [lk_customcontrolresource_modifiedonbehalfby].[YomiFullName],
    [lk_customcontrolresource_modifiedby].[FullName],
    [lk_customcontrolresource_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[CustomControlResourceId],
    [T1].[CustomControlId],
    [T1].[WebResourceId],
    [T1].[Name],
    [T1].[Version],
    [T1].[VersionRequirement],
    [T1].[OrganizationId],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[VersionNumber],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[CustomControlResourceIdUnique]
from [CustomControlResourceBase] [T1]
    left join [OrganizationBase] [customcontrolresource_organization] on ([T1].[OrganizationId] = [customcontrolresource_organization].[OrganizationId])
    left join [SystemUserBase] [lk_customcontrolresource_createdby] on ([T1].[CreatedBy] = [lk_customcontrolresource_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrolresource_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_customcontrolresource_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrolresource_modifiedby] on ([T1].[ModifiedBy] = [lk_customcontrolresource_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customcontrolresource_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_customcontrolresource_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0