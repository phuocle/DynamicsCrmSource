USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DiscountType]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for DiscountType
--
create view [dbo].[DiscountType]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],

    -- physical attributes
    [DiscountTypeId],
    [OrganizationId],
    [Name],
    [Description],
    [IsAmountType],
    [StateCode],
    [CreatedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [StatusCode],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ImportSequenceNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_discounttypebase_modifiedonbehalfby].[YomiFullName],
    [lk_discounttypebase_modifiedonbehalfby].[FullName],
    [lk_discounttypebase_modifiedby].[YomiFullName],
    [lk_discounttypebase_modifiedby].[FullName],
    [lk_discounttypebase_createdby].[YomiFullName],
    [lk_discounttypebase_createdby].[FullName],
    [lk_discounttypebase_createdonbehalfby].[YomiFullName],
    [lk_discounttypebase_createdonbehalfby].[FullName],
    [transactioncurrency_discounttype].[CurrencyName],
    [organization_discount_types].[Name],

    -- physical attribute
    [DiscountTypeBase].[DiscountTypeId],
    [DiscountTypeBase].[OrganizationId],
    [DiscountTypeBase].[Name],
    [DiscountTypeBase].[Description],
    [DiscountTypeBase].[IsAmountType],
    [DiscountTypeBase].[StateCode],
    [DiscountTypeBase].[CreatedOn],
    [DiscountTypeBase].[CreatedBy],
    [DiscountTypeBase].[ModifiedBy],
    [DiscountTypeBase].[ModifiedOn],
    [DiscountTypeBase].[VersionNumber],
    [DiscountTypeBase].[StatusCode],
    [DiscountTypeBase].[OverriddenCreatedOn],
    [DiscountTypeBase].[TransactionCurrencyId],
    [DiscountTypeBase].[ImportSequenceNumber],
    [DiscountTypeBase].[CreatedOnBehalfBy],
    [DiscountTypeBase].[ModifiedOnBehalfBy]
from [DiscountTypeBase] 
    left join [SystemUserBase] [lk_discounttypebase_createdby] with(nolock) on ([DiscountTypeBase].[CreatedBy] = [lk_discounttypebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_discounttypebase_createdonbehalfby] with(nolock) on ([DiscountTypeBase].[CreatedOnBehalfBy] = [lk_discounttypebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_discounttypebase_modifiedby] with(nolock) on ([DiscountTypeBase].[ModifiedBy] = [lk_discounttypebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_discounttypebase_modifiedonbehalfby] with(nolock) on ([DiscountTypeBase].[ModifiedOnBehalfBy] = [lk_discounttypebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_discount_types] with(nolock) on ([DiscountTypeBase].[OrganizationId] = [organization_discount_types].[OrganizationId])
    left join [TransactionCurrencyBase] [transactioncurrency_discounttype] on ([DiscountTypeBase].[TransactionCurrencyId] = [transactioncurrency_discounttype].[TransactionCurrencyId])

GO
