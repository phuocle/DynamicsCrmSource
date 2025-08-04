SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for LeadAddress
--
create view [dbo].[LeadAddress]
 (
    -- logical attributes
    [ParentIdYomiName],
    [OwningBusinessUnit],
    [OwnerId],
    [ParentIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [ParentId],
    [LeadAddressId],
    [AddressNumber],
    [AddressTypeCode],
    [Name],
    [Line1],
    [Line2],
    [Line3],
    [City],
    [StateOrProvince],
    [County],
    [Country],
    [PostOfficeBox],
    [PostalCode],
    [UTCOffset],
    [UPSZone],
    [Latitude],
    [Telephone1],
    [Longitude],
    [ShippingMethodCode],
    [Telephone2],
    [Telephone3],
    [Fax],
    [VersionNumber],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Composite]
) with view_metadata as
select
    -- logical attributes
    [lead_addresses].[YomiFullName],
    [lead_addresses].[OwningBusinessUnit],
    [lead_addresses].[OwnerId],
    [lead_addresses].[FullName],
    [lk_leadaddressbase_modifiedonbehalfby].[YomiFullName],
    [lk_leadaddressbase_modifiedonbehalfby].[FullName],
    [lk_leadaddressbase_createdonbehalfby].[YomiFullName],
    [lk_leadaddressbase_createdonbehalfby].[FullName],
    [lk_leadaddressbase_modifiedby].[YomiFullName],
    [lk_leadaddressbase_modifiedby].[FullName],
    [lk_leadaddressbase_createdby].[YomiFullName],
    [lk_leadaddressbase_createdby].[FullName],
    [TransactionCurrency_LeadAddress].[CurrencyName],

    -- physical attribute
    [LeadAddressBase].[ParentId],
    [LeadAddressBase].[LeadAddressId],
    [LeadAddressBase].[AddressNumber],
    [LeadAddressBase].[AddressTypeCode],
    [LeadAddressBase].[Name],
    [LeadAddressBase].[Line1],
    [LeadAddressBase].[Line2],
    [LeadAddressBase].[Line3],
    [LeadAddressBase].[City],
    [LeadAddressBase].[StateOrProvince],
    [LeadAddressBase].[County],
    [LeadAddressBase].[Country],
    [LeadAddressBase].[PostOfficeBox],
    [LeadAddressBase].[PostalCode],
    [LeadAddressBase].[UTCOffset],
    [LeadAddressBase].[UPSZone],
    [LeadAddressBase].[Latitude],
    [LeadAddressBase].[Telephone1],
    [LeadAddressBase].[Longitude],
    [LeadAddressBase].[ShippingMethodCode],
    [LeadAddressBase].[Telephone2],
    [LeadAddressBase].[Telephone3],
    [LeadAddressBase].[Fax],
    [LeadAddressBase].[VersionNumber],
    [LeadAddressBase].[CreatedBy],
    [LeadAddressBase].[CreatedOn],
    [LeadAddressBase].[ModifiedBy],
    [LeadAddressBase].[ModifiedOn],
    [LeadAddressBase].[CreatedOnBehalfBy],
    [LeadAddressBase].[ModifiedOnBehalfBy],
    [LeadAddressBase].[TransactionCurrencyId],
    [LeadAddressBase].[ExchangeRate],
    [LeadAddressBase].[Composite]
from [LeadAddressBase] 
    left join [LeadBase] [lead_addresses] on ([LeadAddressBase].[ParentId] = [lead_addresses].[LeadId])
    left join [SystemUserBase] [lk_leadaddressbase_createdby] with(nolock) on ([LeadAddressBase].[CreatedBy] = [lk_leadaddressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_leadaddressbase_createdonbehalfby] with(nolock) on ([LeadAddressBase].[CreatedOnBehalfBy] = [lk_leadaddressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_leadaddressbase_modifiedby] with(nolock) on ([LeadAddressBase].[ModifiedBy] = [lk_leadaddressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_leadaddressbase_modifiedonbehalfby] with(nolock) on ([LeadAddressBase].[ModifiedOnBehalfBy] = [lk_leadaddressbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_LeadAddress] on ([LeadAddressBase].[TransactionCurrencyId] = [TransactionCurrency_LeadAddress].[TransactionCurrencyId])
GO
