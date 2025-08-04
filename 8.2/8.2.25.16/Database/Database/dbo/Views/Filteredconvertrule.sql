

--
-- report view for convertrule
--
create view dbo.[Filteredconvertrule] (
    [allowunknownsender],
    [allowunknownsendername],
    [channelpropertygroupid],
    [channelpropertygroupidname],
    [checkactiveentitlement],
    [checkactiveentitlementname],
    [checkblockedsocialprofile],
    [checkblockedsocialprofilename],
    [checkdirectmessages],
    [checkdirectmessagesname],
    [checkifresolved],
    [checkifresolvedname],
    [componentstate],
    [convertruleid],
    [convertruleidunique],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [queueid],
    [queueidname],
    [recordversion],
    [resolvedsince],
    [responsetemplateid],
    [responsetemplateidname],
    [sendautomaticresponse],
    [sendautomaticresponsename],
    [solutionid],
    [sourcechanneltypecode],
    [sourcechanneltypecodename],
    [sourcetypecode],
    [sourcetypecodename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber],
    [workflowid],
    [workflowidname]
) with view_metadata as
select
    [ConvertRule].[AllowUnknownSender],
    AllowUnknownSenderPLTable.Value,
    [ConvertRule].[ChannelPropertyGroupId],
    [ConvertRule].[ChannelPropertyGroupIdName],
    [ConvertRule].[CheckActiveEntitlement],
    CheckActiveEntitlementPLTable.Value,
    [ConvertRule].[CheckBlockedSocialProfile],
    CheckBlockedSocialProfilePLTable.Value,
    [ConvertRule].[CheckDirectMessages],
    CheckDirectMessagesPLTable.Value,
    [ConvertRule].[CheckIfResolved],
    CheckIfResolvedPLTable.Value,
    [ConvertRule].[ComponentState],
    [ConvertRule].[ConvertRuleId],
    [ConvertRule].[ConvertRuleIdUnique],
    [ConvertRule].[CreatedBy],
    [ConvertRule].[CreatedByName],
    [ConvertRule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConvertRule].[CreatedOn],
			us.TimeZoneCode),
        [ConvertRule].[CreatedOn],
    [ConvertRule].[CreatedOnBehalfBy],
    [ConvertRule].[CreatedOnBehalfByName],
    [ConvertRule].[CreatedOnBehalfByYomiName],
    [ConvertRule].[Description],
    [ConvertRule].[ExchangeRate],
    [ConvertRule].[IsManaged],
    [ConvertRule].[ModifiedBy],
    [ConvertRule].[ModifiedByName],
    [ConvertRule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConvertRule].[ModifiedOn],
			us.TimeZoneCode),
        [ConvertRule].[ModifiedOn],
    [ConvertRule].[ModifiedOnBehalfBy],
    [ConvertRule].[ModifiedOnBehalfByName],
    [ConvertRule].[ModifiedOnBehalfByYomiName],
    [ConvertRule].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConvertRule].[OverwriteTime],
			us.TimeZoneCode),
        [ConvertRule].[OverwriteTime],
    [ConvertRule].[OwnerId],
    [ConvertRule].[OwnerIdName],
    [ConvertRule].[OwnerIdType],
    [ConvertRule].[OwningBusinessUnit],
    [ConvertRule].[OwningTeam],
    [ConvertRule].[OwningUser],
    [ConvertRule].[QueueId],
    [ConvertRule].[QueueIdName],
    [ConvertRule].[RecordVersion],
    [ConvertRule].[ResolvedSince],
    [ConvertRule].[ResponseTemplateId],
    [ConvertRule].[ResponseTemplateIdName],
    [ConvertRule].[SendAutomaticResponse],
    SendAutomaticResponsePLTable.Value,
    [ConvertRule].[SolutionId],
    [ConvertRule].[SourceChannelTypeCode],
    SourceChannelTypeCodePLTable.Value,
    [ConvertRule].[SourceTypeCode],
    SourceTypeCodePLTable.Value,
    [ConvertRule].[StateCode],
    StateCodePLTable.Value,
    [ConvertRule].[StatusCode],
    StatusCodePLTable.Value,
    [ConvertRule].[TransactionCurrencyId],
    [ConvertRule].[TransactionCurrencyIdName],
    [ConvertRule].[VersionNumber],
    [ConvertRule].[WorkflowId],
    [ConvertRule].[WorkflowIdName]
