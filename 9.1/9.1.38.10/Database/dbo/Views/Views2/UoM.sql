


--
-- base view for UoM
--
create view dbo.[UoM]
 (
    -- logical attributes
    [CreatedByExternalPartyName],
    [CreatedByExternalPartyYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [BaseUoMName],
    [UoMScheduleIdName],
    [OrganizationId],

    -- physical attributes
    [UoMId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [BaseUoM],
    [IsScheduleBaseUoM],
    [Quantity],
    [UoMScheduleId],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_externalparty_uom_createdby].[FullName],
    [lk_externalparty_uom_createdby].[YomiFullName],
    [lk_uombase_createdonbehalfby].[FullName],
    [lk_uombase_createdonbehalfby].[YomiFullName],
    [lk_uombase_createdby].[FullName],
    [lk_uombase_createdby].[YomiFullName],
    [lk_uombase_modifiedonbehalfby].[FullName],
    [lk_uombase_modifiedonbehalfby].[YomiFullName],
    [lk_uombase_modifiedby].[FullName],
    [lk_uombase_modifiedby].[YomiFullName],
    [lk_externalparty_uom_modifiedby].[YomiFullName],
    [lk_externalparty_uom_modifiedby].[FullName],
    [unit_of_measurement_base_unit].[Name],
    [unit_of_measure_schedule_conversions].[Name],
    [unit_of_measure_schedule_conversions].[OrganizationId],

    -- physical attribute
    [UoMBase].[UoMId],
    [UoMBase].[CreatedOn],
    [UoMBase].[CreatedBy],
    [UoMBase].[ModifiedOn],
    [UoMBase].[ModifiedBy],
    [UoMBase].[CreatedOnBehalfBy],
    [UoMBase].[ModifiedOnBehalfBy],
    [UoMBase].[VersionNumber],
    [UoMBase].[ImportSequenceNumber],
    [UoMBase].[OverriddenCreatedOn],
    [UoMBase].[TimeZoneRuleVersionNumber],
    [UoMBase].[UTCConversionTimeZoneCode],
    [UoMBase].[Name],
    [UoMBase].[BaseUoM],
    [UoMBase].[IsScheduleBaseUoM],
    [UoMBase].[Quantity],
    [UoMBase].[UoMScheduleId],
    [UoMBase].[CreatedByExternalParty],
    [UoMBase].[ModifiedByExternalParty]
from [UoMBase] 
    left join [ExternalPartyBase] [lk_externalparty_uom_createdby] on ([UoMBase].[CreatedByExternalParty] = [lk_externalparty_uom_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_uom_modifiedby] on ([UoMBase].[ModifiedByExternalParty] = [lk_externalparty_uom_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_uombase_createdby] on ([UoMBase].[CreatedBy] = [lk_uombase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_uombase_createdonbehalfby] on ([UoMBase].[CreatedOnBehalfBy] = [lk_uombase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_uombase_modifiedby] on ([UoMBase].[ModifiedBy] = [lk_uombase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_uombase_modifiedonbehalfby] on ([UoMBase].[ModifiedOnBehalfBy] = [lk_uombase_modifiedonbehalfby].[SystemUserId])
    left join [UoMScheduleBase] [unit_of_measure_schedule_conversions] on ([UoMBase].[UoMScheduleId] = [unit_of_measure_schedule_conversions].[UoMScheduleId])
    left join [UoMBase] [unit_of_measurement_base_unit] on ([UoMBase].[BaseUoM] = [unit_of_measurement_base_unit].[UoMId])
