


--
-- base view for InternalAddress
--
create view dbo.[InternalAddress]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],


    BusinessUnitId,
    OrganizationId,

    -- physical attributes
    [ParentId],
    [InternalAddressId],
    [AddressNumber],
    [ObjectTypeCode],
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
    [VersionNumber],
    [Fax],
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
    [lk_internaladdressbase_createdonbehalfby].[FullName],
    [lk_internaladdressbase_createdonbehalfby].[YomiFullName],
    [lk_internaladdressbase_createdby].[FullName],
    [lk_internaladdressbase_createdby].[YomiFullName],
    [lk_internaladdressbase_modifiedonbehalfby].[YomiFullName],
    [lk_internaladdressbase_modifiedonbehalfby].[FullName],
    [lk_internaladdressbase_modifiedby].[FullName],
    [lk_internaladdressbase_modifiedby].[YomiFullName],


	BusinessUnitId = case
				when ObjectTypeCode = 10 then XXbusinessunit.BusinessUnitId
				when ObjectTypeCode = 8 then XXsystemuser.BusinessUnitId
				else null
				end,
	OrganizationId = case
				when ObjectTypeCode = 4009 then XXsite.OrganizationId
				else null
				end,
    -- physical attribute
    [InternalAddressBase].[ParentId],
    [InternalAddressBase].[InternalAddressId],
    [InternalAddressBase].[AddressNumber],
    [InternalAddressBase].[ObjectTypeCode],
    [InternalAddressBase].[AddressTypeCode],
    [InternalAddressBase].[Name],
    [InternalAddressBase].[Line1],
    [InternalAddressBase].[Line2],
    [InternalAddressBase].[Line3],
    [InternalAddressBase].[City],
    [InternalAddressBase].[StateOrProvince],
    [InternalAddressBase].[County],
    [InternalAddressBase].[Country],
    [InternalAddressBase].[PostOfficeBox],
    [InternalAddressBase].[PostalCode],
    [InternalAddressBase].[UTCOffset],
    [InternalAddressBase].[UPSZone],
    [InternalAddressBase].[Latitude],
    [InternalAddressBase].[Telephone1],
    [InternalAddressBase].[Longitude],
    [InternalAddressBase].[ShippingMethodCode],
    [InternalAddressBase].[Telephone2],
    [InternalAddressBase].[Telephone3],
    [InternalAddressBase].[VersionNumber],
    [InternalAddressBase].[Fax],
    [InternalAddressBase].[CreatedBy],
    [InternalAddressBase].[CreatedOn],
    [InternalAddressBase].[ModifiedBy],
    [InternalAddressBase].[ModifiedOn],
    [InternalAddressBase].[CreatedOnBehalfBy],
    [InternalAddressBase].[ModifiedOnBehalfBy],
    [InternalAddressBase].[Composite]
from [InternalAddressBase] 

	left join BusinessUnitBase XXbusinessunit with(nolock) on ([InternalAddressBase].ParentId = XXbusinessunit.BusinessUnitId and [InternalAddressBase].ObjectTypeCode = 10)
	left join SystemUserBase XXsystemuser with(nolock) on ([InternalAddressBase].ParentId = XXsystemuser.SystemUserId and [InternalAddressBase].ObjectTypeCode = 8)
	left join SiteBase XXsite on ([InternalAddressBase].ParentId = XXsite.SiteId and [InternalAddressBase].ObjectTypeCode = 4009)
    left join [SystemUserBase] [lk_internaladdressbase_createdby] with(nolock) on ([InternalAddressBase].[CreatedBy] = [lk_internaladdressbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_internaladdressbase_createdonbehalfby] with(nolock) on ([InternalAddressBase].[CreatedOnBehalfBy] = [lk_internaladdressbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_internaladdressbase_modifiedby] with(nolock) on ([InternalAddressBase].[ModifiedBy] = [lk_internaladdressbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_internaladdressbase_modifiedonbehalfby] with(nolock) on ([InternalAddressBase].[ModifiedOnBehalfBy] = [lk_internaladdressbase_modifiedonbehalfby].[SystemUserId])
