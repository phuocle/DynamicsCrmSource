SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for untrackedemail
--
create view [dbo].[FilteredUntrackedEmail] (
    [activityid],
    [activitytypecode],
    [activitytypecodename],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangeitemid],
    [exchangerate],
    [exchangeweblink],
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
    [ownerid],
    [owneridname],
    [owneridtype],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [regardingobjectid],
    [regardingobjectiddsc],
    [regardingobjectidname],
    [regardingobjecttypecode],
    [subject],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber]
) with view_metadata as
select
    [UntrackedEmail].[ActivityId],
    [UntrackedEmail].[ActivityTypeCode],
    ActivityTypeCodePLTable.Value,
    [UntrackedEmail].[CreatedBy],
    [UntrackedEmail].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UntrackedEmail].[CreatedOn],
			us.TimeZoneCode),
        [UntrackedEmail].[CreatedOn],
    [UntrackedEmail].[CreatedOnBehalfBy],
    [UntrackedEmail].[CreatedOnBehalfByName],
    [UntrackedEmail].[CreatedOnBehalfByYomiName],
    [UntrackedEmail].[Description],
    [UntrackedEmail].[ExchangeItemId],
    [UntrackedEmail].[ExchangeRate],
    [UntrackedEmail].[ExchangeWebLink],
    [UntrackedEmail].[ModifiedBy],
    --[UntrackedEmail].[ModifiedByDsc]
    0,
    [UntrackedEmail].[ModifiedByName],
    [UntrackedEmail].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UntrackedEmail].[ModifiedOn],
			us.TimeZoneCode),
        [UntrackedEmail].[ModifiedOn],
    [UntrackedEmail].[ModifiedOnBehalfBy],
    --[UntrackedEmail].[ModifiedOnBehalfByDsc]
    0,
    [UntrackedEmail].[ModifiedOnBehalfByName],
    [UntrackedEmail].[ModifiedOnBehalfByYomiName],
    [UntrackedEmail].[OwnerId],
    [UntrackedEmail].[OwnerIdName],
    [UntrackedEmail].[OwnerIdType],
    [UntrackedEmail].[OwningBusinessUnit],
    [UntrackedEmail].[OwningTeam],
    [UntrackedEmail].[OwningUser],
    [UntrackedEmail].[RegardingObjectId],
    --[UntrackedEmail].[RegardingObjectIdDsc]
    0,
    [UntrackedEmail].[RegardingObjectIdName],
    [UntrackedEmail].[RegardingObjectTypeCode],
    [UntrackedEmail].[Subject],
    [UntrackedEmail].[TransactionCurrencyId],
    [UntrackedEmail].[TransactionCurrencyIdName],
    [UntrackedEmail].[VersionNumber]
from UntrackedEmail
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ActivityTypeCodePLTable] on 
		([ActivityTypeCodePLTable].AttributeName = 'activitytypecode'
		and [ActivityTypeCodePLTable].ObjectTypeCode = 4220
		and [ActivityTypeCodePLTable].AttributeValue = [UntrackedEmail].[ActivityTypeCode]
		and [ActivityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4220) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[UntrackedEmail].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4220))
		
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
		[UntrackedEmail].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4220)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[UntrackedEmail].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[UntrackedEmail].[ActivityId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4220))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredUntrackedEmail] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredUntrackedEmail] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
