USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Publisher]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Publisher
--
create view [dbo].[Publisher]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByName],
    [EntityImage_Timestamp],
    [EntityImage],
    [EntityImage_URL],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],

    -- linked address entities
    [Address1_AddressTypeCode],
    [Address1_City],
    [Address1_Country],
    [Address1_County],
    [Address1_Fax],
    [Address1_FreightTermsCode],
    [Address1_Latitude],
    [Address1_Line1],
    [Address1_Line2],
    [Address1_Line3],
    [Address1_Longitude],
    [Address1_Name],
    [Address1_PostalCode],
    [Address1_PostOfficeBox],
    [Address1_PrimaryContactName],
    [Address1_AddressId],
    [Address1_ShippingMethodCode],
    [Address1_StateOrProvince],
    [Address1_Telephone1],
    [Address1_Telephone2],
    [Address1_Telephone3],
    [Address1_UPSZone],
    [Address1_UTCOffset],

    [Address2_AddressTypeCode],
    [Address2_City],
    [Address2_Country],
    [Address2_County],
    [Address2_Fax],
    [Address2_FreightTermsCode],
    [Address2_Latitude],
    [Address2_Line1],
    [Address2_Line2],
    [Address2_Line3],
    [Address2_Longitude],
    [Address2_Name],
    [Address2_PostalCode],
    [Address2_PostOfficeBox],
    [Address2_PrimaryContactName],
    [Address2_AddressId],
    [Address2_ShippingMethodCode],
    [Address2_StateOrProvince],
    [Address2_Telephone1],
    [Address2_Telephone2],
    [Address2_Telephone3],
    [Address2_UPSZone],
    [Address2_UTCOffset],

    -- physical attributes
    [OrganizationId],
    [Description],
    [ModifiedBy],
    [EMailAddress],
    [CreatedOn],
    [VersionNumber],
    [ModifiedOn],
    [CreatedBy],
    [CustomizationPrefix],
    [SupportingWebsiteUrl],
    [PublisherId],
    [UniqueName],
    [FriendlyName],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [CustomizationOptionValuePrefix],
    [PinpointPublisherId],
    [PinpointPublisherDefaultLocale],
    [IsReadonly],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_publisher_createdby].[FullName],
    [lk_publisher_modifiedby].[FullName],
    [lk_publisher_entityimage].[ImageTimestamp],
    [lk_publisher_entityimage].[ImageData],
    [lk_publisher_entityimage].[ImageURL],
    [lk_publisherbase_modifiedonbehalfby].[FullName],
    [lk_publisherbase_modifiedonbehalfby].[YomiFullName],
    [lk_publisherbase_createdonbehalfby].[YomiFullName],
    [lk_publisherbase_createdonbehalfby].[FullName],
    [organization_publisher].[Name],

    -- linked address entities
    [XXaddress1].[AddressTypeCode],
    [XXaddress1].[City],
    [XXaddress1].[Country],
    [XXaddress1].[County],
    [XXaddress1].[Fax],
    [XXaddress1].[FreightTermsCode],
    [XXaddress1].[Latitude],
    [XXaddress1].[Line1],
    [XXaddress1].[Line2],
    [XXaddress1].[Line3],
    [XXaddress1].[Longitude],
    [XXaddress1].[Name],
    [XXaddress1].[PostalCode],
    [XXaddress1].[PostOfficeBox],
    [XXaddress1].[PrimaryContactName],
    [XXaddress1].[PublisherAddressId],
    [XXaddress1].[ShippingMethodCode],
    [XXaddress1].[StateOrProvince],
    [XXaddress1].[Telephone1],
    [XXaddress1].[Telephone2],
    [XXaddress1].[Telephone3],
    [XXaddress1].[UPSZone],
    [XXaddress1].[UTCOffset],
    [XXaddress2].[AddressTypeCode],
    [XXaddress2].[City],
    [XXaddress2].[Country],
    [XXaddress2].[County],
    [XXaddress2].[Fax],
    [XXaddress2].[FreightTermsCode],
    [XXaddress2].[Latitude],
    [XXaddress2].[Line1],
    [XXaddress2].[Line2],
    [XXaddress2].[Line3],
    [XXaddress2].[Longitude],
    [XXaddress2].[Name],
    [XXaddress2].[PostalCode],
    [XXaddress2].[PostOfficeBox],
    [XXaddress2].[PrimaryContactName],
    [XXaddress2].[PublisherAddressId],
    [XXaddress2].[ShippingMethodCode],
    [XXaddress2].[StateOrProvince],
    [XXaddress2].[Telephone1],
    [XXaddress2].[Telephone2],
    [XXaddress2].[Telephone3],
    [XXaddress2].[UPSZone],
    [XXaddress2].[UTCOffset],
    -- physical attribute
    [PublisherBase].[OrganizationId],
    [PublisherBase].[Description],
    [PublisherBase].[ModifiedBy],
    [PublisherBase].[EMailAddress],
    [PublisherBase].[CreatedOn],
    [PublisherBase].[VersionNumber],
    [PublisherBase].[ModifiedOn],
    [PublisherBase].[CreatedBy],
    [PublisherBase].[CustomizationPrefix],
    [PublisherBase].[SupportingWebsiteUrl],
    [PublisherBase].[PublisherId],
    [PublisherBase].[UniqueName],
    [PublisherBase].[FriendlyName],
    [PublisherBase].[ModifiedOnBehalfBy],
    [PublisherBase].[CreatedOnBehalfBy],
    [PublisherBase].[CustomizationOptionValuePrefix],
    [PublisherBase].[PinpointPublisherId],
    [PublisherBase].[PinpointPublisherDefaultLocale],
    [PublisherBase].[IsReadonly],
    [PublisherBase].[EntityImageId]
from [PublisherBase] 
    left join [PublisherAddressBase] XXaddress1 on ([PublisherBase].[PublisherId] = XXaddress1.ParentId and XXaddress1.AddressNumber = 1)
    left join [PublisherAddressBase] XXaddress2 on ([PublisherBase].[PublisherId] = XXaddress2.ParentId and XXaddress2.AddressNumber = 2)
    left join [SystemUserBase] [lk_publisher_createdby] with(nolock) on ([PublisherBase].[CreatedBy] = [lk_publisher_createdby].[SystemUserId])
    left join [ImageDescriptor] [lk_publisher_entityimage] on ([PublisherBase].[EntityImageId] = [lk_publisher_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_publisher_modifiedby] with(nolock) on ([PublisherBase].[ModifiedBy] = [lk_publisher_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_publisherbase_createdonbehalfby] with(nolock) on ([PublisherBase].[CreatedOnBehalfBy] = [lk_publisherbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_publisherbase_modifiedonbehalfby] with(nolock) on ([PublisherBase].[ModifiedOnBehalfBy] = [lk_publisherbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_publisher] with(nolock) on ([PublisherBase].[OrganizationId] = [organization_publisher].[OrganizationId])

GO
