

--
-- report view for bulkoperationlog
--
create view dbo.[FilteredBulkOperationLog] 
(
    [additionalinfo],
    [bulkoperationid],
    [bulkoperationidname],
    [bulkoperationidtype],
    [bulkoperationidyominame],
    [bulkoperationlogid],
    [campaignactivityid],
    [campaignactivityidname],
    [campaignactivityidtype],
    [campaignactivityidyominame],
    [createdobjectid],
    [createdobjectidname],
    [createdobjectidtypecode],
    [createdobjectidyominame],
    [errordescriptionformatted],
    [errornumber],
    [errornumberformatted],
    [importsequencenumber],
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
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjectidtypecode],
    [regardingobjectidyominame],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BulkOperationLog].[AdditionalInfo],
    [BulkOperationLog].[BulkOperationId],
    [BulkOperationLog].[BulkOperationIdName],
    [BulkOperationLog].[BulkOperationIdType],
    [BulkOperationLog].[BulkOperationIdYomiName],
    [BulkOperationLog].[BulkOperationLogId],
    [BulkOperationLog].[CampaignActivityId],
    [BulkOperationLog].[CampaignActivityIdName],
    [BulkOperationLog].[CampaignActivityIdType],
    [BulkOperationLog].[CampaignActivityIdYomiName],
    [BulkOperationLog].[CreatedObjectId],
    [BulkOperationLog].[CreatedObjectIdName],
    [BulkOperationLog].[CreatedObjectIdTypeCode],
    [BulkOperationLog].[CreatedObjectIdYomiName],
    [BulkOperationLog].[ErrorDescriptionFormatted],
    [BulkOperationLog].[ErrorNumber],
    [BulkOperationLog].[ErrorNumberFormatted],
    [BulkOperationLog].[ImportSequenceNumber],
    [BulkOperationLog].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BulkOperationLog].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BulkOperationLog].[OverriddenCreatedOn],
    [BulkOperationLog].[OwnerId],
    --[BulkOperationLog].[OwnerIdDsc]
    0,
    [BulkOperationLog].[OwnerIdName],
    [BulkOperationLog].[OwnerIdType],
    [BulkOperationLog].[OwnerIdYomiName],
    [BulkOperationLog].[OwningBusinessUnit],
    [BulkOperationLog].[OwningTeam],
    [BulkOperationLog].[OwningUser],
    [BulkOperationLog].[RegardingObjectId],
    [BulkOperationLog].[RegardingObjectIdName],
    [BulkOperationLog].[RegardingObjectIdTypeCode],
    [BulkOperationLog].[RegardingObjectIdYomiName],
    [BulkOperationLog].[TimeZoneRuleVersionNumber],
    [BulkOperationLog].[UTCConversionTimeZoneCode],
    [BulkOperationLog].[VersionNumber]
from BulkOperationLog
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4406) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BulkOperationLog].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4406
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
		[BulkOperationLog].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4406)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BulkOperationLog].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BulkOperationLog].[BulkOperationId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4406
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBulkOperationLog] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBulkOperationLog] TO [CRMReaderRole]
    AS [dbo];

