

--
-- report view for reportvisibility
--
create view dbo.[FilteredReportVisibility] (
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
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [reportid],
    [reportiddsc],
    [reportidname],
    [reportvisibilityid],
    [reportvisibilityidunique],
    [solutionid],
    [versionnumber],
    [visibilitycode],
    [visibilitycodename]
) with view_metadata as
select
    [ReportVisibility].[ComponentState],
    [ReportVisibility].[CreatedBy],
    --[ReportVisibility].[CreatedByDsc]
    0,
    [ReportVisibility].[CreatedByName],
    [ReportVisibility].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ReportVisibility].[CreatedOn],
			us.TimeZoneCode),
        [ReportVisibility].[CreatedOn],
    [ReportVisibility].[CreatedOnBehalfBy],
    --[ReportVisibility].[CreatedOnBehalfByDsc]
    0,
    [ReportVisibility].[CreatedOnBehalfByName],
    [ReportVisibility].[CreatedOnBehalfByYomiName],
    [ReportVisibility].[ImportSequenceNumber],
    [ReportVisibility].[IsCustomizable],
    [ReportVisibility].[IsManaged],
    IsManagedPLTable.Value,
    [ReportVisibility].[ModifiedBy],
    --[ReportVisibility].[ModifiedByDsc]
    0,
    [ReportVisibility].[ModifiedByName],
    [ReportVisibility].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ReportVisibility].[ModifiedOn],
			us.TimeZoneCode),
        [ReportVisibility].[ModifiedOn],
    [ReportVisibility].[ModifiedOnBehalfBy],
    --[ReportVisibility].[ModifiedOnBehalfByDsc]
    0,
    [ReportVisibility].[ModifiedOnBehalfByName],
    [ReportVisibility].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ReportVisibility].[OverwriteTime],
			us.TimeZoneCode),
        [ReportVisibility].[OverwriteTime],
    [ReportVisibility].[OwnerId],
    [ReportVisibility].[OwnerIdType],
    [ReportVisibility].[OwningBusinessUnit],
    [ReportVisibility].[OwningUser],
    [ReportVisibility].[ReportId],
    --[ReportVisibility].[ReportIdDsc]
    0,
    [ReportVisibility].[ReportIdName],
    [ReportVisibility].[ReportVisibilityId],
    [ReportVisibility].[ReportVisibilityIdUnique],
    [ReportVisibility].[SolutionId],
    [ReportVisibility].[VersionNumber],
    [ReportVisibility].[VisibilityCode],
    VisibilityCodePLTable.Value
from ReportVisibility
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 9103
		and [IsManagedPLTable].AttributeValue = [ReportVisibility].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [VisibilityCodePLTable] on 
		([VisibilityCodePLTable].AttributeName = 'visibilitycode'
		and [VisibilityCodePLTable].ObjectTypeCode = 9103
		and [VisibilityCodePLTable].AttributeValue = [ReportVisibility].[VisibilityCode]
		and [VisibilityCodePLTable].LangId = 
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
	--
	[ReportVisibility].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9100
	)	

		
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
		[ReportVisibility].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9100)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ReportVisibility].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ReportVisibility].[ReportId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 9100 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredReportVisibility] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredReportVisibility] TO [CRMReaderRole]
    AS [dbo];

