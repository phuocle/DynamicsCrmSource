USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredBookableResourceCategory]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for bookableresourcecategory
--
create view [dbo].[FilteredBookableResourceCategory] (
    [bookableresourcecategoryid],
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
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [BookableResourceCategory].[BookableResourceCategoryId],
    [BookableResourceCategory].[CreatedBy],
    [BookableResourceCategory].[CreatedByName],
    [BookableResourceCategory].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCategory].[CreatedOn],
			us.TimeZoneCode),
        [BookableResourceCategory].[CreatedOn],
    [BookableResourceCategory].[CreatedOnBehalfBy],
    [BookableResourceCategory].[CreatedOnBehalfByName],
    [BookableResourceCategory].[CreatedOnBehalfByYomiName],
    [BookableResourceCategory].[Description],
    [BookableResourceCategory].[ExchangeRate],
    [BookableResourceCategory].[ImportSequenceNumber],
    [BookableResourceCategory].[ModifiedBy],
    [BookableResourceCategory].[ModifiedByName],
    [BookableResourceCategory].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCategory].[ModifiedOn],
			us.TimeZoneCode),
        [BookableResourceCategory].[ModifiedOn],
    [BookableResourceCategory].[ModifiedOnBehalfBy],
    [BookableResourceCategory].[ModifiedOnBehalfByName],
    [BookableResourceCategory].[ModifiedOnBehalfByYomiName],
    [BookableResourceCategory].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([BookableResourceCategory].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [BookableResourceCategory].[OverriddenCreatedOn],
    [BookableResourceCategory].[OwnerId],
    [BookableResourceCategory].[OwnerIdName],
    [BookableResourceCategory].[OwnerIdType],
    [BookableResourceCategory].[OwnerIdYomiName],
    [BookableResourceCategory].[OwningBusinessUnit],
    [BookableResourceCategory].[OwningTeam],
    [BookableResourceCategory].[OwningUser],
    [BookableResourceCategory].[StateCode],
    StateCodePLTable.Value,
    [BookableResourceCategory].[StatusCode],
    StatusCodePLTable.Value,
    [BookableResourceCategory].[TimeZoneRuleVersionNumber],
    [BookableResourceCategory].[TransactionCurrencyId],
    [BookableResourceCategory].[TransactionCurrencyIdName],
    [BookableResourceCategory].[UTCConversionTimeZoneCode],
    [BookableResourceCategory].[VersionNumber]
from BookableResourceCategory
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1147
		and [StateCodePLTable].AttributeValue = [BookableResourceCategory].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1147
		and [StatusCodePLTable].AttributeValue = [BookableResourceCategory].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1147) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[BookableResourceCategory].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 1147))
		
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
		[BookableResourceCategory].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 1147)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[BookableResourceCategory].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[BookableResourceCategory].[BookableResourceCategoryId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 1147))
	)
)

GO
