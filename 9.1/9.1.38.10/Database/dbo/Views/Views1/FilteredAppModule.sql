

--
-- report view for appmodule
--
create view dbo.[FilteredAppModule] 
(
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
    [descriptor],
    [eventhandlers],
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
    [navigationtype],
    [optimizedfor],
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
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [uniquename],
    [url],
    [versionnumber],
    [webresourceid],
    [welcomepageid]
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
    [AppModule].[Descriptor],
    [AppModule].[EventHandlers],
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
    [AppModule].[NavigationType],
    [AppModule].[OptimizedFor],
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
    [AppModule].[statecode],
    statecodePLTable.Value,
    [AppModule].[statuscode],
    statuscodePLTable.Value,
    [AppModule].[UniqueName],
    [AppModule].[URL],
    [AppModule].[VersionNumber],
    [AppModule].[WebResourceId],
    [AppModule].[WelcomePageId]
from AppModule
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 9006
		and [statecodePLTable].AttributeValue = [AppModule].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 9006
		and [statuscodePLTable].AttributeValue = [AppModule].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9006) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [AppModule].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModule] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModule] TO [CRMReaderRole]
    AS [dbo];

