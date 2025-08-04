


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
    [ImportMapIdName],
    [CreatedOnBehalfByYomiName],

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
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [TransformationMappingIdUnique]
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
    [TransformationMapping_ImportMap].[Name],
    [lk_transformationmapping_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[ImportMapId],
    [T1].[TransformationTypeName],
    [T1].[ProcessCode],
    [T1].[SourceEntityName],
    [T1].[StatusCode],
    [T1].[ModifiedOn],
    [T1].[CreatedBy],
    [T1].[TransformationMappingId],
    [T1].[ModifiedBy],
    [T1].[CreatedOn],
    [T1].[StateCode],
    [T1].[TargetEntityName],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[TransformationMappingIdUnique]
from [TransformationMappingBase] [T1]
    left join [SystemUserBase] [lk_transformationmapping_createdby] on ([T1].[CreatedBy] = [lk_transformationmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationmapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_transformationmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationmapping_modifiedby] on ([T1].[ModifiedBy] = [lk_transformationmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_transformationmapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_transformationmapping_modifiedonbehalfby].[SystemUserId])
    left join [ImportMapBase] [TransformationMapping_ImportMap] on ([T1].[ImportMapId] = [TransformationMapping_ImportMap].[ImportMapId] and [TransformationMapping_ImportMap].OverwriteTime = 0 and [TransformationMapping_ImportMap].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0