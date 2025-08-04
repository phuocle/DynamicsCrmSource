


--
-- base view for ImportEntityMapping
--
create view dbo.[ImportEntityMapping]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [ImportMapIdName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],

    -- physical attributes
    [ImportEntityMappingId],
    [CreatedBy],
    [TargetEntityName],
    [StatusCode],
    [ProcessCode],
    [ModifiedOn],
    [CreatedOn],
    [ImportMapId],
    [DeDupe],
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
    [ImportEntityMappingIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_importentitymapping_modifiedonbehalfby].[FullName],
    [lk_importentitymapping_createdonbehalfby].[FullName],
    [lk_importentitymapping_modifiedby].[YomiFullName],
    [lk_importentitymapping_createdby].[YomiFullName],
    [ImportEntityMapping_ImportMap].[Name],
    [lk_importentitymapping_createdonbehalfby].[YomiFullName],
    [lk_importentitymapping_modifiedby].[FullName],
    [lk_importentitymapping_modifiedonbehalfby].[YomiFullName],
    [lk_importentitymapping_createdby].[FullName],

    -- physical attribute
    [T1].[ImportEntityMappingId],
    [T1].[CreatedBy],
    [T1].[TargetEntityName],
    [T1].[StatusCode],
    [T1].[ProcessCode],
    [T1].[ModifiedOn],
    [T1].[CreatedOn],
    [T1].[ImportMapId],
    [T1].[DeDupe],
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
    [T1].[ImportEntityMappingIdUnique]
from [ImportEntityMappingBase] [T1]
    left join [ImportMapBase] [ImportEntityMapping_ImportMap] on ([T1].[ImportMapId] = [ImportEntityMapping_ImportMap].[ImportMapId] and [ImportEntityMapping_ImportMap].OverwriteTime = 0 and [ImportEntityMapping_ImportMap].ComponentState = 0)
    left join [SystemUserBase] [lk_importentitymapping_createdby] on ([T1].[CreatedBy] = [lk_importentitymapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importentitymapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_importentitymapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importentitymapping_modifiedby] on ([T1].[ModifiedBy] = [lk_importentitymapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importentitymapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_importentitymapping_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0