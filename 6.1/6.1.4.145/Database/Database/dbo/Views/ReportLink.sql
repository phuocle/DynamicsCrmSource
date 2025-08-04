


--
-- base view for ReportLink
--
create view dbo.[ReportLink]
 (
    -- logical attributes
    [OwnerId],
    [ModifiedOnBehalfByName],
    [OwningBusinessUnit],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [OwningUser],
    [OwnerIdType],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],

    -- physical attributes
    [CreatedOn],
    [ModifiedBy],
    [CreatedBy],
    [ReportLinkId],
    [LinkTypeCode],
    [LinkedReportName],
    [ImportSequenceNumber],
    [ModifiedOn],
    [VersionNumber],
    [ReportId],
    [LinkedReportId],
    [ReportLinkIdUnique],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [report_reportlink].[OwnerId],
    [lk_reportlinkbase_modifiedonbehalfby].[FullName],
    [report_reportlink].[OwningBusinessUnit],
    [lk_reportlinkbase_modifiedonbehalfby].[YomiFullName],
    [lk_reportlinkbase_modifiedby].[YomiFullName],
    [lk_reportlinkbase_createdonbehalfby].[YomiFullName],
    case when [report_reportlink].OwnerIdType = 8
    then [report_reportlink].OwnerId
    else null
    end,
    [report_reportlink].[OwnerIdType],
    [lk_reportlinkbase_createdonbehalfby].[FullName],
    [lk_reportlinkbase_modifiedby].[FullName],
    [lk_reportlinkbase_createdby].[YomiFullName],
    [lk_reportlinkbase_createdby].[FullName],

    -- physical attribute
    [ReportLinkBase].[CreatedOn],
    [ReportLinkBase].[ModifiedBy],
    [ReportLinkBase].[CreatedBy],
    [ReportLinkBase].[ReportLinkId],
    [ReportLinkBase].[LinkTypeCode],
    [ReportLinkBase].[LinkedReportName],
    [ReportLinkBase].[ImportSequenceNumber],
    [ReportLinkBase].[ModifiedOn],
    [ReportLinkBase].[VersionNumber],
    [ReportLinkBase].[ReportId],
    [ReportLinkBase].[LinkedReportId],
    [ReportLinkBase].[ReportLinkIdUnique],
    [ReportLinkBase].[CreatedOnBehalfBy],
    [ReportLinkBase].[ModifiedOnBehalfBy]
from [ReportLinkBase] 
    left join [SystemUserBase] [lk_reportlinkbase_createdby] with(nolock) on ([ReportLinkBase].[CreatedBy] = [lk_reportlinkbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_reportlinkbase_createdonbehalfby] with(nolock) on ([ReportLinkBase].[CreatedOnBehalfBy] = [lk_reportlinkbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_reportlinkbase_modifiedby] with(nolock) on ([ReportLinkBase].[ModifiedBy] = [lk_reportlinkbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_reportlinkbase_modifiedonbehalfby] with(nolock) on ([ReportLinkBase].[ModifiedOnBehalfBy] = [lk_reportlinkbase_modifiedonbehalfby].[SystemUserId])
    left join [ReportBase] [report_reportlink] on ([ReportLinkBase].[ReportId] = [report_reportlink].[ReportId] and [report_reportlink].OverwriteTime = 0 and [report_reportlink].ComponentState = 0)
