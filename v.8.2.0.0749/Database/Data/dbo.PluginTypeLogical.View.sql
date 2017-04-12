USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[PluginTypeLogical]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for PluginTypeLogical
--
create view [dbo].[PluginTypeLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [PublicKeyToken],
    [Version],
    [Minor],
    [AssemblyName],
    [PluginAssemblyIdName],
    [Culture],
    [Major],

    -- physical attributes
    [FriendlyName],
    [PluginTypeId],
    [ModifiedBy],
    [CreatedOn],
    [CreatedBy],
    [OrganizationId],
    [TypeName],
    [ModifiedOn],
    [VersionNumber],
    [IsWorkflowActivity],
    [PluginTypeIdUnique],
    [PluginAssemblyId],
    [CustomizationLevel],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [WorkflowActivityGroupName],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [IsManaged],
    [Name],
    [Description],
    [CustomWorkflowActivityInfo]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_plugintype].[FullName],
    [modifiedby_plugintype].[FullName],
    [createdonbehalfby_plugintype].[YomiFullName],
    [modifiedonbehalfby_plugintype].[YomiFullName],
    [createdonbehalfby_plugintype].[FullName],
    [createdby_plugintype].[FullName],
    [pluginassembly_plugintype].[PublicKeyToken],
    [pluginassembly_plugintype].[Version],
    [pluginassembly_plugintype].[Minor],
    [pluginassembly_plugintype].[Name],
    [pluginassembly_plugintype].[Name],
    [pluginassembly_plugintype].[Culture],
    [pluginassembly_plugintype].[Major],

    -- physical attribute
    [T1].[FriendlyName],
    [T1].[PluginTypeId],
    [T1].[ModifiedBy],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[OrganizationId],
    [T1].[TypeName],
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[IsWorkflowActivity],
    [T1].[PluginTypeIdUnique],
    [T1].[PluginAssemblyId],
    [T1].[CustomizationLevel],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[WorkflowActivityGroupName],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[IsManaged],
    [T1].[Name],
    [T1].[Description],
    [T1].[CustomWorkflowActivityInfo]
from [PluginTypeBase] [T1]
    left join [SystemUserBase] [createdby_plugintype] with(nolock) on ([T1].[CreatedBy] = [createdby_plugintype].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_plugintype] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_plugintype].[SystemUserId])
    left join [SystemUserBase] [modifiedby_plugintype] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_plugintype].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_plugintype] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_plugintype].[SystemUserId])
    left join [PluginAssemblyBase] [pluginassembly_plugintype] on ([T1].[PluginAssemblyId] = [pluginassembly_plugintype].[PluginAssemblyId] and [pluginassembly_plugintype].OverwriteTime = 0 and [pluginassembly_plugintype].ComponentState = 0)
where T1.OverwriteTime = 0
GO
