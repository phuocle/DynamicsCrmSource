

--
-- report view for pluginassembly
--
create view dbo.[FilteredPluginAssembly] (
    [componentstate],
    [content],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [culture],
    [customizationlevel],
    [description],
    [introducedversion],
    [ishidden],
    [ismanaged],
    [ismanagedname],
    [isolationmode],
    [isolationmodename],
    [major],
    [minor],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [path],
    [pluginassemblyid],
    [pluginassemblyidunique],
    [publickeytoken],
    [solutionid],
    [sourcehash],
    [sourcetype],
    [sourcetypename],
    [version],
    [versionnumber]
) with view_metadata as
select
    [PluginAssembly].[ComponentState],
    [PluginAssembly].[Content],
    [PluginAssembly].[CreatedBy],
    [PluginAssembly].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginAssembly].[CreatedOn],
			us.TimeZoneCode),
        [PluginAssembly].[CreatedOn],
    [PluginAssembly].[CreatedOnBehalfBy],
    --[PluginAssembly].[CreatedOnBehalfByDsc]
    0,
    [PluginAssembly].[CreatedOnBehalfByName],
    [PluginAssembly].[CreatedOnBehalfByYomiName],
    [PluginAssembly].[Culture],
    [PluginAssembly].[CustomizationLevel],
    [PluginAssembly].[Description],
    [PluginAssembly].[IntroducedVersion],
    [PluginAssembly].[IsHidden],
    [PluginAssembly].[IsManaged],
    IsManagedPLTable.Value,
    [PluginAssembly].[IsolationMode],
    IsolationModePLTable.Value,
    [PluginAssembly].[Major],
    [PluginAssembly].[Minor],
    [PluginAssembly].[ModifiedBy],
    [PluginAssembly].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginAssembly].[ModifiedOn],
			us.TimeZoneCode),
        [PluginAssembly].[ModifiedOn],
    [PluginAssembly].[ModifiedOnBehalfBy],
    --[PluginAssembly].[ModifiedOnBehalfByDsc]
    0,
    [PluginAssembly].[ModifiedOnBehalfByName],
    [PluginAssembly].[ModifiedOnBehalfByYomiName],
    [PluginAssembly].[Name],
    [PluginAssembly].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginAssembly].[OverwriteTime],
			us.TimeZoneCode),
        [PluginAssembly].[OverwriteTime],
    [PluginAssembly].[Path],
    [PluginAssembly].[PluginAssemblyId],
    [PluginAssembly].[PluginAssemblyIdUnique],
    [PluginAssembly].[PublicKeyToken],
    [PluginAssembly].[SolutionId],
    [PluginAssembly].[SourceHash],
    [PluginAssembly].[SourceType],
    SourceTypePLTable.Value,
    [PluginAssembly].[Version],
    [PluginAssembly].[VersionNumber]
from PluginAssembly
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4605
		and [IsManagedPLTable].AttributeValue = [PluginAssembly].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsolationModePLTable] on 
		([IsolationModePLTable].AttributeName = 'isolationmode'
		and [IsolationModePLTable].ObjectTypeCode = 4605
		and [IsolationModePLTable].AttributeValue = [PluginAssembly].[IsolationMode]
		and [IsolationModePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SourceTypePLTable] on 
		([SourceTypePLTable].AttributeName = 'sourcetype'
		and [SourceTypePLTable].ObjectTypeCode = 4605
		and [SourceTypePLTable].AttributeValue = [PluginAssembly].[SourceType]
		and [SourceTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4605) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [PluginAssembly].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPluginAssembly] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPluginAssembly] TO [CRMReaderRole]
    AS [dbo];

