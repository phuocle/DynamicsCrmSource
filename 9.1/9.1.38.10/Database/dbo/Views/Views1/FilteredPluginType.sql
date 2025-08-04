

--
-- report view for plugintype
--
create view dbo.[FilteredPluginType] 
(
    [assemblyname],
    [componentstate],
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
    [customworkflowactivityinfo],
    [description],
    [friendlyname],
    [ismanaged],
    [ismanagedname],
    [isworkflowactivity],
    [isworkflowactivityname],
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
    [pluginassemblyid],
    [pluginassemblyidname],
    [plugintypeid],
    [plugintypeidunique],
    [publickeytoken],
    [solutionid],
    [typename],
    [version],
    [versionnumber],
    [workflowactivitygroupname]
) with view_metadata as
select
    [PluginType].[AssemblyName],
    [PluginType].[ComponentState],
    [PluginType].[CreatedBy],
    [PluginType].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginType].[CreatedOn],
			us.TimeZoneCode),
        [PluginType].[CreatedOn],
    [PluginType].[CreatedOnBehalfBy],
    --[PluginType].[CreatedOnBehalfByDsc]
    0,
    [PluginType].[CreatedOnBehalfByName],
    [PluginType].[CreatedOnBehalfByYomiName],
    [PluginType].[Culture],
    [PluginType].[CustomizationLevel],
    [PluginType].[CustomWorkflowActivityInfo],
    [PluginType].[Description],
    [PluginType].[FriendlyName],
    [PluginType].[IsManaged],
    IsManagedPLTable.Value,
    [PluginType].[IsWorkflowActivity],
    IsWorkflowActivityPLTable.Value,
    [PluginType].[Major],
    [PluginType].[Minor],
    [PluginType].[ModifiedBy],
    [PluginType].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginType].[ModifiedOn],
			us.TimeZoneCode),
        [PluginType].[ModifiedOn],
    [PluginType].[ModifiedOnBehalfBy],
    --[PluginType].[ModifiedOnBehalfByDsc]
    0,
    [PluginType].[ModifiedOnBehalfByName],
    [PluginType].[ModifiedOnBehalfByYomiName],
    [PluginType].[Name],
    [PluginType].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginType].[OverwriteTime],
			us.TimeZoneCode),
        [PluginType].[OverwriteTime],
    [PluginType].[PluginAssemblyId],
    [PluginType].[PluginAssemblyIdName],
    [PluginType].[PluginTypeId],
    [PluginType].[PluginTypeIdUnique],
    [PluginType].[PublicKeyToken],
    [PluginType].[SolutionId],
    [PluginType].[TypeName],
    [PluginType].[Version],
    [PluginType].[VersionNumber],
    [PluginType].[WorkflowActivityGroupName]
from PluginType
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4602
		and [IsManagedPLTable].AttributeValue = [PluginType].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsWorkflowActivityPLTable] on 
		([IsWorkflowActivityPLTable].AttributeName = 'isworkflowactivity'
		and [IsWorkflowActivityPLTable].ObjectTypeCode = 4602
		and [IsWorkflowActivityPLTable].AttributeValue = [PluginType].[IsWorkflowActivity]
		and [IsWorkflowActivityPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4602) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [PluginType].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPluginType] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPluginType] TO [CRMReaderRole]
    AS [dbo];

