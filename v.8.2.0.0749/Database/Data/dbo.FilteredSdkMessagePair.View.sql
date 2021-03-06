USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredSdkMessagePair]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for sdkmessagepair
--
create view [dbo].[FilteredSdkMessagePair] (
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [endpoint],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [namespace],
    [organizationid],
    [sdkmessagebindinginformation],
    [sdkmessageid],
    [sdkmessagepairid],
    [sdkmessagepairidunique],
    [versionnumber]
) with view_metadata as
select
    [SdkMessagePair].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessagePair].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessagePair].[CreatedOn],
    [SdkMessagePair].[CreatedOnBehalfBy],
    --[SdkMessagePair].[CreatedOnBehalfByDsc]
    0,
    [SdkMessagePair].[CreatedOnBehalfByName],
    [SdkMessagePair].[CreatedOnBehalfByYomiName],
    [SdkMessagePair].[CustomizationLevel],
    [SdkMessagePair].[Endpoint],
    [SdkMessagePair].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessagePair].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessagePair].[ModifiedOn],
    [SdkMessagePair].[ModifiedOnBehalfBy],
    --[SdkMessagePair].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessagePair].[ModifiedOnBehalfByName],
    [SdkMessagePair].[ModifiedOnBehalfByYomiName],
    [SdkMessagePair].[Namespace],
    [SdkMessagePair].[OrganizationId],
    [SdkMessagePair].[SdkMessageBindingInformation],
    [SdkMessagePair].[SdkMessageId],
    [SdkMessagePair].[SdkMessagePairId],
    [SdkMessagePair].[SdkMessagePairIdUnique],
    [SdkMessagePair].[VersionNumber]
from SdkMessagePair
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4613) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessagePair].OrganizationId = u.OrganizationId
)

GO
