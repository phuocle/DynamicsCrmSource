

--
-- report view for mobileofflineprofile
--
create view dbo.[FilteredMobileOfflineProfile] 
(
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
    [introducedversion],
    [ismanaged],
    [isvalidated],
    [isvalidatedname],
    [mobileofflineprofileid],
    [mobileofflineprofileidunique],
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
    [processid],
    [publishedon],
    [publishedonutc],
    [selectedentitymetadata],
    [solutionid],
    [stageid],
    [traversedpath],
    [versionnumber]
) with view_metadata as
select
    [MobileOfflineProfile].[ComponentState],
    [MobileOfflineProfile].[CreatedBy],
    [MobileOfflineProfile].[CreatedByName],
    [MobileOfflineProfile].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfile].[CreatedOn],
			us.TimeZoneCode),
        [MobileOfflineProfile].[CreatedOn],
    [MobileOfflineProfile].[CreatedOnBehalfBy],
    [MobileOfflineProfile].[CreatedOnBehalfByName],
    [MobileOfflineProfile].[CreatedOnBehalfByYomiName],
    [MobileOfflineProfile].[Description],
    [MobileOfflineProfile].[IntroducedVersion],
    [MobileOfflineProfile].[IsManaged],
    [MobileOfflineProfile].[IsValidated],
    IsValidatedPLTable.Value,
    [MobileOfflineProfile].[MobileOfflineProfileId],
    [MobileOfflineProfile].[MobileOfflineProfileIdUnique],
    [MobileOfflineProfile].[ModifiedBy],
    [MobileOfflineProfile].[ModifiedByName],
    [MobileOfflineProfile].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfile].[ModifiedOn],
			us.TimeZoneCode),
        [MobileOfflineProfile].[ModifiedOn],
    [MobileOfflineProfile].[ModifiedOnBehalfBy],
    [MobileOfflineProfile].[ModifiedOnBehalfByName],
    [MobileOfflineProfile].[ModifiedOnBehalfByYomiName],
    [MobileOfflineProfile].[Name],
    [MobileOfflineProfile].[OrganizationId],
    [MobileOfflineProfile].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfile].[OverwriteTime],
			us.TimeZoneCode),
        [MobileOfflineProfile].[OverwriteTime],
    [MobileOfflineProfile].[ProcessId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfile].[PublishedOn],
			us.TimeZoneCode),
        [MobileOfflineProfile].[PublishedOn],
    [MobileOfflineProfile].[SelectedEntityMetadata],
    [MobileOfflineProfile].[SolutionId],
    [MobileOfflineProfile].[StageId],
    [MobileOfflineProfile].[TraversedPath],
    [MobileOfflineProfile].[VersionNumber]
from MobileOfflineProfile
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsValidatedPLTable] on 
		([IsValidatedPLTable].AttributeName = 'isvalidated'
		and [IsValidatedPLTable].ObjectTypeCode = 9866
		and [IsValidatedPLTable].AttributeValue = [MobileOfflineProfile].[IsValidated]
		and [IsValidatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9866) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [MobileOfflineProfile].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMobileOfflineProfile] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMobileOfflineProfile] TO [CRMReaderRole]
    AS [dbo];

