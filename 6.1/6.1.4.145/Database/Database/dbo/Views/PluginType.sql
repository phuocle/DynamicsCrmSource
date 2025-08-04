


--
-- base view for PluginType
--
create view dbo.[PluginType]
 (
    -- logical attributes
    [PublicKeyToken],
    [Version],
    [Minor],
    [ModifiedOnBehalfByName],
    [AssemblyName],
    [PluginAssemblyIdName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [Culture],
    [Major],
    [CreatedOnBehalfByName],
    [CreatedByName],

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
    [pluginassembly_plugintype].[PublicKeyToken],
    [pluginassembly_plugintype].[Version],
    [pluginassembly_plugintype].[Minor],
    [modifiedonbehalfby_plugintype].[FullName],
    [pluginassembly_plugintype].[Name],
    [pluginassembly_plugintype].[Name],
    [modifiedby_plugintype].[FullName],
    [createdonbehalfby_plugintype].[YomiFullName],
    [modifiedonbehalfby_plugintype].[YomiFullName],
    [pluginassembly_plugintype].[Culture],
    [pluginassembly_plugintype].[Major],
    [createdonbehalfby_plugintype].[FullName],
    [createdby_plugintype].[FullName],

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
where T1.OverwriteTime = 0 AND T1.ComponentState = 0