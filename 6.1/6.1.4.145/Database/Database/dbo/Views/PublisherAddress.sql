


--
-- base view for PublisherAddress
--
create view dbo.[PublisherAddress]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],

    -- physical attributes
    [ModifiedBy],
    [Telephone3],
    [Fax],
    [Country],
    [Telephone1],
    [UTCConversionTimeZoneCode],
    [ImportSequenceNumber],
    [Longitude],
    [County],
    [Line2],
    [Name],
    [ShippingMethodCode],
    [PublisherAddressId],
    [CreatedOn],
    [PrimaryContactName],
    [Latitude],
    [UTCOffset],
    [VersionNumber],
    [Line3],
    [ModifiedOn],
    [TimeZoneRuleVersionNumber],
    [PostOfficeBox],
    [UPSZone],
    [Telephone2],
    [FreightTermsCode],
    [ParentId],
    [PostalCode],
    [AddressNumber],
    [City],
    [CreatedBy],
    [StateOrProvince],
    [AddressTypeCode],
    [Line1],
    [ParentIdTypeCode],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_publisheraddressbase_modifiedby].[FullName],
    [lk_publisheraddressbase_modifiedby].[YomiFullName],
    [lk_publisheraddressbase_createdonbehalfby].[YomiFullName],
    [lk_publisheraddressbase_modifiedonbehalfby].[FullName],
    [lk_publisheraddressbase_createdonbehalfby].[FullName],
    [lk_publisheraddressbase_createdby].[YomiFullName],
    [lk_publisheraddressbase_modifiedonbehalfby].[YomiFullName],
    [lk_publisheraddressbase_createdby].[FullName],

    -- physical attribute
    [PublisherAddressBase].[ModifiedBy],
    [PublisherAddressBase].[Telephone3],
    [PublisherAddressBase].[Fax],
    [PublisherAddressBase].[Country],
    [PublisherAddressBase].[Telephone1],
    [PublisherAddressBase].[UTCConversionTimeZoneCode],
    [PublisherAddressBase].[ImportSequenceNumber],
    [PublisherAddressBase].[Longitude],
    [PublisherAddressBase].[County],
    [PublisherAddressBase].[Line2],
    [PublisherAddressBase].[Name],
    [PublisherAddressBase].[ShippingMethodCode],
    [PublisherAddressBase].[PublisherAddressId],
    [PublisherAddressBase].[CreatedOn],
    [PublisherAddressBase].[PrimaryContactName],
    [PublisherAddressBase].[Latitude],
    [PublisherAddressBase].[UTCOffset],
    [PublisherAddressBase].[VersionNumber],
    [PublisherAddressBase].[Line3],
    [PublisherAddressBase].[ModifiedOn],
    [PublisherAddressBase].[TimeZoneRuleVersionNumber],
    [PublisherAddressBase].[PostOfficeBox],
    [PublisherAddressBase].[UPSZone],
    [PublisherAddressBase].[Telephone2],
    [PublisherAddressBase].[FreightTermsCode],
    [PublisherAddressBase].[ParentId],
    [PublisherAddressBase].[PostalCode],
    [PublisherAddressBase].[AddressNumber],
    [PublisherAddressBase].[City],
    [PublisherAddressBase].[CreatedBy],
    [PublisherAddressBase].[StateOrProvince],
    [PublisherAddressBase].[AddressTypeCode],
    [PublisherAddressBase].[Line1],
    [PublisherAddressBase].[ParentIdTypeCode],
    [PublisherAddressBase].[ModifiedOnBehalfBy],
    [PublisherAddressBase].[CreatedOnBehalfBy]
from [PublisherAddressBase] 
    left join [SystemUserBase] [lk_publisheraddressbase_createdby] with(nolock) on ([PublisherAddressBase].[CreatedBy] = [lk_publisheraddressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_publisheraddressbase_createdonbehalfby] with(nolock) on ([PublisherAddressBase].[CreatedOnBehalfBy] = [lk_publisheraddressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_publisheraddressbase_modifiedby] with(nolock) on ([PublisherAddressBase].[ModifiedBy] = [lk_publisheraddressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_publisheraddressbase_modifiedonbehalfby] with(nolock) on ([PublisherAddressBase].[ModifiedOnBehalfBy] = [lk_publisheraddressbase_modifiedonbehalfby].[SystemUserId])
