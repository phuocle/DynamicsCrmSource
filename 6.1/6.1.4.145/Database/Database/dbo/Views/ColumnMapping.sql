


--
-- base view for ColumnMapping
--
create view dbo.[ColumnMapping]
 (
    -- logical attributes
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ImportMapIdName],

    -- physical attributes
    [ColumnMappingId],
    [CreatedBy],
    [TargetEntityName],
    [StatusCode],
    [ProcessCode],
    [ModifiedOn],
    [TargetAttributeName],
    [CreatedOn],
    [ImportMapId],
    [SourceAttributeName],
    [SourceEntityName],
    [ModifiedBy],
    [StateCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_columnmapping_createdby].[YomiFullName],
    [lk_columnmapping_modifiedonbehalfby].[YomiFullName],
    [lk_columnmapping_modifiedby].[YomiFullName],
    [lk_columnmapping_modifiedby].[FullName],
    [lk_columnmapping_createdby].[FullName],
    [lk_columnmapping_createdonbehalfby].[YomiFullName],
    [lk_columnmapping_createdonbehalfby].[FullName],
    [lk_columnmapping_modifiedonbehalfby].[FullName],
    [ColumnMapping_ImportMap].[Name],

    -- physical attribute
    [ColumnMappingBase].[ColumnMappingId],
    [ColumnMappingBase].[CreatedBy],
    [ColumnMappingBase].[TargetEntityName],
    [ColumnMappingBase].[StatusCode],
    [ColumnMappingBase].[ProcessCode],
    [ColumnMappingBase].[ModifiedOn],
    [ColumnMappingBase].[TargetAttributeName],
    [ColumnMappingBase].[CreatedOn],
    [ColumnMappingBase].[ImportMapId],
    [ColumnMappingBase].[SourceAttributeName],
    [ColumnMappingBase].[SourceEntityName],
    [ColumnMappingBase].[ModifiedBy],
    [ColumnMappingBase].[StateCode],
    [ColumnMappingBase].[CreatedOnBehalfBy],
    [ColumnMappingBase].[ModifiedOnBehalfBy]
from [ColumnMappingBase] 
    left join [ImportMapBase] [ColumnMapping_ImportMap] on ([ColumnMappingBase].[ImportMapId] = [ColumnMapping_ImportMap].[ImportMapId])
    left join [SystemUserBase] [lk_columnmapping_createdby] with(nolock) on ([ColumnMappingBase].[CreatedBy] = [lk_columnmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_columnmapping_createdonbehalfby] with(nolock) on ([ColumnMappingBase].[CreatedOnBehalfBy] = [lk_columnmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_columnmapping_modifiedby] with(nolock) on ([ColumnMappingBase].[ModifiedBy] = [lk_columnmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_columnmapping_modifiedonbehalfby] with(nolock) on ([ColumnMappingBase].[ModifiedOnBehalfBy] = [lk_columnmapping_modifiedonbehalfby].[SystemUserId])
