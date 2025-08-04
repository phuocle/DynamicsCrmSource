


--
-- base view for Territory
--
create view dbo.[Territory]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [EntityImage_Timestamp],
    [EntityImage],
    [EntityImage_URL],
    [TransactionCurrencyIdName],
    [ManagerIdYomiName],
    [ManagerIdName],
    [ParentTerritoryIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [TerritoryId],
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
    [Description],
    [ManagerId],
    [EntityImageId],
    [ExchangeRate],
    [TransactionCurrencyId],
    [ParentTerritoryId]
) with view_metadata as
select
    -- logical attributes
    [lk_territorybase_createdby].[FullName],
    [lk_territorybase_createdby].[YomiFullName],
    [organization_territories].[Name],
    [lk_territory_entityimage].[ImageTimestamp],
    [lk_territory_entityimage].[ImageData],
    [lk_territory_entityimage].[ImageURL],
    [TransactionCurrency_Territory].[CurrencyName],
    [system_user_territories].[YomiFullName],
    [system_user_territories].[FullName],
    [territory_parent_territory].[Name],
    [lk_territorybase_modifiedby].[FullName],
    [lk_territorybase_modifiedby].[YomiFullName],
    [lk_territorybase_modifiedonbehalfby].[FullName],
    [lk_territorybase_modifiedonbehalfby].[YomiFullName],
    [lk_territorybase_createdonbehalfby].[FullName],
    [lk_territorybase_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [TerritoryBase].[TerritoryId],
    [TerritoryBase].[CreatedOn],
    [TerritoryBase].[CreatedBy],
    [TerritoryBase].[ModifiedOn],
    [TerritoryBase].[ModifiedBy],
    [TerritoryBase].[CreatedOnBehalfBy],
    [TerritoryBase].[ModifiedOnBehalfBy],
    [TerritoryBase].[OrganizationId],
    [TerritoryBase].[VersionNumber],
    [TerritoryBase].[ImportSequenceNumber],
    [TerritoryBase].[OverriddenCreatedOn],
    [TerritoryBase].[TimeZoneRuleVersionNumber],
    [TerritoryBase].[UTCConversionTimeZoneCode],
    [TerritoryBase].[Name],
    [TerritoryBase].[Description],
    [TerritoryBase].[ManagerId],
    [TerritoryBase].[EntityImageId],
    [TerritoryBase].[ExchangeRate],
    [TerritoryBase].[TransactionCurrencyId],
    [TerritoryBase].[ParentTerritoryId]
from [TerritoryBase] 
    left join [ImageDescriptor] [lk_territory_entityimage] on ([TerritoryBase].[EntityImageId] = [lk_territory_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_territorybase_createdby] on ([TerritoryBase].[CreatedBy] = [lk_territorybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_territorybase_createdonbehalfby] on ([TerritoryBase].[CreatedOnBehalfBy] = [lk_territorybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_territorybase_modifiedby] on ([TerritoryBase].[ModifiedBy] = [lk_territorybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_territorybase_modifiedonbehalfby] on ([TerritoryBase].[ModifiedOnBehalfBy] = [lk_territorybase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_territories] on ([TerritoryBase].[OrganizationId] = [organization_territories].[OrganizationId])
    left join [SystemUserBase] [system_user_territories] on ([TerritoryBase].[ManagerId] = [system_user_territories].[SystemUserId])
    left join [TerritoryBase] [territory_parent_territory] on ([TerritoryBase].[ParentTerritoryId] = [territory_parent_territory].[TerritoryId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Territory] on ([TerritoryBase].[TransactionCurrencyId] = [TransactionCurrency_Territory].[TransactionCurrencyId])
