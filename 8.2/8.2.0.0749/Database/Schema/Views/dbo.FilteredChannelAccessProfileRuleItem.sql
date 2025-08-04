SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for channelaccessprofileruleitem
--
create view [dbo].[FilteredChannelAccessProfileRuleItem] (
    [associatedchannelaccessprofile],
    [associatedchannelaccessprofilename],
    [channelaccessprofileruleid],
    [channelaccessprofileruleidname],
    [channelaccessprofileruleitemid],
    [channelaccessprofileruleitemidunique],
    [componentstate],
    [conditionxml],
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
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [sequencenumber],
    [solutionid],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ChannelAccessProfileRuleItem].[AssociatedChannelAccessProfile],
    [ChannelAccessProfileRuleItem].[AssociatedChannelAccessProfileName],
    [ChannelAccessProfileRuleItem].[ChannelAccessProfileRuleId],
    [ChannelAccessProfileRuleItem].[ChannelAccessProfileRuleIdName],
    [ChannelAccessProfileRuleItem].[ChannelAccessProfileRuleItemId],
    [ChannelAccessProfileRuleItem].[ChannelAccessProfileRuleItemIdUnique],
    [ChannelAccessProfileRuleItem].[ComponentState],
    [ChannelAccessProfileRuleItem].[ConditionXml],
    [ChannelAccessProfileRuleItem].[CreatedBy],
    [ChannelAccessProfileRuleItem].[CreatedByName],
    [ChannelAccessProfileRuleItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfileRuleItem].[CreatedOn],
			us.TimeZoneCode),
        [ChannelAccessProfileRuleItem].[CreatedOn],
    [ChannelAccessProfileRuleItem].[CreatedOnBehalfBy],
    [ChannelAccessProfileRuleItem].[CreatedOnBehalfByName],
    [ChannelAccessProfileRuleItem].[CreatedOnBehalfByYomiName],
    [ChannelAccessProfileRuleItem].[Description],
    [ChannelAccessProfileRuleItem].[ExchangeRate],
    [ChannelAccessProfileRuleItem].[IntroducedVersion],
    [ChannelAccessProfileRuleItem].[IsManaged],
    [ChannelAccessProfileRuleItem].[ModifiedBy],
    [ChannelAccessProfileRuleItem].[ModifiedByName],
    [ChannelAccessProfileRuleItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfileRuleItem].[ModifiedOn],
			us.TimeZoneCode),
        [ChannelAccessProfileRuleItem].[ModifiedOn],
    [ChannelAccessProfileRuleItem].[ModifiedOnBehalfBy],
    [ChannelAccessProfileRuleItem].[ModifiedOnBehalfByName],
    [ChannelAccessProfileRuleItem].[ModifiedOnBehalfByYomiName],
    [ChannelAccessProfileRuleItem].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelAccessProfileRuleItem].[OverwriteTime],
			us.TimeZoneCode),
        [ChannelAccessProfileRuleItem].[OverwriteTime],
    [ChannelAccessProfileRuleItem].[OwnerId],
    [ChannelAccessProfileRuleItem].[OwnerIdType],
    [ChannelAccessProfileRuleItem].[OwningBusinessUnit],
    [ChannelAccessProfileRuleItem].[OwningUser],
    [ChannelAccessProfileRuleItem].[SequenceNumber],
    [ChannelAccessProfileRuleItem].[SolutionId],
    [ChannelAccessProfileRuleItem].[TimeZoneRuleVersionNumber],
    [ChannelAccessProfileRuleItem].[TransactionCurrencyId],
    [ChannelAccessProfileRuleItem].[TransactionCurrencyIdName],
    [ChannelAccessProfileRuleItem].[UTCConversionTimeZoneCode],
    [ChannelAccessProfileRuleItem].[VersionNumber]
from ChannelAccessProfileRuleItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9400) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ChannelAccessProfileRuleItem].OwnerId in 
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
		[ChannelAccessProfileRuleItem].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9400)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ChannelAccessProfileRuleItem].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ChannelAccessProfileRuleItem].[ChannelAccessProfileRuleId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9400))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredChannelAccessProfileRuleItem] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredChannelAccessProfileRuleItem] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
