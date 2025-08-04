

--
-- report view for datalakeworkspace
--
create view dbo.[Filtereddatalakeworkspace] 
(
    [componentidunique],
    [componentstate],
    [componentstatename],
    [containerendpoint],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [datalakeworkspaceid],
    [datalakeworkspace_uniquename],
    [importsequencenumber],
    [iscustomercapacity],
    [iscustomercapacityname],
    [iscustomizable],
    [isdeepcopyenabled],
    [isdeepcopyenabledname],
    [ismanaged],
    [ismanagedname],
    [isprivate],
    [isprivatename],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [owningappid],
    [path],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [tenantid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber],
    [whitelistedappid]
) with view_metadata as
select
    [datalakeworkspace].[ComponentIdUnique],
    [datalakeworkspace].[ComponentState],
    ComponentStatePLTable.Value,
    [datalakeworkspace].[containerendpoint],
    [datalakeworkspace].[CreatedBy],
    [datalakeworkspace].[CreatedByName],
    [datalakeworkspace].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspace].[CreatedOn],
			us.TimeZoneCode),
        [datalakeworkspace].[CreatedOn],
    [datalakeworkspace].[CreatedOnBehalfBy],
    [datalakeworkspace].[CreatedOnBehalfByName],
    [datalakeworkspace].[CreatedOnBehalfByYomiName],
    [datalakeworkspace].[datalakeworkspaceId],
    [datalakeworkspace].[datalakeworkspace_UniqueName],
    [datalakeworkspace].[ImportSequenceNumber],
    [datalakeworkspace].[iscustomercapacity],
    iscustomercapacityPLTable.Value,
    [datalakeworkspace].[IsCustomizable],
    [datalakeworkspace].[isdeepcopyenabled],
    isdeepcopyenabledPLTable.Value,
    [datalakeworkspace].[IsManaged],
    IsManagedPLTable.Value,
    [datalakeworkspace].[isprivate],
    isprivatePLTable.Value,
    [datalakeworkspace].[ModifiedBy],
    [datalakeworkspace].[ModifiedByName],
    [datalakeworkspace].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspace].[ModifiedOn],
			us.TimeZoneCode),
        [datalakeworkspace].[ModifiedOn],
    [datalakeworkspace].[ModifiedOnBehalfBy],
    [datalakeworkspace].[ModifiedOnBehalfByName],
    [datalakeworkspace].[ModifiedOnBehalfByYomiName],
    [datalakeworkspace].[name],
    [datalakeworkspace].[OrganizationId],
    [datalakeworkspace].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspace].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [datalakeworkspace].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([datalakeworkspace].[OverwriteTime],
			us.TimeZoneCode),
        [datalakeworkspace].[OverwriteTime],
    [datalakeworkspace].[owningappid],
    [datalakeworkspace].[path],
    [datalakeworkspace].[SolutionId],
    [datalakeworkspace].[statecode],
    statecodePLTable.Value,
    [datalakeworkspace].[statuscode],
    statuscodePLTable.Value,
    [datalakeworkspace].[tenantid],
    [datalakeworkspace].[TimeZoneRuleVersionNumber],
    [datalakeworkspace].[UTCConversionTimeZoneCode],
    [datalakeworkspace].[VersionNumber],
    [datalakeworkspace].[whitelistedappid]
from datalakeworkspace
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10023
		and [ComponentStatePLTable].AttributeValue = [datalakeworkspace].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [iscustomercapacityPLTable] on 
		([iscustomercapacityPLTable].AttributeName = 'iscustomercapacity'
		and [iscustomercapacityPLTable].ObjectTypeCode = 10023
		and [iscustomercapacityPLTable].AttributeValue = [datalakeworkspace].[iscustomercapacity]
		and [iscustomercapacityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [isdeepcopyenabledPLTable] on 
		([isdeepcopyenabledPLTable].AttributeName = 'isdeepcopyenabled'
		and [isdeepcopyenabledPLTable].ObjectTypeCode = 10023
		and [isdeepcopyenabledPLTable].AttributeValue = [datalakeworkspace].[isdeepcopyenabled]
		and [isdeepcopyenabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10023
		and [IsManagedPLTable].AttributeValue = [datalakeworkspace].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [isprivatePLTable] on 
		([isprivatePLTable].AttributeName = 'isprivate'
		and [isprivatePLTable].ObjectTypeCode = 10023
		and [isprivatePLTable].AttributeValue = [datalakeworkspace].[isprivate]
		and [isprivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10023
		and [statecodePLTable].AttributeValue = [datalakeworkspace].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10023
		and [statuscodePLTable].AttributeValue = [datalakeworkspace].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10023) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [datalakeworkspace].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakeworkspace] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filtereddatalakeworkspace] TO [CRMReaderRole]
    AS [dbo];

