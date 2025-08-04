


--
-- logical view for TransformationParameterMappingLogical
--
create view dbo.[TransformationParameterMappingLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [TransformationMappingIdName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByYomiName],

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
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [TransformationParameterMappingIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_transformationparametermapping_modifiedonbehalfby].[FullName],
    [lk_transformationparametermapping_createdonbehalfby].[FullName],
    [lk_transformationparametermapping_createdby].[FullName],
    [lk_transformationparametermapping_modifiedonbehalfby].[YomiFullName],
    [TransformationParameterMapping_TransformationMapping].[TransformationTypeName],
    [lk_transformationparametermapping_modifiedby].[FullName],
    [lk_transformationparametermapping_createdonbehalfby].[YomiFullName],
    [lk_transformationparametermapping_createdby].[YomiFullName],
    [lk_transformationparametermapping_modifiedby].[YomiFullName],

    -- physical attribute
    [T1].[ParameterArrayIndex],
    [T1].[ParameterTypeCode],
    [T1].[TransformationParameterMappingId],
    [T1].[TransformationMappingId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[DataTypeCode],
    [T1].[Data],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ParameterSequence],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[TransformationParameterMappingIdUnique]
from [TransformationParameterMappingBase] [T1]
    left join [SystemUserBase] [lk_transformationparametermapping_createdby] on ([T1].[CreatedBy] = [lk_transformationparametermapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationparametermapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_transformationparametermapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationparametermapping_modifiedby] on ([T1].[ModifiedBy] = [lk_transformationparametermapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationparametermapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_transformationparametermapping_modifiedonbehalfby].[SystemUserId])
    left join [TransformationMappingBase] [TransformationParameterMapping_TransformationMapping] on ([T1].[TransformationMappingId] = [TransformationParameterMapping_TransformationMapping].[TransformationMappingId] and [TransformationParameterMapping_TransformationMapping].OverwriteTime = 0 and [TransformationParameterMapping_TransformationMapping].ComponentState = 0)
where T1.OverwriteTime = 0