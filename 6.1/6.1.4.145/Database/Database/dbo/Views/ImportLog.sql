


--
-- base view for ImportLog
--
create view dbo.[ImportLog]
 (
    -- logical attributes
    [ImportFileIdName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ImportDataIdName],
    [CreatedByName],
    [ModifiedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ModifiedBy],
    [SequenceNumber],
    [LineNumber],
    [AdditionalInfo],
    [LogPhaseCode],
    [StateCode],
    [ErrorNumber],
    [StatusCode],
    [CreatedOn],
    [ImportLogId],
    [ErrorDescription],
    [CreatedBy],
    [OwningBusinessUnit],
    [ModifiedOn],
    [HeaderColumn],
    [ColumnValue],
    [ImportDataId],
    [ImportFileId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [ImportLog_ImportFile].[Name],
    [lk_importlogbase_modifiedby].[FullName],
    [lk_importlogbase_createdonbehalfby].[YomiFullName],
    [lk_importlogbase_modifiedby].[YomiFullName],
    [lk_importlogbase_createdonbehalfby].[FullName],
    [lk_importlogbase_modifiedonbehalfby].[YomiFullName],
    [lk_importlogbase_createdby].[YomiFullName],
    [ImportLog_ImportData].[Data],
    [lk_importlogbase_createdby].[FullName],
    [lk_importlogbase_modifiedonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [ImportLogBase].OwnerId,
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
    [ImportLogBase].[ModifiedBy],
    [ImportLogBase].[SequenceNumber],
    [ImportLogBase].[LineNumber],
    [ImportLogBase].[AdditionalInfo],
    [ImportLogBase].[LogPhaseCode],
    [ImportLogBase].[StateCode],
    [ImportLogBase].[ErrorNumber],
    [ImportLogBase].[StatusCode],
    [ImportLogBase].[CreatedOn],
    [ImportLogBase].[ImportLogId],
    [ImportLogBase].[ErrorDescription],
    [ImportLogBase].[CreatedBy],
    [ImportLogBase].[OwningBusinessUnit],
    [ImportLogBase].[ModifiedOn],
    [ImportLogBase].[HeaderColumn],
    [ImportLogBase].[ColumnValue],
    [ImportLogBase].[ImportDataId],
    [ImportLogBase].[ImportFileId],
    [ImportLogBase].[CreatedOnBehalfBy],
    [ImportLogBase].[ModifiedOnBehalfBy]
from [ImportLogBase] 
    left join [ImportDataBase] [ImportLog_ImportData] on ([ImportLogBase].[ImportDataId] = [ImportLog_ImportData].[ImportDataId])
    left join [ImportFileBase] [ImportLog_ImportFile] on ([ImportLogBase].[ImportFileId] = [ImportLog_ImportFile].[ImportFileId])
    left join [SystemUserBase] [lk_importlogbase_createdby] with(nolock) on ([ImportLogBase].[CreatedBy] = [lk_importlogbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importlogbase_createdonbehalfby] with(nolock) on ([ImportLogBase].[CreatedOnBehalfBy] = [lk_importlogbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importlogbase_modifiedby] with(nolock) on ([ImportLogBase].[ModifiedBy] = [lk_importlogbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importlogbase_modifiedonbehalfby] with(nolock) on ([ImportLogBase].[ModifiedOnBehalfBy] = [lk_importlogbase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ImportLogBase].OwnerId = XXowner.OwnerId)
