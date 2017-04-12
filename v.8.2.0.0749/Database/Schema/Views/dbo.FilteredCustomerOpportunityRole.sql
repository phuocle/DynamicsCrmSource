SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for customeropportunityrole
--
create view [dbo].[FilteredCustomerOpportunityRole] (
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
    [customerid],
    [customeriddsc],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [customeropportunityroleid],
    [description],
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
    [opportunityid],
    [opportunityiddsc],
    [opportunityidname],
    [opportunityroleid],
    [opportunityroleiddsc],
    [opportunityroleidname],
    [opportunitystatecode],
    [opportunitystatuscode],
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
    [versionnumber]
) with view_metadata as
select
    [CustomerOpportunityRole].[CreatedBy],
    --[CustomerOpportunityRole].[CreatedByDsc]
    0,
    [CustomerOpportunityRole].[CreatedByName],
    [CustomerOpportunityRole].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomerOpportunityRole].[CreatedOn],
			us.TimeZoneCode),
        [CustomerOpportunityRole].[CreatedOn],
    [CustomerOpportunityRole].[CreatedOnBehalfBy],
    --[CustomerOpportunityRole].[CreatedOnBehalfByDsc]
    0,
    [CustomerOpportunityRole].[CreatedOnBehalfByName],
    [CustomerOpportunityRole].[CreatedOnBehalfByYomiName],
    [CustomerOpportunityRole].[CustomerId],
    --[CustomerOpportunityRole].[CustomerIdDsc]
    0,
    [CustomerOpportunityRole].[CustomerIdName],
    [CustomerOpportunityRole].[CustomerIdType],
    [CustomerOpportunityRole].[CustomerIdYomiName],
    [CustomerOpportunityRole].[CustomerOpportunityRoleId],
    [CustomerOpportunityRole].[Description],
    [CustomerOpportunityRole].[ImportSequenceNumber],
    [CustomerOpportunityRole].[ModifiedBy],
    --[CustomerOpportunityRole].[ModifiedByDsc]
    0,
    [CustomerOpportunityRole].[ModifiedByName],
    [CustomerOpportunityRole].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomerOpportunityRole].[ModifiedOn],
			us.TimeZoneCode),
        [CustomerOpportunityRole].[ModifiedOn],
    [CustomerOpportunityRole].[ModifiedOnBehalfBy],
    --[CustomerOpportunityRole].[ModifiedOnBehalfByDsc]
    0,
    [CustomerOpportunityRole].[ModifiedOnBehalfByName],
    [CustomerOpportunityRole].[ModifiedOnBehalfByYomiName],
    [CustomerOpportunityRole].[OpportunityId],
    --[CustomerOpportunityRole].[OpportunityIdDsc]
    0,
    [CustomerOpportunityRole].[OpportunityIdName],
    [CustomerOpportunityRole].[OpportunityRoleId],
    --[CustomerOpportunityRole].[OpportunityRoleIdDsc]
    0,
    [CustomerOpportunityRole].[OpportunityRoleIdName],
    [CustomerOpportunityRole].[OpportunityStateCode],
    [CustomerOpportunityRole].[OpportunityStatusCode],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CustomerOpportunityRole].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CustomerOpportunityRole].[OverriddenCreatedOn],
    [CustomerOpportunityRole].[OwnerId],
    --[CustomerOpportunityRole].[OwnerIdDsc]
    0,
    [CustomerOpportunityRole].[OwnerIdName],
    [CustomerOpportunityRole].[OwnerIdType],
    [CustomerOpportunityRole].[OwnerIdYomiName],
    [CustomerOpportunityRole].[OwningBusinessUnit],
    [CustomerOpportunityRole].[OwningTeam],
    [CustomerOpportunityRole].[OwningUser],
    [CustomerOpportunityRole].[VersionNumber]
from CustomerOpportunityRole
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4503) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[CustomerOpportunityRole].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4503))
		
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
		[CustomerOpportunityRole].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4503)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[CustomerOpportunityRole].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[CustomerOpportunityRole].[CustomerOpportunityRoleId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4503))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredCustomerOpportunityRole] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredCustomerOpportunityRole] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
