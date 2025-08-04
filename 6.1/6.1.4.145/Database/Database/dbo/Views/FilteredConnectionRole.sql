

--
-- report view for connectionrole
--
create view dbo.[FilteredConnectionRole] (
    [category],
    [categoryname],
    [componentstate],
    [connectionroleid],
    [connectionroleidunique],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [importsequencenumber],
    [introducedversion],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [versionnumber]
) with view_metadata as
select
    [ConnectionRole].[Category],
    CategoryPLTable.Value,
    [ConnectionRole].[ComponentState],
    [ConnectionRole].[ConnectionRoleId],
    [ConnectionRole].[ConnectionRoleIdUnique],
    [ConnectionRole].[CreatedBy],
    [ConnectionRole].[CreatedByName],
    [ConnectionRole].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConnectionRole].[CreatedOn],
			us.TimeZoneCode),
        [ConnectionRole].[CreatedOn],
    [ConnectionRole].[CreatedOnBehalfBy],
    --[ConnectionRole].[CreatedOnBehalfByDsc]
    0,
    [ConnectionRole].[CreatedOnBehalfByName],
    [ConnectionRole].[CreatedOnBehalfByYomiName],
    [ConnectionRole].[Description],
    [ConnectionRole].[ImportSequenceNumber],
    [ConnectionRole].[IntroducedVersion],
    [ConnectionRole].[IsCustomizable],
    [ConnectionRole].[IsManaged],
    IsManagedPLTable.Value,
    [ConnectionRole].[ModifiedBy],
    [ConnectionRole].[ModifiedByName],
    [ConnectionRole].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConnectionRole].[ModifiedOn],
			us.TimeZoneCode),
        [ConnectionRole].[ModifiedOn],
    [ConnectionRole].[ModifiedOnBehalfBy],
    --[ConnectionRole].[ModifiedOnBehalfByDsc]
    0,
    [ConnectionRole].[ModifiedOnBehalfByName],
    [ConnectionRole].[ModifiedOnBehalfByYomiName],
    [ConnectionRole].[Name],
    [ConnectionRole].[OrganizationId],
    [ConnectionRole].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConnectionRole].[OverwriteTime],
			us.TimeZoneCode),
        [ConnectionRole].[OverwriteTime],
    [ConnectionRole].[SolutionId],
    [ConnectionRole].[StateCode],
    StateCodePLTable.Value,
    [ConnectionRole].[StatusCode],
    StatusCodePLTable.Value,
    [ConnectionRole].[VersionNumber]
from ConnectionRole
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [CategoryPLTable] on 
		([CategoryPLTable].AttributeName = 'category'
		and [CategoryPLTable].ObjectTypeCode = 3231
		and [CategoryPLTable].AttributeValue = [ConnectionRole].[Category]
		and [CategoryPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 3231
		and [IsManagedPLTable].AttributeValue = [ConnectionRole].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 3231
		and [StateCodePLTable].AttributeValue = [ConnectionRole].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 3231
		and [StatusCodePLTable].AttributeValue = [ConnectionRole].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3231) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ConnectionRole].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConnectionRole] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConnectionRole] TO [CRMReaderRole]
    AS [dbo];

