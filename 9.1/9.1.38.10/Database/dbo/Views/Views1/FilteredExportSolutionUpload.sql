

--
-- report view for exportsolutionupload
--
create view dbo.[FilteredExportSolutionUpload] 
(
    [asyncoperationid],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exportsolutionuploadid],
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
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ExportSolutionUpload].[AsyncOperationId],
    [ExportSolutionUpload].[CreatedBy],
    [ExportSolutionUpload].[CreatedByName],
    [ExportSolutionUpload].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExportSolutionUpload].[CreatedOn],
			us.TimeZoneCode),
        [ExportSolutionUpload].[CreatedOn],
    [ExportSolutionUpload].[CreatedOnBehalfBy],
    [ExportSolutionUpload].[CreatedOnBehalfByName],
    [ExportSolutionUpload].[CreatedOnBehalfByYomiName],
    [ExportSolutionUpload].[ExportSolutionUploadId],
    [ExportSolutionUpload].[ImportSequenceNumber],
    [ExportSolutionUpload].[ModifiedBy],
    [ExportSolutionUpload].[ModifiedByName],
    [ExportSolutionUpload].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExportSolutionUpload].[ModifiedOn],
			us.TimeZoneCode),
        [ExportSolutionUpload].[ModifiedOn],
    [ExportSolutionUpload].[ModifiedOnBehalfBy],
    [ExportSolutionUpload].[ModifiedOnBehalfByName],
    [ExportSolutionUpload].[ModifiedOnBehalfByYomiName],
    [ExportSolutionUpload].[name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ExportSolutionUpload].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ExportSolutionUpload].[OverriddenCreatedOn],
    [ExportSolutionUpload].[OwnerId],
    --[ExportSolutionUpload].[OwnerIdDsc]
    0,
    [ExportSolutionUpload].[OwnerIdName],
    [ExportSolutionUpload].[OwnerIdType],
    [ExportSolutionUpload].[OwnerIdYomiName],
    [ExportSolutionUpload].[OwningBusinessUnit],
    [ExportSolutionUpload].[OwningTeam],
    [ExportSolutionUpload].[OwningUser],
    [ExportSolutionUpload].[SolutionFile],
    [ExportSolutionUpload].[SolutionFileName],
    [ExportSolutionUpload].[SolutionFile_Name],
    [ExportSolutionUpload].[SolutionUniqueName],
    [ExportSolutionUpload].[statecode],
    statecodePLTable.Value,
    [ExportSolutionUpload].[statuscode],
    statuscodePLTable.Value,
    [ExportSolutionUpload].[TimeZoneRuleVersionNumber],
    [ExportSolutionUpload].[UTCConversionTimeZoneCode],
    [ExportSolutionUpload].[VersionNumber]
from ExportSolutionUpload
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10020
		and [statecodePLTable].AttributeValue = [ExportSolutionUpload].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10020
		and [statuscodePLTable].AttributeValue = [ExportSolutionUpload].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10020) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[ExportSolutionUpload].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem 
			join SystemUserPrincipals sup on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 10020
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
		[ExportSolutionUpload].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 10020)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ExportSolutionUpload].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ExportSolutionUpload].[ExportSolutionUploadId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 10020
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExportSolutionUpload] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredExportSolutionUpload] TO [CRMReaderRole]
    AS [dbo];

