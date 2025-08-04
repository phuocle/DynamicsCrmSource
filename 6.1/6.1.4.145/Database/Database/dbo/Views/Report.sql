


--
-- base view for Report
--
create view dbo.[Report]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ParentReportIdName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [DefaultFilter],
    [OwningBusinessUnit],
    [Name],
    [IsCustomReport],
    [ModifiedOn],
    [SignatureMajorVersion],
    [CreatedBy],
    [BodyText],
    [ModifiedBy],
    [IsPersonal],
    [CreatedOn],
    [SignatureLcid],
    [TimeZoneRuleVersionNumber],
    [FileSize],
    [CustomReportXml],
    [Description],
    [ScheduleXml],
    [SignatureDate],
    [UTCConversionTimeZoneCode],
    [FileName],
    [ParentReportId],
    [BodyBinary],
    [QueryInfo],
    [LanguageCode],
    [SignatureId],
    [BodyUrl],
    [MimeType],
    [SignatureMinorVersion],
    [ReportId],
    [IsScheduledReport],
    [VersionNumber],
    [ReportTypeCode],
    [ReportIdUnique],
    [ReportNameOnSRS],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OriginalBodyText],
    [IsManaged],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_reportbase_createdonbehalfby].[YomiFullName],
    [lk_reportbase_createdonbehalfby].[FullName],
    [lk_reportbase_createdby].[FullName],
    [report_parent_report].[Name],
    [lk_reportbase_createdby].[YomiFullName],
    [lk_reportbase_modifiedby].[YomiFullName],
    [lk_reportbase_modifiedonbehalfby].[YomiFullName],
    [lk_reportbase_modifiedonbehalfby].[FullName],
    [lk_reportbase_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [T1].[DefaultFilter],
    [T1].[OwningBusinessUnit],
    [T1].[Name],
    [T1].[IsCustomReport],
    [T1].[ModifiedOn],
    [T1].[SignatureMajorVersion],
    [T1].[CreatedBy],
    [T1].[BodyText],
    [T1].[ModifiedBy],
    [T1].[IsPersonal],
    [T1].[CreatedOn],
    [T1].[SignatureLcid],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[FileSize],
    [T1].[CustomReportXml],
    [T1].[Description],
    [T1].[ScheduleXml],
    [T1].[SignatureDate],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[FileName],
    [T1].[ParentReportId],
    [T1].[BodyBinary],
    [T1].[QueryInfo],
    [T1].[LanguageCode],
    [T1].[SignatureId],
    [T1].[BodyUrl],
    [T1].[MimeType],
    [T1].[SignatureMinorVersion],
    [T1].[ReportId],
    [T1].[IsScheduledReport],
    [T1].[VersionNumber],
    [T1].[ReportTypeCode],
    [T1].[ReportIdUnique],
    [T1].[ReportNameOnSRS],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OriginalBodyText],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [ReportBase] [T1]
    left join [SystemUserBase] [lk_reportbase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_reportbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_reportbase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_reportbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_reportbase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_reportbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_reportbase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_reportbase_modifiedonbehalfby].[SystemUserId])
    left join [ReportBase] [report_parent_report] on ([T1].[ParentReportId] = [report_parent_report].[ReportId] and [report_parent_report].OverwriteTime = 0 and [report_parent_report].ComponentState = 0)
    left join OwnerBase XXowner with(nolock) on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0