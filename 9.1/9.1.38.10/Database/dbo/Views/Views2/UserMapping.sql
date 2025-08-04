


--
-- base view for UserMapping
--
create view dbo.[UserMapping]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],

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
    [lk_usermapping_createdby].[FullName],
    [lk_usermapping_createdby].[YomiFullName],
    [lk_usermapping_createdonbehalfby].[FullName],
    [lk_usermapping_createdonbehalfby].[YomiFullName],
    [lk_usermapping_modifiedby].[FullName],
    [lk_usermapping_modifiedby].[YomiFullName],
    [lk_usermapping_modifiedonbehalfby].[FullName],
    [lk_usermapping_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_UserMapping].[CurrencyName],
    [organization_usermapping].[Name],

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
    left join [SystemUserBase] [lk_usermapping_createdby] on ([UserMappingBase].[CreatedBy] = [lk_usermapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_usermapping_createdonbehalfby] on ([UserMappingBase].[CreatedOnBehalfBy] = [lk_usermapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_usermapping_modifiedby] on ([UserMappingBase].[ModifiedBy] = [lk_usermapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_usermapping_modifiedonbehalfby] on ([UserMappingBase].[ModifiedOnBehalfBy] = [lk_usermapping_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_usermapping] on ([UserMappingBase].[OrganizationId] = [organization_usermapping].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_UserMapping] on ([UserMappingBase].[TransactionCurrencyId] = [TransactionCurrency_UserMapping].[TransactionCurrencyId])
