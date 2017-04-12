SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for SavedQueryVisualizationLogical
--
create view [dbo].[SavedQueryVisualizationLogical]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],

    -- physical attributes
    [CreatedOn],
    [OrganizationId],
    [SavedQueryVisualizationId],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [PrimaryEntityTypeCode],
    [Name],
    [DataDescription],
    [IsDefault],
    [Description],
    [PresentationDescription],
    [SavedQueryVisualizationIdUnique],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [WebResourceId],
    [IntroducedVersion],
    [CanBeDeleted],
    [Type],
    [ChartType]
) with view_metadata as
select
    -- logical attributes
    [lk_savedqueryvisualizationbase_modifiedby].[YomiFullName],
    [lk_savedqueryvisualizationbase_modifiedby].[FullName],
    [lk_savedqueryvisualizationbase_createdby].[YomiFullName],
    [lk_savedqueryvisualizationbase_createdby].[FullName],
    [lk_savedqueryvisualizationbase_createdonbehalfby].[FullName],
    [lk_savedqueryvisualizationbase_createdonbehalfby].[YomiFullName],
    [lk_savedqueryvisualizationbase_modifiedonbehalfby].[YomiFullName],
    [lk_savedqueryvisualizationbase_modifiedonbehalfby].[FullName],
    [organization_saved_query_visualizations].[Name],

    -- physical attribute
    [T1].[CreatedOn],
    [T1].[OrganizationId],
    [T1].[SavedQueryVisualizationId],
    [T1].[CreatedBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[PrimaryEntityTypeCode],
    [T1].[Name],
    [T1].[DataDescription],
    [T1].[IsDefault],
    [T1].[Description],
    [T1].[PresentationDescription],
    [T1].[SavedQueryVisualizationIdUnique],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[WebResourceId],
    [T1].[IntroducedVersion],
    [T1].[CanBeDeleted],
    [T1].[Type],
    [T1].[ChartType]
from [SavedQueryVisualizationBase] [T1]
    left join [SystemUserBase] [lk_savedqueryvisualizationbase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_savedqueryvisualizationbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_savedqueryvisualizationbase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_savedqueryvisualizationbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_savedqueryvisualizationbase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_savedqueryvisualizationbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_savedqueryvisualizationbase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_savedqueryvisualizationbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_saved_query_visualizations] with(nolock) on ([T1].[OrganizationId] = [organization_saved_query_visualizations].[OrganizationId])
where T1.OverwriteTime = 0
GO