


--
-- base view for TransformationParameterMapping
--
create view dbo.[TransformationParameterMapping]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [TransformationMappingIdName],

    -- physical attributes
    [ParameterArrayIndex],
    [ParameterTypeCode],
    [TransformationParameterMappingId],
    [TransformationMappingId],
    [CreatedOn],
    [CreatedBy],
    [DataTypeCode],
    [Data],
    [ModifiedOn],
    [ModifiedBy],
    [ParameterSequence],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_transformationparametermapping_modifiedonbehalfby].[FullName],
    [lk_transformationparametermapping_createdonbehalfby].[FullName],
    [lk_transformationparametermapping_createdby].[FullName],
    [lk_transformationparametermapping_modifiedonbehalfby].[YomiFullName],
    [lk_transformationparametermapping_modifiedby].[FullName],
    [lk_transformationparametermapping_createdonbehalfby].[YomiFullName],
    [lk_transformationparametermapping_createdby].[YomiFullName],
    [lk_transformationparametermapping_modifiedby].[YomiFullName],
    [TransformationParameterMapping_TransformationMapping].[TransformationTypeName],

    -- physical attribute
    [TransformationParameterMappingBase].[ParameterArrayIndex],
    [TransformationParameterMappingBase].[ParameterTypeCode],
    [TransformationParameterMappingBase].[TransformationParameterMappingId],
    [TransformationParameterMappingBase].[TransformationMappingId],
    [TransformationParameterMappingBase].[CreatedOn],
    [TransformationParameterMappingBase].[CreatedBy],
    [TransformationParameterMappingBase].[DataTypeCode],
    [TransformationParameterMappingBase].[Data],
    [TransformationParameterMappingBase].[ModifiedOn],
    [TransformationParameterMappingBase].[ModifiedBy],
    [TransformationParameterMappingBase].[ParameterSequence],
    [TransformationParameterMappingBase].[CreatedOnBehalfBy],
    [TransformationParameterMappingBase].[ModifiedOnBehalfBy]
from [TransformationParameterMappingBase] 
    left join [SystemUserBase] [lk_transformationparametermapping_createdby] with(nolock) on ([TransformationParameterMappingBase].[CreatedBy] = [lk_transformationparametermapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationparametermapping_createdonbehalfby] with(nolock) on ([TransformationParameterMappingBase].[CreatedOnBehalfBy] = [lk_transformationparametermapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationparametermapping_modifiedby] with(nolock) on ([TransformationParameterMappingBase].[ModifiedBy] = [lk_transformationparametermapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationparametermapping_modifiedonbehalfby] with(nolock) on ([TransformationParameterMappingBase].[ModifiedOnBehalfBy] = [lk_transformationparametermapping_modifiedonbehalfby].[SystemUserId])
    left join [TransformationMappingBase] [TransformationParameterMapping_TransformationMapping] on ([TransformationParameterMappingBase].[TransformationMappingId] = [TransformationParameterMapping_TransformationMapping].[TransformationMappingId])
