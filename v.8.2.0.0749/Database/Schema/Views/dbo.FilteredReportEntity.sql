SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for reportentity
--
create view [dbo].[FilteredReportEntity] (
    [componentstate],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [iscustomizable],
    [isfilterable],
    [ismanaged],
    [ismanagedname],
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
    [objecttypecode],
    [objecttypecodename],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [reportentityid],
    [reportentityidunique],
    [reportid],
    [reportiddsc],
    [reportidname],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [ReportEntity].[ComponentState],
    [ReportEntity].[CreatedBy],
    --[ReportEntity].[CreatedByDsc]
    0,
    [ReportEntity].[CreatedByName],
    [ReportEntity].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ReportEntity].[CreatedOn],
			us.TimeZoneCode),
        [ReportEntity].[CreatedOn],
    [ReportEntity].[CreatedOnBehalfBy],
    --[ReportEntity].[CreatedOnBehalfByDsc]
    0,
    [ReportEntity].[CreatedOnBehalfByName],
    [ReportEntity].[CreatedOnBehalfByYomiName],
    [ReportEntity].[ImportSequenceNumber],
    [ReportEntity].[IsCustomizable],
    [ReportEntity].[IsFilterable],
    [ReportEntity].[IsManaged],
    IsManagedPLTable.Value,
    [ReportEntity].[ModifiedBy],
    --[ReportEntity].[ModifiedByDsc]
    0,
    [ReportEntity].[ModifiedByName],
    [ReportEntity].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ReportEntity].[ModifiedOn],
			us.TimeZoneCode),
        [ReportEntity].[ModifiedOn],
    [ReportEntity].[ModifiedOnBehalfBy],
    --[ReportEntity].[ModifiedOnBehalfByDsc]
    0,
    [ReportEntity].[ModifiedOnBehalfByName],
    [ReportEntity].[ModifiedOnBehalfByYomiName],
    [ReportEntity].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([ReportEntity].[OverwriteTime],
			us.TimeZoneCode),
        [ReportEntity].[OverwriteTime],
    [ReportEntity].[OwnerId],
    [ReportEntity].[OwnerIdType],
    [ReportEntity].[OwningBusinessUnit],
    [ReportEntity].[OwningUser],
    [ReportEntity].[ReportEntityId],
    [ReportEntity].[ReportEntityIdUnique],
    [ReportEntity].[ReportId],
    --[ReportEntity].[ReportIdDsc]
    0,
    [ReportEntity].[ReportIdName],
    [ReportEntity].[SolutionId],
    [ReportEntity].[VersionNumber]
from ReportEntity
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 9101
		and [IsManagedPLTable].AttributeValue = [ReportEntity].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 9101
		and [ObjectTypeCodePLTable].AttributeValue = [ReportEntity].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
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
	[ReportEntity].OwnerId in 
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
		[ReportEntity].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9100)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ReportEntity].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ReportEntity].[ReportId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9100))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredReportEntity] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredReportEntity] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
