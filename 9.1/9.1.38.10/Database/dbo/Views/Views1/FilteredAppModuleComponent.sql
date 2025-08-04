

--
-- report view for appmodulecomponent
--
create view dbo.[FilteredAppModuleComponent] (
    [appmodulecomponentid],
    [appmodulecomponentidunique],
    [appmoduleidname],
    [appmoduleidunique],
    [componenttype],
    [componenttypename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [introducedversion],
    [isdefault],
    [ismetadata],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [objectid],
    [overwritetime],
    [overwritetimeutc],
    [rootappmodulecomponentid],
    [rootcomponentbehavior],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [AppModuleComponent].[AppModuleComponentId],
    [AppModuleComponent].[AppModuleComponentIdUnique],
    [AppModuleComponent].[AppModuleIdName],
    [AppModuleComponent].[AppModuleIdUnique],
    [AppModuleComponent].[ComponentType],
    ComponentTypePLTable.Value,
    [AppModuleComponent].[CreatedBy],
    [AppModuleComponent].[CreatedByName],
    [AppModuleComponent].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponent].[CreatedOn],
			us.TimeZoneCode),
        [AppModuleComponent].[CreatedOn],
    [AppModuleComponent].[CreatedOnBehalfBy],
    [AppModuleComponent].[CreatedOnBehalfByName],
    [AppModuleComponent].[CreatedOnBehalfByYomiName],
    [AppModuleComponent].[ExchangeRate],
    [AppModuleComponent].[IntroducedVersion],
    [AppModuleComponent].[IsDefault],
    [AppModuleComponent].[IsMetadata],
    [AppModuleComponent].[ModifiedBy],
    [AppModuleComponent].[ModifiedByName],
    [AppModuleComponent].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponent].[ModifiedOn],
			us.TimeZoneCode),
        [AppModuleComponent].[ModifiedOn],
    [AppModuleComponent].[ModifiedOnBehalfBy],
    [AppModuleComponent].[ModifiedOnBehalfByName],
    [AppModuleComponent].[ModifiedOnBehalfByYomiName],
    [AppModuleComponent].[ObjectId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AppModuleComponent].[OverwriteTime],
			us.TimeZoneCode),
        [AppModuleComponent].[OverwriteTime],
    [AppModuleComponent].[RootAppModuleComponentId],
    [AppModuleComponent].[RootComponentBehavior],
    [AppModuleComponent].[TimeZoneRuleVersionNumber],
    [AppModuleComponent].[UTCConversionTimeZoneCode],
    [AppModuleComponent].[VersionNumber]
from AppModuleComponent
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentTypePLTable] on 
		([ComponentTypePLTable].AttributeName = 'componenttype'
		and [ComponentTypePLTable].ObjectTypeCode = 9007
		and [ComponentTypePLTable].AttributeValue = [AppModuleComponent].[ComponentType]
		and [ComponentTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleComponent] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAppModuleComponent] TO [CRMReaderRole]
    AS [dbo];

