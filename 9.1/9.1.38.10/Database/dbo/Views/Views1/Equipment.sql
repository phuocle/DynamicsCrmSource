


--
-- base view for Equipment
--
create view dbo.[Equipment]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [SiteIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [EquipmentId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [BusinessUnitId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [CalendarId],
    [Description],
    [DisplayInServiceViews],
    [EMailAddress],
    [IsDisabled],
    [OrganizationId],
    [SiteId],
    [Skills],
    [TimeZoneCode],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [business_unit_equipment].[Name],
    [lk_equipment_createdonbehalfby].[FullName],
    [lk_equipment_createdonbehalfby].[YomiFullName],
    [organization_equipment].[Name],
    [site_equipment].[Name],
    [lk_equipment_modifiedonbehalfby].[FullName],
    [lk_equipment_modifiedonbehalfby].[YomiFullName],
    [lk_equipment_createdby].[FullName],
    [lk_equipment_createdby].[YomiFullName],
    [lk_equipment_modifiedby].[FullName],
    [lk_equipment_modifiedby].[YomiFullName],
    [TransactionCurrency_Equipment].[CurrencyName],

    -- physical attribute
    [EquipmentBase].[EquipmentId],
    [EquipmentBase].[CreatedOn],
    [EquipmentBase].[CreatedBy],
    [EquipmentBase].[ModifiedOn],
    [EquipmentBase].[ModifiedBy],
    [EquipmentBase].[CreatedOnBehalfBy],
    [EquipmentBase].[ModifiedOnBehalfBy],
    [EquipmentBase].[BusinessUnitId],
    [EquipmentBase].[VersionNumber],
    [EquipmentBase].[ImportSequenceNumber],
    [EquipmentBase].[OverriddenCreatedOn],
    [EquipmentBase].[TimeZoneRuleVersionNumber],
    [EquipmentBase].[UTCConversionTimeZoneCode],
    [EquipmentBase].[Name],
    [EquipmentBase].[CalendarId],
    [EquipmentBase].[Description],
    [EquipmentBase].[DisplayInServiceViews],
    [EquipmentBase].[EMailAddress],
    [EquipmentBase].[IsDisabled],
    [EquipmentBase].[OrganizationId],
    [EquipmentBase].[SiteId],
    [EquipmentBase].[Skills],
    [EquipmentBase].[TimeZoneCode],
    [EquipmentBase].[ExchangeRate],
    [EquipmentBase].[TransactionCurrencyId]
from [EquipmentBase] 
    left join [BusinessUnitBase] [business_unit_equipment] on ([EquipmentBase].[BusinessUnitId] = [business_unit_equipment].[BusinessUnitId])
    left join [SystemUserBase] [lk_equipment_createdby] on ([EquipmentBase].[CreatedBy] = [lk_equipment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_equipment_createdonbehalfby] on ([EquipmentBase].[CreatedOnBehalfBy] = [lk_equipment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_equipment_modifiedby] on ([EquipmentBase].[ModifiedBy] = [lk_equipment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_equipment_modifiedonbehalfby] on ([EquipmentBase].[ModifiedOnBehalfBy] = [lk_equipment_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_equipment] on ([EquipmentBase].[OrganizationId] = [organization_equipment].[OrganizationId])
    left join [SiteBase] [site_equipment] on ([EquipmentBase].[SiteId] = [site_equipment].[SiteId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Equipment] on ([EquipmentBase].[TransactionCurrencyId] = [TransactionCurrency_Equipment].[TransactionCurrencyId])
