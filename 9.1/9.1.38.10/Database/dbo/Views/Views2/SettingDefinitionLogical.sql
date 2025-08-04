


--
-- logical view for SettingDefinitionLogical
--
create view dbo.[SettingDefinitionLogical]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [SettingDefinitionId],
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
    [DefaultValue],
    [UniqueName],
    [Description],
    [HelpUrl],
    [DataType],
    [Category],
    [Scope],
    [Type],
    [CanBeCreatedByComponentOwningPublisher]
) with view_metadata as
select
    -- logical attributes
    [organization_settingdefinition].[Name],
    [lk_settingdefinition_createdby].[FullName],
    [lk_settingdefinition_createdby].[YomiFullName],
    [lk_settingdefinition_createdonbehalfby].[FullName],
    [lk_settingdefinition_createdonbehalfby].[YomiFullName],
    [lk_settingdefinition_modifiedby].[FullName],
    [lk_settingdefinition_modifiedby].[YomiFullName],
    [lk_settingdefinition_modifiedonbehalfby].[FullName],
    [lk_settingdefinition_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[SettingDefinitionId],
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
    [T1].[DefaultValue],
    [T1].[UniqueName],
    [T1].[Description],
    [T1].[HelpUrl],
    [T1].[DataType],
    [T1].[Category],
    [T1].[Scope],
    [T1].[Type],
    [T1].[CanBeCreatedByComponentOwningPublisher]
from [SettingDefinitionBase] [T1]
    left join [SystemUserBase] [lk_settingdefinition_createdby] on ([T1].[CreatedBy] = [lk_settingdefinition_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_settingdefinition_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_settingdefinition_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_settingdefinition_modifiedby] on ([T1].[ModifiedBy] = [lk_settingdefinition_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_settingdefinition_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_settingdefinition_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_settingdefinition] on ([T1].[OrganizationId] = [organization_settingdefinition].[OrganizationId])
where T1.OverwriteTime = 0