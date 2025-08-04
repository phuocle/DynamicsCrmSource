

--
-- report view for equipment
--
create view dbo.[FilteredEquipment] 
(
    [businessunitid],
    [businessunitidname],
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
    [displayinserviceviews],
    [displayinserviceviewsname],
    [emailaddress],
    [equipmentid],
    [exchangerate],
    [importsequencenumber],
    [isdisabled],
    [isdisabledname],
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
    [siteid],
    [siteidname],
    [skills],
    [timezonecode],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Equipment].[BusinessUnitId],
    [Equipment].[BusinessUnitIdName],
    [Equipment].[CalendarId],
    [Equipment].[CreatedBy],
    [Equipment].[CreatedByName],
    [Equipment].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Equipment].[CreatedOn],
			us.TimeZoneCode),
        [Equipment].[CreatedOn],
    [Equipment].[CreatedOnBehalfBy],
    [Equipment].[CreatedOnBehalfByName],
    [Equipment].[CreatedOnBehalfByYomiName],
    [Equipment].[Description],
    [Equipment].[DisplayInServiceViews],
    DisplayInServiceViewsPLTable.Value,
    [Equipment].[EMailAddress],
    [Equipment].[EquipmentId],
    [Equipment].[ExchangeRate],
    [Equipment].[ImportSequenceNumber],
    [Equipment].[IsDisabled],
    IsDisabledPLTable.Value,
    [Equipment].[ModifiedBy],
    [Equipment].[ModifiedByName],
    [Equipment].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Equipment].[ModifiedOn],
			us.TimeZoneCode),
        [Equipment].[ModifiedOn],
    [Equipment].[ModifiedOnBehalfBy],
    [Equipment].[ModifiedOnBehalfByName],
    [Equipment].[ModifiedOnBehalfByYomiName],
    [Equipment].[Name],
    [Equipment].[OrganizationId],
    [Equipment].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Equipment].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Equipment].[OverriddenCreatedOn],
    [Equipment].[SiteId],
    [Equipment].[SiteIdName],
    [Equipment].[Skills],
    [Equipment].[TimeZoneCode],
    [Equipment].[TimeZoneRuleVersionNumber],
    [Equipment].[TransactionCurrencyId],
    [Equipment].[TransactionCurrencyIdName],
    [Equipment].[UTCConversionTimeZoneCode],
    [Equipment].[VersionNumber]
from Equipment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DisplayInServiceViewsPLTable] on 
		([DisplayInServiceViewsPLTable].AttributeName = 'displayinserviceviews'
		and [DisplayInServiceViewsPLTable].ObjectTypeCode = 4000
		and [DisplayInServiceViewsPLTable].AttributeValue = [Equipment].[DisplayInServiceViews]
		and [DisplayInServiceViewsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDisabledPLTable] on 
		([IsDisabledPLTable].AttributeName = 'isdisabled'
		and [IsDisabledPLTable].ObjectTypeCode = 4000
		and [IsDisabledPLTable].AttributeValue = [Equipment].[IsDisabled]
		and [IsDisabledPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4000) pdm
where
(
    
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Equipment].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4000)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Equipment].[BusinessUnitId] is not null 
	) 
)

)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEquipment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEquipment] TO [CRMReaderRole]
    AS [dbo];

