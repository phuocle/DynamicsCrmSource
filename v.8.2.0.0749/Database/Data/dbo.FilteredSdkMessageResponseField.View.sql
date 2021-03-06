USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSdkMessageResponseField]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for sdkmessageresponsefield
--
create view [dbo].[FilteredSdkMessageResponseField] (
    [clrformatter],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [formatter],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [parameterbindinginformation],
    [position],
    [publicname],
    [sdkmessageresponsefieldid],
    [sdkmessageresponsefieldidunique],
    [sdkmessageresponseid],
    [value],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageResponseField].[ClrFormatter],
    [SdkMessageResponseField].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponseField].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageResponseField].[CreatedOn],
    [SdkMessageResponseField].[CreatedOnBehalfBy],
    --[SdkMessageResponseField].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageResponseField].[CreatedOnBehalfByName],
    [SdkMessageResponseField].[CreatedOnBehalfByYomiName],
    [SdkMessageResponseField].[CustomizationLevel],
    [SdkMessageResponseField].[Formatter],
    [SdkMessageResponseField].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageResponseField].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageResponseField].[ModifiedOn],
    [SdkMessageResponseField].[ModifiedOnBehalfBy],
    --[SdkMessageResponseField].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageResponseField].[ModifiedOnBehalfByName],
    [SdkMessageResponseField].[ModifiedOnBehalfByYomiName],
    [SdkMessageResponseField].[Name],
    [SdkMessageResponseField].[OrganizationId],
    [SdkMessageResponseField].[ParameterBindingInformation],
    [SdkMessageResponseField].[Position],
    [SdkMessageResponseField].[PublicName],
    [SdkMessageResponseField].[SdkMessageResponseFieldId],
    [SdkMessageResponseField].[SdkMessageResponseFieldIdUnique],
    [SdkMessageResponseField].[SdkMessageResponseId],
    [SdkMessageResponseField].[Value],
    [SdkMessageResponseField].[VersionNumber]
from SdkMessageResponseField
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4611) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageResponseField].OrganizationId = u.OrganizationId
)

GO
