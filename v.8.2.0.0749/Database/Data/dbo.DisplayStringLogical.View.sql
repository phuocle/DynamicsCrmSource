USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DisplayStringLogical]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for DisplayStringLogical
--
create view [dbo].[DisplayStringLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [PublishedDisplayString],
    [CustomDisplayString],
    [DisplayStringKey],
    [VersionNumber],
    [CreatedBy],
    [CustomComment],
    [FormatParameters],
    [OrganizationId],
    [CreatedOn],
    [ModifiedOn],
    [LanguageCode],
    [DisplayStringId],
    [ModifiedBy],
    [OverwriteTime],
    [ComponentState],
    [SolutionId],
    [SupportingSolutionId],
    [DisplayStringIdUnique],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged]
) with view_metadata as
select
    -- logical attributes
    [lk_DisplayStringbase_modifiedonbehalfby].[FullName],
    [lk_DisplayStringbase_modifiedonbehalfby].[YomiFullName],
    [lk_DisplayStringbase_createdby].[FullName],
    [lk_DisplayStringbase_createdby].[YomiFullName],
    [lk_DisplayStringbase_modifiedby].[FullName],
    [lk_DisplayStringbase_modifiedby].[YomiFullName],
    [lk_DisplayStringbase_createdonbehalfby].[FullName],
    [lk_DisplayStringbase_createdonbehalfby].[YomiFullName],
    [organization_custom_displaystrings].[Name],

    -- physical attribute
    [T1].[PublishedDisplayString],
    [T1].[CustomDisplayString],
    [T1].[DisplayStringKey],
    [T1].[VersionNumber],
    [T1].[CreatedBy],
    [T1].[CustomComment],
    [T1].[FormatParameters],
    [T1].[OrganizationId],
    [T1].[CreatedOn],
    [T1].[ModifiedOn],
    [T1].[LanguageCode],
    [T1].[DisplayStringId],
    [T1].[ModifiedBy],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[DisplayStringIdUnique],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged]
from [DisplayStringBase] [T1]
    left join [SystemUserBase] [lk_DisplayStringbase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_DisplayStringbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DisplayStringbase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_DisplayStringbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_DisplayStringbase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_DisplayStringbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_DisplayStringbase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_DisplayStringbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_custom_displaystrings] with(nolock) on ([T1].[OrganizationId] = [organization_custom_displaystrings].[OrganizationId])
where T1.OverwriteTime = 0
GO
