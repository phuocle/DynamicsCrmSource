


--
-- base view for AppConfigMaster
--
create view dbo.[AppConfigMaster]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [CreatedByName],

    -- physical attributes
    [AppConfigMasterId],
    [ConfigType],
    [DefaultValue],
    [IsNavigationSetting],
    [Name],
    [ParentAppConfigMasterId],
    [Validator],
    [VersionNumber],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [ImportSequenceNumber],
    [OverriddenCreatedOn]
) with view_metadata as
select
    -- logical attributes
    [lk_appconfigmaster_createdonbehalfby].[FullName],
    [lk_appconfigmaster_modifiedby].[FullName],
    [lk_appconfigmaster_modifiedonbehalfby].[YomiFullName],
    [lk_appconfigmaster_createdonbehalfby].[YomiFullName],
    [organization_appconfigmaster].[Name],
    [lk_appconfigmaster_modifiedonbehalfby].[FullName],
    [lk_appconfigmaster_createdby].[FullName],

    -- physical attribute
    [AppConfigMasterBase].[AppConfigMasterId],
    [AppConfigMasterBase].[ConfigType],
    [AppConfigMasterBase].[DefaultValue],
    [AppConfigMasterBase].[IsNavigationSetting],
    [AppConfigMasterBase].[Name],
    [AppConfigMasterBase].[ParentAppConfigMasterId],
    [AppConfigMasterBase].[Validator],
    [AppConfigMasterBase].[VersionNumber],
    [AppConfigMasterBase].[CreatedOn],
    [AppConfigMasterBase].[CreatedBy],
    [AppConfigMasterBase].[CreatedOnBehalfBy],
    [AppConfigMasterBase].[ModifiedOn],
    [AppConfigMasterBase].[ModifiedBy],
    [AppConfigMasterBase].[ModifiedOnBehalfBy],
    [AppConfigMasterBase].[OrganizationId],
    [AppConfigMasterBase].[ImportSequenceNumber],
    [AppConfigMasterBase].[OverriddenCreatedOn]
from [AppConfigMasterBase] 
    left join [SystemUserBase] [lk_appconfigmaster_createdby] on ([AppConfigMasterBase].[CreatedBy] = [lk_appconfigmaster_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfigmaster_createdonbehalfby] on ([AppConfigMasterBase].[CreatedOnBehalfBy] = [lk_appconfigmaster_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfigmaster_modifiedby] on ([AppConfigMasterBase].[ModifiedBy] = [lk_appconfigmaster_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfigmaster_modifiedonbehalfby] on ([AppConfigMasterBase].[ModifiedOnBehalfBy] = [lk_appconfigmaster_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appconfigmaster] on ([AppConfigMasterBase].[OrganizationId] = [organization_appconfigmaster].[OrganizationId])
