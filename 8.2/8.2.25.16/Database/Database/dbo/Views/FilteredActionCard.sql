

--
-- report view for actioncard
--
create view dbo.[FilteredActionCard] (
    [actioncardid],
    [cardtype],
    [cardtypeid],
    [cardtypeidname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [data],
    [description],
    [exchangerate],
    [expirydate],
    [expirydateutc],
    [importsequencenumber],
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
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [priority],
    [recordid],
    [recordidname],
    [recordidobjecttypecode],
    [referencetokens],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjecttypecode],
    [source],
    [sourcename],
    [startdate],
    [startdateutc],
    [state],
    [statename],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber],
    [visibility],
    [visibilityname]
) with view_metadata as
select
    [ActionCard].[ActionCardId],
    [ActionCard].[CardType],
    [ActionCard].[CardTypeId],
    [ActionCard].[CardTypeIdName],
    [ActionCard].[CreatedBy],
    [ActionCard].[CreatedByName],
    [ActionCard].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActionCard].[CreatedOn],
			us.TimeZoneCode),
        [ActionCard].[CreatedOn],
    [ActionCard].[CreatedOnBehalfBy],
    [ActionCard].[CreatedOnBehalfByName],
    [ActionCard].[CreatedOnBehalfByYomiName],
    [ActionCard].[Data],
    [ActionCard].[Description],
    [ActionCard].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActionCard].[ExpiryDate],
			us.TimeZoneCode),
        [ActionCard].[ExpiryDate],
    [ActionCard].[ImportSequenceNumber],
    [ActionCard].[ModifiedBy],
    [ActionCard].[ModifiedByName],
    [ActionCard].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActionCard].[ModifiedOn],
			us.TimeZoneCode),
        [ActionCard].[ModifiedOn],
    [ActionCard].[ModifiedOnBehalfBy],
    [ActionCard].[ModifiedOnBehalfByName],
    [ActionCard].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActionCard].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ActionCard].[OverriddenCreatedOn],
    [ActionCard].[OwnerId],
    [ActionCard].[OwnerIdName],
    [ActionCard].[OwnerIdType],
    [ActionCard].[OwnerIdYomiName],
    [ActionCard].[OwningBusinessUnit],
    [ActionCard].[OwningTeam],
    [ActionCard].[OwningUser],
    [ActionCard].[Priority],
    [ActionCard].[RecordId],
    [ActionCard].[RecordIdName],
    [ActionCard].[RecordIdObjectTypeCode],
    [ActionCard].[ReferenceTokens],
    [ActionCard].[RegardingObjectId],
    [ActionCard].[RegardingObjectIdName],
    [ActionCard].[RegardingObjectTypeCode],
    [ActionCard].[Source],
    SourcePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([ActionCard].[StartDate],
			us.TimeZoneCode),
        [ActionCard].[StartDate],
    [ActionCard].[State],
    StatePLTable.Value,
    [ActionCard].[Title],
    [ActionCard].[TransactionCurrencyId],
    [ActionCard].[TransactionCurrencyIdName],
    [ActionCard].[VersionNumber],
    [ActionCard].[Visibility],
    VisibilityPLTable.Value
from ActionCard
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [SourcePLTable] on 
		([SourcePLTable].AttributeName = 'source'
		and [SourcePLTable].ObjectTypeCode = 9962
		and [SourcePLTable].AttributeValue = [ActionCard].[Source]
		and [SourcePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatePLTable] on 
		([StatePLTable].AttributeName = 'state'
		and [StatePLTable].ObjectTypeCode = 9962
		and [StatePLTable].AttributeValue = [ActionCard].[State]
		and [StatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [VisibilityPLTable] on 
		([VisibilityPLTable].AttributeName = 'visibility'
		and [VisibilityPLTable].ObjectTypeCode = 9962
		and [VisibilityPLTable].AttributeValue = [ActionCard].[Visibility]
		and [VisibilityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9962) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ActionCard].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9962
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
		[ActionCard].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9962)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ActionCard].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ActionCard].[ActionCardId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9962
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActionCard] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredActionCard] TO [CRMReaderRole]
    AS [dbo];

