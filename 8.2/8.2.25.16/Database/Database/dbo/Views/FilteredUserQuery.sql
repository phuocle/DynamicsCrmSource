

--
-- report view for userquery
--
create view dbo.[FilteredUserQuery] (
    [advancedgroupby],
    [columnsetxml],
    [conditionalformatting],
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
    [fetchxml],
    [layoutxml],
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
    [name],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parentqueryid],
    [querytype],
    [returnedtypecode],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [userqueryid],
    [versionnumber]
) with view_metadata as
select
    [UserQuery].[AdvancedGroupBy],
    [UserQuery].[ColumnSetXml],
    [UserQuery].[ConditionalFormatting],
    [UserQuery].[CreatedBy],
    --[UserQuery].[CreatedByDsc]
    0,
    [UserQuery].[CreatedByName],
    [UserQuery].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserQuery].[CreatedOn],
			us.TimeZoneCode),
        [UserQuery].[CreatedOn],
    [UserQuery].[CreatedOnBehalfBy],
    --[UserQuery].[CreatedOnBehalfByDsc]
    0,
    [UserQuery].[CreatedOnBehalfByName],
    [UserQuery].[CreatedOnBehalfByYomiName],
    [UserQuery].[Description],
    [UserQuery].[FetchXml],
    [UserQuery].[LayoutXml],
    [UserQuery].[ModifiedBy],
    --[UserQuery].[ModifiedByDsc]
    0,
    [UserQuery].[ModifiedByName],
    [UserQuery].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UserQuery].[ModifiedOn],
			us.TimeZoneCode),
        [UserQuery].[ModifiedOn],
    [UserQuery].[ModifiedOnBehalfBy],
    --[UserQuery].[ModifiedOnBehalfByDsc]
    0,
    [UserQuery].[ModifiedOnBehalfByName],
    [UserQuery].[ModifiedOnBehalfByYomiName],
    [UserQuery].[Name],
    [UserQuery].[OwnerId],
    --[UserQuery].[OwnerIdDsc]
    0,
    [UserQuery].[OwnerIdName],
    [UserQuery].[OwnerIdType],
    [UserQuery].[OwnerIdYomiName],
    [UserQuery].[OwningBusinessUnit],
    [UserQuery].[OwningTeam],
    [UserQuery].[OwningUser],
    [UserQuery].[ParentQueryId],
    [UserQuery].[QueryType],
    [UserQuery].[ReturnedTypeCode],
    [UserQuery].[StateCode],
    StateCodePLTable.Value,
    [UserQuery].[StatusCode],
    StatusCodePLTable.Value,
    [UserQuery].[UserQueryId],
    [UserQuery].[VersionNumber]
from UserQuery
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4230
		and [StateCodePLTable].AttributeValue = [UserQuery].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4230
		and [StatusCodePLTable].AttributeValue = [UserQuery].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4230) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[UserQuery].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4230
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
		[UserQuery].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4230)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[UserQuery].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[UserQuery].[UserQueryId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4230
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUserQuery] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUserQuery] TO [CRMReaderRole]
    AS [dbo];

