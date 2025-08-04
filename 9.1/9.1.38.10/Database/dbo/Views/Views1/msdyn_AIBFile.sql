


--
-- base view for msdyn_AIBFile
--
create view dbo.[msdyn_AIBFile]
 (
    -- logical attributes
    [msdyn_Image],
    [msdyn_Image_URL],
    [msdyn_Image_Timestamp],
    [msdyn_AIBDatasetsContainerIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [msdyn_File_Name],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIBFileId],
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
    [msdyn_Name],
    [msdyn_AIBDatasetsContainerId],
    [msdyn_Checksum],
    [msdyn_File],
    [msdyn_ImageId],
    [msdyn_ImportMetadata],
    [msdyn_MimeType],
    [msdyn_Size]
) with view_metadata as
select
    -- logical attributes
    [ImageDescriptor_msdyn_AIBFile_msdyn_Image].[ImageData],
    [ImageDescriptor_msdyn_AIBFile_msdyn_Image].[ImageURL],
    [ImageDescriptor_msdyn_AIBFile_msdyn_Image].[ImageTimestamp],
    [msdyn_AIBFile_msdyn_AIBDatasetsCont].[msdyn_Name],
    [lk_msdyn_aibfile_createdby].[FullName],
    [lk_msdyn_aibfile_createdby].[YomiFullName],
    [FileAttachment_msdyn_AIBFile_msdyn_File].[FileName],
    [lk_msdyn_aibfile_modifiedonbehalfby].[FullName],
    [lk_msdyn_aibfile_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aibfile_createdonbehalfby].[FullName],
    [lk_msdyn_aibfile_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aibfile_modifiedby].[FullName],
    [lk_msdyn_aibfile_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_AIBFileBase].OwnerId,
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
    [msdyn_AIBFileBase].[msdyn_AIBFileId],
    [msdyn_AIBFileBase].[CreatedOn],
    [msdyn_AIBFileBase].[CreatedBy],
    [msdyn_AIBFileBase].[ModifiedOn],
    [msdyn_AIBFileBase].[ModifiedBy],
    [msdyn_AIBFileBase].[CreatedOnBehalfBy],
    [msdyn_AIBFileBase].[ModifiedOnBehalfBy],
    [msdyn_AIBFileBase].[OwningBusinessUnit],
    [msdyn_AIBFileBase].[statecode],
    [msdyn_AIBFileBase].[statuscode],
    [msdyn_AIBFileBase].[VersionNumber],
    [msdyn_AIBFileBase].[ImportSequenceNumber],
    [msdyn_AIBFileBase].[OverriddenCreatedOn],
    [msdyn_AIBFileBase].[TimeZoneRuleVersionNumber],
    [msdyn_AIBFileBase].[UTCConversionTimeZoneCode],
    [msdyn_AIBFileBase].[msdyn_Name],
    [msdyn_AIBFileBase].[msdyn_AIBDatasetsContainerId],
    [msdyn_AIBFileBase].[msdyn_Checksum],
    [msdyn_AIBFileBase].[msdyn_File],
    [msdyn_AIBFileBase].[msdyn_ImageId],
    [msdyn_AIBFileBase].[msdyn_ImportMetadata],
    [msdyn_AIBFileBase].[msdyn_MimeType],
    [msdyn_AIBFileBase].[msdyn_Size]
from [msdyn_AIBFileBase] 
    left join [FileAttachmentBase] [FileAttachment_msdyn_AIBFile_msdyn_File] on ([msdyn_AIBFileBase].[msdyn_File] = [FileAttachment_msdyn_AIBFile_msdyn_File].[FileAttachmentId])
    left join [ImageDescriptor] [ImageDescriptor_msdyn_AIBFile_msdyn_Image] on ([msdyn_AIBFileBase].[msdyn_ImageId] = [ImageDescriptor_msdyn_AIBFile_msdyn_Image].[ImageDescriptorId])
    left join [SystemUserBase] [lk_msdyn_aibfile_createdby] on ([msdyn_AIBFileBase].[CreatedBy] = [lk_msdyn_aibfile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibfile_createdonbehalfby] on ([msdyn_AIBFileBase].[CreatedOnBehalfBy] = [lk_msdyn_aibfile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibfile_modifiedby] on ([msdyn_AIBFileBase].[ModifiedBy] = [lk_msdyn_aibfile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aibfile_modifiedonbehalfby] on ([msdyn_AIBFileBase].[ModifiedOnBehalfBy] = [lk_msdyn_aibfile_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIBDatasetsContainerBase] [msdyn_AIBFile_msdyn_AIBDatasetsCont] on ([msdyn_AIBFileBase].[msdyn_AIBDatasetsContainerId] = [msdyn_AIBFile_msdyn_AIBDatasetsCont].[msdyn_AIBDatasetsContainerId])
    left join OwnerBase XXowner on ([msdyn_AIBFileBase].OwnerId = XXowner.OwnerId)
