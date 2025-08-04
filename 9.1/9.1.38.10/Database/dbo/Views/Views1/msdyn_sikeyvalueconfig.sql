


--
-- base view for msdyn_sikeyvalueconfig
--
create view dbo.[msdyn_sikeyvalueconfig]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [msdyn_sikeyvalueconfigId],
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
    [msdyn_ConfigKey],
    [msdyn_ConfigValue]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_sikeyvalueconfig_createdby].[FullName],
    [lk_msdyn_sikeyvalueconfig_createdby].[YomiFullName],
    [lk_msdyn_sikeyvalueconfig_createdonbehalfby].[FullName],
    [lk_msdyn_sikeyvalueconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_sikeyvalueconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_sikeyvalueconfig_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_sikeyvalueconfig_modifiedby].[FullName],
    [lk_msdyn_sikeyvalueconfig_modifiedby].[YomiFullName],
    [organization_msdyn_sikeyvalueconfig].[Name],

    -- physical attribute
    [msdyn_sikeyvalueconfigBase].[msdyn_sikeyvalueconfigId],
    [msdyn_sikeyvalueconfigBase].[CreatedOn],
    [msdyn_sikeyvalueconfigBase].[CreatedBy],
    [msdyn_sikeyvalueconfigBase].[ModifiedOn],
    [msdyn_sikeyvalueconfigBase].[ModifiedBy],
    [msdyn_sikeyvalueconfigBase].[CreatedOnBehalfBy],
    [msdyn_sikeyvalueconfigBase].[ModifiedOnBehalfBy],
    [msdyn_sikeyvalueconfigBase].[OrganizationId],
    [msdyn_sikeyvalueconfigBase].[statecode],
    [msdyn_sikeyvalueconfigBase].[statuscode],
    [msdyn_sikeyvalueconfigBase].[VersionNumber],
    [msdyn_sikeyvalueconfigBase].[ImportSequenceNumber],
    [msdyn_sikeyvalueconfigBase].[OverriddenCreatedOn],
    [msdyn_sikeyvalueconfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_sikeyvalueconfigBase].[UTCConversionTimeZoneCode],
    [msdyn_sikeyvalueconfigBase].[msdyn_ConfigKey],
    [msdyn_sikeyvalueconfigBase].[msdyn_ConfigValue]
from [msdyn_sikeyvalueconfigBase] 
    left join [SystemUserBase] [lk_msdyn_sikeyvalueconfig_createdby] on ([msdyn_sikeyvalueconfigBase].[CreatedBy] = [lk_msdyn_sikeyvalueconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_sikeyvalueconfig_createdonbehalfby] on ([msdyn_sikeyvalueconfigBase].[CreatedOnBehalfBy] = [lk_msdyn_sikeyvalueconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_sikeyvalueconfig_modifiedby] on ([msdyn_sikeyvalueconfigBase].[ModifiedBy] = [lk_msdyn_sikeyvalueconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_sikeyvalueconfig_modifiedonbehalfby] on ([msdyn_sikeyvalueconfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_sikeyvalueconfig_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_msdyn_sikeyvalueconfig] on ([msdyn_sikeyvalueconfigBase].[OrganizationId] = [organization_msdyn_sikeyvalueconfig].[OrganizationId])
