


--
-- base view for ImportData
--
create view dbo.[ImportData]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [ImportFileIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedOn],
    [LineNumber],
    [RecordId],
    [Data],
    [ModifiedOn],
    [ImportFileId],
    [ModifiedBy],
    [ImportDataId],
    [CreatedBy],
    [StateCode],
    [OwningBusinessUnit],
    [HasError],
    [StatusCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ErrorType]
) with view_metadata as
select
    -- logical attributes
    [lk_importdatabase_modifiedonbehalfby].[FullName],
    [lk_importdatabase_createdby].[FullName],
    [ImportFile_ImportData].[Name],
    [lk_importdatabase_modifiedonbehalfby].[YomiFullName],
    [lk_importdatabase_createdonbehalfby].[FullName],
    [lk_importdatabase_modifiedby].[FullName],
    [lk_importdatabase_createdonbehalfby].[YomiFullName],
    [lk_importdatabase_modifiedby].[YomiFullName],
    [lk_importdatabase_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [ImportDataBase].OwnerId,
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
    [ImportDataBase].[CreatedOn],
    [ImportDataBase].[LineNumber],
    [ImportDataBase].[RecordId],
    [ImportDataBase].[Data],
    [ImportDataBase].[ModifiedOn],
    [ImportDataBase].[ImportFileId],
    [ImportDataBase].[ModifiedBy],
    [ImportDataBase].[ImportDataId],
    [ImportDataBase].[CreatedBy],
    [ImportDataBase].[StateCode],
    [ImportDataBase].[OwningBusinessUnit],
    [ImportDataBase].[HasError],
    [ImportDataBase].[StatusCode],
    [ImportDataBase].[CreatedOnBehalfBy],
    [ImportDataBase].[ModifiedOnBehalfBy],
    [ImportDataBase].[ErrorType]
from [ImportDataBase] 
    left join [ImportFileBase] [ImportFile_ImportData] on ([ImportDataBase].[ImportFileId] = [ImportFile_ImportData].[ImportFileId])
    left join [SystemUserBase] [lk_importdatabase_createdby] with(nolock) on ([ImportDataBase].[CreatedBy] = [lk_importdatabase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importdatabase_createdonbehalfby] with(nolock) on ([ImportDataBase].[CreatedOnBehalfBy] = [lk_importdatabase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importdatabase_modifiedby] with(nolock) on ([ImportDataBase].[ModifiedBy] = [lk_importdatabase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importdatabase_modifiedonbehalfby] with(nolock) on ([ImportDataBase].[ModifiedOnBehalfBy] = [lk_importdatabase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ImportDataBase].OwnerId = XXowner.OwnerId)
