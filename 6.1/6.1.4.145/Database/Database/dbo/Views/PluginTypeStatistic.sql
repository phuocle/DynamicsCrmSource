


--
-- base view for PluginTypeStatistic
--
create view dbo.[PluginTypeStatistic]
 (
    -- logical attributes
    [PluginTypeIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],

    -- physical attributes
    [PluginTypeStatisticId],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [PluginTypeId],
    [OrganizationId],
    [ExecuteCount],
    [FailureCount],
    [CrashCount],
    [FailurePercent],
    [CrashPercent],
    [CrashContributionPercent],
    [TerminateCpuContributionPercent],
    [TerminateMemoryContributionPercent],
    [TerminateHandlesContributionPercent],
    [TerminateOtherContributionPercent],
    [AverageExecuteTimeInMilliseconds],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [plugintype_plugintypestatistic].[FriendlyName],
    [lk_plugintypestatisticbase_createdonbehalfby].[YomiFullName],
    [lk_plugintypestatisticbase_createdonbehalfby].[FullName],
    [lk_plugintypestatisticbase_modifiedonbehalfby].[YomiFullName],
    [createdby_plugintypestatistic].[FullName],
    [lk_plugintypestatisticbase_modifiedonbehalfby].[FullName],
    [modifiedby_plugintypestatistic].[FullName],

    -- physical attribute
    [PluginTypeStatisticBase].[PluginTypeStatisticId],
    [PluginTypeStatisticBase].[CreatedBy],
    [PluginTypeStatisticBase].[CreatedOn],
    [PluginTypeStatisticBase].[ModifiedBy],
    [PluginTypeStatisticBase].[ModifiedOn],
    [PluginTypeStatisticBase].[PluginTypeId],
    [PluginTypeStatisticBase].[OrganizationId],
    [PluginTypeStatisticBase].[ExecuteCount],
    [PluginTypeStatisticBase].[FailureCount],
    [PluginTypeStatisticBase].[CrashCount],
    [PluginTypeStatisticBase].[FailurePercent],
    [PluginTypeStatisticBase].[CrashPercent],
    [PluginTypeStatisticBase].[CrashContributionPercent],
    [PluginTypeStatisticBase].[TerminateCpuContributionPercent],
    [PluginTypeStatisticBase].[TerminateMemoryContributionPercent],
    [PluginTypeStatisticBase].[TerminateHandlesContributionPercent],
    [PluginTypeStatisticBase].[TerminateOtherContributionPercent],
    [PluginTypeStatisticBase].[AverageExecuteTimeInMilliseconds],
    [PluginTypeStatisticBase].[ModifiedOnBehalfBy],
    [PluginTypeStatisticBase].[CreatedOnBehalfBy]
from [PluginTypeStatisticBase] 
    left join [SystemUserBase] [createdby_plugintypestatistic] with(nolock) on ([PluginTypeStatisticBase].[CreatedBy] = [createdby_plugintypestatistic].[SystemUserId])
    left join [SystemUserBase] [lk_plugintypestatisticbase_createdonbehalfby] with(nolock) on ([PluginTypeStatisticBase].[CreatedOnBehalfBy] = [lk_plugintypestatisticbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_plugintypestatisticbase_modifiedonbehalfby] with(nolock) on ([PluginTypeStatisticBase].[ModifiedOnBehalfBy] = [lk_plugintypestatisticbase_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [modifiedby_plugintypestatistic] with(nolock) on ([PluginTypeStatisticBase].[ModifiedBy] = [modifiedby_plugintypestatistic].[SystemUserId])
    left join [PluginTypeBase] [plugintype_plugintypestatistic] on ([PluginTypeStatisticBase].[PluginTypeId] = [plugintype_plugintypestatistic].[PluginTypeId] and [plugintype_plugintypestatistic].OverwriteTime = 0 and [plugintype_plugintypestatistic].ComponentState = 0)
