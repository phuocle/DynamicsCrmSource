SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for sdkmessagerequest
--
create view [dbo].[FilteredSdkMessageRequest] (
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
    [name],
    [organizationid],
    [primaryobjecttypecode],
    [sdkmessagepairid],
    [sdkmessagerequestid],
    [sdkmessagerequestidunique],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageRequest].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequest].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageRequest].[CreatedOn],
    [SdkMessageRequest].[CreatedOnBehalfBy],
    --[SdkMessageRequest].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageRequest].[CreatedOnBehalfByName],
    [SdkMessageRequest].[CreatedOnBehalfByYomiName],
    [SdkMessageRequest].[CustomizationLevel],
    [SdkMessageRequest].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequest].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageRequest].[ModifiedOn],
    [SdkMessageRequest].[ModifiedOnBehalfBy],
    --[SdkMessageRequest].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageRequest].[ModifiedOnBehalfByName],
    [SdkMessageRequest].[ModifiedOnBehalfByYomiName],
    [SdkMessageRequest].[Name],
    [SdkMessageRequest].[OrganizationId],
    [SdkMessageRequest].[PrimaryObjectTypeCode],
    [SdkMessageRequest].[SdkMessagePairId],
    [SdkMessageRequest].[SdkMessageRequestId],
    [SdkMessageRequest].[SdkMessageRequestIdUnique],
    [SdkMessageRequest].[VersionNumber]
from SdkMessageRequest
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4609) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageRequest].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageRequest] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSdkMessageRequest] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
