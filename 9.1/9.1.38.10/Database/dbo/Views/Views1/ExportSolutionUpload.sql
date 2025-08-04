


--
-- base view for ExportSolutionUpload
--
create view dbo.[ExportSolutionUpload]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [SolutionFile_Name],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [ExportSolutionUploadId],
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
    [name],
    [SolutionFile],
    [SolutionFileName],
    [SolutionUniqueName],
    [AsyncOperationId]
) with view_metadata as
select
    -- logical attributes
    [lk_exportsolutionupload_modifiedby].[FullName],
    [lk_exportsolutionupload_modifiedby].[YomiFullName],
    [lk_exportsolutionupload_createdby].[FullName],
    [lk_exportsolutionupload_createdby].[YomiFullName],
    [FileAttachment_ExportSolutionUpload_SolutionFile].[FileName],
    [lk_exportsolutionupload_createdonbehalfby].[FullName],
    [lk_exportsolutionupload_createdonbehalfby].[YomiFullName],
    [lk_exportsolutionupload_modifiedonbehalfby].[FullName],
    [lk_exportsolutionupload_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [ExportSolutionUploadBase].OwnerId,
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
    [ExportSolutionUploadBase].[ExportSolutionUploadId],
    [ExportSolutionUploadBase].[CreatedOn],
    [ExportSolutionUploadBase].[CreatedBy],
    [ExportSolutionUploadBase].[ModifiedOn],
    [ExportSolutionUploadBase].[ModifiedBy],
    [ExportSolutionUploadBase].[CreatedOnBehalfBy],
    [ExportSolutionUploadBase].[ModifiedOnBehalfBy],
    [ExportSolutionUploadBase].[OwningBusinessUnit],
    [ExportSolutionUploadBase].[statecode],
    [ExportSolutionUploadBase].[statuscode],
    [ExportSolutionUploadBase].[VersionNumber],
    [ExportSolutionUploadBase].[ImportSequenceNumber],
    [ExportSolutionUploadBase].[OverriddenCreatedOn],
    [ExportSolutionUploadBase].[TimeZoneRuleVersionNumber],
    [ExportSolutionUploadBase].[UTCConversionTimeZoneCode],
    [ExportSolutionUploadBase].[name],
    [ExportSolutionUploadBase].[SolutionFile],
    [ExportSolutionUploadBase].[SolutionFileName],
    [ExportSolutionUploadBase].[SolutionUniqueName],
    [ExportSolutionUploadBase].[AsyncOperationId]
from [ExportSolutionUploadBase] 
    left join [FileAttachmentBase] [FileAttachment_ExportSolutionUpload_SolutionFile] on ([ExportSolutionUploadBase].[SolutionFile] = [FileAttachment_ExportSolutionUpload_SolutionFile].[FileAttachmentId])
    left join [SystemUserBase] [lk_exportsolutionupload_createdby] on ([ExportSolutionUploadBase].[CreatedBy] = [lk_exportsolutionupload_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_exportsolutionupload_createdonbehalfby] on ([ExportSolutionUploadBase].[CreatedOnBehalfBy] = [lk_exportsolutionupload_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_exportsolutionupload_modifiedby] on ([ExportSolutionUploadBase].[ModifiedBy] = [lk_exportsolutionupload_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_exportsolutionupload_modifiedonbehalfby] on ([ExportSolutionUploadBase].[ModifiedOnBehalfBy] = [lk_exportsolutionupload_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([ExportSolutionUploadBase].OwnerId = XXowner.OwnerId)
