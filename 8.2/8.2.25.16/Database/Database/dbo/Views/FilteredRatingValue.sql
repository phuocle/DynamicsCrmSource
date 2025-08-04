

--
-- report view for ratingvalue
--
create view dbo.[FilteredRatingValue] (
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
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [ratingmodel],
    [ratingmodelname],
    [ratingvalueid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [value],
    [versionnumber]
) with view_metadata as
select
    [RatingValue].[CreatedBy],
    [RatingValue].[CreatedByName],
    [RatingValue].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RatingValue].[CreatedOn],
			us.TimeZoneCode),
        [RatingValue].[CreatedOn],
    [RatingValue].[CreatedOnBehalfBy],
    [RatingValue].[CreatedOnBehalfByName],
    [RatingValue].[CreatedOnBehalfByYomiName],
    [RatingValue].[ExchangeRate],
    [RatingValue].[ImportSequenceNumber],
    [RatingValue].[ModifiedBy],
    [RatingValue].[ModifiedByName],
    [RatingValue].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RatingValue].[ModifiedOn],
			us.TimeZoneCode),
        [RatingValue].[ModifiedOn],
    [RatingValue].[ModifiedOnBehalfBy],
    [RatingValue].[ModifiedOnBehalfByName],
    [RatingValue].[ModifiedOnBehalfByYomiName],
    [RatingValue].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RatingValue].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [RatingValue].[OverriddenCreatedOn],
    [RatingValue].[OwnerId],
    [RatingValue].[OwnerIdName],
    [RatingValue].[OwnerIdType],
    [RatingValue].[OwnerIdYomiName],
    [RatingValue].[OwningBusinessUnit],
    [RatingValue].[OwningTeam],
    [RatingValue].[OwningUser],
    [RatingValue].[RatingModel],
    [RatingValue].[RatingModelName],
    [RatingValue].[RatingValueId],
    [RatingValue].[StateCode],
    StateCodePLTable.Value,
    [RatingValue].[StatusCode],
    StatusCodePLTable.Value,
    [RatingValue].[TimeZoneRuleVersionNumber],
    [RatingValue].[TransactionCurrencyId],
    [RatingValue].[TransactionCurrencyIdName],
    [RatingValue].[UTCConversionTimeZoneCode],
    [RatingValue].[Value],
    [RatingValue].[VersionNumber]
from RatingValue
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1142
		and [StateCodePLTable].AttributeValue = [RatingValue].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1142
		and [StatusCodePLTable].AttributeValue = [RatingValue].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1142) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[RatingValue].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1142
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
		[RatingValue].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1142)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[RatingValue].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[RatingValue].[RatingValueId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1142
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRatingValue] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRatingValue] TO [CRMReaderRole]
    AS [dbo];

