

--
-- report view for entitlement
--
create view dbo.[FilteredEntitlement] 
(
    [accountid],
    [accountidname],
    [accountidyominame],
    [allocationtypecode],
    [allocationtypecodename],
    [contactid],
    [contactidname],
    [contactidyominame],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customerid],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [decreaseremainingon],
    [decreaseremainingonname],
    [description],
    [emailaddress],
    [enddate],
    [enddateutc],
    [entitlementid],
    [entitlementtemplateid],
    [entitlementtemplateidname],
    [entitytype],
    [entitytypename],
    [exchangerate],
    [importsequencenumber],
    [isdefault],
    [isdefaultname],
    [kbaccesslevel],
    [kbaccesslevelname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
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
    [processid],
    [remainingterms],
    [restrictcasecreation],
    [restrictcasecreationname],
    [slaid],
    [slaidname],
    [stageid],
    [startdate],
    [startdateutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [totalterms],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Entitlement].[AccountId],
    [Entitlement].[AccountIdName],
    [Entitlement].[AccountIdYomiName],
    [Entitlement].[AllocationTypeCode],
    AllocationTypeCodePLTable.Value,
    [Entitlement].[ContactId],
    [Entitlement].[ContactIdName],
    [Entitlement].[ContactIdYomiName],
    [Entitlement].[CreatedBy],
    [Entitlement].[CreatedByName],
    [Entitlement].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Entitlement].[CreatedOn],
			us.TimeZoneCode),
        [Entitlement].[CreatedOn],
    [Entitlement].[CreatedOnBehalfBy],
    [Entitlement].[CreatedOnBehalfByName],
    [Entitlement].[CreatedOnBehalfByYomiName],
    [Entitlement].[CustomerId],
    [Entitlement].[CustomerIdName],
    [Entitlement].[CustomerIdType],
    [Entitlement].[CustomerIdYomiName],
    [Entitlement].[DecreaseRemainingOn],
    DecreaseRemainingOnPLTable.Value,
    [Entitlement].[Description],
    [Entitlement].[EmailAddress],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Entitlement].[EndDate],
			us.TimeZoneCode),
        [Entitlement].[EndDate],
    [Entitlement].[EntitlementId],
    [Entitlement].[EntitlementTemplateId],
    [Entitlement].[EntitlementTemplateIdName],
    [Entitlement].[entitytype],
    entitytypePLTable.Value,
    [Entitlement].[ExchangeRate],
    [Entitlement].[ImportSequenceNumber],
    [Entitlement].[IsDefault],
    IsDefaultPLTable.Value,
    [Entitlement].[KbAccessLevel],
    KbAccessLevelPLTable.Value,
    [Entitlement].[ModifiedBy],
    [Entitlement].[ModifiedByName],
    [Entitlement].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Entitlement].[ModifiedOn],
			us.TimeZoneCode),
        [Entitlement].[ModifiedOn],
    [Entitlement].[ModifiedOnBehalfBy],
    [Entitlement].[ModifiedOnBehalfByName],
    [Entitlement].[ModifiedOnBehalfByYomiName],
    [Entitlement].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Entitlement].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Entitlement].[OverriddenCreatedOn],
    [Entitlement].[OwnerId],
    --[Entitlement].[OwnerIdDsc]
    0,
    [Entitlement].[OwnerIdName],
    [Entitlement].[OwnerIdType],
    [Entitlement].[OwnerIdYomiName],
    [Entitlement].[OwningBusinessUnit],
    [Entitlement].[OwningTeam],
    [Entitlement].[OwningUser],
    [Entitlement].[ProcessId],
    [Entitlement].[RemainingTerms],
    [Entitlement].[RestrictCaseCreation],
    RestrictCaseCreationPLTable.Value,
    [Entitlement].[SLAId],
    [Entitlement].[SLAIdName],
    [Entitlement].[StageId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Entitlement].[StartDate],
			us.TimeZoneCode),
        [Entitlement].[StartDate],
    [Entitlement].[StateCode],
    StateCodePLTable.Value,
    [Entitlement].[StatusCode],
    StatusCodePLTable.Value,
    [Entitlement].[TimeZoneRuleVersionNumber],
    [Entitlement].[TotalTerms],
    [Entitlement].[TransactionCurrencyId],
    [Entitlement].[TransactionCurrencyIdName],
    [Entitlement].[TraversedPath],
    [Entitlement].[UTCConversionTimeZoneCode],
    [Entitlement].[VersionNumber]
from Entitlement
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AllocationTypeCodePLTable] on 
		([AllocationTypeCodePLTable].AttributeName = 'allocationtypecode'
		and [AllocationTypeCodePLTable].ObjectTypeCode = 9700
		and [AllocationTypeCodePLTable].AttributeValue = [Entitlement].[AllocationTypeCode]
		and [AllocationTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DecreaseRemainingOnPLTable] on 
		([DecreaseRemainingOnPLTable].AttributeName = 'decreaseremainingon'
		and [DecreaseRemainingOnPLTable].ObjectTypeCode = 9700
		and [DecreaseRemainingOnPLTable].AttributeValue = [Entitlement].[DecreaseRemainingOn]
		and [DecreaseRemainingOnPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [entitytypePLTable] on 
		([entitytypePLTable].AttributeName = 'entitytype'
		and [entitytypePLTable].ObjectTypeCode = 9700
		and [entitytypePLTable].AttributeValue = [Entitlement].[entitytype]
		and [entitytypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 9700
		and [IsDefaultPLTable].AttributeValue = [Entitlement].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [KbAccessLevelPLTable] on 
		([KbAccessLevelPLTable].AttributeName = 'kbaccesslevel'
		and [KbAccessLevelPLTable].ObjectTypeCode = 9700
		and [KbAccessLevelPLTable].AttributeValue = [Entitlement].[KbAccessLevel]
		and [KbAccessLevelPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RestrictCaseCreationPLTable] on 
		([RestrictCaseCreationPLTable].AttributeName = 'restrictcasecreation'
		and [RestrictCaseCreationPLTable].ObjectTypeCode = 9700
		and [RestrictCaseCreationPLTable].AttributeValue = [Entitlement].[RestrictCaseCreation]
		and [RestrictCaseCreationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9700
		and [StateCodePLTable].AttributeValue = [Entitlement].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9700
		and [StatusCodePLTable].AttributeValue = [Entitlement].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9700) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Entitlement].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9700
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
		[Entitlement].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9700)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Entitlement].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Entitlement].[EntitlementId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9700
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlement] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlement] TO [CRMReaderRole]
    AS [dbo];

