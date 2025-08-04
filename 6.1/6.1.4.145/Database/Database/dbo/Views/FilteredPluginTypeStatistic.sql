

--
-- report view for plugintypestatistic
--
create view dbo.[FilteredPluginTypeStatistic] (
    [averageexecutetimeinmilliseconds],
    [crashcontributionpercent],
    [crashcount],
    [crashpercent],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [executecount],
    [failurecount],
    [failurepercent],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [plugintypeid],
    [plugintypeidname],
    [plugintypestatisticid],
    [terminatecpucontributionpercent],
    [terminatehandlescontributionpercent],
    [terminatememorycontributionpercent],
    [terminateothercontributionpercent]
) with view_metadata as
select
    [PluginTypeStatistic].[AverageExecuteTimeInMilliseconds],
    [PluginTypeStatistic].[CrashContributionPercent],
    [PluginTypeStatistic].[CrashCount],
    [PluginTypeStatistic].[CrashPercent],
    [PluginTypeStatistic].[CreatedBy],
    [PluginTypeStatistic].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginTypeStatistic].[CreatedOn],
			us.TimeZoneCode),
        [PluginTypeStatistic].[CreatedOn],
    [PluginTypeStatistic].[CreatedOnBehalfBy],
    --[PluginTypeStatistic].[CreatedOnBehalfByDsc]
    0,
    [PluginTypeStatistic].[CreatedOnBehalfByName],
    [PluginTypeStatistic].[CreatedOnBehalfByYomiName],
    [PluginTypeStatistic].[ExecuteCount],
    [PluginTypeStatistic].[FailureCount],
    [PluginTypeStatistic].[FailurePercent],
    [PluginTypeStatistic].[ModifiedBy],
    [PluginTypeStatistic].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PluginTypeStatistic].[ModifiedOn],
			us.TimeZoneCode),
        [PluginTypeStatistic].[ModifiedOn],
    [PluginTypeStatistic].[ModifiedOnBehalfBy],
    --[PluginTypeStatistic].[ModifiedOnBehalfByDsc]
    0,
    [PluginTypeStatistic].[ModifiedOnBehalfByName],
    [PluginTypeStatistic].[ModifiedOnBehalfByYomiName],
    [PluginTypeStatistic].[OrganizationId],
    [PluginTypeStatistic].[PluginTypeId],
    [PluginTypeStatistic].[PluginTypeIdName],
    [PluginTypeStatistic].[PluginTypeStatisticId],
    [PluginTypeStatistic].[TerminateCpuContributionPercent],
    [PluginTypeStatistic].[TerminateHandlesContributionPercent],
    [PluginTypeStatistic].[TerminateMemoryContributionPercent],
    [PluginTypeStatistic].[TerminateOtherContributionPercent]
from PluginTypeStatistic
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4603) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [PluginTypeStatistic].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPluginTypeStatistic] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPluginTypeStatistic] TO [CRMReaderRole]
    AS [dbo];

