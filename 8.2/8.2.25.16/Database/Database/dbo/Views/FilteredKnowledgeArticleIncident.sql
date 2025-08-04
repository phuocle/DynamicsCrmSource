

--
-- report view for knowledgearticleincident
--
create view dbo.[FilteredKnowledgeArticleIncident] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [importsequencenumber],
    [incidentid],
    [incidentidname],
    [issenttocustomer],
    [issenttocustomername],
    [knowledgearticleid],
    [knowledgearticleidname],
    [knowledgearticleincidentid],
    [knowledgeusage],
    [knowledgeusagename],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [KnowledgeArticleIncident].[CreatedBy],
    [KnowledgeArticleIncident].[CreatedByName],
    [KnowledgeArticleIncident].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleIncident].[CreatedOn],
			us.TimeZoneCode),
        [KnowledgeArticleIncident].[CreatedOn],
    [KnowledgeArticleIncident].[CreatedOnBehalfBy],
    [KnowledgeArticleIncident].[CreatedOnBehalfByName],
    [KnowledgeArticleIncident].[CreatedOnBehalfByYomiName],
    [KnowledgeArticleIncident].[ExchangeRate],
    [KnowledgeArticleIncident].[ImportSequenceNumber],
    [KnowledgeArticleIncident].[IncidentId],
    [KnowledgeArticleIncident].[IncidentIdName],
    [KnowledgeArticleIncident].[IsSentToCustomer],
    IsSentToCustomerPLTable.Value,
    [KnowledgeArticleIncident].[KnowledgeArticleId],
    [KnowledgeArticleIncident].[KnowledgeArticleIdName],
    [KnowledgeArticleIncident].[KnowledgeArticleIncidentId],
    [KnowledgeArticleIncident].[KnowledgeUsage],
    KnowledgeUsagePLTable.Value,
    [KnowledgeArticleIncident].[ModifiedBy],
    [KnowledgeArticleIncident].[ModifiedByName],
    [KnowledgeArticleIncident].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleIncident].[ModifiedOn],
			us.TimeZoneCode),
        [KnowledgeArticleIncident].[ModifiedOn],
    [KnowledgeArticleIncident].[ModifiedOnBehalfBy],
    [KnowledgeArticleIncident].[ModifiedOnBehalfByName],
    [KnowledgeArticleIncident].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([KnowledgeArticleIncident].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [KnowledgeArticleIncident].[OverriddenCreatedOn],
    [KnowledgeArticleIncident].[OwnerId],
    [KnowledgeArticleIncident].[OwnerIdType],
    [KnowledgeArticleIncident].[OwningBusinessUnit],
    [KnowledgeArticleIncident].[OwningUser],
    [KnowledgeArticleIncident].[statecode],
    statecodePLTable.Value,
    [KnowledgeArticleIncident].[statuscode],
    statuscodePLTable.Value,
    [KnowledgeArticleIncident].[TimeZoneRuleVersionNumber],
    [KnowledgeArticleIncident].[TransactionCurrencyId],
    [KnowledgeArticleIncident].[TransactionCurrencyIdName],
    [KnowledgeArticleIncident].[UTCConversionTimeZoneCode],
    [KnowledgeArticleIncident].[VersionNumber]
from KnowledgeArticleIncident
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsSentToCustomerPLTable] on 
		([IsSentToCustomerPLTable].AttributeName = 'issenttocustomer'
		and [IsSentToCustomerPLTable].ObjectTypeCode = 9954
		and [IsSentToCustomerPLTable].AttributeValue = [KnowledgeArticleIncident].[IsSentToCustomer]
		and [IsSentToCustomerPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [KnowledgeUsagePLTable] on 
		([KnowledgeUsagePLTable].AttributeName = 'knowledgeusage'
		and [KnowledgeUsagePLTable].ObjectTypeCode = 9954
		and [KnowledgeUsagePLTable].AttributeValue = [KnowledgeArticleIncident].[KnowledgeUsage]
		and [KnowledgeUsagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 9954
		and [statecodePLTable].AttributeValue = [KnowledgeArticleIncident].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 9954
		and [statuscodePLTable].AttributeValue = [KnowledgeArticleIncident].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9953) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[KnowledgeArticleIncident].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9953
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
		[KnowledgeArticleIncident].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9953)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[KnowledgeArticleIncident].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[KnowledgeArticleIncident].[KnowledgeArticleId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9953
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeArticleIncident] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeArticleIncident] TO [CRMReaderRole]
    AS [dbo];

