


--
-- base view for ReportVisibility
--
create view dbo.[ReportVisibility]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OwningBusinessUnit],
    [CreatedByYomiName],
    [OwningUser],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ReportIdName],
    [CreatedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [ReportId],
    [ReportVisibilityId],
    [VersionNumber],
    [ImportSequenceNumber],
    [ModifiedOn],
    [CreatedOn],
    [CreatedBy],
    [VisibilityCode],
    [ModifiedBy],
    [ReportVisibilityIdUnique],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [IsManaged],
    [IsCustomizable]
) with view_metadata as
select
    -- logical attributes
    [report_reportvisibility].[OwnerId],
    [report_reportvisibility].[OwnerIdType],
    [lk_reportvisibilitybase_createdonbehalfby].[YomiFullName],
    [lk_reportvisibilitybase_modifiedonbehalfby].[FullName],
    [report_reportvisibility].[OwningBusinessUnit],
    [lk_reportvisibilitybase_createdby].[YomiFullName],
    case when [report_reportvisibility].OwnerIdType = 8
    then [report_reportvisibility].OwnerId
    else null
    end,
    [lk_reportvisibilitybase_modifiedby].[FullName],
    [lk_reportvisibilitybase_createdonbehalfby].[FullName],
    [lk_reportvisibilitybase_modifiedonbehalfby].[YomiFullName],
    [report_reportvisibility].[Name],
    [lk_reportvisibilitybase_createdby].[FullName],
    [lk_reportvisibilitybase_modifiedby].[YomiFullName],

    -- physical attribute
    [T1].[ReportId],
    [T1].[ReportVisibilityId],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[ModifiedOn],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[VisibilityCode],
    [T1].[ModifiedBy],
    [T1].[ReportVisibilityIdUnique],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [ReportVisibilityBase] [T1]
    left join [SystemUserBase] [lk_reportvisibilitybase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_reportvisibilitybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_reportvisibilitybase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_reportvisibilitybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_reportvisibilitybase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_reportvisibilitybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_reportvisibilitybase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_reportvisibilitybase_modifiedonbehalfby].[SystemUserId])
    left join [ReportBase] [report_reportvisibility] on ([T1].[ReportId] = [report_reportvisibility].[ReportId] and [report_reportvisibility].OverwriteTime = 0 and [report_reportvisibility].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0