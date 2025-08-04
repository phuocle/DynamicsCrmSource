

--
-- report view for syncattributemappingprofile
--
create view dbo.[FilteredSyncAttributeMappingProfile] (
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
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
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [syncattributemappingprofileid],
    [syncattributemappingprofileidunique],
    [versionnumber]
) with view_metadata as
select
    [SyncAttributeMappingProfile].[ComponentState],
    [SyncAttributeMappingProfile].[CreatedBy],
    [SyncAttributeMappingProfile].[CreatedByName],
    [SyncAttributeMappingProfile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SyncAttributeMappingProfile].[CreatedOn],
			us.TimeZoneCode),
        [SyncAttributeMappingProfile].[CreatedOn],
    [SyncAttributeMappingProfile].[CreatedOnBehalfBy],
    [SyncAttributeMappingProfile].[CreatedOnBehalfByName],
    [SyncAttributeMappingProfile].[CreatedOnBehalfByYomiName],
    [SyncAttributeMappingProfile].[Description],
    [SyncAttributeMappingProfile].[IsManaged],
    IsManagedPLTable.Value,
    [SyncAttributeMappingProfile].[ModifiedBy],
    [SyncAttributeMappingProfile].[ModifiedByName],
    [SyncAttributeMappingProfile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SyncAttributeMappingProfile].[ModifiedOn],
			us.TimeZoneCode),
        [SyncAttributeMappingProfile].[ModifiedOn],
    [SyncAttributeMappingProfile].[ModifiedOnBehalfBy],
    [SyncAttributeMappingProfile].[ModifiedOnBehalfByName],
    [SyncAttributeMappingProfile].[ModifiedOnBehalfByYomiName],
    [SyncAttributeMappingProfile].[Name],
    [SyncAttributeMappingProfile].[OrganizationId],
    [SyncAttributeMappingProfile].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SyncAttributeMappingProfile].[OverwriteTime],
			us.TimeZoneCode),
        [SyncAttributeMappingProfile].[OverwriteTime],
    [SyncAttributeMappingProfile].[SolutionId],
    [SyncAttributeMappingProfile].[SyncAttributeMappingProfileId],
    [SyncAttributeMappingProfile].[SyncAttributeMappingProfileIdUnique],
    [SyncAttributeMappingProfile].[VersionNumber]
from SyncAttributeMappingProfile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1400
		and [IsManagedPLTable].AttributeValue = [SyncAttributeMappingProfile].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1400) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SyncAttributeMappingProfile].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSyncAttributeMappingProfile] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSyncAttributeMappingProfile] TO [CRMReaderRole]
    AS [dbo];

