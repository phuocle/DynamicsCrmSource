SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for plugintype
--
create view [dbo].[FilteredPluginType] (
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
    dbo.fn_UTCToTzSpecificLocalTime([PluginType].[CreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
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
    dbo.fn_UTCToTzSpecificLocalTime([PluginType].[ModifiedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [PluginType].[ModifiedOn],
    [PluginType].[ModifiedOnBehalfBy],
    --[PluginType].[ModifiedOnBehalfByDsc]
    0,
    [PluginType].[ModifiedOnBehalfByName],
    [PluginType].[ModifiedOnBehalfByYomiName],
    [PluginType].[Name],
    [PluginType].[OrganizationId],
    dbo.fn_UTCToTzSpecificLocalTime([PluginType].[OverwriteTime], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
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
GRANT SELECT ON  [dbo].[FilteredPluginType] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredPluginType] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
