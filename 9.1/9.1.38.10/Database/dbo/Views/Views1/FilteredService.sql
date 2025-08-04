

--
-- report view for service
--
create view dbo.[FilteredService] 
(
    [anchoroffset],
    [calendarid],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [duration],
    [granularity],
    [importsequencenumber],
    [initialstatuscode],
    [initialstatuscodename],
    [isschedulable],
    [isschedulablename],
    [isvisible],
    [isvisiblename],
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
    [resourcespecid],
    [resourcespecidname],
    [serviceid],
    [showresources],
    [showresourcesname],
    [strategyid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Service].[AnchorOffset],
    [Service].[CalendarId],
    [Service].[CreatedBy],
    [Service].[CreatedByName],
    [Service].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Service].[CreatedOn],
			us.TimeZoneCode),
        [Service].[CreatedOn],
    [Service].[CreatedOnBehalfBy],
    [Service].[CreatedOnBehalfByName],
    [Service].[CreatedOnBehalfByYomiName],
    [Service].[Description],
    [Service].[Duration],
    [Service].[Granularity],
    [Service].[ImportSequenceNumber],
    [Service].[InitialStatusCode],
    InitialStatusCodePLTable.Value,
    [Service].[IsSchedulable],
    IsSchedulablePLTable.Value,
    [Service].[IsVisible],
    IsVisiblePLTable.Value,
    [Service].[ModifiedBy],
    [Service].[ModifiedByName],
    [Service].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Service].[ModifiedOn],
			us.TimeZoneCode),
        [Service].[ModifiedOn],
    [Service].[ModifiedOnBehalfBy],
    [Service].[ModifiedOnBehalfByName],
    [Service].[ModifiedOnBehalfByYomiName],
    [Service].[Name],
    [Service].[OrganizationId],
    [Service].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Service].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Service].[OverriddenCreatedOn],
    [Service].[ResourceSpecId],
    [Service].[ResourceSpecIdName],
    [Service].[ServiceId],
    [Service].[ShowResources],
    ShowResourcesPLTable.Value,
    [Service].[StrategyId],
    [Service].[TimeZoneRuleVersionNumber],
    [Service].[UTCConversionTimeZoneCode],
    [Service].[VersionNumber]
from Service
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [InitialStatusCodePLTable] on 
		([InitialStatusCodePLTable].AttributeName = 'initialstatuscode'
		and [InitialStatusCodePLTable].ObjectTypeCode = 4001
		and [InitialStatusCodePLTable].AttributeValue = [Service].[InitialStatusCode]
		and [InitialStatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsSchedulablePLTable] on 
		([IsSchedulablePLTable].AttributeName = 'isschedulable'
		and [IsSchedulablePLTable].ObjectTypeCode = 4001
		and [IsSchedulablePLTable].AttributeValue = [Service].[IsSchedulable]
		and [IsSchedulablePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsVisiblePLTable] on 
		([IsVisiblePLTable].AttributeName = 'isvisible'
		and [IsVisiblePLTable].ObjectTypeCode = 4001
		and [IsVisiblePLTable].AttributeValue = [Service].[IsVisible]
		and [IsVisiblePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShowResourcesPLTable] on 
		([ShowResourcesPLTable].AttributeName = 'showresources'
		and [ShowResourcesPLTable].ObjectTypeCode = 4001
		and [ShowResourcesPLTable].AttributeValue = [Service].[ShowResources]
		and [ShowResourcesPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4001) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Service].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredService] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredService] TO [CRMReaderRole]
    AS [dbo];

