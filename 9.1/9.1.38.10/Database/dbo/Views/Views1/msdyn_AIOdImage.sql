


--
-- base view for msdyn_AIOdImage
--
create view dbo.[msdyn_AIOdImage]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [EntityImage_Timestamp],
    [EntityImage_URL],
    [EntityImage],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIOdImageId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_name],
    [EntityImageId],
    [msdyn_Checksum],
    [msdyn_Description],
    [msdyn_Metadata]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aiodimage_modifiedonbehalfby].[FullName],
    [lk_msdyn_aiodimage_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aiodimage_createdby].[FullName],
    [lk_msdyn_aiodimage_createdby].[YomiFullName],
    [ImageDescriptor_msdyn_AIOdImage].[ImageTimestamp],
    [ImageDescriptor_msdyn_AIOdImage].[ImageURL],
    [ImageDescriptor_msdyn_AIOdImage].[ImageData],
    [lk_msdyn_aiodimage_modifiedby].[FullName],
    [lk_msdyn_aiodimage_modifiedby].[YomiFullName],
    [lk_msdyn_aiodimage_createdonbehalfby].[FullName],
    [lk_msdyn_aiodimage_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIOdImageBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [msdyn_AIOdImageBase].[msdyn_AIOdImageId],
    [msdyn_AIOdImageBase].[CreatedOn],
    [msdyn_AIOdImageBase].[CreatedBy],
    [msdyn_AIOdImageBase].[ModifiedOn],
    [msdyn_AIOdImageBase].[ModifiedBy],
    [msdyn_AIOdImageBase].[CreatedOnBehalfBy],
    [msdyn_AIOdImageBase].[ModifiedOnBehalfBy],
    [msdyn_AIOdImageBase].[OwningBusinessUnit],
    [msdyn_AIOdImageBase].[statecode],
    [msdyn_AIOdImageBase].[statuscode],
    [msdyn_AIOdImageBase].[VersionNumber],
    [msdyn_AIOdImageBase].[ImportSequenceNumber],
    [msdyn_AIOdImageBase].[OverriddenCreatedOn],
    [msdyn_AIOdImageBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIOdImageBase].[UTCConversionTimeZoneCode],
    [msdyn_AIOdImageBase].[msdyn_name],
    [msdyn_AIOdImageBase].[EntityImageId],
    [msdyn_AIOdImageBase].[msdyn_Checksum],
    [msdyn_AIOdImageBase].[msdyn_Description],
    [msdyn_AIOdImageBase].[msdyn_Metadata]
from [msdyn_AIOdImageBase] 
    left join [ImageDescriptor] [ImageDescriptor_msdyn_AIOdImage] on ([msdyn_AIOdImageBase].[EntityImageId] = [ImageDescriptor_msdyn_AIOdImage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_msdyn_aiodimage_createdby] on ([msdyn_AIOdImageBase].[CreatedBy] = [lk_msdyn_aiodimage_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodimage_createdonbehalfby] on ([msdyn_AIOdImageBase].[CreatedOnBehalfBy] = [lk_msdyn_aiodimage_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodimage_modifiedby] on ([msdyn_AIOdImageBase].[ModifiedBy] = [lk_msdyn_aiodimage_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiodimage_modifiedonbehalfby] on ([msdyn_AIOdImageBase].[ModifiedOnBehalfBy] = [lk_msdyn_aiodimage_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_AIOdImageBase].OwnerId = XXowner.OwnerId)
