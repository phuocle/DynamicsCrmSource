SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for queueitem
--
create view [dbo].[FilteredQueueItem] (
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
    [enteredon],
    [enteredonutc],
    [exchangerate],
    [importsequencenumber],
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
    [objectid],
    [objectidname],
    [objectidtypecode],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [priority],
    [queueid],
    [queueidname],
    [queueitemid],
    [sender],
    [state],
    [statecode],
    [statecodename],
    [status],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [title],
    [torecipients],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [workerid],
    [workeridmodifiedon],
    [workeridmodifiedonutc],
    [workeridname],
    [workeridtype],
    [workeridyominame]
) with view_metadata as
select
    [QueueItem].[CreatedBy],
    --[QueueItem].[CreatedByDsc]
    0,
    [QueueItem].[CreatedByName],
    [QueueItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QueueItem].[CreatedOn],
			us.TimeZoneCode),
        [QueueItem].[CreatedOn],
    [QueueItem].[CreatedOnBehalfBy],
    --[QueueItem].[CreatedOnBehalfByDsc]
    0,
    [QueueItem].[CreatedOnBehalfByName],
    [QueueItem].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QueueItem].[EnteredOn],
			us.TimeZoneCode),
        [QueueItem].[EnteredOn],
    [QueueItem].[ExchangeRate],
    [QueueItem].[ImportSequenceNumber],
    [QueueItem].[ModifiedBy],
    --[QueueItem].[ModifiedByDsc]
    0,
    [QueueItem].[ModifiedByName],
    [QueueItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QueueItem].[ModifiedOn],
			us.TimeZoneCode),
        [QueueItem].[ModifiedOn],
    [QueueItem].[ModifiedOnBehalfBy],
    --[QueueItem].[ModifiedOnBehalfByDsc]
    0,
    [QueueItem].[ModifiedOnBehalfByName],
    [QueueItem].[ModifiedOnBehalfByYomiName],
    [QueueItem].[ObjectId],
    [QueueItem].[ObjectIdName],
    [QueueItem].[ObjectIdTypeCode],
    [QueueItem].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [QueueItem].[OrganizationId],
    --[QueueItem].[OrganizationIdDsc]
    0,
    [QueueItem].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QueueItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [QueueItem].[OverriddenCreatedOn],
    [QueueItem].[OwnerId],
    [QueueItem].[OwnerIdType],
    [QueueItem].[OwningBusinessUnit],
    [QueueItem].[OwningUser],
    [QueueItem].[Priority],
    [QueueItem].[QueueId],
    [QueueItem].[QueueIdName],
    [QueueItem].[QueueItemId],
    [QueueItem].[Sender],
    [QueueItem].[State],
    [QueueItem].[StateCode],
    StateCodePLTable.Value,
    [QueueItem].[Status],
    [QueueItem].[StatusCode],
    StatusCodePLTable.Value,
    [QueueItem].[TimeZoneRuleVersionNumber],
    [QueueItem].[Title],
    [QueueItem].[ToRecipients],
    [QueueItem].[TransactionCurrencyId],
    [QueueItem].[TransactionCurrencyIdName],
    [QueueItem].[UTCConversionTimeZoneCode],
    [QueueItem].[VersionNumber],
    [QueueItem].[WorkerId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([QueueItem].[WorkerIdModifiedOn],
			us.TimeZoneCode),
        [QueueItem].[WorkerIdModifiedOn],
    [QueueItem].[WorkerIdName],
    [QueueItem].[WorkerIdType],
    [QueueItem].[WorkerIdYomiName]
from QueueItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 2029
		and [ObjectTypeCodePLTable].AttributeValue = [QueueItem].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 2029
		and [StateCodePLTable].AttributeValue = [QueueItem].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 2029
		and [StatusCodePLTable].AttributeValue = [QueueItem].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2020) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[QueueItem].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 2020))
		
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
		[QueueItem].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 2020)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[QueueItem].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[QueueItem].[QueueId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 2020))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredQueueItem] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredQueueItem] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
