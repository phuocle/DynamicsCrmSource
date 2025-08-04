


--
-- base view for ReportEntity
--
create view dbo.[ReportEntity]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [ModifiedByName],
    [OwningBusinessUnit],
    [ReportIdName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [OwningUser],

    -- physical attributes
    [CreatedOn],
    [IsFilterable],
    [ImportSequenceNumber],
    [VersionNumber],
    [CreatedBy],
    [ReportId],
    [ReportEntityId],
    [ObjectTypeCode],
    [ModifiedOn],
    [ModifiedBy],
    [ReportEntityIdUnique],
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
    [report_reportentities].[OwnerId],
    [report_reportentities].[OwnerIdType],
    [lk_reportentitybase_modifiedby].[FullName],
    [report_reportentities].[OwningBusinessUnit],
    [report_reportentities].[Name],
    [lk_reportentitybase_createdby].[YomiFullName],
    [lk_reportentitybase_modifiedonbehalfby].[FullName],
    [lk_reportentitybase_createdonbehalfby].[FullName],
    [lk_reportentitybase_modifiedonbehalfby].[YomiFullName],
    [lk_reportentitybase_modifiedby].[YomiFullName],
    [lk_reportentitybase_createdonbehalfby].[YomiFullName],
    [lk_reportentitybase_createdby].[FullName],
    case when [report_reportentities].OwnerIdType = 8
    then [report_reportentities].OwnerId
    else null
    end,

    -- physical attribute
    [T1].[CreatedOn],
    [T1].[IsFilterable],
    [T1].[ImportSequenceNumber],
    [T1].[VersionNumber],
    [T1].[CreatedBy],
    [T1].[ReportId],
    [T1].[ReportEntityId],
    [T1].[ObjectTypeCode],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ReportEntityIdUnique],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [ReportEntityBase] [T1]
    left join [SystemUserBase] [lk_reportentitybase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_reportentitybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_reportentitybase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_reportentitybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_reportentitybase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_reportentitybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_reportentitybase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_reportentitybase_modifiedonbehalfby].[SystemUserId])
    left join [ReportBase] [report_reportentities] on ([T1].[ReportId] = [report_reportentities].[ReportId] and [report_reportentities].OverwriteTime = 0 and [report_reportentities].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0