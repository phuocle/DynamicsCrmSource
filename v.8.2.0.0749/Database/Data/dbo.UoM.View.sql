USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[UoM]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for UoM
--
create view [dbo].[UoM]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [CreatedByExternalPartyName],
    [CreatedByExternalPartyYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [BaseUoMName],
    [OrganizationId],

    -- physical attributes
    [UoMId],
    [BaseUoM],
    [Name],
    [UoMScheduleId],
    [Quantity],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [IsScheduleBaseUoM],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_uombase_modifiedonbehalfby].[YomiFullName],
    [lk_uombase_modifiedonbehalfby].[FullName],
    [lk_uombase_modifiedby].[YomiFullName],
    [lk_uombase_modifiedby].[FullName],
    [lk_uombase_createdby].[FullName],
    [lk_uombase_createdby].[YomiFullName],
    [lk_externalparty_uom_modifiedby].[YomiFullName],
    [lk_externalparty_uom_modifiedby].[FullName],
    [lk_externalparty_uom_createdby].[FullName],
    [lk_externalparty_uom_createdby].[YomiFullName],
    [lk_uombase_createdonbehalfby].[YomiFullName],
    [lk_uombase_createdonbehalfby].[FullName],
    [unit_of_measurement_base_unit].[Name],
    [unit_of_measure_schedule_conversions].[OrganizationId],

    -- physical attribute
    [UoMBase].[UoMId],
    [UoMBase].[BaseUoM],
    [UoMBase].[Name],
    [UoMBase].[UoMScheduleId],
    [UoMBase].[Quantity],
    [UoMBase].[CreatedOn],
    [UoMBase].[CreatedBy],
    [UoMBase].[ModifiedBy],
    [UoMBase].[ModifiedOn],
    [UoMBase].[IsScheduleBaseUoM],
    [UoMBase].[VersionNumber],
    [UoMBase].[ImportSequenceNumber],
    [UoMBase].[OverriddenCreatedOn],
    [UoMBase].[CreatedOnBehalfBy],
    [UoMBase].[ModifiedOnBehalfBy],
    [UoMBase].[CreatedByExternalParty],
    [UoMBase].[ModifiedByExternalParty]
from [UoMBase] 
    left join [ExternalPartyBase] [lk_externalparty_uom_createdby] on ([UoMBase].[CreatedByExternalParty] = [lk_externalparty_uom_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_uom_modifiedby] on ([UoMBase].[ModifiedByExternalParty] = [lk_externalparty_uom_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_uombase_createdby] with(nolock) on ([UoMBase].[CreatedBy] = [lk_uombase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_uombase_createdonbehalfby] with(nolock) on ([UoMBase].[CreatedOnBehalfBy] = [lk_uombase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_uombase_modifiedby] with(nolock) on ([UoMBase].[ModifiedBy] = [lk_uombase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_uombase_modifiedonbehalfby] with(nolock) on ([UoMBase].[ModifiedOnBehalfBy] = [lk_uombase_modifiedonbehalfby].[SystemUserId])
    left join [UoMScheduleBase] [unit_of_measure_schedule_conversions] on ([UoMBase].[UoMScheduleId] = [unit_of_measure_schedule_conversions].[UoMScheduleId])
    left join [UoMBase] [unit_of_measurement_base_unit] on ([UoMBase].[BaseUoM] = [unit_of_measurement_base_unit].[UoMId])

GO
