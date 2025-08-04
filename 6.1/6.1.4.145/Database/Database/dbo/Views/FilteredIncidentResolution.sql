

--
-- report view for incidentresolution
--
create view dbo.[FilteredIncidentResolution] (
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [actualdurationminutes],
    [actualend],
    [actualendutc],
    [actualstart],
    [actualstartutc],
    [category],
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
    [description],
    [importsequencenumber],
    [incidentid],
    [incidentiddsc],
    [incidentidname],
    [incidentidtype],
    [isbilled],
    [isbilledname],
    [isregularactivity],
    [isregularactivityname],
    [isworkflowcreated],
    [isworkflowcreatedname],
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
    [scheduleddurationminutes],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [serviceid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [subcategory],
    [subject],
    [timespent],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [IncidentResolution].[ActivityId],
    [IncidentResolution].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [IncidentResolution].[ActualDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ActualEnd],
			us.TimeZoneCode),
        [IncidentResolution].[ActualEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ActualStart],
			us.TimeZoneCode),
        [IncidentResolution].[ActualStart],
    [IncidentResolution].[Category],
    [IncidentResolution].[CreatedBy],
    --[IncidentResolution].[CreatedByDsc]
    0,
    [IncidentResolution].[CreatedByName],
    [IncidentResolution].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[CreatedOn],
			us.TimeZoneCode),
        [IncidentResolution].[CreatedOn],
    [IncidentResolution].[CreatedOnBehalfBy],
    --[IncidentResolution].[CreatedOnBehalfByDsc]
    0,
    [IncidentResolution].[CreatedOnBehalfByName],
    [IncidentResolution].[CreatedOnBehalfByYomiName],
    [IncidentResolution].[Description],
    [IncidentResolution].[ImportSequenceNumber],
    [IncidentResolution].[IncidentId],
    --[IncidentResolution].[IncidentIdDsc]
    0,
    [IncidentResolution].[IncidentIdName],
    [IncidentResolution].[IncidentIdType],
    [IncidentResolution].[IsBilled],
    IsBilledPLTable.Value,
    [IncidentResolution].[IsRegularActivity],
    IsRegularActivityPLTable.Value,
    [IncidentResolution].[IsWorkflowCreated],
    IsWorkflowCreatedPLTable.Value,
    [IncidentResolution].[ModifiedBy],
    --[IncidentResolution].[ModifiedByDsc]
    0,
    [IncidentResolution].[ModifiedByName],
    [IncidentResolution].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ModifiedOn],
			us.TimeZoneCode),
        [IncidentResolution].[ModifiedOn],
    [IncidentResolution].[ModifiedOnBehalfBy],
    --[IncidentResolution].[ModifiedOnBehalfByDsc]
    0,
    [IncidentResolution].[ModifiedOnBehalfByName],
    [IncidentResolution].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [IncidentResolution].[OverriddenCreatedOn],
    [IncidentResolution].[OwnerId],
    --[IncidentResolution].[OwnerIdDsc]
    0,
    [IncidentResolution].[OwnerIdName],
    [IncidentResolution].[OwnerIdType],
    [IncidentResolution].[OwnerIdYomiName],
    [IncidentResolution].[OwningBusinessUnit],
    [IncidentResolution].[OwningTeam],
    [IncidentResolution].[OwningUser],
    [IncidentResolution].[ScheduledDurationMinutes],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ScheduledEnd],
			us.TimeZoneCode),
        [IncidentResolution].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([IncidentResolution].[ScheduledStart],
			us.TimeZoneCode),
        [IncidentResolution].[ScheduledStart],
    [IncidentResolution].[ServiceId],
    [IncidentResolution].[StateCode],
    StateCodePLTable.Value,
    [IncidentResolution].[StatusCode],
    StatusCodePLTable.Value,
    [IncidentResolution].[Subcategory],
    [IncidentResolution].[Subject],
    [IncidentResolution].[TimeSpent],
    [IncidentResolution].[TimeZoneRuleVersionNumber],
    [IncidentResolution].[UTCConversionTimeZoneCode],
    [IncidentResolution].[VersionNumber]
from IncidentResolution
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4206
		and [ActivityTypeCodePLTable].AttributeValue = [IncidentResolution].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsBilledPLTable] on 
		([IsBilledPLTable].AttributeName = 'isbilled'
		and [IsBilledPLTable].ObjectTypeCode = 4206
		and [IsBilledPLTable].AttributeValue = [IncidentResolution].[IsBilled]
		and [IsBilledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRegularActivityPLTable] on 
		([IsRegularActivityPLTable].AttributeName = 'isregularactivity'
		and [IsRegularActivityPLTable].ObjectTypeCode = 4206
		and [IsRegularActivityPLTable].AttributeValue = [IncidentResolution].[IsRegularActivity]
		and [IsRegularActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowCreatedPLTable] on 
		([IsWorkflowCreatedPLTable].AttributeName = 'isworkflowcreated'
		and [IsWorkflowCreatedPLTable].ObjectTypeCode = 4206
		and [IsWorkflowCreatedPLTable].AttributeValue = [IncidentResolution].[IsWorkflowCreated]
		and [IsWorkflowCreatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4206
		and [StateCodePLTable].AttributeValue = [IncidentResolution].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4206
		and [StatusCodePLTable].AttributeValue = [IncidentResolution].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4200) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[IncidentResolution].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4200
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
		[IncidentResolution].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[IncidentResolution].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[IncidentResolution].[ActivityId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4200 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredIncidentResolution] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredIncidentResolution] TO [CRMReaderRole]
    AS [dbo];

