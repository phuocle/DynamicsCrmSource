


--
-- base view for AppSetting
--
create view dbo.[AppSetting]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ParentAppModuleIdName],
    [SettingDefinitionIdName],
    [OrganizationIdName],

    -- physical attributes
    [AppSettingId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [DisplayName],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [SettingDefinitionId],
    [ParentAppModuleId],
    [UniqueName],
    [Description],
    [Value]
) with view_metadata as
select
    -- logical attributes
    [lk_appsetting_createdby].[FullName],
    [lk_appsetting_createdby].[YomiFullName],
    [lk_appsetting_createdonbehalfby].[FullName],
    [lk_appsetting_createdonbehalfby].[YomiFullName],
    [lk_appsetting_modifiedby].[FullName],
    [lk_appsetting_modifiedby].[YomiFullName],
    [lk_appsetting_modifiedonbehalfby].[FullName],
    [lk_appsetting_modifiedonbehalfby].[YomiFullName],
    [appmodule_appsetting_parentappmoduleid].[Name],
    [settingdefinition_appsetting_settingdefinitionid].[DisplayName],
    [organization_appsetting].[Name],

    -- physical attribute
    [T1].[AppSettingId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[DisplayName],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[SettingDefinitionId],
    [T1].[ParentAppModuleId],
    [T1].[UniqueName],
    [T1].[Description],
    [T1].[Value]
from [AppSettingBase] [T1]
    left join [AppModuleBase] [appmodule_appsetting_parentappmoduleid] on ([T1].[ParentAppModuleId] = [appmodule_appsetting_parentappmoduleid].[AppModuleId] and [appmodule_appsetting_parentappmoduleid].OverwriteTime = 0 and [appmodule_appsetting_parentappmoduleid].ComponentState = 0)
    left join [SystemUserBase] [lk_appsetting_createdby] on ([T1].[CreatedBy] = [lk_appsetting_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appsetting_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_appsetting_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appsetting_modifiedby] on ([T1].[ModifiedBy] = [lk_appsetting_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appsetting_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_appsetting_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appsetting] on ([T1].[OrganizationId] = [organization_appsetting].[OrganizationId])
    left join [SettingDefinitionBase] [settingdefinition_appsetting_settingdefinitionid] on ([T1].[SettingDefinitionId] = [settingdefinition_appsetting_settingdefinitionid].[SettingDefinitionId] and [settingdefinition_appsetting_settingdefinitionid].OverwriteTime = 0 and [settingdefinition_appsetting_settingdefinitionid].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0