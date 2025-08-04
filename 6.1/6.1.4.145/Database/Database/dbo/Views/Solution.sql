


--
-- base view for Solution
--
create view dbo.[Solution]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [PinpointPublisherId],
    [PublisherIdOptionValuePrefix],
    [ConfigurationPageIdName],
    [PublisherIdPrefix],
    [PublisherIdName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],

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
    [PinpointAssetId]
) with view_metadata as
select
    -- logical attributes
    [lk_solution_createdby].[FullName],
    [lk_solution_modifiedby].[FullName],
    [lk_solutionbase_modifiedonbehalfby].[YomiFullName],
    [lk_solutionbase_modifiedonbehalfby].[FullName],
    [lk_solutionbase_createdonbehalfby].[FullName],
    [publisher_solution].[PinpointPublisherId],
    [publisher_solution].[CustomizationOptionValuePrefix],
    [solution_configuration_webresource].[Name],
    [publisher_solution].[CustomizationPrefix],
    [publisher_solution].[FriendlyName],
    [lk_solutionbase_createdonbehalfby].[YomiFullName],
    [organization_solution].[Name],

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
    [SolutionBase].[PinpointAssetId]
from [SolutionBase] 
    left join [SystemUserBase] [lk_solution_createdby] with(nolock) on ([SolutionBase].[CreatedBy] = [lk_solution_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_solution_modifiedby] with(nolock) on ([SolutionBase].[ModifiedBy] = [lk_solution_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_solutionbase_createdonbehalfby] with(nolock) on ([SolutionBase].[CreatedOnBehalfBy] = [lk_solutionbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_solutionbase_modifiedonbehalfby] with(nolock) on ([SolutionBase].[ModifiedOnBehalfBy] = [lk_solutionbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_solution] with(nolock) on ([SolutionBase].[OrganizationId] = [organization_solution].[OrganizationId])
    left join [PublisherBase] [publisher_solution] on ([SolutionBase].[PublisherId] = [publisher_solution].[PublisherId])
    left join [WebResourceBase] [solution_configuration_webresource] on ([SolutionBase].[ConfigurationPageId] = [solution_configuration_webresource].[WebResourceId] and [solution_configuration_webresource].OverwriteTime = 0 and [solution_configuration_webresource].ComponentState = 0)
