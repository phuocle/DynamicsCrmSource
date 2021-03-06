USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSdkMessageRequestField]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for sdkmessagerequestfield
--
create view [dbo].[FilteredSdkMessageRequestField] (
    [clrparser],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [fieldmask],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [optional],
    [organizationid],
    [parameterbindinginformation],
    [parser],
    [position],
    [publicname],
    [sdkmessagerequestfieldid],
    [sdkmessagerequestfieldidunique],
    [sdkmessagerequestid],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageRequestField].[ClrParser],
    [SdkMessageRequestField].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequestField].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageRequestField].[CreatedOn],
    [SdkMessageRequestField].[CreatedOnBehalfBy],
    --[SdkMessageRequestField].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageRequestField].[CreatedOnBehalfByName],
    [SdkMessageRequestField].[CreatedOnBehalfByYomiName],
    [SdkMessageRequestField].[CustomizationLevel],
    [SdkMessageRequestField].[FieldMask],
    [SdkMessageRequestField].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageRequestField].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageRequestField].[ModifiedOn],
    [SdkMessageRequestField].[ModifiedOnBehalfBy],
    --[SdkMessageRequestField].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageRequestField].[ModifiedOnBehalfByName],
    [SdkMessageRequestField].[ModifiedOnBehalfByYomiName],
    [SdkMessageRequestField].[Name],
    [SdkMessageRequestField].[Optional],
    [SdkMessageRequestField].[OrganizationId],
    [SdkMessageRequestField].[ParameterBindingInformation],
    [SdkMessageRequestField].[Parser],
    [SdkMessageRequestField].[Position],
    [SdkMessageRequestField].[PublicName],
    [SdkMessageRequestField].[SdkMessageRequestFieldId],
    [SdkMessageRequestField].[SdkMessageRequestFieldIdUnique],
    [SdkMessageRequestField].[SdkMessageRequestId],
    [SdkMessageRequestField].[VersionNumber]
from SdkMessageRequestField
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4614) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageRequestField].OrganizationId = u.OrganizationId
)

GO
