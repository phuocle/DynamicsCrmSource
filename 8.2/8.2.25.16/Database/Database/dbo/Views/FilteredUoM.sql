

--
-- report view for uom
--
create view dbo.[FilteredUoM] (
    [baseuom],
    [baseuomname],
    [baseuomnamedsc],
    [createdby],
    [createdbydsc],
    [createdbyexternalparty],
    [createdbyexternalpartyname],
    [createdbyexternalpartyyominame],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [isschedulebaseuom],
    [isschedulebaseuomname],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyexternalparty],
    [modifiedbyexternalpartyname],
    [modifiedbyexternalpartyyominame],
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
    [overriddencreatedon],
    [overriddencreatedonutc],
    [quantity],
    [uomid],
    [uomscheduleid],
    [versionnumber]
) with view_metadata as
select
    [UoM].[BaseUoM],
    [UoM].[BaseUoMName],
    --[UoM].[BaseUoMNameDsc]
    0,
    [UoM].[CreatedBy],
    --[UoM].[CreatedByDsc]
    0,
    [UoM].[CreatedByExternalParty],
    [UoM].[CreatedByExternalPartyName],
    [UoM].[CreatedByExternalPartyYomiName],
    [UoM].[CreatedByName],
    [UoM].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoM].[CreatedOn],
			us.TimeZoneCode),
        [UoM].[CreatedOn],
    [UoM].[CreatedOnBehalfBy],
    --[UoM].[CreatedOnBehalfByDsc]
    0,
    [UoM].[CreatedOnBehalfByName],
    [UoM].[CreatedOnBehalfByYomiName],
    [UoM].[ImportSequenceNumber],
    [UoM].[IsScheduleBaseUoM],
    IsScheduleBaseUoMPLTable.Value,
    [UoM].[ModifiedBy],
    --[UoM].[ModifiedByDsc]
    0,
    [UoM].[ModifiedByExternalParty],
    [UoM].[ModifiedByExternalPartyName],
    [UoM].[ModifiedByExternalPartyYomiName],
    [UoM].[ModifiedByName],
    [UoM].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoM].[ModifiedOn],
			us.TimeZoneCode),
        [UoM].[ModifiedOn],
    [UoM].[ModifiedOnBehalfBy],
    --[UoM].[ModifiedOnBehalfByDsc]
    0,
    [UoM].[ModifiedOnBehalfByName],
    [UoM].[ModifiedOnBehalfByYomiName],
    [UoM].[Name],
    [UoM].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([UoM].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [UoM].[OverriddenCreatedOn],
    [UoM].[Quantity],
    [UoM].[UoMId],
    [UoM].[UoMScheduleId],
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
    ON OBJECT::[dbo].[FilteredUoM] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredUoM] TO [CRMReaderRole]
    AS [dbo];

