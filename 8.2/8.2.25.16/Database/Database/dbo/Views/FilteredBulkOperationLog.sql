

--
-- report view for bulkoperationlog
--
create view dbo.[FilteredBulkOperationLog] (
    [additionalinfo],
    [bulkoperationid],
    [bulkoperationiddsc],
    [bulkoperationidname],
    [bulkoperationlogid],
    [createdobjectid],
    [createdobjectiddsc],
    [createdobjectidname],
    [createdobjectidtypecode],
    [errornumber],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjectidtypecode],
    [regardingobjectidyominame]
) with view_metadata as
select
    [BulkOperationLog].[AdditionalInfo],
    [BulkOperationLog].[BulkOperationId],
    --[BulkOperationLog].[BulkOperationIdDsc]
    0,
    [BulkOperationLog].[BulkOperationIdName],
    [BulkOperationLog].[BulkOperationLogId],
    [BulkOperationLog].[CreatedObjectId],
    --[BulkOperationLog].[CreatedObjectIdDsc]
    0,
    [BulkOperationLog].[CreatedObjectIdName],
    [BulkOperationLog].[CreatedObjectIdTypeCode],
    [BulkOperationLog].[ErrorNumber],
    [BulkOperationLog].[OwnerId],
    [BulkOperationLog].[OwnerIdType],
    [BulkOperationLog].[OwningBusinessUnit],
    [BulkOperationLog].[OwningUser],
    [BulkOperationLog].[RegardingObjectId],
    --[BulkOperationLog].[RegardingObjectIdDsc]
    0,
    [BulkOperationLog].[RegardingObjectIdName],
    [BulkOperationLog].[RegardingObjectIdTypeCode],
    [BulkOperationLog].[RegardingObjectIdYomiName]
from BulkOperationLog
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
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
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[BulkOperationLog].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4406)
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
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 4406
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBulkOperationLog] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredBulkOperationLog] TO [CRMReaderRole]
    AS [dbo];

