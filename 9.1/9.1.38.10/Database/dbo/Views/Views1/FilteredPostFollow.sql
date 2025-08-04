

--
-- report view for postfollow
--
create view dbo.[FilteredPostFollow] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [postfollowid],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber],
    [yammerpoststate]
) with view_metadata as
select
    [PostFollow].[CreatedBy],
    [PostFollow].[CreatedByName],
    [PostFollow].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PostFollow].[CreatedOn],
			us.TimeZoneCode),
        [PostFollow].[CreatedOn],
    [PostFollow].[CreatedOnBehalfBy],
    [PostFollow].[CreatedOnBehalfByName],
    [PostFollow].[CreatedOnBehalfByYomiName],
    [PostFollow].[OwnerId],
    [PostFollow].[OwnerIdName],
    [PostFollow].[OwnerIdType],
    [PostFollow].[OwnerIdYomiName],
    [PostFollow].[OwningBusinessUnit],
    [PostFollow].[OwningTeam],
    [PostFollow].[OwningUser],
    [PostFollow].[PostFollowId],
    [PostFollow].[RegardingObjectId],
    [PostFollow].[RegardingObjectIdName],
    [PostFollow].[RegardingObjectIdYomiName],
    [PostFollow].[RegardingObjectTypeCode],
    [PostFollow].[TimeZoneRuleVersionNumber],
    [PostFollow].[UTCConversionTimeZoneCode],
    [PostFollow].[VersionNumber],
    [PostFollow].[YammerPostState]
from PostFollow
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(8003) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[PostFollow].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 8003
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
		[PostFollow].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 8003)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[PostFollow].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[PostFollow].[PostFollowId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 8003
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPostFollow] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPostFollow] TO [CRMReaderRole]
    AS [dbo];

