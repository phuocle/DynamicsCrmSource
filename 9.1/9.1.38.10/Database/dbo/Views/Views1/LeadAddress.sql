


--
-- base view for LeadAddress
--
create view dbo.[LeadAddress]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ParentIdYomiName],
    [OwningBusinessUnit],
    [ParentIdName],
    [OwnerId],

    -- physical attributes
    [LeadAddressId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [AddressNumber],
    [AddressTypeCode],
    [City],
    [Composite],
    [Country],
    [County],
    [Fax],
    [Latitude],
    [Line1],
    [Line2],
    [Line3],
    [Longitude],
    [ParentId],
    [PostalCode],
    [PostOfficeBox],
    [ShippingMethodCode],
    [StateOrProvince],
    [Telephone1],
    [Telephone2],
    [Telephone3],
    [UPSZone],
    [UTCOffset],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [TransactionCurrency_LeadAddress].[CurrencyName],
    [lk_leadaddressbase_createdonbehalfby].[FullName],
    [lk_leadaddressbase_createdonbehalfby].[YomiFullName],
    [lk_leadaddressbase_modifiedonbehalfby].[FullName],
    [lk_leadaddressbase_modifiedonbehalfby].[YomiFullName],
    [lk_leadaddressbase_createdby].[FullName],
    [lk_leadaddressbase_createdby].[YomiFullName],
    [lk_leadaddressbase_modifiedby].[FullName],
    [lk_leadaddressbase_modifiedby].[YomiFullName],
    [lead_addresses].[YomiFullName],
    [lead_addresses].[OwningBusinessUnit],
    [lead_addresses].[FullName],
    [lead_addresses].[OwnerId],

    -- physical attribute
    [LeadAddressBase].[LeadAddressId],
    [LeadAddressBase].[CreatedOn],
    [LeadAddressBase].[CreatedBy],
    [LeadAddressBase].[ModifiedOn],
    [LeadAddressBase].[ModifiedBy],
    [LeadAddressBase].[CreatedOnBehalfBy],
    [LeadAddressBase].[ModifiedOnBehalfBy],
    [LeadAddressBase].[VersionNumber],
    [LeadAddressBase].[ImportSequenceNumber],
    [LeadAddressBase].[OverriddenCreatedOn],
    [LeadAddressBase].[TimeZoneRuleVersionNumber],
    [LeadAddressBase].[UTCConversionTimeZoneCode],
    [LeadAddressBase].[Name],
    [LeadAddressBase].[AddressNumber],
    [LeadAddressBase].[AddressTypeCode],
    [LeadAddressBase].[City],
    [LeadAddressBase].[Composite],
    [LeadAddressBase].[Country],
    [LeadAddressBase].[County],
    [LeadAddressBase].[Fax],
    [LeadAddressBase].[Latitude],
    [LeadAddressBase].[Line1],
    [LeadAddressBase].[Line2],
    [LeadAddressBase].[Line3],
    [LeadAddressBase].[Longitude],
    [LeadAddressBase].[ParentId],
    [LeadAddressBase].[PostalCode],
    [LeadAddressBase].[PostOfficeBox],
    [LeadAddressBase].[ShippingMethodCode],
    [LeadAddressBase].[StateOrProvince],
    [LeadAddressBase].[Telephone1],
    [LeadAddressBase].[Telephone2],
    [LeadAddressBase].[Telephone3],
    [LeadAddressBase].[UPSZone],
    [LeadAddressBase].[UTCOffset],
    [LeadAddressBase].[ExchangeRate],
    [LeadAddressBase].[TransactionCurrencyId]
from [LeadAddressBase] 
    left join [LeadBase] [lead_addresses] on ([LeadAddressBase].[ParentId] = [lead_addresses].[LeadId])
    left join [SystemUserBase] [lk_leadaddressbase_createdby] on ([LeadAddressBase].[CreatedBy] = [lk_leadaddressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_leadaddressbase_createdonbehalfby] on ([LeadAddressBase].[CreatedOnBehalfBy] = [lk_leadaddressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_leadaddressbase_modifiedby] on ([LeadAddressBase].[ModifiedBy] = [lk_leadaddressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_leadaddressbase_modifiedonbehalfby] on ([LeadAddressBase].[ModifiedOnBehalfBy] = [lk_leadaddressbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_LeadAddress] on ([LeadAddressBase].[TransactionCurrencyId] = [TransactionCurrency_LeadAddress].[TransactionCurrencyId])
