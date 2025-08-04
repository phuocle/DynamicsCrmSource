


--
-- base view for Solution
--
create view dbo.[Solution]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByName],
    [PinpointPublisherId],
    [PublisherIdOptionValuePrefix],
    [PublisherIdPrefix],
    [PublisherIdName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ParentSolutionIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ConfigurationPageIdName],

    -- physical attributes
    [VersionNumber],
    [SolutionId],
    [InstalledOn],
    [CreatedOn],
    [OrganizationId],
    [PublisherId],
    [ModifiedOn],
    [CreatedBy],
    [IsVisible],
    [Description],
    [IsManaged],
    [UniqueName],
    [FriendlyName],
    [ModifiedBy],
    [Version],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [PinpointSolutionId],
    [PinpointSolutionDefaultLocale],
    [ConfigurationPageId],
    [PinpointAssetId],
    [SolutionPackageVersion],
    [ParentSolutionId],
    [IsInternal],
    [SolutionType],
    [UpdatedOn],
    [FileId],
    [IsApiManaged],
    [TemplateSuffix],
    [UpgradeInfo],
    [Thumbprint]
) with view_metadata as
select
    -- logical attributes
    [lk_solution_createdby].[FullName],
    [lk_solution_modifiedby].[FullName],
    [publisher_solution].[PinpointPublisherId],
    [publisher_solution].[CustomizationOptionValuePrefix],
    [publisher_solution].[CustomizationPrefix],
    [publisher_solution].[FriendlyName],
    [organization_solution].[Name],
    [lk_solutionbase_modifiedonbehalfby].[YomiFullName],
    [lk_solutionbase_modifiedonbehalfby].[FullName],
    [solution_parent_solution].[FriendlyName],
    [lk_solutionbase_createdonbehalfby].[FullName],
    [lk_solutionbase_createdonbehalfby].[YomiFullName],
    [solution_configuration_webresource].[Name],

    -- physical attribute
    [SolutionBase].[VersionNumber],
    [SolutionBase].[SolutionId],
    [SolutionBase].[InstalledOn],
    [SolutionBase].[CreatedOn],
    [SolutionBase].[OrganizationId],
    [SolutionBase].[PublisherId],
    [SolutionBase].[ModifiedOn],
    [SolutionBase].[CreatedBy],
    [SolutionBase].[IsVisible],
    [SolutionBase].[Description],
    [SolutionBase].[IsManaged],
    [SolutionBase].[UniqueName],
    [SolutionBase].[FriendlyName],
    [SolutionBase].[ModifiedBy],
    [SolutionBase].[Version],
    [SolutionBase].[ModifiedOnBehalfBy],
    [SolutionBase].[CreatedOnBehalfBy],
    [SolutionBase].[PinpointSolutionId],
    [SolutionBase].[PinpointSolutionDefaultLocale],
    [SolutionBase].[ConfigurationPageId],
    [SolutionBase].[PinpointAssetId],
    [SolutionBase].[SolutionPackageVersion],
    [SolutionBase].[ParentSolutionId],
    [SolutionBase].[IsInternal],
    [SolutionBase].[SolutionType],
    [SolutionBase].[UpdatedOn],
    [SolutionBase].[FileId],
    [SolutionBase].[IsApiManaged],
    [SolutionBase].[TemplateSuffix],
    [SolutionBase].[UpgradeInfo],
    [SolutionBase].[Thumbprint]
from [SolutionBase] 
    left join [SystemUserBase] [lk_solution_createdby] on ([SolutionBase].[CreatedBy] = [lk_solution_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_solution_modifiedby] on ([SolutionBase].[ModifiedBy] = [lk_solution_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_solutionbase_createdonbehalfby] on ([SolutionBase].[CreatedOnBehalfBy] = [lk_solutionbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_solutionbase_modifiedonbehalfby] on ([SolutionBase].[ModifiedOnBehalfBy] = [lk_solutionbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_solution] on ([SolutionBase].[OrganizationId] = [organization_solution].[OrganizationId])
    left join [PublisherBase] [publisher_solution] on ([SolutionBase].[PublisherId] = [publisher_solution].[PublisherId])
    left join [WebResourceBase] [solution_configuration_webresource] on ([SolutionBase].[ConfigurationPageId] = [solution_configuration_webresource].[WebResourceId] and [solution_configuration_webresource].OverwriteTime = 0 and [solution_configuration_webresource].ComponentState = 0)
    left join [SolutionBase] [solution_parent_solution] on ([SolutionBase].[ParentSolutionId] = [solution_parent_solution].[SolutionId])
