

--
-- report view for ratingmodel
--
create view dbo.[FilteredRatingModel] (
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
    [maxratingvalue],
    [minratingvalue],
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
    [ratingmodelid],
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
    [RatingModel].[CreatedBy],
    [RatingModel].[CreatedByName],
    [RatingModel].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RatingModel].[CreatedOn],
			us.TimeZoneCode),
        [RatingModel].[CreatedOn],
    [RatingModel].[CreatedOnBehalfBy],
    [RatingModel].[CreatedOnBehalfByName],
    [RatingModel].[CreatedOnBehalfByYomiName],
    [RatingModel].[ExchangeRate],
    [RatingModel].[ImportSequenceNumber],
    [RatingModel].[MaxRatingValue],
    [RatingModel].[MinRatingValue],
    [RatingModel].[ModifiedBy],
    [RatingModel].[ModifiedByName],
    [RatingModel].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RatingModel].[ModifiedOn],
			us.TimeZoneCode),
        [RatingModel].[ModifiedOn],
    [RatingModel].[ModifiedOnBehalfBy],
    [RatingModel].[ModifiedOnBehalfByName],
    [RatingModel].[ModifiedOnBehalfByYomiName],
    [RatingModel].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RatingModel].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [RatingModel].[OverriddenCreatedOn],
    [RatingModel].[OwnerId],
    --[RatingModel].[OwnerIdDsc]
    0,
    [RatingModel].[OwnerIdName],
    [RatingModel].[OwnerIdType],
    [RatingModel].[OwnerIdYomiName],
    [RatingModel].[OwningBusinessUnit],
    [RatingModel].[OwningTeam],
    [RatingModel].[OwningUser],
    [RatingModel].[RatingModelId],
    [RatingModel].[StateCode],
    StateCodePLTable.Value,
    [RatingModel].[StatusCode],
    StatusCodePLTable.Value,
    [RatingModel].[TimeZoneRuleVersionNumber],
    [RatingModel].[TransactionCurrencyId],
    [RatingModel].[TransactionCurrencyIdName],
    [RatingModel].[UTCConversionTimeZoneCode],
    [RatingModel].[VersionNumber]
from RatingModel
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1144
		and [StateCodePLTable].AttributeValue = [RatingModel].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1144
		and [StatusCodePLTable].AttributeValue = [RatingModel].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1144) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[RatingModel].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 1144
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
		[RatingModel].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1144)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[RatingModel].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[RatingModel].[RatingModelId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 1144
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRatingModel] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRatingModel] TO [CRMReaderRole]
    AS [dbo];

