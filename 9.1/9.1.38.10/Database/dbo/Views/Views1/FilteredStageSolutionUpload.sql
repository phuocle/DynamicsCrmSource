

--
-- report view for stagesolutionupload
--
create view dbo.[FilteredStageSolutionUpload] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
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
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [solutionfile],
    [solutionfilename],
    [solutionfile_name],
    [solutionuniquename],
    [stagesolutionuploadid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [StageSolutionUpload].[CreatedBy],
    [StageSolutionUpload].[CreatedByName],
    [StageSolutionUpload].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([StageSolutionUpload].[CreatedOn],
			us.TimeZoneCode),
        [StageSolutionUpload].[CreatedOn],
    [StageSolutionUpload].[CreatedOnBehalfBy],
    [StageSolutionUpload].[CreatedOnBehalfByName],
    [StageSolutionUpload].[CreatedOnBehalfByYomiName],
    [StageSolutionUpload].[ImportSequenceNumber],
    [StageSolutionUpload].[ModifiedBy],
    [StageSolutionUpload].[ModifiedByName],
    [StageSolutionUpload].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([StageSolutionUpload].[ModifiedOn],
			us.TimeZoneCode),
        [StageSolutionUpload].[ModifiedOn],
    [StageSolutionUpload].[ModifiedOnBehalfBy],
    [StageSolutionUpload].[ModifiedOnBehalfByName],
    [StageSolutionUpload].[ModifiedOnBehalfByYomiName],
    [StageSolutionUpload].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([StageSolutionUpload].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [StageSolutionUpload].[OverriddenCreatedOn],
    [StageSolutionUpload].[OwnerId],
    --[StageSolutionUpload].[OwnerIdDsc]
    0,
    [StageSolutionUpload].[OwnerIdName],
    [StageSolutionUpload].[OwnerIdType],
    [StageSolutionUpload].[OwnerIdYomiName],
    [StageSolutionUpload].[OwningBusinessUnit],
    [StageSolutionUpload].[OwningTeam],
    [StageSolutionUpload].[OwningUser],
    [StageSolutionUpload].[SolutionFile],
    [StageSolutionUpload].[SolutionFileName],
    [StageSolutionUpload].[SolutionFile_Name],
    [StageSolutionUpload].[SolutionUniqueName],
    [StageSolutionUpload].[StageSolutionUploadId],
    [StageSolutionUpload].[statecode],
    statecodePLTable.Value,
    [StageSolutionUpload].[statuscode],
    statuscodePLTable.Value,
    [StageSolutionUpload].[TimeZoneRuleVersionNumber],
    [StageSolutionUpload].[UTCConversionTimeZoneCode],
    [StageSolutionUpload].[VersionNumber]
from StageSolutionUpload
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10019
		and [statecodePLTable].AttributeValue = [StageSolutionUpload].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10019
		and [statuscodePLTable].AttributeValue = [StageSolutionUpload].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10019) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[StageSolutionUpload].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10019
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
		[StageSolutionUpload].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10019)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[StageSolutionUpload].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[StageSolutionUpload].[StageSolutionUploadId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10019
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStageSolutionUpload] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStageSolutionUpload] TO [CRMReaderRole]
    AS [dbo];

