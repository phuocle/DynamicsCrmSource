


--
-- base view for msdyn_upgraderun
--
create view dbo.[msdyn_upgraderun]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [msdyn_upgraderunId],
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
    [msdyn_Summary],
    [msdyn_FinishedDate],
    [msdyn_Package],
    [msdyn_Solution],
    [msdyn_StartingVersion],
    [msdyn_Status],
    [msdyn_TargetVersion],
    [msdyn_Error]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_upgraderun_modifiedby].[FullName],
    [lk_msdyn_upgraderun_modifiedby].[YomiFullName],
    [organization_msdyn_upgraderun].[Name],
    [lk_msdyn_upgraderun_createdonbehalfby].[FullName],
    [lk_msdyn_upgraderun_createdonbehalfby].[YomiFullName],
    [lk_msdyn_upgraderun_modifiedonbehalfby].[FullName],
    [lk_msdyn_upgraderun_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_upgraderun_createdby].[FullName],
    [lk_msdyn_upgraderun_createdby].[YomiFullName],

    -- physical attribute
    [msdyn_upgraderunBase].[msdyn_upgraderunId],
    [msdyn_upgraderunBase].[CreatedOn],
    [msdyn_upgraderunBase].[CreatedBy],
    [msdyn_upgraderunBase].[ModifiedOn],
    [msdyn_upgraderunBase].[ModifiedBy],
    [msdyn_upgraderunBase].[CreatedOnBehalfBy],
    [msdyn_upgraderunBase].[ModifiedOnBehalfBy],
    [msdyn_upgraderunBase].[OrganizationId],
    [msdyn_upgraderunBase].[statecode],
    [msdyn_upgraderunBase].[statuscode],
    [msdyn_upgraderunBase].[VersionNumber],
    [msdyn_upgraderunBase].[ImportSequenceNumber],
    [msdyn_upgraderunBase].[OverriddenCreatedOn],
    [msdyn_upgraderunBase].[TimeZoneRuleVersionNumber],
    [msdyn_upgraderunBase].[UTCConversionTimeZoneCode],
    [msdyn_upgraderunBase].[msdyn_Summary],
    [msdyn_upgraderunBase].[msdyn_FinishedDate],
    [msdyn_upgraderunBase].[msdyn_Package],
    [msdyn_upgraderunBase].[msdyn_Solution],
    [msdyn_upgraderunBase].[msdyn_StartingVersion],
    [msdyn_upgraderunBase].[msdyn_Status],
    [msdyn_upgraderunBase].[msdyn_TargetVersion],
    [msdyn_upgraderunBase].[msdyn_Error]
from [msdyn_upgraderunBase] 
    left join [SystemUserBase] [lk_msdyn_upgraderun_createdby] on ([msdyn_upgraderunBase].[CreatedBy] = [lk_msdyn_upgraderun_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgraderun_createdonbehalfby] on ([msdyn_upgraderunBase].[CreatedOnBehalfBy] = [lk_msdyn_upgraderun_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgraderun_modifiedby] on ([msdyn_upgraderunBase].[ModifiedBy] = [lk_msdyn_upgraderun_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_upgraderun_modifiedonbehalfby] on ([msdyn_upgraderunBase].[ModifiedOnBehalfBy] = [lk_msdyn_upgraderun_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_msdyn_upgraderun] on ([msdyn_upgraderunBase].[OrganizationId] = [organization_msdyn_upgraderun].[OrganizationId])
