


--
-- base view for CompetitorAddress
--
create view dbo.[CompetitorAddress]
 (
    -- logical attributes
    [ParentIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ParentIdYomiName],

    [OrganizationId],

    -- physical attributes
    [CompetitorAddressId],
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
    [UTCOffset]
) with view_metadata as
select
    -- logical attributes
    [competitor_addresses].[Name],
    [lk_competitoraddressbase_createdby].[FullName],
    [lk_competitoraddressbase_createdby].[YomiFullName],
    [lk_competitoraddressbase_createdonbehalfby].[FullName],
    [lk_competitoraddressbase_createdonbehalfby].[YomiFullName],
    [lk_competitoraddressbase_modifiedby].[FullName],
    [lk_competitoraddressbase_modifiedby].[YomiFullName],
    [lk_competitoraddressbase_modifiedonbehalfby].[FullName],
    [lk_competitoraddressbase_modifiedonbehalfby].[YomiFullName],
    [competitor_addresses].[YomiName],


	[competitor_addresses].[OrganizationId], 
    -- physical attribute
    [CompetitorAddressBase].[CompetitorAddressId],
    [CompetitorAddressBase].[CreatedOn],
    [CompetitorAddressBase].[CreatedBy],
    [CompetitorAddressBase].[ModifiedOn],
    [CompetitorAddressBase].[ModifiedBy],
    [CompetitorAddressBase].[CreatedOnBehalfBy],
    [CompetitorAddressBase].[ModifiedOnBehalfBy],
    [CompetitorAddressBase].[VersionNumber],
    [CompetitorAddressBase].[ImportSequenceNumber],
    [CompetitorAddressBase].[OverriddenCreatedOn],
    [CompetitorAddressBase].[TimeZoneRuleVersionNumber],
    [CompetitorAddressBase].[UTCConversionTimeZoneCode],
    [CompetitorAddressBase].[Name],
    [CompetitorAddressBase].[AddressNumber],
    [CompetitorAddressBase].[AddressTypeCode],
    [CompetitorAddressBase].[City],
    [CompetitorAddressBase].[Composite],
    [CompetitorAddressBase].[Country],
    [CompetitorAddressBase].[County],
    [CompetitorAddressBase].[Fax],
    [CompetitorAddressBase].[Latitude],
    [CompetitorAddressBase].[Line1],
    [CompetitorAddressBase].[Line2],
    [CompetitorAddressBase].[Line3],
    [CompetitorAddressBase].[Longitude],
    [CompetitorAddressBase].[ParentId],
    [CompetitorAddressBase].[PostalCode],
    [CompetitorAddressBase].[PostOfficeBox],
    [CompetitorAddressBase].[ShippingMethodCode],
    [CompetitorAddressBase].[StateOrProvince],
    [CompetitorAddressBase].[Telephone1],
    [CompetitorAddressBase].[Telephone2],
    [CompetitorAddressBase].[Telephone3],
    [CompetitorAddressBase].[UPSZone],
    [CompetitorAddressBase].[UTCOffset]
from [CompetitorAddressBase] 
    left join [CompetitorBase] [competitor_addresses] on ([CompetitorAddressBase].[ParentId] = [competitor_addresses].[CompetitorId])
    left join [SystemUserBase] [lk_competitoraddressbase_createdby] on ([CompetitorAddressBase].[CreatedBy] = [lk_competitoraddressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_competitoraddressbase_createdonbehalfby] on ([CompetitorAddressBase].[CreatedOnBehalfBy] = [lk_competitoraddressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_competitoraddressbase_modifiedby] on ([CompetitorAddressBase].[ModifiedBy] = [lk_competitoraddressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_competitoraddressbase_modifiedonbehalfby] on ([CompetitorAddressBase].[ModifiedOnBehalfBy] = [lk_competitoraddressbase_modifiedonbehalfby].[SystemUserId])
