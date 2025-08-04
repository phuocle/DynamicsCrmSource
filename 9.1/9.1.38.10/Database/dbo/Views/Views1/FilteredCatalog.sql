

--
-- report view for catalog
--
create view dbo.[FilteredCatalog] 
(
    [catalogid],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [displayname],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
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
    [parentcatalogid],
    [parentcatalogidname],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [uniquename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Catalog].[CatalogId],
    [Catalog].[ComponentIdUnique],
    [Catalog].[ComponentState],
    ComponentStatePLTable.Value,
    [Catalog].[CreatedBy],
    [Catalog].[CreatedByName],
    [Catalog].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Catalog].[CreatedOn],
			us.TimeZoneCode),
        [Catalog].[CreatedOn],
    [Catalog].[CreatedOnBehalfBy],
    [Catalog].[CreatedOnBehalfByName],
    [Catalog].[CreatedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([Catalog].[CatalogId], 'description', 10056, us.UILanguageId), [Catalog].[Description]),
    coalesce(dbo.fn_GetLocalizedLabel([Catalog].[CatalogId], 'displayname', 10056, us.UILanguageId), [Catalog].[DisplayName]),
    [Catalog].[ImportSequenceNumber],
    [Catalog].[IsCustomizable],
    [Catalog].[IsManaged],
    IsManagedPLTable.Value,
    [Catalog].[ModifiedBy],
    [Catalog].[ModifiedByName],
    [Catalog].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Catalog].[ModifiedOn],
			us.TimeZoneCode),
        [Catalog].[ModifiedOn],
    [Catalog].[ModifiedOnBehalfBy],
    [Catalog].[ModifiedOnBehalfByName],
    [Catalog].[ModifiedOnBehalfByYomiName],
    [Catalog].[Name],
    [Catalog].[OrganizationId],
    [Catalog].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Catalog].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Catalog].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Catalog].[OverwriteTime],
			us.TimeZoneCode),
        [Catalog].[OverwriteTime],
    [Catalog].[ParentCatalogId],
    [Catalog].[ParentCatalogIdName],
    [Catalog].[SolutionId],
    [Catalog].[statecode],
    statecodePLTable.Value,
    [Catalog].[statuscode],
    statuscodePLTable.Value,
    [Catalog].[TimeZoneRuleVersionNumber],
    [Catalog].[UniqueName],
    [Catalog].[UTCConversionTimeZoneCode],
    [Catalog].[VersionNumber]
from Catalog
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10056
		and [ComponentStatePLTable].AttributeValue = [Catalog].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10056
		and [IsManagedPLTable].AttributeValue = [Catalog].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10056
		and [statecodePLTable].AttributeValue = [Catalog].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10056
		and [statuscodePLTable].AttributeValue = [Catalog].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(10056) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Catalog].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCatalog] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCatalog] TO [CRMReaderRole]
    AS [dbo];

