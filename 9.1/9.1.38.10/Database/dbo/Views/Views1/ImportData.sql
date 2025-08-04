


--
-- base view for ImportData
--
create view dbo.[ImportData]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ImportFileIdName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [lk_importdatabase_modifiedonbehalfby].[YomiFullName],
    [ImportFile_ImportData].[Name],
    [lk_importdatabase_createdby].[FullName],
    [lk_importdatabase_createdby].[YomiFullName],
    [lk_importdatabase_createdonbehalfby].[FullName],
    [lk_importdatabase_createdonbehalfby].[YomiFullName],
    [lk_importdatabase_modifiedby].[FullName],
    [lk_importdatabase_modifiedby].[YomiFullName],

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
    left join [SystemUserBase] [lk_importdatabase_createdby]  on ([ImportDataBase].[CreatedBy] = [lk_importdatabase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importdatabase_createdonbehalfby]  on ([ImportDataBase].[CreatedOnBehalfBy] = [lk_importdatabase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importdatabase_modifiedby]  on ([ImportDataBase].[ModifiedBy] = [lk_importdatabase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importdatabase_modifiedonbehalfby]  on ([ImportDataBase].[ModifiedOnBehalfBy] = [lk_importdatabase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner  on ([ImportDataBase].OwnerId = XXowner.OwnerId)
