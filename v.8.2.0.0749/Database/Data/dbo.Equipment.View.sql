USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Equipment]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Equipment
--
create view [dbo].[Equipment]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [BusinessUnitIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [OrganizationIdName],
    [SiteIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [EquipmentId],
    [SiteId],
    [ModifiedBy],
    [CreatedBy],
    [ModifiedOn],
    [BusinessUnitId],
    [Skills],
    [VersionNumber],
    [CreatedOn],
    [TimeZoneCode],
    [DisplayInServiceViews],
    [IsDisabled],
    [Name],
    [CalendarId],
    [Description],
    [EMailAddress],
    [OrganizationId],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate]
) with view_metadata as
select
    -- logical attributes
    [lk_equipment_modifiedonbehalfby].[FullName],
    [lk_equipment_modifiedonbehalfby].[YomiFullName],
    [lk_equipment_createdonbehalfby].[FullName],
    [lk_equipment_createdonbehalfby].[YomiFullName],
    [lk_equipment_createdby].[FullName],
    [lk_equipment_createdby].[YomiFullName],
    [business_unit_equipment].[Name],
    [lk_equipment_modifiedby].[YomiFullName],
    [lk_equipment_modifiedby].[FullName],
    [organization_equipment].[Name],
    [site_equipment].[Name],
    [TransactionCurrency_Equipment].[CurrencyName],

    -- physical attribute
    [EquipmentBase].[EquipmentId],
    [EquipmentBase].[SiteId],
    [EquipmentBase].[ModifiedBy],
    [EquipmentBase].[CreatedBy],
    [EquipmentBase].[ModifiedOn],
    [EquipmentBase].[BusinessUnitId],
    [EquipmentBase].[Skills],
    [EquipmentBase].[VersionNumber],
    [EquipmentBase].[CreatedOn],
    [EquipmentBase].[TimeZoneCode],
    [EquipmentBase].[DisplayInServiceViews],
    [EquipmentBase].[IsDisabled],
    [EquipmentBase].[Name],
    [EquipmentBase].[CalendarId],
    [EquipmentBase].[Description],
    [EquipmentBase].[EMailAddress],
    [EquipmentBase].[OrganizationId],
    [EquipmentBase].[ImportSequenceNumber],
    [EquipmentBase].[OverriddenCreatedOn],
    [EquipmentBase].[TimeZoneRuleVersionNumber],
    [EquipmentBase].[UTCConversionTimeZoneCode],
    [EquipmentBase].[CreatedOnBehalfBy],
    [EquipmentBase].[ModifiedOnBehalfBy],
    [EquipmentBase].[TransactionCurrencyId],
    [EquipmentBase].[ExchangeRate]
from [EquipmentBase] 
    left join [BusinessUnitBase] [business_unit_equipment] on ([EquipmentBase].[BusinessUnitId] = [business_unit_equipment].[BusinessUnitId])
    left join [SystemUserBase] [lk_equipment_createdby] with(nolock) on ([EquipmentBase].[CreatedBy] = [lk_equipment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_equipment_createdonbehalfby] with(nolock) on ([EquipmentBase].[CreatedOnBehalfBy] = [lk_equipment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_equipment_modifiedby] with(nolock) on ([EquipmentBase].[ModifiedBy] = [lk_equipment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_equipment_modifiedonbehalfby] with(nolock) on ([EquipmentBase].[ModifiedOnBehalfBy] = [lk_equipment_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_equipment] with(nolock) on ([EquipmentBase].[OrganizationId] = [organization_equipment].[OrganizationId])
    left join [SiteBase] [site_equipment] on ([EquipmentBase].[SiteId] = [site_equipment].[SiteId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Equipment] on ([EquipmentBase].[TransactionCurrencyId] = [TransactionCurrency_Equipment].[TransactionCurrencyId])

GO
