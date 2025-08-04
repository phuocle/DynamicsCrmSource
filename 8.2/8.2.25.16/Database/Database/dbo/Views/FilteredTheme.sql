

--
-- report view for theme
--
create view dbo.[FilteredTheme] (
    [backgroundcolor],
    [controlborder],
    [controlshade],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [defaultcustomentitycolor],
    [defaultentitycolor],
    [exchangerate],
    [globallinkcolor],
    [headercolor],
    [hoverlinkeffect],
    [importsequencenumber],
    [isdefaulttheme],
    [isdefaultthemename],
    [logoid],
    [logoidname],
    [logotooltip],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [navbarbackgroundcolor],
    [navbarshelfcolor],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [processcontrolcolor],
    [selectedlinkeffect],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [themeid],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [type],
    [typename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Theme].[BackgroundColor],
    [Theme].[ControlBorder],
    [Theme].[ControlShade],
    [Theme].[CreatedBy],
    [Theme].[CreatedByName],
    [Theme].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Theme].[CreatedOn],
			us.TimeZoneCode),
        [Theme].[CreatedOn],
    [Theme].[CreatedOnBehalfBy],
    [Theme].[CreatedOnBehalfByName],
    [Theme].[CreatedOnBehalfByYomiName],
    [Theme].[DefaultCustomEntityColor],
    [Theme].[DefaultEntityColor],
    [Theme].[ExchangeRate],
    [Theme].[GlobalLinkColor],
    [Theme].[HeaderColor],
    [Theme].[HoverLinkEffect],
    [Theme].[ImportSequenceNumber],
    [Theme].[IsDefaultTheme],
    IsDefaultThemePLTable.Value,
    [Theme].[LogoId],
    [Theme].[LogoIdName],
    [Theme].[LogoToolTip],
    [Theme].[ModifiedBy],
    [Theme].[ModifiedByName],
    [Theme].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Theme].[ModifiedOn],
			us.TimeZoneCode),
        [Theme].[ModifiedOn],
    [Theme].[ModifiedOnBehalfBy],
    [Theme].[ModifiedOnBehalfByName],
    [Theme].[ModifiedOnBehalfByYomiName],
    [Theme].[Name],
    [Theme].[NavBarBackgroundColor],
    [Theme].[NavBarShelfColor],
    [Theme].[OrganizationId],
    [Theme].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Theme].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Theme].[OverriddenCreatedOn],
    [Theme].[ProcessControlColor],
    [Theme].[SelectedLinkEffect],
    [Theme].[statecode],
    statecodePLTable.Value,
    [Theme].[statuscode],
    statuscodePLTable.Value,
    [Theme].[ThemeId],
    [Theme].[TimeZoneRuleVersionNumber],
    [Theme].[TransactionCurrencyId],
    [Theme].[TransactionCurrencyIdName],
    [Theme].[Type],
    TypePLTable.Value,
    [Theme].[UTCConversionTimeZoneCode],
    [Theme].[VersionNumber]
from Theme
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsDefaultThemePLTable] on 
		([IsDefaultThemePLTable].AttributeName = 'isdefaulttheme'
		and [IsDefaultThemePLTable].ObjectTypeCode = 2015
		and [IsDefaultThemePLTable].AttributeValue = [Theme].[IsDefaultTheme]
		and [IsDefaultThemePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 2015
		and [statecodePLTable].AttributeValue = [Theme].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 2015
		and [statuscodePLTable].AttributeValue = [Theme].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 2015
		and [TypePLTable].AttributeValue = [Theme].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2015) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Theme].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTheme] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTheme] TO [CRMReaderRole]
    AS [dbo];

