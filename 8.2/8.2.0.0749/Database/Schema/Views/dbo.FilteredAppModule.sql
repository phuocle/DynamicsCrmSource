SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for appmodule
--
create view [dbo].[FilteredAppModule] (
    [appmoduleid],
    [appmoduleidunique],
    [appmoduleversion],
    [appmodulexmlmanaged],
    [clienttype],
    [componentstate],
    [configxml],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [formfactor],
    [importsequencenumber],
    [introducedversion],
    [isdefault],
    [isfeatured],
    [ismanaged],
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
    [overwritetime],
    [overwritetimeutc],
    [publishedon],
    [publishedonutc],
    [publisherid],
    [publisheridname],
    [solutionid],
    [uniquename],
    [url],
    [versionnumber],
    [webresourceid]
) with view_metadata as
select
    [AppModule].[AppModuleId],
    [AppModule].[AppModuleIdUnique],
    [AppModule].[AppModuleVersion],
    [AppModule].[AppModuleXmlManaged],
    [AppModule].[ClientType],
    [AppModule].[ComponentState],
    [AppModule].[ConfigXML],
    [AppModule].[CreatedBy],
    [AppModule].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModule].[CreatedOn],
			us.TimeZoneCode),
        [AppModule].[CreatedOn],
    [AppModule].[CreatedOnBehalfBy],
    [AppModule].[CreatedOnBehalfByName],
    [AppModule].[CreatedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([AppModule].[AppModuleId], 'description', 24, us.UILanguageId), [AppModule].[Description]),
    [AppModule].[FormFactor],
    [AppModule].[ImportSequenceNumber],
    [AppModule].[IntroducedVersion],
    [AppModule].[IsDefault],
    [AppModule].[IsFeatured],
    [AppModule].[IsManaged],
    [AppModule].[ModifiedBy],
    [AppModule].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModule].[ModifiedOn],
			us.TimeZoneCode),
        [AppModule].[ModifiedOn],
    [AppModule].[ModifiedOnBehalfBy],
    [AppModule].[ModifiedOnBehalfByName],
    [AppModule].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([AppModule].[AppModuleId], 'name', 24, us.UILanguageId), [AppModule].[Name]),
    [AppModule].[OrganizationId],
    [AppModule].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModule].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AppModule].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModule].[OverwriteTime],
			us.TimeZoneCode),
        [AppModule].[OverwriteTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModule].[PublishedOn],
			us.TimeZoneCode),
        [AppModule].[PublishedOn],
    [AppModule].[PublisherId],
    [AppModule].[PublisherIdName],
    [AppModule].[SolutionId],
    [AppModule].[UniqueName],
    [AppModule].[URL],
    [AppModule].[VersionNumber],
    [AppModule].[WebResourceId]
from AppModule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9006) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppModule].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredAppModule] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredAppModule] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
