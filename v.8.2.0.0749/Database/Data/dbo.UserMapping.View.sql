USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[UserMapping]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for UserMapping
--
create view [dbo].[UserMapping]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [UserMappingId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ClaimType],
    [SystemUserAttributeName],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [PartnerApplicationType],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_usermapping_modifiedonbehalfby].[FullName],
    [lk_usermapping_modifiedonbehalfby].[YomiFullName],
    [lk_usermapping_modifiedby].[FullName],
    [lk_usermapping_modifiedby].[YomiFullName],
    [lk_usermapping_createdonbehalfby].[FullName],
    [lk_usermapping_createdonbehalfby].[YomiFullName],
    [lk_usermapping_createdby].[FullName],
    [lk_usermapping_createdby].[YomiFullName],
    [organization_usermapping].[Name],
    [TransactionCurrency_UserMapping].[CurrencyName],

    -- physical attribute
    [UserMappingBase].[UserMappingId],
    [UserMappingBase].[CreatedOn],
    [UserMappingBase].[CreatedBy],
    [UserMappingBase].[ModifiedOn],
    [UserMappingBase].[ModifiedBy],
    [UserMappingBase].[CreatedOnBehalfBy],
    [UserMappingBase].[ModifiedOnBehalfBy],
    [UserMappingBase].[OrganizationId],
    [UserMappingBase].[VersionNumber],
    [UserMappingBase].[ClaimType],
    [UserMappingBase].[SystemUserAttributeName],
    [UserMappingBase].[TimeZoneRuleVersionNumber],
    [UserMappingBase].[UTCConversionTimeZoneCode],
    [UserMappingBase].[PartnerApplicationType],
    [UserMappingBase].[ExchangeRate],
    [UserMappingBase].[TransactionCurrencyId]
from [UserMappingBase] 
    left join [SystemUserBase] [lk_usermapping_createdby] with(nolock) on ([UserMappingBase].[CreatedBy] = [lk_usermapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_usermapping_createdonbehalfby] with(nolock) on ([UserMappingBase].[CreatedOnBehalfBy] = [lk_usermapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_usermapping_modifiedby] with(nolock) on ([UserMappingBase].[ModifiedBy] = [lk_usermapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_usermapping_modifiedonbehalfby] with(nolock) on ([UserMappingBase].[ModifiedOnBehalfBy] = [lk_usermapping_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_usermapping] with(nolock) on ([UserMappingBase].[OrganizationId] = [organization_usermapping].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_UserMapping] on ([UserMappingBase].[TransactionCurrencyId] = [TransactionCurrency_UserMapping].[TransactionCurrencyId])

GO
