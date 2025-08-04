


--
-- base view for ImportFile
--
create view dbo.[ImportFile]
 (
    -- logical attributes
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ImportIdName],
    [CreatedOnBehalfByYomiName],
    [ImportMapIdName],
    [CreatedByName],
    [ModifiedByYomiName],
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
    [Name],
    [IsFirstRowHeader],
    [OwningBusinessUnit],
    [ModifiedBy],
    [SuccessCount],
    [StatusCode],
    [AdditionalHeaderRow],
    [ProcessCode],
    [ParsedTableColumnsNumber],
    [Content],
    [RecordsOwnerId],
    [Source],
    [TimeZoneRuleVersionNumber],
    [SourceEntityName],
    [StateCode],
    [ParsedTableColumnPrefix],
    [ParsedTableName],
    [ProgressCounter],
    [EnableDuplicateDetection],
    [ImportId],
    [FailureCount],
    [FieldDelimiterCode],
    [TargetEntityName],
    [UTCConversionTimeZoneCode],
    [HeaderRow],
    [CompletedOn],
    [DataDelimiterCode],
    [TotalCount],
    [ProcessingStatus],
    [ImportFileId],
    [Size],
    [CreatedOn],
    [ImportMapId],
    [UseSystemMap],
    [ModifiedOn],
    [RecordsOwnerIdType],
    [CreatedBy],
    [RecordsOwnerIdName],
    [RelatedEntityColumns],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [FileTypeCode],
    [PartialFailureCount]
) with view_metadata as
select
    -- logical attributes
    [lk_importfilebase_createdby].[YomiFullName],
    [lk_importfilebase_modifiedby].[FullName],
    [lk_importfilebase_modifiedonbehalfby].[YomiFullName],
    [lk_importfilebase_createdonbehalfby].[FullName],
    [Import_ImportFile].[Name],
    [lk_importfilebase_createdonbehalfby].[YomiFullName],
    [ImportMap_ImportFile].[Name],
    [lk_importfilebase_createdby].[FullName],
    [lk_importfilebase_modifiedby].[YomiFullName],
    [lk_importfilebase_modifiedonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [ImportFileBase].OwnerId,
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
    [ImportFileBase].[Name],
    [ImportFileBase].[IsFirstRowHeader],
    [ImportFileBase].[OwningBusinessUnit],
    [ImportFileBase].[ModifiedBy],
    [ImportFileBase].[SuccessCount],
    [ImportFileBase].[StatusCode],
    [ImportFileBase].[AdditionalHeaderRow],
    [ImportFileBase].[ProcessCode],
    [ImportFileBase].[ParsedTableColumnsNumber],
    [ImportFileBase].[Content],
    [ImportFileBase].[RecordsOwnerId],
    [ImportFileBase].[Source],
    [ImportFileBase].[TimeZoneRuleVersionNumber],
    [ImportFileBase].[SourceEntityName],
    [ImportFileBase].[StateCode],
    [ImportFileBase].[ParsedTableColumnPrefix],
    [ImportFileBase].[ParsedTableName],
    [ImportFileBase].[ProgressCounter],
    [ImportFileBase].[EnableDuplicateDetection],
    [ImportFileBase].[ImportId],
    [ImportFileBase].[FailureCount],
    [ImportFileBase].[FieldDelimiterCode],
    [ImportFileBase].[TargetEntityName],
    [ImportFileBase].[UTCConversionTimeZoneCode],
    [ImportFileBase].[HeaderRow],
    [ImportFileBase].[CompletedOn],
    [ImportFileBase].[DataDelimiterCode],
    [ImportFileBase].[TotalCount],
    [ImportFileBase].[ProcessingStatus],
    [ImportFileBase].[ImportFileId],
    [ImportFileBase].[Size],
    [ImportFileBase].[CreatedOn],
    [ImportFileBase].[ImportMapId],
    [ImportFileBase].[UseSystemMap],
    [ImportFileBase].[ModifiedOn],
    [ImportFileBase].[RecordsOwnerIdType],
    [ImportFileBase].[CreatedBy],
    [ImportFileBase].[RecordsOwnerIdName],
    [ImportFileBase].[RelatedEntityColumns],
    [ImportFileBase].[CreatedOnBehalfBy],
    [ImportFileBase].[ModifiedOnBehalfBy],
    [ImportFileBase].[FileTypeCode],
    [ImportFileBase].[PartialFailureCount]
from [ImportFileBase] 
    left join [ImportBase] [Import_ImportFile] on ([ImportFileBase].[ImportId] = [Import_ImportFile].[ImportId])
    left join [ImportMapBase] [ImportMap_ImportFile] on ([ImportFileBase].[ImportMapId] = [ImportMap_ImportFile].[ImportMapId])
    left join [SystemUserBase] [lk_importfilebase_createdby] with(nolock) on ([ImportFileBase].[CreatedBy] = [lk_importfilebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importfilebase_createdonbehalfby] with(nolock) on ([ImportFileBase].[CreatedOnBehalfBy] = [lk_importfilebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importfilebase_modifiedby] with(nolock) on ([ImportFileBase].[ModifiedBy] = [lk_importfilebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importfilebase_modifiedonbehalfby] with(nolock) on ([ImportFileBase].[ModifiedOnBehalfBy] = [lk_importfilebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([ImportFileBase].OwnerId = XXowner.OwnerId)
