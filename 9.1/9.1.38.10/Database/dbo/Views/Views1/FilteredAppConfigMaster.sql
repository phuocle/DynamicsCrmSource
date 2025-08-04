

--
-- report view for appconfigmaster
--
create view dbo.[FilteredAppConfigMaster] 
(
    [appconfigmasterid],
    [configtype],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [defaultvalue],
    [importsequencenumber],
    [isnavigationsetting],
    [modifiedby],
    [modifiedbyname],
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
    [parentappconfigmasterid],
    [validator],
    [versionnumber]
) with view_metadata as
select
    [AppConfigMaster].[AppConfigMasterId],
    [AppConfigMaster].[ConfigType],
    [AppConfigMaster].[CreatedBy],
    [AppConfigMaster].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigMaster].[CreatedOn],
			us.TimeZoneCode),
        [AppConfigMaster].[CreatedOn],
    [AppConfigMaster].[CreatedOnBehalfBy],
    [AppConfigMaster].[CreatedOnBehalfByName],
    [AppConfigMaster].[CreatedOnBehalfByYomiName],
    [AppConfigMaster].[DefaultValue],
    [AppConfigMaster].[ImportSequenceNumber],
    [AppConfigMaster].[IsNavigationSetting],
    [AppConfigMaster].[ModifiedBy],
    [AppConfigMaster].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigMaster].[ModifiedOn],
			us.TimeZoneCode),
        [AppConfigMaster].[ModifiedOn],
    [AppConfigMaster].[ModifiedOnBehalfBy],
    [AppConfigMaster].[ModifiedOnBehalfByName],
    [AppConfigMaster].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([AppConfigMaster].[AppConfigMasterId], 'name', 9011, us.UILanguageId), [AppConfigMaster].[Name]),
    [AppConfigMaster].[OrganizationId],
    [AppConfigMaster].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigMaster].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppConfigMaster].[OverriddenCreatedOn],
    [AppConfigMaster].[ParentAppConfigMasterId],
    [AppConfigMaster].[Validator],
    [AppConfigMaster].[VersionNumber]
from AppConfigMaster
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9011) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppConfigMaster].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppConfigMaster] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppConfigMaster] TO [CRMReaderRole]
    AS [dbo];

