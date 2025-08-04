


--
-- base view for BookableResourceGroup
--
create view dbo.[BookableResourceGroup]
 (
    -- logical attributes
    [ParentResourceName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ChildResourceName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [FromDate],
    [ToDate],
    [ChildResource],
    [ParentResource],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [bookableresource_bookableresourcegroup_ParentResource].[Name],
    [lk_bookableresourcegroup_createdby].[FullName],
    [lk_bookableresourcegroup_createdby].[YomiFullName],
    [lk_bookableresourcegroup_modifiedonbehalfby].[FullName],
    [lk_bookableresourcegroup_modifiedonbehalfby].[YomiFullName],
    [lk_bookableresourcegroup_createdonbehalfby].[FullName],
    [lk_bookableresourcegroup_createdonbehalfby].[YomiFullName],
    [bookableresource_bookableresourcegroup_ChildResource].[Name],
    [lk_bookableresourcegroup_modifiedby].[FullName],
    [lk_bookableresourcegroup_modifiedby].[YomiFullName],
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
    [BookableResourceGroupBase].[StateCode],
    [BookableResourceGroupBase].[StatusCode],
    [BookableResourceGroupBase].[VersionNumber],
    [BookableResourceGroupBase].[ImportSequenceNumber],
    [BookableResourceGroupBase].[OverriddenCreatedOn],
    [BookableResourceGroupBase].[TimeZoneRuleVersionNumber],
    [BookableResourceGroupBase].[UTCConversionTimeZoneCode],
    [BookableResourceGroupBase].[Name],
    [BookableResourceGroupBase].[FromDate],
    [BookableResourceGroupBase].[ToDate],
    [BookableResourceGroupBase].[ChildResource],
    [BookableResourceGroupBase].[ParentResource],
    [BookableResourceGroupBase].[ExchangeRate],
    [BookableResourceGroupBase].[TransactionCurrencyId]
from [BookableResourceGroupBase] 
    left join [BookableResourceBase] [bookableresource_bookableresourcegroup_ChildResource] on ([BookableResourceGroupBase].[ChildResource] = [bookableresource_bookableresourcegroup_ChildResource].[BookableResourceId])
    left join [BookableResourceBase] [bookableresource_bookableresourcegroup_ParentResource] on ([BookableResourceGroupBase].[ParentResource] = [bookableresource_bookableresourcegroup_ParentResource].[BookableResourceId])
    left join [SystemUserBase] [lk_bookableresourcegroup_createdby] with(nolock) on ([BookableResourceGroupBase].[CreatedBy] = [lk_bookableresourcegroup_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcegroup_createdonbehalfby] with(nolock) on ([BookableResourceGroupBase].[CreatedOnBehalfBy] = [lk_bookableresourcegroup_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcegroup_modifiedby] with(nolock) on ([BookableResourceGroupBase].[ModifiedBy] = [lk_bookableresourcegroup_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcegroup_modifiedonbehalfby] with(nolock) on ([BookableResourceGroupBase].[ModifiedOnBehalfBy] = [lk_bookableresourcegroup_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcegroup] on ([BookableResourceGroupBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcegroup].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([BookableResourceGroupBase].OwnerId = XXowner.OwnerId)
