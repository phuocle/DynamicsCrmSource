


--
-- base view for CustomerAddress
--
create view dbo.[CustomerAddress]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],


    OwningUser,
    OwnerId,
    OwnerIdType,
    OwningBusinessUnit,

    -- physical attributes
    [ParentId],
    [CustomerAddressId],
    [AddressNumber],
    [ObjectTypeCode],
    [AddressTypeCode],
    [Name],
    [PrimaryContactName],
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
    [FreightTermsCode],
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
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [UTCConversionTimeZoneCode],
    [ImportSequenceNumber],
    [ParentIdTypeCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Composite]
) with view_metadata as
select
    -- logical attributes
    [lk_customeraddressbase_createdby].[YomiFullName],
    [lk_customeraddressbase_createdonbehalfby].[FullName],
    [lk_customeraddressbase_modifiedby].[YomiFullName],
    [TransactionCurrency_CustomerAddress].[CurrencyName],
    [lk_customeraddressbase_createdby].[FullName],
    [lk_customeraddressbase_createdonbehalfby].[YomiFullName],
    [lk_customeraddressbase_modifiedonbehalfby].[FullName],
    [lk_customeraddressbase_modifiedonbehalfby].[YomiFullName],
    [lk_customeraddressbase_modifiedby].[FullName],


	OwningUser = case	
				when coalesce(XXaccount.OwnerIdType, XXcontact.OwnerIdType) = 8 then
						coalesce(XXaccount.OwnerId, XXcontact.OwnerId)
				else null
				end,
	OwnerId = coalesce(XXaccount.OwnerId, XXcontact.OwnerId), 
	OwnerIdType = coalesce(XXaccount.OwnerIdType, XXcontact.OwnerIdType), 
	OwningBusinessUnit = coalesce(XXaccount.OwningBusinessUnit, XXcontact.OwningBusinessUnit),
    -- physical attribute
    [CustomerAddressBase].[ParentId],
    [CustomerAddressBase].[CustomerAddressId],
    [CustomerAddressBase].[AddressNumber],
    [CustomerAddressBase].[ObjectTypeCode],
    [CustomerAddressBase].[AddressTypeCode],
    [CustomerAddressBase].[Name],
    [CustomerAddressBase].[PrimaryContactName],
    [CustomerAddressBase].[Line1],
    [CustomerAddressBase].[Line2],
    [CustomerAddressBase].[Line3],
    [CustomerAddressBase].[City],
    [CustomerAddressBase].[StateOrProvince],
    [CustomerAddressBase].[County],
    [CustomerAddressBase].[Country],
    [CustomerAddressBase].[PostOfficeBox],
    [CustomerAddressBase].[PostalCode],
    [CustomerAddressBase].[UTCOffset],
    [CustomerAddressBase].[FreightTermsCode],
    [CustomerAddressBase].[UPSZone],
    [CustomerAddressBase].[Latitude],
    [CustomerAddressBase].[Telephone1],
    [CustomerAddressBase].[Longitude],
    [CustomerAddressBase].[ShippingMethodCode],
    [CustomerAddressBase].[Telephone2],
    [CustomerAddressBase].[Telephone3],
    [CustomerAddressBase].[Fax],
    [CustomerAddressBase].[VersionNumber],
    [CustomerAddressBase].[CreatedBy],
    [CustomerAddressBase].[CreatedOn],
    [CustomerAddressBase].[ModifiedBy],
    [CustomerAddressBase].[ModifiedOn],
    [CustomerAddressBase].[TimeZoneRuleVersionNumber],
    [CustomerAddressBase].[OverriddenCreatedOn],
    [CustomerAddressBase].[UTCConversionTimeZoneCode],
    [CustomerAddressBase].[ImportSequenceNumber],
    [CustomerAddressBase].[ParentIdTypeCode],
    [CustomerAddressBase].[CreatedOnBehalfBy],
    [CustomerAddressBase].[ModifiedOnBehalfBy],
    [CustomerAddressBase].[TransactionCurrencyId],
    [CustomerAddressBase].[ExchangeRate],
    [CustomerAddressBase].[Composite]
from [CustomerAddressBase] 

	left join AccountBase XXaccount with(nolock) on ([CustomerAddressBase].ParentId = XXaccount.AccountId and [CustomerAddressBase].ObjectTypeCode = 1)
	left join ContactBase XXcontact with(nolock) on ([CustomerAddressBase].ParentId = XXcontact.ContactId and [CustomerAddressBase].ObjectTypeCode = 2)
    left join [SystemUserBase] [lk_customeraddressbase_createdby] with(nolock) on ([CustomerAddressBase].[CreatedBy] = [lk_customeraddressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customeraddressbase_createdonbehalfby] with(nolock) on ([CustomerAddressBase].[CreatedOnBehalfBy] = [lk_customeraddressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customeraddressbase_modifiedby] with(nolock) on ([CustomerAddressBase].[ModifiedBy] = [lk_customeraddressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customeraddressbase_modifiedonbehalfby] with(nolock) on ([CustomerAddressBase].[ModifiedOnBehalfBy] = [lk_customeraddressbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_CustomerAddress] on ([CustomerAddressBase].[TransactionCurrencyId] = [TransactionCurrency_CustomerAddress].[TransactionCurrencyId])
