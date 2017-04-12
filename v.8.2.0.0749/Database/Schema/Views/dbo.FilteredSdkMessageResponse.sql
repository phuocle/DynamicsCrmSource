SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sdkmessageresponse
--
create view [dbo].[FilteredSdkMessageResponse] (
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [sdkmessagerequestid],
    [sdkmessageresponseid],
    [sdkmessageresponseidunique],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageResponse].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponse].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageResponse].[CreatedOn],
    [SdkMessageResponse].[CreatedOnBehalfBy],
    --[SdkMessageResponse].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageResponse].[CreatedOnBehalfByName],
    [SdkMessageResponse].[CreatedOnBehalfByYomiName],
    [SdkMessageResponse].[CustomizationLevel],
    [SdkMessageResponse].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponse].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageResponse].[ModifiedOn],
    [SdkMessageResponse].[ModifiedOnBehalfBy],
    --[SdkMessageResponse].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageResponse].[ModifiedOnBehalfByName],
    [SdkMessageResponse].[ModifiedOnBehalfByYomiName],
    [SdkMessageResponse].[OrganizationId],
    [SdkMessageResponse].[SdkMessageRequestId],
    [SdkMessageResponse].[SdkMessageResponseId],
    [SdkMessageResponse].[SdkMessageResponseIdUnique],
    [SdkMessageResponse].[VersionNumber]
from SdkMessageResponse
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4610) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageResponse].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageResponse] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageResponse] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO