SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for SavedQuery
--
create view [dbo].[SavedQuery]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [SavedQueryId],
    [Name],
    [OrganizationId],
    [Description],
    [QueryType],
    [IsDefault],
    [ReturnedTypeCode],
    [QueryAppUsage],
    [IsUserDefined],
    [FetchXml],
    [IsCustomizable],
    [IsQuickFindQuery],
    [ColumnSetXml],
    [LayoutXml],
    [QueryAPI],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [StateCode],
    [IsPrivate],
    [SavedQueryIdUnique],
    [SolutionId],
    [OverwriteTime],
    [SupportingSolutionId],
    [ComponentState],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [AdvancedGroupBy],
    [ConditionalFormatting],
    [OrganizationTabOrder],
    [IsManaged],
    [StatusCode],
    [CanBeDeleted],
    [IntroducedVersion],
    [IsCustom]
) with view_metadata as
select
    -- logical attributes
    [lk_savedquerybase_createdby].[YomiFullName],
    [lk_savedquerybase_createdby].[FullName],
    [lk_savedquerybase_modifiedonbehalfby].[YomiFullName],
    [lk_savedquerybase_modifiedonbehalfby].[FullName],
    [lk_savedquerybase_createdonbehalfby].[FullName],
    [lk_savedquerybase_createdonbehalfby].[YomiFullName],
    [lk_savedquerybase_modifiedby].[FullName],
    [lk_savedquerybase_modifiedby].[YomiFullName],
    [organization_saved_queries].[Name],

    -- physical attribute
    [T1].[SavedQueryId],
    [T1].[Name],
    [T1].[OrganizationId],
    [T1].[Description],
    [T1].[QueryType],
    [T1].[IsDefault],
    [T1].[ReturnedTypeCode],
    [T1].[QueryAppUsage],
    [T1].[IsUserDefined],
    [T1].[FetchXml],
    [T1].[IsCustomizable],
    [T1].[IsQuickFindQuery],
    [T1].[ColumnSetXml],
    [T1].[LayoutXml],
    [T1].[QueryAPI],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[StateCode],
    [T1].[IsPrivate],
    [T1].[SavedQueryIdUnique],
    [T1].[SolutionId],
    [T1].[OverwriteTime],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[AdvancedGroupBy],
    [T1].[ConditionalFormatting],
    [T1].[OrganizationTabOrder],
    [T1].[IsManaged],
    [T1].[StatusCode],
    [T1].[CanBeDeleted],
    [T1].[IntroducedVersion],
    [T1].[IsCustom]
from [SavedQueryBase] [T1]
    left join [SystemUserBase] [lk_savedquerybase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_savedquerybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_savedquerybase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_savedquerybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_savedquerybase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_savedquerybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_savedquerybase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_savedquerybase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_saved_queries] with(nolock) on ([T1].[OrganizationId] = [organization_saved_queries].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
