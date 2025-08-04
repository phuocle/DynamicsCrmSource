


--
-- base view for UoMSchedule
--
create view dbo.[UoMSchedule]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

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
    [StatusCode]
) with view_metadata as
select
    -- logical attributes
    [lk_uomschedulebase_modifiedby].[YomiFullName],
    [lk_uomschedulebase_modifiedby].[FullName],
    [lk_uomschedulebase_createdonbehalfby].[FullName],
    [organization_uof_schedules].[Name],
    [lk_uomschedulebase_modifiedonbehalfby].[YomiFullName],
    [lk_uomschedulebase_createdby].[FullName],
    [lk_uomschedulebase_createdby].[YomiFullName],
    [lk_uomschedulebase_modifiedonbehalfby].[FullName],
    [lk_uomschedulebase_createdonbehalfby].[YomiFullName],

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
    [UoMScheduleBase].[StatusCode]
from [UoMScheduleBase] 
    left join [SystemUserBase] [lk_uomschedulebase_createdby] with(nolock) on ([UoMScheduleBase].[CreatedBy] = [lk_uomschedulebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_createdonbehalfby] with(nolock) on ([UoMScheduleBase].[CreatedOnBehalfBy] = [lk_uomschedulebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_modifiedby] with(nolock) on ([UoMScheduleBase].[ModifiedBy] = [lk_uomschedulebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_uomschedulebase_modifiedonbehalfby] with(nolock) on ([UoMScheduleBase].[ModifiedOnBehalfBy] = [lk_uomschedulebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_uof_schedules] with(nolock) on ([UoMScheduleBase].[OrganizationId] = [organization_uof_schedules].[OrganizationId])
