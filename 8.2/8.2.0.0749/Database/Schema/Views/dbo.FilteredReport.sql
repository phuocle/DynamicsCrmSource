SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for report
--
create view [dbo].[FilteredReport] (
    [bodybinary],
    [bodytext],
    [bodyurl],
    [componentstate],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdinmajorversion],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customreportxml],
    [defaultfilter],
    [description],
    [filename],
    [filesize],
    [introducedversion],
    [iscustomizable],
    [iscustomreport],
    [iscustomreportname],
    [ismanaged],
    [ismanagedname],
    [ispersonal],
    [ispersonalname],
    [isscheduledreport],
    [isscheduledreportname],
    [languagecode],
    [mimetype],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [originalbodytext],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parentreportid],
    [parentreportiddsc],
    [parentreportidname],
    [queryinfo],
    [reportid],
    [reportidunique],
    [reportnameonsrs],
    [reporttypecode],
    [reporttypecodename],
    [schedulexml],
    [signaturedate],
    [signaturedateutc],
    [signatureid],
    [signaturelcid],
    [signaturemajorversion],
    [signatureminorversion],
    [solutionid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Report].[BodyBinary],
    [Report].[BodyText],
    [Report].[BodyUrl],
    [Report].[ComponentState],
    [Report].[CreatedBy],
    --[Report].[CreatedByDsc]
    0,
    [Report].[CreatedByName],
    [Report].[CreatedByYomiName],
    [Report].[CreatedInMajorVersion],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Report].[CreatedOn],
			us.TimeZoneCode),
        [Report].[CreatedOn],
    [Report].[CreatedOnBehalfBy],
    --[Report].[CreatedOnBehalfByDsc]
    0,
    [Report].[CreatedOnBehalfByName],
    [Report].[CreatedOnBehalfByYomiName],
    [Report].[CustomReportXml],
    [Report].[DefaultFilter],
    [Report].[Description],
    [Report].[FileName],
    [Report].[FileSize],
    [Report].[IntroducedVersion],
    [Report].[IsCustomizable],
    [Report].[IsCustomReport],
    IsCustomReportPLTable.Value,
    [Report].[IsManaged],
    IsManagedPLTable.Value,
    [Report].[IsPersonal],
    IsPersonalPLTable.Value,
    [Report].[IsScheduledReport],
    IsScheduledReportPLTable.Value,
    [Report].[LanguageCode],
    [Report].[MimeType],
    [Report].[ModifiedBy],
    --[Report].[ModifiedByDsc]
    0,
    [Report].[ModifiedByName],
    [Report].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Report].[ModifiedOn],
			us.TimeZoneCode),
        [Report].[ModifiedOn],
    [Report].[ModifiedOnBehalfBy],
    --[Report].[ModifiedOnBehalfByDsc]
    0,
    [Report].[ModifiedOnBehalfByName],
    [Report].[ModifiedOnBehalfByYomiName],
    [Report].[Name],
    [Report].[OriginalBodyText],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Report].[OverwriteTime],
			us.TimeZoneCode),
        [Report].[OverwriteTime],
    [Report].[OwnerId],
    --[Report].[OwnerIdDsc]
    0,
    [Report].[OwnerIdName],
    [Report].[OwnerIdType],
    [Report].[OwnerIdYomiName],
    [Report].[OwningBusinessUnit],
    [Report].[OwningTeam],
    [Report].[OwningUser],
    [Report].[ParentReportId],
    --[Report].[ParentReportIdDsc]
    0,
    [Report].[ParentReportIdName],
    [Report].[QueryInfo],
    [Report].[ReportId],
    [Report].[ReportIdUnique],
    [Report].[ReportNameOnSRS],
    [Report].[ReportTypeCode],
    ReportTypeCodePLTable.Value,
    [Report].[ScheduleXml],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Report].[SignatureDate],
			us.TimeZoneCode),
        [Report].[SignatureDate],
    [Report].[SignatureId],
    [Report].[SignatureLcid],
    [Report].[SignatureMajorVersion],
    [Report].[SignatureMinorVersion],
    [Report].[SolutionId],
    [Report].[TimeZoneRuleVersionNumber],
    [Report].[UTCConversionTimeZoneCode],
    [Report].[VersionNumber]
from Report
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsCustomReportPLTable] on 
		([IsCustomReportPLTable].AttributeName = 'iscustomreport'
		and [IsCustomReportPLTable].ObjectTypeCode = 9100
		and [IsCustomReportPLTable].AttributeValue = [Report].[IsCustomReport]
		and [IsCustomReportPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 9100
		and [IsManagedPLTable].AttributeValue = [Report].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPersonalPLTable] on 
		([IsPersonalPLTable].AttributeName = 'ispersonal'
		and [IsPersonalPLTable].ObjectTypeCode = 9100
		and [IsPersonalPLTable].AttributeValue = [Report].[IsPersonal]
		and [IsPersonalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsScheduledReportPLTable] on 
		([IsScheduledReportPLTable].AttributeName = 'isscheduledreport'
		and [IsScheduledReportPLTable].ObjectTypeCode = 9100
		and [IsScheduledReportPLTable].AttributeValue = [Report].[IsScheduledReport]
		and [IsScheduledReportPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ReportTypeCodePLTable] on 
		([ReportTypeCodePLTable].AttributeName = 'reporttypecode'
		and [ReportTypeCodePLTable].ObjectTypeCode = 9100
		and [ReportTypeCodePLTable].AttributeValue = [Report].[ReportTypeCode]
		and [ReportTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9100) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Report].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9100))
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Report].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9100)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Report].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Report].[ReportId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9100))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredReport] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredReport] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
