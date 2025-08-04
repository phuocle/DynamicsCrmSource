


--
-- base view for TransformationMapping
--
create view dbo.[TransformationMapping]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ImportMapIdName],

    -- physical attributes
    [ImportMapId],
    [TransformationTypeName],
    [ProcessCode],
    [SourceEntityName],
    [StatusCode],
    [ModifiedOn],
    [CreatedBy],
    [TransformationMappingId],
    [ModifiedBy],
    [CreatedOn],
    [StateCode],
    [TargetEntityName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_transformationmapping_modifiedby].[YomiFullName],
    [lk_transformationmapping_modifiedonbehalfby].[FullName],
    [lk_transformationmapping_modifiedonbehalfby].[YomiFullName],
    [lk_transformationmapping_createdonbehalfby].[FullName],
    [lk_transformationmapping_createdby].[FullName],
    [lk_transformationmapping_createdby].[YomiFullName],
    [lk_transformationmapping_modifiedby].[FullName],
    [lk_transformationmapping_createdonbehalfby].[YomiFullName],
    [TransformationMapping_ImportMap].[Name],

    -- physical attribute
    [TransformationMappingBase].[ImportMapId],
    [TransformationMappingBase].[TransformationTypeName],
    [TransformationMappingBase].[ProcessCode],
    [TransformationMappingBase].[SourceEntityName],
    [TransformationMappingBase].[StatusCode],
    [TransformationMappingBase].[ModifiedOn],
    [TransformationMappingBase].[CreatedBy],
    [TransformationMappingBase].[TransformationMappingId],
    [TransformationMappingBase].[ModifiedBy],
    [TransformationMappingBase].[CreatedOn],
    [TransformationMappingBase].[StateCode],
    [TransformationMappingBase].[TargetEntityName],
    [TransformationMappingBase].[CreatedOnBehalfBy],
    [TransformationMappingBase].[ModifiedOnBehalfBy]
from [TransformationMappingBase] 
    left join [SystemUserBase] [lk_transformationmapping_createdby] with(nolock) on ([TransformationMappingBase].[CreatedBy] = [lk_transformationmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationmapping_createdonbehalfby] with(nolock) on ([TransformationMappingBase].[CreatedOnBehalfBy] = [lk_transformationmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationmapping_modifiedby] with(nolock) on ([TransformationMappingBase].[ModifiedBy] = [lk_transformationmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationmapping_modifiedonbehalfby] with(nolock) on ([TransformationMappingBase].[ModifiedOnBehalfBy] = [lk_transformationmapping_modifiedonbehalfby].[SystemUserId])
    left join [ImportMapBase] [TransformationMapping_ImportMap] on ([TransformationMappingBase].[ImportMapId] = [TransformationMapping_ImportMap].[ImportMapId])
