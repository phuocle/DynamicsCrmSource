SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for channelaccessprofilerule
--
create view [dbo].[FilteredChannelAccessProfileRule] (
    [channelaccessprofileruleid],
    [channelaccessprofileruleidunique],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [exchangerate],
    [introducedversion],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [workflowid],
    [workflowidname]
) with view_metadata as
select
    [ChannelAccessProfileRule].[ChannelAccessProfileRuleId],
    [ChannelAccessProfileRule].[ChannelAccessProfileRuleIdUnique],
    [ChannelAccessProfileRule].[ComponentState],
    [ChannelAccessProfileRule].[CreatedBy],
    [ChannelAccessProfileRule].[CreatedByName],
    [ChannelAccessProfileRule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfileRule].[CreatedOn],
			us.TimeZoneCode),
        [ChannelAccessProfileRule].[CreatedOn],
    [ChannelAccessProfileRule].[CreatedOnBehalfBy],
    [ChannelAccessProfileRule].[CreatedOnBehalfByName],
    [ChannelAccessProfileRule].[CreatedOnBehalfByYomiName],
    [ChannelAccessProfileRule].[Description],
    [ChannelAccessProfileRule].[ExchangeRate],
    [ChannelAccessProfileRule].[IntroducedVersion],
    [ChannelAccessProfileRule].[IsManaged],
    [ChannelAccessProfileRule].[ModifiedBy],
    [ChannelAccessProfileRule].[ModifiedByName],
    [ChannelAccessProfileRule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfileRule].[ModifiedOn],
			us.TimeZoneCode),
        [ChannelAccessProfileRule].[ModifiedOn],
    [ChannelAccessProfileRule].[ModifiedOnBehalfBy],
    [ChannelAccessProfileRule].[ModifiedOnBehalfByName],
    [ChannelAccessProfileRule].[ModifiedOnBehalfByYomiName],
    [ChannelAccessProfileRule].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfileRule].[OverwriteTime],
			us.TimeZoneCode),
        [ChannelAccessProfileRule].[OverwriteTime],
    [ChannelAccessProfileRule].[OwnerId],
    [ChannelAccessProfileRule].[OwnerIdName],
    [ChannelAccessProfileRule].[OwnerIdType],
    [ChannelAccessProfileRule].[OwnerIdYomiName],
    [ChannelAccessProfileRule].[OwningBusinessUnit],
    [ChannelAccessProfileRule].[OwningTeam],
    [ChannelAccessProfileRule].[OwningUser],
    [ChannelAccessProfileRule].[SolutionId],
    [ChannelAccessProfileRule].[StateCode],
    StateCodePLTable.Value,
    [ChannelAccessProfileRule].[StatusCode],
    StatusCodePLTable.Value,
    [ChannelAccessProfileRule].[TimeZoneRuleVersionNumber],
    [ChannelAccessProfileRule].[TransactionCurrencyId],
    [ChannelAccessProfileRule].[TransactionCurrencyIdName],
    [ChannelAccessProfileRule].[UTCConversionTimeZoneCode],
    [ChannelAccessProfileRule].[VersionNumber],
    [ChannelAccessProfileRule].[WorkflowId],
    [ChannelAccessProfileRule].[WorkflowIdName]
from ChannelAccessProfileRule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9400
		and [StateCodePLTable].AttributeValue = [ChannelAccessProfileRule].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9400
		and [StatusCodePLTable].AttributeValue = [ChannelAccessProfileRule].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9400) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ChannelAccessProfileRule].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9400))
		
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
		[ChannelAccessProfileRule].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9400)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ChannelAccessProfileRule].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ChannelAccessProfileRule].[ChannelAccessProfileRuleId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9400))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredChannelAccessProfileRule] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredChannelAccessProfileRule] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
