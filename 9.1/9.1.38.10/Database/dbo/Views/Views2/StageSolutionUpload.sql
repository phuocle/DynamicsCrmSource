


--
-- base view for StageSolutionUpload
--
create view dbo.[StageSolutionUpload]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [SolutionFile_Name],
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
    [StageSolutionUploadId],
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
    [SolutionUniqueName]
) with view_metadata as
select
    -- logical attributes
    [lk_stagesolutionupload_createdby].[FullName],
    [lk_stagesolutionupload_createdby].[YomiFullName],
    [lk_stagesolutionupload_createdonbehalfby].[FullName],
    [lk_stagesolutionupload_createdonbehalfby].[YomiFullName],
    [FileAttachment_StageSolutionUpload_SolutionFile].[FileName],
    [lk_stagesolutionupload_modifiedby].[FullName],
    [lk_stagesolutionupload_modifiedby].[YomiFullName],
    [lk_stagesolutionupload_modifiedonbehalfby].[FullName],
    [lk_stagesolutionupload_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [StageSolutionUploadBase].OwnerId,
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
    [StageSolutionUploadBase].[StageSolutionUploadId],
    [StageSolutionUploadBase].[CreatedOn],
    [StageSolutionUploadBase].[CreatedBy],
    [StageSolutionUploadBase].[ModifiedOn],
    [StageSolutionUploadBase].[ModifiedBy],
    [StageSolutionUploadBase].[CreatedOnBehalfBy],
    [StageSolutionUploadBase].[ModifiedOnBehalfBy],
    [StageSolutionUploadBase].[OwningBusinessUnit],
    [StageSolutionUploadBase].[statecode],
    [StageSolutionUploadBase].[statuscode],
    [StageSolutionUploadBase].[VersionNumber],
    [StageSolutionUploadBase].[ImportSequenceNumber],
    [StageSolutionUploadBase].[OverriddenCreatedOn],
    [StageSolutionUploadBase].[TimeZoneRuleVersionNumber],
    [StageSolutionUploadBase].[UTCConversionTimeZoneCode],
    [StageSolutionUploadBase].[name],
    [StageSolutionUploadBase].[SolutionFile],
    [StageSolutionUploadBase].[SolutionFileName],
    [StageSolutionUploadBase].[SolutionUniqueName]
from [StageSolutionUploadBase] 
    left join [FileAttachmentBase] [FileAttachment_StageSolutionUpload_SolutionFile] on ([StageSolutionUploadBase].[SolutionFile] = [FileAttachment_StageSolutionUpload_SolutionFile].[FileAttachmentId])
    left join [SystemUserBase] [lk_stagesolutionupload_createdby] on ([StageSolutionUploadBase].[CreatedBy] = [lk_stagesolutionupload_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_stagesolutionupload_createdonbehalfby] on ([StageSolutionUploadBase].[CreatedOnBehalfBy] = [lk_stagesolutionupload_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_stagesolutionupload_modifiedby] on ([StageSolutionUploadBase].[ModifiedBy] = [lk_stagesolutionupload_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_stagesolutionupload_modifiedonbehalfby] on ([StageSolutionUploadBase].[ModifiedOnBehalfBy] = [lk_stagesolutionupload_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([StageSolutionUploadBase].OwnerId = XXowner.OwnerId)
