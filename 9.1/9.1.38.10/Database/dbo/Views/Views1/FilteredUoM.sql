

--
-- report view for uom
--
create view dbo.[FilteredUoM] 
(
    [baseuom],
    [baseuomname],
    [createdby],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [isschedulebaseuom],
    [isschedulebaseuomname],
    [modifiedby],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [quantity],
    [timezoneruleversionnumber],
    [uomid],
    [uomscheduleid],
    [uomscheduleidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [UoM].[BaseUoM],
    [UoM].[BaseUoMName],
    [UoM].[CreatedBy],
    [UoM].[CreatedByExternalParty],
    [UoM].[CreatedByExternalPartyName],
    [UoM].[CreatedByExternalPartyYomiName],
    [UoM].[CreatedByName],
    [UoM].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoM].[CreatedOn],
			us.TimeZoneCode),
        [UoM].[CreatedOn],
    [UoM].[CreatedOnBehalfBy],
    [UoM].[CreatedOnBehalfByName],
    [UoM].[CreatedOnBehalfByYomiName],
    [UoM].[ImportSequenceNumber],
    [UoM].[IsScheduleBaseUoM],
    IsScheduleBaseUoMPLTable.Value,
    [UoM].[ModifiedBy],
    [UoM].[ModifiedByExternalParty],
    [UoM].[ModifiedByExternalPartyName],
    [UoM].[ModifiedByExternalPartyYomiName],
    [UoM].[ModifiedByName],
    [UoM].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoM].[ModifiedOn],
			us.TimeZoneCode),
        [UoM].[ModifiedOn],
    [UoM].[ModifiedOnBehalfBy],
    [UoM].[ModifiedOnBehalfByName],
    [UoM].[ModifiedOnBehalfByYomiName],
    [UoM].[Name],
    [UoM].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoM].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [UoM].[OverriddenCreatedOn],
    [UoM].[Quantity],
    [UoM].[TimeZoneRuleVersionNumber],
    [UoM].[UoMId],
    [UoM].[UoMScheduleId],
    [UoM].[UoMScheduleIdName],
    [UoM].[UTCConversionTimeZoneCode],
    [UoM].[VersionNumber]
from UoM
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsScheduleBaseUoMPLTable] on 
		([IsScheduleBaseUoMPLTable].AttributeName = 'isschedulebaseuom'
		and [IsScheduleBaseUoMPLTable].ObjectTypeCode = 1055
		and [IsScheduleBaseUoMPLTable].AttributeValue = [UoM].[IsScheduleBaseUoM]
		and [IsScheduleBaseUoMPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1056) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [UoM].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUoM] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUoM] TO [CRMReaderRole]
    AS [dbo];

