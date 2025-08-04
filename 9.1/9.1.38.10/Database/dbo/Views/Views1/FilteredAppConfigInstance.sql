

--
-- report view for appconfiginstance
--
create view dbo.[FilteredAppConfigInstance] 
(
    [appconfigid],
    [appconfigidunique],
    [appconfiginstanceid],
    [appconfiginstanceidunique],
    [appconfigmasterid],
    [componentstate],
    [componenttype],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [importsequencenumber],
    [introducedversion],
    [ismanaged],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [objectid],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [value],
    [versionnumber]
) with view_metadata as
select
    [AppConfigInstance].[AppConfigId],
    [AppConfigInstance].[AppConfigIdUnique],
    [AppConfigInstance].[AppConfigInstanceId],
    [AppConfigInstance].[AppConfigInstanceIdUnique],
    [AppConfigInstance].[AppConfigMasterId],
    [AppConfigInstance].[ComponentState],
    [AppConfigInstance].[ComponentType],
    [AppConfigInstance].[CreatedBy],
    [AppConfigInstance].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigInstance].[CreatedOn],
			us.TimeZoneCode),
        [AppConfigInstance].[CreatedOn],
    [AppConfigInstance].[CreatedOnBehalfBy],
    [AppConfigInstance].[CreatedOnBehalfByName],
    [AppConfigInstance].[CreatedOnBehalfByYomiName],
    [AppConfigInstance].[ImportSequenceNumber],
    [AppConfigInstance].[IntroducedVersion],
    [AppConfigInstance].[IsManaged],
    [AppConfigInstance].[ModifiedBy],
    [AppConfigInstance].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigInstance].[ModifiedOn],
			us.TimeZoneCode),
        [AppConfigInstance].[ModifiedOn],
    [AppConfigInstance].[ModifiedOnBehalfBy],
    [AppConfigInstance].[ModifiedOnBehalfByName],
    [AppConfigInstance].[ModifiedOnBehalfByYomiName],
    [AppConfigInstance].[ObjectId],
    [AppConfigInstance].[OrganizationId],
    [AppConfigInstance].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigInstance].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppConfigInstance].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppConfigInstance].[OverwriteTime],
			us.TimeZoneCode),
        [AppConfigInstance].[OverwriteTime],
    [AppConfigInstance].[SolutionId],
    [AppConfigInstance].[Value],
    [AppConfigInstance].[VersionNumber]
from AppConfigInstance
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9012) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppConfigInstance].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppConfigInstance] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppConfigInstance] TO [CRMReaderRole]
    AS [dbo];

