

--
-- report view for appmodulecomponentnode
--
create view dbo.[FilteredAppModuleComponentNode] 
(
    [appmodulecomponentnodeid],
    [componentdatabaseversion],
    [componentobjectid],
    [componenttype],
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
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [snapshotversionnumber],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [validationresult],
    [validationstatus],
    [validationstatusname],
    [versionnumber]
) with view_metadata as
select
    [AppModuleComponentNode].[AppModuleComponentNodeId],
    [AppModuleComponentNode].[ComponentDatabaseVersion],
    [AppModuleComponentNode].[ComponentObjectId],
    [AppModuleComponentNode].[ComponentType],
    [AppModuleComponentNode].[CreatedBy],
    [AppModuleComponentNode].[CreatedByName],
    [AppModuleComponentNode].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponentNode].[CreatedOn],
			us.TimeZoneCode),
        [AppModuleComponentNode].[CreatedOn],
    [AppModuleComponentNode].[CreatedOnBehalfBy],
    [AppModuleComponentNode].[CreatedOnBehalfByName],
    [AppModuleComponentNode].[CreatedOnBehalfByYomiName],
    [AppModuleComponentNode].[ImportSequenceNumber],
    [AppModuleComponentNode].[ModifiedBy],
    [AppModuleComponentNode].[ModifiedByName],
    [AppModuleComponentNode].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponentNode].[ModifiedOn],
			us.TimeZoneCode),
        [AppModuleComponentNode].[ModifiedOn],
    [AppModuleComponentNode].[ModifiedOnBehalfBy],
    [AppModuleComponentNode].[ModifiedOnBehalfByName],
    [AppModuleComponentNode].[ModifiedOnBehalfByYomiName],
    [AppModuleComponentNode].[Name],
    [AppModuleComponentNode].[OrganizationId],
    [AppModuleComponentNode].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponentNode].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppModuleComponentNode].[OverriddenCreatedOn],
    [AppModuleComponentNode].[SnapshotVersionNumber],
    [AppModuleComponentNode].[statecode],
    statecodePLTable.Value,
    [AppModuleComponentNode].[statuscode],
    statuscodePLTable.Value,
    [AppModuleComponentNode].[TimeZoneRuleVersionNumber],
    [AppModuleComponentNode].[UTCConversionTimeZoneCode],
    [AppModuleComponentNode].[ValidationResult],
    [AppModuleComponentNode].[ValidationStatus],
    ValidationStatusPLTable.Value,
    [AppModuleComponentNode].[VersionNumber]
from AppModuleComponentNode
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10031
		and [statecodePLTable].AttributeValue = [AppModuleComponentNode].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10031
		and [statuscodePLTable].AttributeValue = [AppModuleComponentNode].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ValidationStatusPLTable] on 
		([ValidationStatusPLTable].AttributeName = 'validationstatus'
		and [ValidationStatusPLTable].ObjectTypeCode = 10031
		and [ValidationStatusPLTable].AttributeValue = [AppModuleComponentNode].[ValidationStatus]
		and [ValidationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10031) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppModuleComponentNode].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleComponentNode] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleComponentNode] TO [CRMReaderRole]
    AS [dbo];

