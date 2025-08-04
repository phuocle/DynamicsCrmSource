

--
-- report view for package
--
create view dbo.[Filteredpackage] 
(
    [appid],
    [applicationname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [installedon],
    [installedonutc],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [packageid],
    [packageinstanceid],
    [packageinstanceoperationid],
    [packageuniquename],
    [packageversion],
    [publisherid],
    [publishername],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [tpspackageid],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [package].[AppId],
    [package].[ApplicationName],
    [package].[CreatedBy],
    [package].[CreatedByName],
    [package].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([package].[CreatedOn],
			us.TimeZoneCode),
        [package].[CreatedOn],
    [package].[CreatedOnBehalfBy],
    [package].[CreatedOnBehalfByName],
    [package].[CreatedOnBehalfByYomiName],
    [package].[ImportSequenceNumber],
    dbo.fn_UTCToTzCodeSpecificLocalTime([package].[InstalledOn],
			us.TimeZoneCode),
        [package].[InstalledOn],
    [package].[ModifiedBy],
    [package].[ModifiedByName],
    [package].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([package].[ModifiedOn],
			us.TimeZoneCode),
        [package].[ModifiedOn],
    [package].[ModifiedOnBehalfBy],
    [package].[ModifiedOnBehalfByName],
    [package].[ModifiedOnBehalfByYomiName],
    [package].[OrganizationId],
    [package].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([package].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [package].[OverriddenCreatedOn],
    [package].[packageId],
    [package].[PackageInstanceId],
    [package].[PackageInstanceOperationId],
    [package].[PackageUniqueName],
    [package].[PackageVersion],
    [package].[PublisherId],
    [package].[PublisherName],
    [package].[statecode],
    statecodePLTable.Value,
    [package].[statuscode],
    statuscodePLTable.Value,
    [package].[TimeZoneRuleVersionNumber],
    [package].[TPSPackageId],
    [package].[UTCConversionTimeZoneCode],
    [package].[VersionNumber]
from package
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10017
		and [statecodePLTable].AttributeValue = [package].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10017
		and [statuscodePLTable].AttributeValue = [package].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10017) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [package].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredpackage] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredpackage] TO [CRMReaderRole]
    AS [dbo];

