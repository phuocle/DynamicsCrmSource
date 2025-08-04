


--
-- logical view for WebResourceLogical
--
create view dbo.[WebResourceLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [WebResourceId],
    [Name],
    [DisplayName],
    [Description],
    [Content],
    [SilverlightVersion],
    [WebResourceType],
    [OrganizationId],
    [SolutionId],
    [SupportingSolutionId],
    [OverwriteTime],
    [ComponentState],
    [VersionNumber],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOn],
    [CreatedBy],
    [WebResourceIdUnique],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [LanguageCode],
    [IsManaged],
    [IsCustomizable],
    [CanBeDeleted],
    [IsHidden],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_webresourcebase_modifiedonbehalfby].[YomiFullName],
    [webresource_organization].[Name],
    [lk_webresourcebase_createdonbehalfby].[YomiFullName],
    [lk_webresourcebase_modifiedonbehalfby].[FullName],
    [lk_webresourcebase_createdonbehalfby].[FullName],

    -- physical attribute
    [T1].[WebResourceId],
    [T1].[Name],
    [T1].[DisplayName],
    [T1].[Description],
    [T1].[Content],
    [T1].[SilverlightVersion],
    [T1].[WebResourceType],
    [T1].[OrganizationId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[VersionNumber],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[WebResourceIdUnique],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[LanguageCode],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[CanBeDeleted],
    [T1].[IsHidden],
    [T1].[IntroducedVersion]
from [WebResourceBase] [T1]
    left join [SystemUserBase] [lk_webresourcebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_webresourcebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_webresourcebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_webresourcebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [webresource_organization] with(nolock) on ([T1].[OrganizationId] = [webresource_organization].[OrganizationId])
where T1.OverwriteTime = 0