SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for bulkoperationlog
--
create view [dbo].[FilteredBulkOperationLog] (
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
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4406))
		
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
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4406))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredBulkOperationLog] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredBulkOperationLog] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
