

--
-- report view for msdyn_autocapturesettings
--
create view dbo.[Filteredmsdyn_autocapturesettings] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [msdyn_autocapture],
    [msdyn_autocapturename],
    [msdyn_autocapturesettingsid],
    [msdyn_autocapturev1],
    [msdyn_autocapturev1name],
    [msdyn_automaticactivityupdate],
    [msdyn_automaticactivityupdatename],
    [msdyn_calendar],
    [msdyn_calendarname],
    [msdyn_contacts],
    [msdyn_contactsname],
    [msdyn_defaultassociation],
    [msdyn_DontShowSettingStatus],
    [msdyn_emails],
    [msdyn_emailsname],
    [msdyn_meetings],
    [msdyn_meetingsname],
    [msdyn_name],
    [msdyn_organizationid],
    [msdyn_settingsuiaction],
    [msdyn_userid],
    [msdyn_v1termsandconditionscount],
    [msdyn_v2termsandconditionscount],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [msdyn_autocapturesettings].[CreatedBy],
    [msdyn_autocapturesettings].[CreatedByName],
    [msdyn_autocapturesettings].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_autocapturesettings].[CreatedOn],
			us.TimeZoneCode),
        [msdyn_autocapturesettings].[CreatedOn],
    [msdyn_autocapturesettings].[CreatedOnBehalfBy],
    [msdyn_autocapturesettings].[CreatedOnBehalfByName],
    [msdyn_autocapturesettings].[CreatedOnBehalfByYomiName],
    [msdyn_autocapturesettings].[ImportSequenceNumber],
    [msdyn_autocapturesettings].[ModifiedBy],
    [msdyn_autocapturesettings].[ModifiedByName],
    [msdyn_autocapturesettings].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_autocapturesettings].[ModifiedOn],
			us.TimeZoneCode),
        [msdyn_autocapturesettings].[ModifiedOn],
    [msdyn_autocapturesettings].[ModifiedOnBehalfBy],
    [msdyn_autocapturesettings].[ModifiedOnBehalfByName],
    [msdyn_autocapturesettings].[ModifiedOnBehalfByYomiName],
    [msdyn_autocapturesettings].[msdyn_autocapture],
    msdyn_autocapturePLTable.Value,
    [msdyn_autocapturesettings].[msdyn_autocapturesettingsId],
    [msdyn_autocapturesettings].[msdyn_autocaptureV1],
    msdyn_autocaptureV1PLTable.Value,
    [msdyn_autocapturesettings].[msdyn_automaticactivityupdate],
    msdyn_automaticactivityupdatePLTable.Value,
    [msdyn_autocapturesettings].[msdyn_calendar],
    msdyn_calendarPLTable.Value,
    [msdyn_autocapturesettings].[msdyn_contacts],
    msdyn_contactsPLTable.Value,
    [msdyn_autocapturesettings].[msdyn_defaultassociation],
    [msdyn_autocapturesettings].[msdyn_DontShowSettingStatus],
    [msdyn_autocapturesettings].[msdyn_emails],
    msdyn_emailsPLTable.Value,
    [msdyn_autocapturesettings].[msdyn_meetings],
    msdyn_meetingsPLTable.Value,
    [msdyn_autocapturesettings].[msdyn_name],
    [msdyn_autocapturesettings].[msdyn_organizationid],
    [msdyn_autocapturesettings].[msdyn_settingsuiaction],
    [msdyn_autocapturesettings].[msdyn_UserId],
    [msdyn_autocapturesettings].[msdyn_V1TermsandConditionsCount],
    [msdyn_autocapturesettings].[msdyn_V2TermsandConditionsCount],
    dbo.fn_UTCToTzCodeSpecificLocalTime([msdyn_autocapturesettings].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [msdyn_autocapturesettings].[OverriddenCreatedOn],
    [msdyn_autocapturesettings].[OwnerId],
    --[msdyn_autocapturesettings].[OwnerIdDsc]
    0,
    [msdyn_autocapturesettings].[OwnerIdName],
    [msdyn_autocapturesettings].[OwnerIdType],
    [msdyn_autocapturesettings].[OwnerIdYomiName],
    [msdyn_autocapturesettings].[OwningBusinessUnit],
    [msdyn_autocapturesettings].[OwningTeam],
    [msdyn_autocapturesettings].[OwningUser],
    [msdyn_autocapturesettings].[statecode],
    statecodePLTable.Value,
    [msdyn_autocapturesettings].[statuscode],
    statuscodePLTable.Value,
    [msdyn_autocapturesettings].[TimeZoneRuleVersionNumber],
    [msdyn_autocapturesettings].[UTCConversionTimeZoneCode],
    [msdyn_autocapturesettings].[VersionNumber]
from msdyn_autocapturesettings
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [msdyn_autocapturePLTable] on 
		([msdyn_autocapturePLTable].AttributeName = 'msdyn_autocapture'
		and [msdyn_autocapturePLTable].ObjectTypeCode = 10100
		and [msdyn_autocapturePLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_autocapture]
		and [msdyn_autocapturePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_autocaptureV1PLTable] on 
		([msdyn_autocaptureV1PLTable].AttributeName = 'msdyn_autocapturev1'
		and [msdyn_autocaptureV1PLTable].ObjectTypeCode = 10100
		and [msdyn_autocaptureV1PLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_autocaptureV1]
		and [msdyn_autocaptureV1PLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_automaticactivityupdatePLTable] on 
		([msdyn_automaticactivityupdatePLTable].AttributeName = 'msdyn_automaticactivityupdate'
		and [msdyn_automaticactivityupdatePLTable].ObjectTypeCode = 10100
		and [msdyn_automaticactivityupdatePLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_automaticactivityupdate]
		and [msdyn_automaticactivityupdatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_calendarPLTable] on 
		([msdyn_calendarPLTable].AttributeName = 'msdyn_calendar'
		and [msdyn_calendarPLTable].ObjectTypeCode = 10100
		and [msdyn_calendarPLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_calendar]
		and [msdyn_calendarPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_contactsPLTable] on 
		([msdyn_contactsPLTable].AttributeName = 'msdyn_contacts'
		and [msdyn_contactsPLTable].ObjectTypeCode = 10100
		and [msdyn_contactsPLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_contacts]
		and [msdyn_contactsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_emailsPLTable] on 
		([msdyn_emailsPLTable].AttributeName = 'msdyn_emails'
		and [msdyn_emailsPLTable].ObjectTypeCode = 10100
		and [msdyn_emailsPLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_emails]
		and [msdyn_emailsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [msdyn_meetingsPLTable] on 
		([msdyn_meetingsPLTable].AttributeName = 'msdyn_meetings'
		and [msdyn_meetingsPLTable].ObjectTypeCode = 10100
		and [msdyn_meetingsPLTable].AttributeValue = [msdyn_autocapturesettings].[msdyn_meetings]
		and [msdyn_meetingsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10100
		and [statecodePLTable].AttributeValue = [msdyn_autocapturesettings].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10100
		and [statuscodePLTable].AttributeValue = [msdyn_autocapturesettings].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10100) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[msdyn_autocapturesettings].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10100
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
		[msdyn_autocapturesettings].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10100)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[msdyn_autocapturesettings].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[msdyn_autocapturesettings].[msdyn_autocapturesettingsId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10100
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_autocapturesettings] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredmsdyn_autocapturesettings] TO [CRMReaderRole]
    AS [dbo];

