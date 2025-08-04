SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for CompetitorAddress
--
create view [dbo].[CompetitorAddress]
 (
    -- logical attributes
    [ParentIdName],
    [ParentIdYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedByName],

    [OrganizationId],

    -- physical attributes
    [ParentId],
    [CompetitorAddressId],
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
    [Composite]
) with view_metadata as
select
    -- logical attributes
    [competitor_addresses].[Name],
    [competitor_addresses].[YomiName],
    [lk_competitoraddressbase_modifiedonbehalfby].[YomiFullName],
    [lk_competitoraddressbase_modifiedonbehalfby].[FullName],
    [lk_competitoraddressbase_createdonbehalfby].[FullName],
    [lk_competitoraddressbase_createdonbehalfby].[YomiFullName],
    [lk_competitoraddressbase_modifiedby].[YomiFullName],
    [lk_competitoraddressbase_modifiedby].[FullName],
    [lk_competitoraddressbase_createdby].[YomiFullName],
    [lk_competitoraddressbase_createdby].[FullName],


	[competitor_addresses].[OrganizationId], 
    -- physical attribute
    [CompetitorAddressBase].[ParentId],
    [CompetitorAddressBase].[CompetitorAddressId],
    [CompetitorAddressBase].[AddressNumber],
    [CompetitorAddressBase].[AddressTypeCode],
    [CompetitorAddressBase].[Name],
    [CompetitorAddressBase].[Line1],
    [CompetitorAddressBase].[Line2],
    [CompetitorAddressBase].[Line3],
    [CompetitorAddressBase].[City],
    [CompetitorAddressBase].[StateOrProvince],
    [CompetitorAddressBase].[County],
    [CompetitorAddressBase].[Country],
    [CompetitorAddressBase].[PostOfficeBox],
    [CompetitorAddressBase].[PostalCode],
    [CompetitorAddressBase].[UTCOffset],
    [CompetitorAddressBase].[UPSZone],
    [CompetitorAddressBase].[Latitude],
    [CompetitorAddressBase].[Telephone1],
    [CompetitorAddressBase].[Longitude],
    [CompetitorAddressBase].[ShippingMethodCode],
    [CompetitorAddressBase].[Telephone2],
    [CompetitorAddressBase].[Telephone3],
    [CompetitorAddressBase].[Fax],
    [CompetitorAddressBase].[VersionNumber],
    [CompetitorAddressBase].[CreatedBy],
    [CompetitorAddressBase].[CreatedOn],
    [CompetitorAddressBase].[ModifiedBy],
    [CompetitorAddressBase].[ModifiedOn],
    [CompetitorAddressBase].[CreatedOnBehalfBy],
    [CompetitorAddressBase].[ModifiedOnBehalfBy],
    [CompetitorAddressBase].[Composite]
from [CompetitorAddressBase] 
    left join [CompetitorBase] [competitor_addresses] on ([CompetitorAddressBase].[ParentId] = [competitor_addresses].[CompetitorId])
    left join [SystemUserBase] [lk_competitoraddressbase_createdby] with(nolock) on ([CompetitorAddressBase].[CreatedBy] = [lk_competitoraddressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_competitoraddressbase_createdonbehalfby] with(nolock) on ([CompetitorAddressBase].[CreatedOnBehalfBy] = [lk_competitoraddressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_competitoraddressbase_modifiedby] with(nolock) on ([CompetitorAddressBase].[ModifiedBy] = [lk_competitoraddressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_competitoraddressbase_modifiedonbehalfby] with(nolock) on ([CompetitorAddressBase].[ModifiedOnBehalfBy] = [lk_competitoraddressbase_modifiedonbehalfby].[SystemUserId])
GO
