


--
-- base view for BookableResourceGroup
--
create view dbo.[BookableResourceGroup]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ChildResourceName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ParentResourceName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [BookableResourceGroupId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ChildResource],
    [FromDate],
    [ParentResource],
    [StateCode],
    [StatusCode],
    [ToDate],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcegroup_createdonbehalfby].[FullName],
    [lk_bookableresourcegroup_createdonbehalfby].[YomiFullName],
    [bookableresource_bookableresourcegroup_ChildResource].[Name],
    [lk_bookableresourcegroup_modifiedby].[FullName],
    [lk_bookableresourcegroup_modifiedby].[YomiFullName],
    [bookableresource_bookableresourcegroup_ParentResource].[Name],
    [lk_bookableresourcegroup_createdby].[FullName],
    [lk_bookableresourcegroup_createdby].[YomiFullName],
    [lk_bookableresourcegroup_modifiedonbehalfby].[FullName],
    [lk_bookableresourcegroup_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_bookableresourcegroup].[CurrencyName],

    -- ownership entries
    OwnerId = [BookableResourceGroupBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [BookableResourceGroupBase].[BookableResourceGroupId],
    [BookableResourceGroupBase].[CreatedOn],
    [BookableResourceGroupBase].[CreatedBy],
    [BookableResourceGroupBase].[ModifiedOn],
    [BookableResourceGroupBase].[ModifiedBy],
    [BookableResourceGroupBase].[CreatedOnBehalfBy],
    [BookableResourceGroupBase].[ModifiedOnBehalfBy],
    [BookableResourceGroupBase].[OwningBusinessUnit],
    [BookableResourceGroupBase].[VersionNumber],
    [BookableResourceGroupBase].[ImportSequenceNumber],
    [BookableResourceGroupBase].[OverriddenCreatedOn],
    [BookableResourceGroupBase].[TimeZoneRuleVersionNumber],
    [BookableResourceGroupBase].[UTCConversionTimeZoneCode],
    [BookableResourceGroupBase].[Name],
    [BookableResourceGroupBase].[ChildResource],
    [BookableResourceGroupBase].[FromDate],
    [BookableResourceGroupBase].[ParentResource],
    [BookableResourceGroupBase].[StateCode],
    [BookableResourceGroupBase].[StatusCode],
    [BookableResourceGroupBase].[ToDate],
    [BookableResourceGroupBase].[ExchangeRate],
    [BookableResourceGroupBase].[TransactionCurrencyId]
from [BookableResourceGroupBase] 
    left join [BookableResourceBase] [bookableresource_bookableresourcegroup_ChildResource] on ([BookableResourceGroupBase].[ChildResource] = [bookableresource_bookableresourcegroup_ChildResource].[BookableResourceId])
    left join [BookableResourceBase] [bookableresource_bookableresourcegroup_ParentResource] on ([BookableResourceGroupBase].[ParentResource] = [bookableresource_bookableresourcegroup_ParentResource].[BookableResourceId])
    left join [SystemUserBase] [lk_bookableresourcegroup_createdby]  on ([BookableResourceGroupBase].[CreatedBy] = [lk_bookableresourcegroup_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcegroup_createdonbehalfby]  on ([BookableResourceGroupBase].[CreatedOnBehalfBy] = [lk_bookableresourcegroup_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcegroup_modifiedby]  on ([BookableResourceGroupBase].[ModifiedBy] = [lk_bookableresourcegroup_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcegroup_modifiedonbehalfby]  on ([BookableResourceGroupBase].[ModifiedOnBehalfBy] = [lk_bookableresourcegroup_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcegroup] on ([BookableResourceGroupBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcegroup].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([BookableResourceGroupBase].OwnerId = XXowner.OwnerId)
