


--
-- logical view for ColumnMappingLogical
--
create view dbo.[ColumnMappingLogical]
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
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [ColumnMappingIdUnique]
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
    [T1].[ColumnMappingId],
    [T1].[CreatedBy],
    [T1].[TargetEntityName],
    [T1].[StatusCode],
    [T1].[ProcessCode],
    [T1].[ModifiedOn],
    [T1].[TargetAttributeName],
    [T1].[CreatedOn],
    [T1].[ImportMapId],
    [T1].[SourceAttributeName],
    [T1].[SourceEntityName],
    [T1].[ModifiedBy],
    [T1].[StateCode],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[ColumnMappingIdUnique]
from [ColumnMappingBase] [T1]
    left join [ImportMapBase] [ColumnMapping_ImportMap] on ([T1].[ImportMapId] = [ColumnMapping_ImportMap].[ImportMapId] and [ColumnMapping_ImportMap].OverwriteTime = 0 and [ColumnMapping_ImportMap].ComponentState = 0)
    left join [SystemUserBase] [lk_columnmapping_createdby] on ([T1].[CreatedBy] = [lk_columnmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_columnmapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_columnmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_columnmapping_modifiedby] on ([T1].[ModifiedBy] = [lk_columnmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_columnmapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_columnmapping_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0