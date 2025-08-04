SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for UoMSchedule
--
create view [dbo].[UoMSchedule]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedByExternalPartyYomiName],
    [CreatedByExternalPartyName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByExternalPartyName],
    [ModifiedByExternalPartyYomiName],
    [OrganizationIdName],

    -- physical attributes
    [UoMScheduleId],
    [OrganizationId],
    [Name],
    [Description],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [BaseUoMName],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [StateCode],
    [StatusCode],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_uomschedulebase_createdby].[FullName],
    [lk_uomschedulebase_createdby].[YomiFullName],
    [lk_externalparty_uomschedule_createdby].[YomiFullName],
    [lk_externalparty_uomschedule_createdby].[FullName],
    [lk_uomschedulebase_modifiedby].[YomiFullName],
    [lk_uomschedulebase_modifiedby].[FullName],
    [lk_uomschedulebase_createdonbehalfby].[FullName],
    [lk_uomschedulebase_createdonbehalfby].[YomiFullName],
    [lk_uomschedulebase_modifiedonbehalfby].[YomiFullName],
    [lk_uomschedulebase_modifiedonbehalfby].[FullName],
    [lk_externalparty_uomschedule_modifiedby].[FullName],
    [lk_externalparty_uomschedule_modifiedby].[YomiFullName],
    [organization_uof_schedules].[Name],

    -- physical attribute
    [UoMScheduleBase].[UoMScheduleId],
    [UoMScheduleBase].[OrganizationId],
    [UoMScheduleBase].[Name],
    [UoMScheduleBase].[Description],
    [UoMScheduleBase].[CreatedOn],
    [UoMScheduleBase].[CreatedBy],
    [UoMScheduleBase].[ModifiedOn],
    [UoMScheduleBase].[ModifiedBy],
    [UoMScheduleBase].[VersionNumber],
    [UoMScheduleBase].[ImportSequenceNumber],
    [UoMScheduleBase].[BaseUoMName],
    [UoMScheduleBase].[OverriddenCreatedOn],
    [UoMScheduleBase].[CreatedOnBehalfBy],
    [UoMScheduleBase].[ModifiedOnBehalfBy],
    [UoMScheduleBase].[StateCode],
    [UoMScheduleBase].[StatusCode],
    [UoMScheduleBase].[CreatedByExternalParty],
    [UoMScheduleBase].[ModifiedByExternalParty]
from [UoMScheduleBase] 
    left join [ExternalPartyBase] [lk_externalparty_uomschedule_createdby] on ([UoMScheduleBase].[CreatedByExternalParty] = [lk_externalparty_uomschedule_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_uomschedule_modifiedby] on ([UoMScheduleBase].[ModifiedByExternalParty] = [lk_externalparty_uomschedule_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_uomschedulebase_createdby] with(nolock) on ([UoMScheduleBase].[CreatedBy] = [lk_uomschedulebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_createdonbehalfby] with(nolock) on ([UoMScheduleBase].[CreatedOnBehalfBy] = [lk_uomschedulebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_modifiedby] with(nolock) on ([UoMScheduleBase].[ModifiedBy] = [lk_uomschedulebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_modifiedonbehalfby] with(nolock) on ([UoMScheduleBase].[ModifiedOnBehalfBy] = [lk_uomschedulebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_uof_schedules] with(nolock) on ([UoMScheduleBase].[OrganizationId] = [organization_uof_schedules].[OrganizationId])
GO
