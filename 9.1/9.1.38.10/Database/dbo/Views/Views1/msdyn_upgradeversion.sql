


--
-- base view for msdyn_upgradeversion
--
create view dbo.[msdyn_upgradeversion]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [msdyn_UpgradeRunName],

    -- physical attributes
    [msdyn_upgradeversionId],
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
    [msdyn_summary],
    [msdyn_Finished],
    [msdyn_StartingVersion],
    [msdyn_Status],
    [msdyn_TargetVersion],
    [msdyn_UpgradeRun]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_upgradeversion_modifiedonbehalfby].[FullName],
    [lk_msdyn_upgradeversion_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_upgradeversion_modifiedby].[FullName],
    [lk_msdyn_upgradeversion_modifiedby].[YomiFullName],
    [lk_msdyn_upgradeversion_createdby].[FullName],
    [lk_msdyn_upgradeversion_createdby].[YomiFullName],
    [lk_msdyn_upgradeversion_createdonbehalfby].[FullName],
    [lk_msdyn_upgradeversion_createdonbehalfby].[YomiFullName],
    [organization_msdyn_upgradeversion].[Name],
    [msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun].[msdyn_Summary],

    -- physical attribute
    [msdyn_upgradeversionBase].[msdyn_upgradeversionId],
    [msdyn_upgradeversionBase].[CreatedOn],
    [msdyn_upgradeversionBase].[CreatedBy],
    [msdyn_upgradeversionBase].[ModifiedOn],
    [msdyn_upgradeversionBase].[ModifiedBy],
    [msdyn_upgradeversionBase].[CreatedOnBehalfBy],
    [msdyn_upgradeversionBase].[ModifiedOnBehalfBy],
    [msdyn_upgradeversionBase].[OrganizationId],
    [msdyn_upgradeversionBase].[statecode],
    [msdyn_upgradeversionBase].[statuscode],
    [msdyn_upgradeversionBase].[VersionNumber],
    [msdyn_upgradeversionBase].[ImportSequenceNumber],
    [msdyn_upgradeversionBase].[OverriddenCreatedOn],
    [msdyn_upgradeversionBase].[TimeZoneRuleVersionNumber],
    [msdyn_upgradeversionBase].[UTCConversionTimeZoneCode],
    [msdyn_upgradeversionBase].[msdyn_summary],
    [msdyn_upgradeversionBase].[msdyn_Finished],
    [msdyn_upgradeversionBase].[msdyn_StartingVersion],
    [msdyn_upgradeversionBase].[msdyn_Status],
    [msdyn_upgradeversionBase].[msdyn_TargetVersion],
    [msdyn_upgradeversionBase].[msdyn_UpgradeRun]
from [msdyn_upgradeversionBase] 
    left join [SystemUserBase] [lk_msdyn_upgradeversion_createdby] on ([msdyn_upgradeversionBase].[CreatedBy] = [lk_msdyn_upgradeversion_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgradeversion_createdonbehalfby] on ([msdyn_upgradeversionBase].[CreatedOnBehalfBy] = [lk_msdyn_upgradeversion_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgradeversion_modifiedby] on ([msdyn_upgradeversionBase].[ModifiedBy] = [lk_msdyn_upgradeversion_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgradeversion_modifiedonbehalfby] on ([msdyn_upgradeversionBase].[ModifiedOnBehalfBy] = [lk_msdyn_upgradeversion_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_upgraderunBase] [msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun] on ([msdyn_upgradeversionBase].[msdyn_UpgradeRun] = [msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun].[msdyn_upgraderunId])
    left join [OrganizationBase] [organization_msdyn_upgradeversion] on ([msdyn_upgradeversionBase].[OrganizationId] = [organization_msdyn_upgradeversion].[OrganizationId])
