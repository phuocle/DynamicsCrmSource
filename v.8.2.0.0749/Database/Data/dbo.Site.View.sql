USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Site]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Site
--
create view [dbo].[Site]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],

    -- linked address entities
    [Address1_AddressTypeCode],
    [Address1_City],
    [Address1_Composite],
    [Address1_Country],
    [Address1_County],
    [Address1_Fax],
    [Address1_AddressId],
    [Address1_Latitude],
    [Address1_Line1],
    [Address1_Line2],
    [Address1_Line3],
    [Address1_Longitude],
    [Address1_Name],
    [Address1_PostalCode],
    [Address1_PostOfficeBox],
    [Address1_ShippingMethodCode],
    [Address1_StateOrProvince],
    [Address1_Telephone1],
    [Address1_Telephone2],
    [Address1_Telephone3],
    [Address1_UPSZone],
    [Address1_UTCOffset],

    [Address2_AddressTypeCode],
    [Address2_City],
    [Address2_Composite],
    [Address2_Country],
    [Address2_County],
    [Address2_Fax],
    [Address2_AddressId],
    [Address2_Latitude],
    [Address2_Line1],
    [Address2_Line2],
    [Address2_Line3],
    [Address2_Longitude],
    [Address2_Name],
    [Address2_PostalCode],
    [Address2_PostOfficeBox],
    [Address2_ShippingMethodCode],
    [Address2_StateOrProvince],
    [Address2_Telephone1],
    [Address2_Telephone2],
    [Address2_Telephone3],
    [Address2_UPSZone],
    [Address2_UTCOffset],

    -- physical attributes
    [VersionNumber],
    [OrganizationId],
    [EMailAddress],
    [Name],
    [ModifiedOn],
    [SiteId],
    [ModifiedBy],
    [CreatedOn],
    [TimeZoneCode],
    [CreatedBy],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_sitebase_createdby].[FullName],
    [lk_sitebase_createdby].[YomiFullName],
    [lk_sitebase_createdonbehalfby].[FullName],
    [lk_sitebase_createdonbehalfby].[YomiFullName],
    [lk_sitebase_modifiedonbehalfby].[FullName],
    [lk_sitebase_modifiedonbehalfby].[YomiFullName],
    [lk_sitebase_modifiedby].[YomiFullName],
    [lk_sitebase_modifiedby].[FullName],

    -- linked address entities
    [XXaddress1].[AddressTypeCode],
    [XXaddress1].[City],
    [XXaddress1].[Composite],
    [XXaddress1].[Country],
    [XXaddress1].[County],
    [XXaddress1].[Fax],
    [XXaddress1].[InternalAddressId],
    [XXaddress1].[Latitude],
    [XXaddress1].[Line1],
    [XXaddress1].[Line2],
    [XXaddress1].[Line3],
    [XXaddress1].[Longitude],
    [XXaddress1].[Name],
    [XXaddress1].[PostalCode],
    [XXaddress1].[PostOfficeBox],
    [XXaddress1].[ShippingMethodCode],
    [XXaddress1].[StateOrProvince],
    [XXaddress1].[Telephone1],
    [XXaddress1].[Telephone2],
    [XXaddress1].[Telephone3],
    [XXaddress1].[UPSZone],
    [XXaddress1].[UTCOffset],
    [XXaddress2].[AddressTypeCode],
    [XXaddress2].[City],
    [XXaddress2].[Composite],
    [XXaddress2].[Country],
    [XXaddress2].[County],
    [XXaddress2].[Fax],
    [XXaddress2].[InternalAddressId],
    [XXaddress2].[Latitude],
    [XXaddress2].[Line1],
    [XXaddress2].[Line2],
    [XXaddress2].[Line3],
    [XXaddress2].[Longitude],
    [XXaddress2].[Name],
    [XXaddress2].[PostalCode],
    [XXaddress2].[PostOfficeBox],
    [XXaddress2].[ShippingMethodCode],
    [XXaddress2].[StateOrProvince],
    [XXaddress2].[Telephone1],
    [XXaddress2].[Telephone2],
    [XXaddress2].[Telephone3],
    [XXaddress2].[UPSZone],
    [XXaddress2].[UTCOffset],
    -- physical attribute
    [SiteBase].[VersionNumber],
    [SiteBase].[OrganizationId],
    [SiteBase].[EMailAddress],
    [SiteBase].[Name],
    [SiteBase].[ModifiedOn],
    [SiteBase].[SiteId],
    [SiteBase].[ModifiedBy],
    [SiteBase].[CreatedOn],
    [SiteBase].[TimeZoneCode],
    [SiteBase].[CreatedBy],
    [SiteBase].[ImportSequenceNumber],
    [SiteBase].[OverriddenCreatedOn],
    [SiteBase].[CreatedOnBehalfBy],
    [SiteBase].[ModifiedOnBehalfBy]
from [SiteBase] 
    left join [InternalAddressBase] XXaddress1 on ([SiteBase].[SiteId] = XXaddress1.ParentId and XXaddress1.AddressNumber = 1)
    left join [InternalAddressBase] XXaddress2 on ([SiteBase].[SiteId] = XXaddress2.ParentId and XXaddress2.AddressNumber = 2)
    left join [SystemUserBase] [lk_sitebase_createdby] with(nolock) on ([SiteBase].[CreatedBy] = [lk_sitebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_sitebase_createdonbehalfby] with(nolock) on ([SiteBase].[CreatedOnBehalfBy] = [lk_sitebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_sitebase_modifiedby] with(nolock) on ([SiteBase].[ModifiedBy] = [lk_sitebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_sitebase_modifiedonbehalfby] with(nolock) on ([SiteBase].[ModifiedOnBehalfBy] = [lk_sitebase_modifiedonbehalfby].[SystemUserId])

GO
