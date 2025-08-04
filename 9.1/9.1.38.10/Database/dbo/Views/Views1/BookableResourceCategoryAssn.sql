


--
-- base view for BookableResourceCategoryAssn
--
create view dbo.[BookableResourceCategoryAssn]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ResourceCategoryName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ResourceName],
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
    [BookableResourceCategoryAssnId],
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
    [Resource],
    [ResourceCategory],
    [StateCode],
    [StatusCode],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcecategoryassn_modifiedby].[FullName],
    [lk_bookableresourcecategoryassn_modifiedby].[YomiFullName],
    [lk_bookableresourcecategoryassn_modifiedonbehalfby].[FullName],
    [lk_bookableresourcecategoryassn_modifiedonbehalfby].[YomiFullName],
    [lk_bookableresourcecategoryassn_createdby].[FullName],
    [lk_bookableresourcecategoryassn_createdby].[YomiFullName],
    [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory].[Name],
    [lk_bookableresourcecategoryassn_createdonbehalfby].[FullName],
    [lk_bookableresourcecategoryassn_createdonbehalfby].[YomiFullName],
    [bookableresource_bookableresourcecategoryassn_Resource].[Name],
    [TransactionCurrency_bookableresourcecategoryassn].[CurrencyName],

    -- ownership entries
    OwnerId = [BookableResourceCategoryAssnBase].OwnerId,
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
    [BookableResourceCategoryAssnBase].[BookableResourceCategoryAssnId],
    [BookableResourceCategoryAssnBase].[CreatedOn],
    [BookableResourceCategoryAssnBase].[CreatedBy],
    [BookableResourceCategoryAssnBase].[ModifiedOn],
    [BookableResourceCategoryAssnBase].[ModifiedBy],
    [BookableResourceCategoryAssnBase].[CreatedOnBehalfBy],
    [BookableResourceCategoryAssnBase].[ModifiedOnBehalfBy],
    [BookableResourceCategoryAssnBase].[OwningBusinessUnit],
    [BookableResourceCategoryAssnBase].[VersionNumber],
    [BookableResourceCategoryAssnBase].[ImportSequenceNumber],
    [BookableResourceCategoryAssnBase].[OverriddenCreatedOn],
    [BookableResourceCategoryAssnBase].[TimeZoneRuleVersionNumber],
    [BookableResourceCategoryAssnBase].[UTCConversionTimeZoneCode],
    [BookableResourceCategoryAssnBase].[Name],
    [BookableResourceCategoryAssnBase].[Resource],
    [BookableResourceCategoryAssnBase].[ResourceCategory],
    [BookableResourceCategoryAssnBase].[StateCode],
    [BookableResourceCategoryAssnBase].[StatusCode],
    [BookableResourceCategoryAssnBase].[ExchangeRate],
    [BookableResourceCategoryAssnBase].[TransactionCurrencyId]
from [BookableResourceCategoryAssnBase] 
    left join [BookableResourceBase] [bookableresource_bookableresourcecategoryassn_Resource] on ([BookableResourceCategoryAssnBase].[Resource] = [bookableresource_bookableresourcecategoryassn_Resource].[BookableResourceId])
    left join [BookableResourceCategoryBase] [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory] on ([BookableResourceCategoryAssnBase].[ResourceCategory] = [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory].[BookableResourceCategoryId])
    left join [SystemUserBase] [lk_bookableresourcecategoryassn_createdby]  on ([BookableResourceCategoryAssnBase].[CreatedBy] = [lk_bookableresourcecategoryassn_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecategoryassn_createdonbehalfby]  on ([BookableResourceCategoryAssnBase].[CreatedOnBehalfBy] = [lk_bookableresourcecategoryassn_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecategoryassn_modifiedby]  on ([BookableResourceCategoryAssnBase].[ModifiedBy] = [lk_bookableresourcecategoryassn_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecategoryassn_modifiedonbehalfby]  on ([BookableResourceCategoryAssnBase].[ModifiedOnBehalfBy] = [lk_bookableresourcecategoryassn_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcecategoryassn] on ([BookableResourceCategoryAssnBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcecategoryassn].[TransactionCurrencyId])
    left join OwnerBase XXowner  on ([BookableResourceCategoryAssnBase].OwnerId = XXowner.OwnerId)
