USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ReportEntityLogical]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for ReportEntityLogical
--
create view [dbo].[ReportEntityLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [ReportIdName],
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
    [lk_reportentitybase_modifiedonbehalfby].[FullName],
    [lk_reportentitybase_modifiedonbehalfby].[YomiFullName],
    [lk_reportentitybase_createdonbehalfby].[FullName],
    [lk_reportentitybase_createdonbehalfby].[YomiFullName],
    [lk_reportentitybase_modifiedby].[FullName],
    [lk_reportentitybase_modifiedby].[YomiFullName],
    [lk_reportentitybase_createdby].[YomiFullName],
    [lk_reportentitybase_createdby].[FullName],
    [report_reportentities].[OwnerId],
    [report_reportentities].[OwnerIdType],
    [report_reportentities].[OwningBusinessUnit],
    [report_reportentities].[Name],
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
where T1.OverwriteTime = 0
GO
