


--
-- logical view for PluginAssemblyLogical
--
create view dbo.[PluginAssemblyLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [SourceHash],
    [CustomizationLevel],
    [Content],
    [OrganizationId],
    [ModifiedOn],
    [Path],
    [Name],
    [CreatedBy],
    [Version],
    [VersionNumber],
    [ModifiedBy],
    [CreatedOn],
    [PluginAssemblyId],
    [Culture],
    [SourceType],
    [PluginAssemblyIdUnique],
    [PublicKeyToken],
    [IsolationMode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [IsManaged],
    [Major],
    [Minor],
    [Description],
    [IsHidden],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_pluginassembly].[YomiFullName],
    [modifiedonbehalfby_pluginassembly].[FullName],
    [createdonbehalfby_pluginassembly].[FullName],
    [modifiedby_pluginassembly].[FullName],
    [createdby_pluginassembly].[FullName],
    [createdonbehalfby_pluginassembly].[YomiFullName],

    -- physical attribute
    [T1].[SourceHash],
    [T1].[CustomizationLevel],
    [T1].[Content],
    [T1].[OrganizationId],
    [T1].[ModifiedOn],
    [T1].[Path],
    [T1].[Name],
    [T1].[CreatedBy],
    [T1].[Version],
    [T1].[VersionNumber],
    [T1].[ModifiedBy],
    [T1].[CreatedOn],
    [T1].[PluginAssemblyId],
    [T1].[Culture],
    [T1].[SourceType],
    [T1].[PluginAssemblyIdUnique],
    [T1].[PublicKeyToken],
    [T1].[IsolationMode],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[IsManaged],
    [T1].[Major],
    [T1].[Minor],
    [T1].[Description],
    [T1].[IsHidden],
    [T1].[IntroducedVersion]
from [PluginAssemblyBase] [T1]
    left join [SystemUserBase] [createdby_pluginassembly] with(nolock) on ([T1].[CreatedBy] = [createdby_pluginassembly].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_pluginassembly] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_pluginassembly].[SystemUserId])
    left join [SystemUserBase] [modifiedby_pluginassembly] with(nolock) on ([T1].[ModifiedBy] = [modifiedby_pluginassembly].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_pluginassembly] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_pluginassembly].[SystemUserId])
where T1.OverwriteTime = 0