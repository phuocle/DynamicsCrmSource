

--
-- report view for activityparty
--
create view dbo.[FilteredActivityParty] (
    [activityid],
    [activitypartyid],
    [addressused],
    [addressusedemailcolumnnumber],
    [donotemail],
    [donotemailname],
    [donotfax],
    [donotfaxname],
    [donotphone],
    [donotphonename],
    [donotpostalmail],
    [donotpostalmailname],
    [effort],
    [exchangeentryid],
    [instancetypecode],
    [instancetypecodename],
    [ispartydeleted],
    [ispartydeletedname],
    [ownerid],
    [owneridtype],
    [participationtypemask],
    [participationtypemaskname],
    [partyid],
    [partyiddsc],
    [partyidname],
    [partyobjecttypecode],
    [resourcespecid],
    [resourcespecidname],
    [scheduledend],
    [scheduledendutc],
    [scheduledstart],
    [scheduledstartutc],
    [versionnumber]
) with view_metadata as
select
    [ActivityParty].[ActivityId],
    [ActivityParty].[ActivityPartyId],
    [ActivityParty].[AddressUsed],
    [ActivityParty].[AddressUsedEmailColumnNumber],
    [ActivityParty].[DoNotEmail],
    DoNotEmailPLTable.Value,
    [ActivityParty].[DoNotFax],
    DoNotFaxPLTable.Value,
    [ActivityParty].[DoNotPhone],
    DoNotPhonePLTable.Value,
    [ActivityParty].[DoNotPostalMail],
    DoNotPostalMailPLTable.Value,
    [ActivityParty].[Effort],
    [ActivityParty].[ExchangeEntryId],
    [ActivityParty].[InstanceTypeCode],
    InstanceTypeCodePLTable.Value,
    [ActivityParty].[IsPartyDeleted],
    IsPartyDeletedPLTable.Value,
    [ActivityParty].[OwnerId],
    [ActivityParty].[OwnerIdType],
    [ActivityParty].[ParticipationTypeMask],
    ParticipationTypeMaskPLTable.Value,
    [ActivityParty].[PartyId],
    --[ActivityParty].[PartyIdDsc]
    0,
    [ActivityParty].[PartyIdName],
    [ActivityParty].[PartyObjectTypeCode],
    [ActivityParty].[ResourceSpecId],
    [ActivityParty].[ResourceSpecIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityParty].[ScheduledEnd],
			us.TimeZoneCode),
        [ActivityParty].[ScheduledEnd],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActivityParty].[ScheduledStart],
			us.TimeZoneCode),
        [ActivityParty].[ScheduledStart],
    [ActivityParty].[VersionNumber]
from ActivityParty
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DoNotEmailPLTable] on 
		([DoNotEmailPLTable].AttributeName = 'donotemail'
		and [DoNotEmailPLTable].ObjectTypeCode = 135
		and [DoNotEmailPLTable].AttributeValue = [ActivityParty].[DoNotEmail]
		and [DoNotEmailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotFaxPLTable] on 
		([DoNotFaxPLTable].AttributeName = 'donotfax'
		and [DoNotFaxPLTable].ObjectTypeCode = 135
		and [DoNotFaxPLTable].AttributeValue = [ActivityParty].[DoNotFax]
		and [DoNotFaxPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotPhonePLTable] on 
		([DoNotPhonePLTable].AttributeName = 'donotphone'
		and [DoNotPhonePLTable].ObjectTypeCode = 135
		and [DoNotPhonePLTable].AttributeValue = [ActivityParty].[DoNotPhone]
		and [DoNotPhonePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DoNotPostalMailPLTable] on 
		([DoNotPostalMailPLTable].AttributeName = 'donotpostalmail'
		and [DoNotPostalMailPLTable].ObjectTypeCode = 135
		and [DoNotPostalMailPLTable].AttributeValue = [ActivityParty].[DoNotPostalMail]
		and [DoNotPostalMailPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InstanceTypeCodePLTable] on 
		([InstanceTypeCodePLTable].AttributeName = 'instancetypecode'
		and [InstanceTypeCodePLTable].ObjectTypeCode = 135
		and [InstanceTypeCodePLTable].AttributeValue = [ActivityParty].[InstanceTypeCode]
		and [InstanceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPartyDeletedPLTable] on 
		([IsPartyDeletedPLTable].AttributeName = 'ispartydeleted'
		and [IsPartyDeletedPLTable].ObjectTypeCode = 135
		and [IsPartyDeletedPLTable].AttributeValue = [ActivityParty].[IsPartyDeleted]
		and [IsPartyDeletedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ParticipationTypeMaskPLTable] on 
		([ParticipationTypeMaskPLTable].AttributeName = 'participationtypemask'
		and [ParticipationTypeMaskPLTable].ObjectTypeCode = 135
		and [ParticipationTypeMaskPLTable].AttributeValue = [ActivityParty].[ParticipationTypeMask]
		and [ParticipationTypeMaskPLTable].LangId = 
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
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ActivityParty].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[ActivityParty].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4200)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ActivityParty].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ActivityParty].[ActivityId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4200
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityParty] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActivityParty] TO [CRMReaderRole]
    AS [dbo];

