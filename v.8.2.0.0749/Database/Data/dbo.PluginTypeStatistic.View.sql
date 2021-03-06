USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[PluginTypeStatistic]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for PluginTypeStatistic
--
create view [dbo].[PluginTypeStatistic]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [PluginTypeIdName],

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
    [lk_plugintypestatisticbase_modifiedonbehalfby].[YomiFullName],
    [lk_plugintypestatisticbase_modifiedonbehalfby].[FullName],
    [createdby_plugintypestatistic].[FullName],
    [lk_plugintypestatisticbase_createdonbehalfby].[YomiFullName],
    [lk_plugintypestatisticbase_createdonbehalfby].[FullName],
    [modifiedby_plugintypestatistic].[FullName],
    [plugintype_plugintypestatistic].[FriendlyName],

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

GO
