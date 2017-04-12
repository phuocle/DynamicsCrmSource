USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredDuplicateRule]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for duplicaterule
--
create view [dbo].[FilteredDuplicateRule] (
    [baseentitymatchcodetable],
    [baseentityname],
    [baseentitytypecode],
    [baseentitytypecodename],
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
    [description],
    [duplicateruleid],
    [excludeinactiverecords],
    [excludeinactiverecordsname],
    [iscasesensitive],
    [iscasesensitivename],
    [matchingentitymatchcodetable],
    [matchingentityname],
    [matchingentitytypecode],
    [matchingentitytypecodename],
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
    [name],
    [ownerid],
    [owneriddsc],
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
    [utcconversiontimezonecode]
) with view_metadata as
select
    [DuplicateRule].[BaseEntityMatchCodeTable],
    [DuplicateRule].[BaseEntityName],
    [DuplicateRule].[BaseEntityTypeCode],
    BaseEntityTypeCodePLTable.Value,
    [DuplicateRule].[CreatedBy],
    --[DuplicateRule].[CreatedByDsc]
    0,
    [DuplicateRule].[CreatedByName],
    [DuplicateRule].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DuplicateRule].[CreatedOn],
			us.TimeZoneCode),
        [DuplicateRule].[CreatedOn],
    [DuplicateRule].[CreatedOnBehalfBy],
    --[DuplicateRule].[CreatedOnBehalfByDsc]
    0,
    [DuplicateRule].[CreatedOnBehalfByName],
    [DuplicateRule].[CreatedOnBehalfByYomiName],
    [DuplicateRule].[Description],
    [DuplicateRule].[DuplicateRuleId],
    [DuplicateRule].[ExcludeInactiveRecords],
    ExcludeInactiveRecordsPLTable.Value,
    [DuplicateRule].[IsCaseSensitive],
    IsCaseSensitivePLTable.Value,
    [DuplicateRule].[MatchingEntityMatchCodeTable],
    [DuplicateRule].[MatchingEntityName],
    [DuplicateRule].[MatchingEntityTypeCode],
    MatchingEntityTypeCodePLTable.Value,
    [DuplicateRule].[ModifiedBy],
    --[DuplicateRule].[ModifiedByDsc]
    0,
    [DuplicateRule].[ModifiedByName],
    [DuplicateRule].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DuplicateRule].[ModifiedOn],
			us.TimeZoneCode),
        [DuplicateRule].[ModifiedOn],
    [DuplicateRule].[ModifiedOnBehalfBy],
    --[DuplicateRule].[ModifiedOnBehalfByDsc]
    0,
    [DuplicateRule].[ModifiedOnBehalfByName],
    [DuplicateRule].[ModifiedOnBehalfByYomiName],
    [DuplicateRule].[Name],
    [DuplicateRule].[OwnerId],
    --[DuplicateRule].[OwnerIdDsc]
    0,
    [DuplicateRule].[OwnerIdName],
    [DuplicateRule].[OwnerIdType],
    [DuplicateRule].[OwnerIdYomiName],
    [DuplicateRule].[OwningBusinessUnit],
    [DuplicateRule].[OwningTeam],
    [DuplicateRule].[OwningUser],
    [DuplicateRule].[StateCode],
    StateCodePLTable.Value,
    [DuplicateRule].[StatusCode],
    StatusCodePLTable.Value,
    [DuplicateRule].[TimeZoneRuleVersionNumber],
    [DuplicateRule].[UTCConversionTimeZoneCode]
from DuplicateRule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [BaseEntityTypeCodePLTable] on 
		([BaseEntityTypeCodePLTable].AttributeName = 'baseentitytypecode'
		and [BaseEntityTypeCodePLTable].ObjectTypeCode = 4414
		and [BaseEntityTypeCodePLTable].AttributeValue = [DuplicateRule].[BaseEntityTypeCode]
		and [BaseEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ExcludeInactiveRecordsPLTable] on 
		([ExcludeInactiveRecordsPLTable].AttributeName = 'excludeinactiverecords'
		and [ExcludeInactiveRecordsPLTable].ObjectTypeCode = 4414
		and [ExcludeInactiveRecordsPLTable].AttributeValue = [DuplicateRule].[ExcludeInactiveRecords]
		and [ExcludeInactiveRecordsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsCaseSensitivePLTable] on 
		([IsCaseSensitivePLTable].AttributeName = 'iscasesensitive'
		and [IsCaseSensitivePLTable].ObjectTypeCode = 4414
		and [IsCaseSensitivePLTable].AttributeValue = [DuplicateRule].[IsCaseSensitive]
		and [IsCaseSensitivePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MatchingEntityTypeCodePLTable] on 
		([MatchingEntityTypeCodePLTable].AttributeName = 'matchingentitytypecode'
		and [MatchingEntityTypeCodePLTable].ObjectTypeCode = 4414
		and [MatchingEntityTypeCodePLTable].AttributeValue = [DuplicateRule].[MatchingEntityTypeCode]
		and [MatchingEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4414
		and [StateCodePLTable].AttributeValue = [DuplicateRule].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4414
		and [StatusCodePLTable].AttributeValue = [DuplicateRule].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4414) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[DuplicateRule].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 4414))
		
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
		[DuplicateRule].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4414)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[DuplicateRule].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[DuplicateRule].[DuplicateRuleId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 4414))
	)
)

GO
