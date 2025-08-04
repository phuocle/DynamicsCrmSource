

--
-- report view for channelaccessprofileruleitem
--
create view dbo.[FilteredChannelAccessProfileRuleItem] 
(
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
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9400
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
		[ChannelAccessProfileRuleItem].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 9400)
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
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9400
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredChannelAccessProfileRuleItem] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredChannelAccessProfileRuleItem] TO [CRMReaderRole]
    AS [dbo];

