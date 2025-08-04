


--
-- base view for msdyn_upgradestep
--
create view dbo.[msdyn_upgradestep]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [msdyn_UpgradeVersionName],
    [OrganizationIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [msdyn_upgradestepId],
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
    [msdyn_Name],
    [msdyn_Details],
    [msdyn_Errors],
    [msdyn_FinishedDate],
    [msdyn_Status],
    [msdyn_StepID],
    [msdyn_dbversion],
    [msdyn_UpgradeVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_upgradestep_modifiedonbehalfby].[FullName],
    [lk_msdyn_upgradestep_modifiedonbehalfby].[YomiFullName],
    [msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion].[msdyn_summary],
    [organization_msdyn_upgradestep].[Name],
    [lk_msdyn_upgradestep_modifiedby].[FullName],
    [lk_msdyn_upgradestep_modifiedby].[YomiFullName],
    [lk_msdyn_upgradestep_createdby].[FullName],
    [lk_msdyn_upgradestep_createdby].[YomiFullName],
    [lk_msdyn_upgradestep_createdonbehalfby].[FullName],
    [lk_msdyn_upgradestep_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [msdyn_upgradestepBase].[msdyn_upgradestepId],
    [msdyn_upgradestepBase].[CreatedOn],
    [msdyn_upgradestepBase].[CreatedBy],
    [msdyn_upgradestepBase].[ModifiedOn],
    [msdyn_upgradestepBase].[ModifiedBy],
    [msdyn_upgradestepBase].[CreatedOnBehalfBy],
    [msdyn_upgradestepBase].[ModifiedOnBehalfBy],
    [msdyn_upgradestepBase].[OrganizationId],
    [msdyn_upgradestepBase].[statecode],
    [msdyn_upgradestepBase].[statuscode],
    [msdyn_upgradestepBase].[VersionNumber],
    [msdyn_upgradestepBase].[ImportSequenceNumber],
    [msdyn_upgradestepBase].[OverriddenCreatedOn],
    [msdyn_upgradestepBase].[TimeZoneRuleVersionNumber],
    [msdyn_upgradestepBase].[UTCConversionTimeZoneCode],
    [msdyn_upgradestepBase].[msdyn_Name],
    [msdyn_upgradestepBase].[msdyn_Details],
    [msdyn_upgradestepBase].[msdyn_Errors],
    [msdyn_upgradestepBase].[msdyn_FinishedDate],
    [msdyn_upgradestepBase].[msdyn_Status],
    [msdyn_upgradestepBase].[msdyn_StepID],
    [msdyn_upgradestepBase].[msdyn_dbversion],
    [msdyn_upgradestepBase].[msdyn_UpgradeVersion]
from [msdyn_upgradestepBase] 
    left join [SystemUserBase] [lk_msdyn_upgradestep_createdby] on ([msdyn_upgradestepBase].[CreatedBy] = [lk_msdyn_upgradestep_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgradestep_createdonbehalfby] on ([msdyn_upgradestepBase].[CreatedOnBehalfBy] = [lk_msdyn_upgradestep_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgradestep_modifiedby] on ([msdyn_upgradestepBase].[ModifiedBy] = [lk_msdyn_upgradestep_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgradestep_modifiedonbehalfby] on ([msdyn_upgradestepBase].[ModifiedOnBehalfBy] = [lk_msdyn_upgradestep_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_upgradeversionBase] [msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion] on ([msdyn_upgradestepBase].[msdyn_UpgradeVersion] = [msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion].[msdyn_upgradeversionId])
    left join [OrganizationBase] [organization_msdyn_upgradestep] on ([msdyn_upgradestepBase].[OrganizationId] = [organization_msdyn_upgradestep].[OrganizationId])