from ConvertRule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AllowUnknownSenderPLTable] on 
		([AllowUnknownSenderPLTable].AttributeName = 'allowunknownsender'
		and [AllowUnknownSenderPLTable].ObjectTypeCode = 9300
		and [AllowUnknownSenderPLTable].AttributeValue = [ConvertRule].[AllowUnknownSender]
		and [AllowUnknownSenderPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CheckActiveEntitlementPLTable] on 
		([CheckActiveEntitlementPLTable].AttributeName = 'checkactiveentitlement'
		and [CheckActiveEntitlementPLTable].ObjectTypeCode = 9300
		and [CheckActiveEntitlementPLTable].AttributeValue = [ConvertRule].[CheckActiveEntitlement]
		and [CheckActiveEntitlementPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CheckBlockedSocialProfilePLTable] on 
		([CheckBlockedSocialProfilePLTable].AttributeName = 'checkblockedsocialprofile'
		and [CheckBlockedSocialProfilePLTable].ObjectTypeCode = 9300
		and [CheckBlockedSocialProfilePLTable].AttributeValue = [ConvertRule].[CheckBlockedSocialProfile]
		and [CheckBlockedSocialProfilePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CheckDirectMessagesPLTable] on 
		([CheckDirectMessagesPLTable].AttributeName = 'checkdirectmessages'
		and [CheckDirectMessagesPLTable].ObjectTypeCode = 9300
		and [CheckDirectMessagesPLTable].AttributeValue = [ConvertRule].[CheckDirectMessages]
		and [CheckDirectMessagesPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CheckIfResolvedPLTable] on 
		([CheckIfResolvedPLTable].AttributeName = 'checkifresolved'
		and [CheckIfResolvedPLTable].ObjectTypeCode = 9300
		and [CheckIfResolvedPLTable].AttributeValue = [ConvertRule].[CheckIfResolved]
		and [CheckIfResolvedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SendAutomaticResponsePLTable] on 
		([SendAutomaticResponsePLTable].AttributeName = 'sendautomaticresponse'
		and [SendAutomaticResponsePLTable].ObjectTypeCode = 9300
		and [SendAutomaticResponsePLTable].AttributeValue = [ConvertRule].[SendAutomaticResponse]
		and [SendAutomaticResponsePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SourceChannelTypeCodePLTable] on 
		([SourceChannelTypeCodePLTable].AttributeName = 'sourcechanneltypecode'
		and [SourceChannelTypeCodePLTable].ObjectTypeCode = 9300
		and [SourceChannelTypeCodePLTable].AttributeValue = [ConvertRule].[SourceChannelTypeCode]
		and [SourceChannelTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SourceTypeCodePLTable] on 
		([SourceTypeCodePLTable].AttributeName = 'sourcetypecode'
		and [SourceTypeCodePLTable].ObjectTypeCode = 9300
		and [SourceTypeCodePLTable].AttributeValue = [ConvertRule].[SourceTypeCode]
		and [SourceTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9300
		and [StateCodePLTable].AttributeValue = [ConvertRule].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9300
		and [StatusCodePLTable].AttributeValue = [ConvertRule].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9300) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ConvertRule].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9300
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
		[ConvertRule].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9300)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ConvertRule].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ConvertRule].[ConvertRuleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9300
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredconvertrule] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredconvertrule] TO [CRMReaderRole]
    AS [dbo];

