SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for BookableResourceCategory
--
create view [dbo].[BookableResourceCategory]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [BookableResourceCategoryId],
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
    [Description],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresourcecategory_createdby].[FullName],
    [lk_bookableresourcecategory_createdby].[YomiFullName],
    [lk_bookableresourcecategory_createdonbehalfby].[FullName],
    [lk_bookableresourcecategory_createdonbehalfby].[YomiFullName],
    [lk_bookableresourcecategory_modifiedonbehalfby].[FullName],
    [lk_bookableresourcecategory_modifiedonbehalfby].[YomiFullName],
    [lk_bookableresourcecategory_modifiedby].[FullName],
    [lk_bookableresourcecategory_modifiedby].[YomiFullName],
    [TransactionCurrency_bookableresourcecategory].[CurrencyName],

    -- ownership entries
    OwnerId = [BookableResourceCategoryBase].OwnerId,
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
    [BookableResourceCategoryBase].[BookableResourceCategoryId],
    [BookableResourceCategoryBase].[CreatedOn],
    [BookableResourceCategoryBase].[CreatedBy],
    [BookableResourceCategoryBase].[ModifiedOn],
    [BookableResourceCategoryBase].[ModifiedBy],
    [BookableResourceCategoryBase].[CreatedOnBehalfBy],
    [BookableResourceCategoryBase].[ModifiedOnBehalfBy],
    [BookableResourceCategoryBase].[OwningBusinessUnit],
    [BookableResourceCategoryBase].[StateCode],
    [BookableResourceCategoryBase].[StatusCode],
    [BookableResourceCategoryBase].[VersionNumber],
    [BookableResourceCategoryBase].[ImportSequenceNumber],
    [BookableResourceCategoryBase].[OverriddenCreatedOn],
    [BookableResourceCategoryBase].[TimeZoneRuleVersionNumber],
    [BookableResourceCategoryBase].[UTCConversionTimeZoneCode],
    [BookableResourceCategoryBase].[Name],
    [BookableResourceCategoryBase].[Description],
    [BookableResourceCategoryBase].[ExchangeRate],
    [BookableResourceCategoryBase].[TransactionCurrencyId]
from [BookableResourceCategoryBase] 
    left join [SystemUserBase] [lk_bookableresourcecategory_createdby] with(nolock) on ([BookableResourceCategoryBase].[CreatedBy] = [lk_bookableresourcecategory_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecategory_createdonbehalfby] with(nolock) on ([BookableResourceCategoryBase].[CreatedOnBehalfBy] = [lk_bookableresourcecategory_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecategory_modifiedby] with(nolock) on ([BookableResourceCategoryBase].[ModifiedBy] = [lk_bookableresourcecategory_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresourcecategory_modifiedonbehalfby] with(nolock) on ([BookableResourceCategoryBase].[ModifiedOnBehalfBy] = [lk_bookableresourcecategory_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresourcecategory] on ([BookableResourceCategoryBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresourcecategory].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([BookableResourceCategoryBase].OwnerId = XXowner.OwnerId)
GO
