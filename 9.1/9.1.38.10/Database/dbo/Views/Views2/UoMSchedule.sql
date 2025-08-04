


--
-- base view for UoMSchedule
--
create view dbo.[UoMSchedule]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByExternalPartyName],
    [CreatedByExternalPartyYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [UoMScheduleId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [BaseUoMName],
    [Description],
    [StateCode],
    [StatusCode],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_uomschedulebase_createdonbehalfby].[FullName],
    [lk_uomschedulebase_createdonbehalfby].[YomiFullName],
    [lk_externalparty_uomschedule_createdby].[FullName],
    [lk_externalparty_uomschedule_createdby].[YomiFullName],
    [lk_uomschedulebase_createdby].[FullName],
    [lk_uomschedulebase_createdby].[YomiFullName],
    [lk_externalparty_uomschedule_modifiedby].[YomiFullName],
    [lk_externalparty_uomschedule_modifiedby].[FullName],
    [lk_uomschedulebase_modifiedonbehalfby].[FullName],
    [lk_uomschedulebase_modifiedonbehalfby].[YomiFullName],
    [lk_uomschedulebase_modifiedby].[FullName],
    [lk_uomschedulebase_modifiedby].[YomiFullName],
    [organization_uof_schedules].[Name],

    -- physical attribute
    [UoMScheduleBase].[UoMScheduleId],
    [UoMScheduleBase].[CreatedOn],
    [UoMScheduleBase].[CreatedBy],
    [UoMScheduleBase].[ModifiedOn],
    [UoMScheduleBase].[ModifiedBy],
    [UoMScheduleBase].[CreatedOnBehalfBy],
    [UoMScheduleBase].[ModifiedOnBehalfBy],
    [UoMScheduleBase].[OrganizationId],
    [UoMScheduleBase].[VersionNumber],
    [UoMScheduleBase].[ImportSequenceNumber],
    [UoMScheduleBase].[OverriddenCreatedOn],
    [UoMScheduleBase].[TimeZoneRuleVersionNumber],
    [UoMScheduleBase].[UTCConversionTimeZoneCode],
    [UoMScheduleBase].[Name],
    [UoMScheduleBase].[BaseUoMName],
    [UoMScheduleBase].[Description],
    [UoMScheduleBase].[StateCode],
    [UoMScheduleBase].[StatusCode],
    [UoMScheduleBase].[CreatedByExternalParty],
    [UoMScheduleBase].[ModifiedByExternalParty]
from [UoMScheduleBase] 
    left join [ExternalPartyBase] [lk_externalparty_uomschedule_createdby] on ([UoMScheduleBase].[CreatedByExternalParty] = [lk_externalparty_uomschedule_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_uomschedule_modifiedby] on ([UoMScheduleBase].[ModifiedByExternalParty] = [lk_externalparty_uomschedule_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_uomschedulebase_createdby] on ([UoMScheduleBase].[CreatedBy] = [lk_uomschedulebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_createdonbehalfby] on ([UoMScheduleBase].[CreatedOnBehalfBy] = [lk_uomschedulebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_modifiedby] on ([UoMScheduleBase].[ModifiedBy] = [lk_uomschedulebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_modifiedonbehalfby] on ([UoMScheduleBase].[ModifiedOnBehalfBy] = [lk_uomschedulebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_uof_schedules] on ([UoMScheduleBase].[OrganizationId] = [organization_uof_schedules].[OrganizationId])
