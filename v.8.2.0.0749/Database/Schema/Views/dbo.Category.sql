SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for Category
--
create view [dbo].[Category]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ParentCategoryIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
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
    [CategoryId],
    [Description],
    [SequenceNumber],
    [ParentCategoryId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Title],
    [VersionNumber],
    [OwningBusinessUnit],
    [TransactionCurrencyId],
    [ExchangeRate],
    [CategoryNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn]
) with view_metadata as
select
    -- logical attributes
    [lk_category_createdby].[YomiFullName],
    [lk_category_createdby].[FullName],
    [lk_category_modifiedonbehalfby].[FullName],
    [lk_category_modifiedonbehalfby].[YomiFullName],
    [category_parent_category].[Title],
    [lk_category_createdonbehalfby].[YomiFullName],
    [lk_category_createdonbehalfby].[FullName],
    [lk_category_modifiedby].[YomiFullName],
    [lk_category_modifiedby].[FullName],
    [transactioncurrency_category].[CurrencyName],

    -- ownership entries
    OwnerId = [CategoryBase].OwnerId,
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
    [CategoryBase].[CategoryId],
    [CategoryBase].[Description],
    [CategoryBase].[SequenceNumber],
    [CategoryBase].[ParentCategoryId],
    [CategoryBase].[CreatedBy],
    [CategoryBase].[CreatedOn],
    [CategoryBase].[CreatedOnBehalfBy],
    [CategoryBase].[ModifiedBy],
    [CategoryBase].[ModifiedOn],
    [CategoryBase].[ModifiedOnBehalfBy],
    [CategoryBase].[Title],
    [CategoryBase].[VersionNumber],
    [CategoryBase].[OwningBusinessUnit],
    [CategoryBase].[TransactionCurrencyId],
    [CategoryBase].[ExchangeRate],
    [CategoryBase].[CategoryNumber],
    [CategoryBase].[ImportSequenceNumber],
    [CategoryBase].[OverriddenCreatedOn]
from [CategoryBase] 
    left join [CategoryBase] [category_parent_category] on ([CategoryBase].[ParentCategoryId] = [category_parent_category].[CategoryId])
    left join [SystemUserBase] [lk_category_createdby] with(nolock) on ([CategoryBase].[CreatedBy] = [lk_category_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_category_createdonbehalfby] with(nolock) on ([CategoryBase].[CreatedOnBehalfBy] = [lk_category_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_category_modifiedby] with(nolock) on ([CategoryBase].[ModifiedBy] = [lk_category_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_category_modifiedonbehalfby] with(nolock) on ([CategoryBase].[ModifiedOnBehalfBy] = [lk_category_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_category] on ([CategoryBase].[TransactionCurrencyId] = [transactioncurrency_category].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([CategoryBase].OwnerId = XXowner.OwnerId)
GO
