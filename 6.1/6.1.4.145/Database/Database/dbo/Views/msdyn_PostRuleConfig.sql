


--
-- base view for msdyn_PostRuleConfig
--
create view dbo.[msdyn_PostRuleConfig]
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
    [OrganizationIdName],
    [msdyn_PostConfigIdName],

    -- physical attributes
    [msdyn_PostRuleConfigId],
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
    [msdyn_name],
    [msdyn_FormatId],
    [msdyn_PostToYammer],
    [msdyn_RuleId],
    [msdyn_RuleSource],
    [msdyn_StepId],
    [msdyn_PostConfigId]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_postruleconfig_createdby].[FullName],
    [lk_msdyn_postruleconfig_createdby].[YomiFullName],
    [lk_msdyn_postruleconfig_createdonbehalfby].[FullName],
    [lk_msdyn_postruleconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_postruleconfig_modifiedby].[FullName],
    [lk_msdyn_postruleconfig_modifiedby].[YomiFullName],
    [lk_msdyn_postruleconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_postruleconfig_modifiedonbehalfby].[YomiFullName],
    [organization_msdyn_postruleconfig].[Name],
    [msdyn_postconfig_msdyn_postruleconfig].[msdyn_EntityDisplayName],

    -- physical attribute
    [msdyn_PostRuleConfigBase].[msdyn_PostRuleConfigId],
    [msdyn_PostRuleConfigBase].[CreatedOn],
    [msdyn_PostRuleConfigBase].[CreatedBy],
    [msdyn_PostRuleConfigBase].[ModifiedOn],
    [msdyn_PostRuleConfigBase].[ModifiedBy],
    [msdyn_PostRuleConfigBase].[CreatedOnBehalfBy],
    [msdyn_PostRuleConfigBase].[ModifiedOnBehalfBy],
    [msdyn_PostRuleConfigBase].[OrganizationId],
    [msdyn_PostRuleConfigBase].[statecode],
    [msdyn_PostRuleConfigBase].[statuscode],
    [msdyn_PostRuleConfigBase].[VersionNumber],
    [msdyn_PostRuleConfigBase].[ImportSequenceNumber],
    [msdyn_PostRuleConfigBase].[OverriddenCreatedOn],
    [msdyn_PostRuleConfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_PostRuleConfigBase].[UTCConversionTimeZoneCode],
    [msdyn_PostRuleConfigBase].[msdyn_name],
    [msdyn_PostRuleConfigBase].[msdyn_FormatId],
    [msdyn_PostRuleConfigBase].[msdyn_PostToYammer],
    [msdyn_PostRuleConfigBase].[msdyn_RuleId],
    [msdyn_PostRuleConfigBase].[msdyn_RuleSource],
    [msdyn_PostRuleConfigBase].[msdyn_StepId],
    [msdyn_PostRuleConfigBase].[msdyn_PostConfigId]
from [msdyn_PostRuleConfigBase] 
    left join [SystemUserBase] [lk_msdyn_postruleconfig_createdby] with(nolock) on ([msdyn_PostRuleConfigBase].[CreatedBy] = [lk_msdyn_postruleconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postruleconfig_createdonbehalfby] with(nolock) on ([msdyn_PostRuleConfigBase].[CreatedOnBehalfBy] = [lk_msdyn_postruleconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postruleconfig_modifiedby] with(nolock) on ([msdyn_PostRuleConfigBase].[ModifiedBy] = [lk_msdyn_postruleconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postruleconfig_modifiedonbehalfby] with(nolock) on ([msdyn_PostRuleConfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_postruleconfig_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_PostConfigBase] [msdyn_postconfig_msdyn_postruleconfig] on ([msdyn_PostRuleConfigBase].[msdyn_PostConfigId] = [msdyn_postconfig_msdyn_postruleconfig].[msdyn_PostConfigId])
    left join [OrganizationBase] [organization_msdyn_postruleconfig] with(nolock) on ([msdyn_PostRuleConfigBase].[OrganizationId] = [organization_msdyn_postruleconfig].[OrganizationId])
