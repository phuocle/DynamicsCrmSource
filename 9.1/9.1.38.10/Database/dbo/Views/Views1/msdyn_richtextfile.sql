


--
-- base view for msdyn_richtextfile
--
create view dbo.[msdyn_richtextfile]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [msdyn_imageblob],
    [msdyn_imageblob_Timestamp],
    [msdyn_imageblob_URL],
    [msdyn_fileblob_Name],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_richtextfileId],
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
    [msdyn_imageblobId],
    [msdyn_parententity_fieldname],
    [msdyn_parententityname],
    [msdyn_parentid],
    [msdyn_fileblob]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_richtextfile_createdonbehalfby].[FullName],
    [lk_msdyn_richtextfile_createdonbehalfby].[YomiFullName],
    [lk_msdyn_richtextfile_createdby].[FullName],
    [lk_msdyn_richtextfile_createdby].[YomiFullName],
    [ImageDescriptor_msdyn_richtextfile_msdyn_imageblob].[ImageData],
    [ImageDescriptor_msdyn_richtextfile_msdyn_imageblob].[ImageTimestamp],
    [ImageDescriptor_msdyn_richtextfile_msdyn_imageblob].[ImageURL],
    [FileAttachment_msdyn_richtextfile_msdyn_fileblob].[FileName],
    [lk_msdyn_richtextfile_modifiedby].[FullName],
    [lk_msdyn_richtextfile_modifiedby].[YomiFullName],
    [lk_msdyn_richtextfile_modifiedonbehalfby].[FullName],
    [lk_msdyn_richtextfile_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_richtextfileBase].OwnerId,
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
    [msdyn_richtextfileBase].[msdyn_richtextfileId],
    [msdyn_richtextfileBase].[CreatedOn],
    [msdyn_richtextfileBase].[CreatedBy],
    [msdyn_richtextfileBase].[ModifiedOn],
    [msdyn_richtextfileBase].[ModifiedBy],
    [msdyn_richtextfileBase].[CreatedOnBehalfBy],
    [msdyn_richtextfileBase].[ModifiedOnBehalfBy],
    [msdyn_richtextfileBase].[OwningBusinessUnit],
    [msdyn_richtextfileBase].[statecode],
    [msdyn_richtextfileBase].[statuscode],
    [msdyn_richtextfileBase].[VersionNumber],
    [msdyn_richtextfileBase].[ImportSequenceNumber],
    [msdyn_richtextfileBase].[OverriddenCreatedOn],
    [msdyn_richtextfileBase].[TimeZoneRuleVersionNumber],
    [msdyn_richtextfileBase].[UTCConversionTimeZoneCode],
    [msdyn_richtextfileBase].[msdyn_name],
    [msdyn_richtextfileBase].[msdyn_imageblobId],
    [msdyn_richtextfileBase].[msdyn_parententity_fieldname],
    [msdyn_richtextfileBase].[msdyn_parententityname],
    [msdyn_richtextfileBase].[msdyn_parentid],
    [msdyn_richtextfileBase].[msdyn_fileblob]
from [msdyn_richtextfileBase] 
    left join [FileAttachmentBase] [FileAttachment_msdyn_richtextfile_msdyn_fileblob] on ([msdyn_richtextfileBase].[msdyn_fileblob] = [FileAttachment_msdyn_richtextfile_msdyn_fileblob].[FileAttachmentId])
    left join [ImageDescriptor] [ImageDescriptor_msdyn_richtextfile_msdyn_imageblob] on ([msdyn_richtextfileBase].[msdyn_imageblobId] = [ImageDescriptor_msdyn_richtextfile_msdyn_imageblob].[ImageDescriptorId])
    left join [SystemUserBase] [lk_msdyn_richtextfile_createdby] on ([msdyn_richtextfileBase].[CreatedBy] = [lk_msdyn_richtextfile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_richtextfile_createdonbehalfby] on ([msdyn_richtextfileBase].[CreatedOnBehalfBy] = [lk_msdyn_richtextfile_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_richtextfile_modifiedby] on ([msdyn_richtextfileBase].[ModifiedBy] = [lk_msdyn_richtextfile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_richtextfile_modifiedonbehalfby] on ([msdyn_richtextfileBase].[ModifiedOnBehalfBy] = [lk_msdyn_richtextfile_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_richtextfileBase].OwnerId = XXowner.OwnerId)
