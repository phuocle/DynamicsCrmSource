


--
-- base view for Territory
--
create view dbo.[Territory]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [EntityImage],
    [CreatedByName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [ManagerIdYomiName],
    [EntityImage_Timestamp],
    [ManagerIdName],
    [EntityImage_URL],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [TerritoryId],
    [OrganizationId],
    [ManagerId],
    [Name],
    [Description],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_territorybase_modifiedonbehalfby].[FullName],
    [lk_territorybase_createdonbehalfby].[FullName],
    [lk_territorybase_modifiedby].[FullName],
    [lk_territorybase_modifiedonbehalfby].[YomiFullName],
    [lk_territorybase_createdby].[YomiFullName],
    [lk_territory_entityimage].[ImageData],
    [lk_territorybase_createdby].[FullName],
    [TransactionCurrency_Territory].[CurrencyName],
    [organization_territories].[Name],
    [system_user_territories].[YomiFullName],
    [lk_territory_entityimage].[ImageTimestamp],
    [system_user_territories].[FullName],
    [lk_territory_entityimage].[ImageURL],
    [lk_territorybase_modifiedby].[YomiFullName],
    [lk_territorybase_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [TerritoryBase].[TerritoryId],
    [TerritoryBase].[OrganizationId],
    [TerritoryBase].[ManagerId],
    [TerritoryBase].[Name],
    [TerritoryBase].[Description],
    [TerritoryBase].[CreatedOn],
    [TerritoryBase].[CreatedBy],
    [TerritoryBase].[ModifiedBy],
    [TerritoryBase].[ModifiedOn],
    [TerritoryBase].[VersionNumber],
    [TerritoryBase].[ImportSequenceNumber],
    [TerritoryBase].[OverriddenCreatedOn],
    [TerritoryBase].[CreatedOnBehalfBy],
    [TerritoryBase].[ModifiedOnBehalfBy],
    [TerritoryBase].[TransactionCurrencyId],
    [TerritoryBase].[ExchangeRate],
    [TerritoryBase].[EntityImageId]
from [TerritoryBase] 
    left join [ImageDescriptor] [lk_territory_entityimage] on ([TerritoryBase].[EntityImageId] = [lk_territory_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_territorybase_createdby] with(nolock) on ([TerritoryBase].[CreatedBy] = [lk_territorybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_territorybase_createdonbehalfby] with(nolock) on ([TerritoryBase].[CreatedOnBehalfBy] = [lk_territorybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_territorybase_modifiedby] with(nolock) on ([TerritoryBase].[ModifiedBy] = [lk_territorybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_territorybase_modifiedonbehalfby] with(nolock) on ([TerritoryBase].[ModifiedOnBehalfBy] = [lk_territorybase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_territories] with(nolock) on ([TerritoryBase].[OrganizationId] = [organization_territories].[OrganizationId])
    left join [SystemUserBase] [system_user_territories] with(nolock) on ([TerritoryBase].[ManagerId] = [system_user_territories].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Territory] on ([TerritoryBase].[TransactionCurrencyId] = [TransactionCurrency_Territory].[TransactionCurrencyId])
