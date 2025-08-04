


--
-- base view for LookUpMapping
--
create view dbo.[LookUpMapping]
 (
    -- logical attributes
    [ModifiedByName],
    [ColumnMappingIdName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [LookUpEntityName],
    [CreatedBy],
    [LookUpSourceCode],
    [ColumnMappingId],
    [ModifiedOn],
    [LookUpMappingId],
    [TransformationParameterMappingId],
    [ProcessCode],
    [StatusCode],
    [StateCode],
    [CreatedOn],
    [LookUpAttributeName],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_lookupmapping_modifiedby].[FullName],
    [LookUpMapping_ColumnMapping].[SourceAttributeName],
    [lk_lookupmapping_modifiedonbehalfby].[FullName],
    [lk_lookupmapping_createdby].[YomiFullName],
    [lk_lookupmapping_createdonbehalfby].[FullName],
    [lk_lookupmapping_modifiedby].[YomiFullName],
    [lk_lookupmapping_modifiedonbehalfby].[YomiFullName],
    [lk_lookupmapping_createdby].[FullName],
    [lk_lookupmapping_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [LookUpMappingBase].[LookUpEntityName],
    [LookUpMappingBase].[CreatedBy],
    [LookUpMappingBase].[LookUpSourceCode],
    [LookUpMappingBase].[ColumnMappingId],
    [LookUpMappingBase].[ModifiedOn],
    [LookUpMappingBase].[LookUpMappingId],
    [LookUpMappingBase].[TransformationParameterMappingId],
    [LookUpMappingBase].[ProcessCode],
    [LookUpMappingBase].[StatusCode],
    [LookUpMappingBase].[StateCode],
    [LookUpMappingBase].[CreatedOn],
    [LookUpMappingBase].[LookUpAttributeName],
    [LookUpMappingBase].[ModifiedBy],
    [LookUpMappingBase].[CreatedOnBehalfBy],
    [LookUpMappingBase].[ModifiedOnBehalfBy]
from [LookUpMappingBase] 
    left join [SystemUserBase] [lk_lookupmapping_createdby] with(nolock) on ([LookUpMappingBase].[CreatedBy] = [lk_lookupmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_lookupmapping_createdonbehalfby] with(nolock) on ([LookUpMappingBase].[CreatedOnBehalfBy] = [lk_lookupmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_lookupmapping_modifiedby] with(nolock) on ([LookUpMappingBase].[ModifiedBy] = [lk_lookupmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_lookupmapping_modifiedonbehalfby] with(nolock) on ([LookUpMappingBase].[ModifiedOnBehalfBy] = [lk_lookupmapping_modifiedonbehalfby].[SystemUserId])
    left join [ColumnMappingBase] [LookUpMapping_ColumnMapping] on ([LookUpMappingBase].[ColumnMappingId] = [LookUpMapping_ColumnMapping].[ColumnMappingId])
