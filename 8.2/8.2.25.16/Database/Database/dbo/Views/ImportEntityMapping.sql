


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
    [ModifiedOnBehalfBy]
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
    [ImportEntityMappingBase].[ImportEntityMappingId],
    [ImportEntityMappingBase].[CreatedBy],
    [ImportEntityMappingBase].[TargetEntityName],
    [ImportEntityMappingBase].[StatusCode],
    [ImportEntityMappingBase].[ProcessCode],
    [ImportEntityMappingBase].[ModifiedOn],
    [ImportEntityMappingBase].[CreatedOn],
    [ImportEntityMappingBase].[ImportMapId],
    [ImportEntityMappingBase].[DeDupe],
    [ImportEntityMappingBase].[SourceEntityName],
    [ImportEntityMappingBase].[ModifiedBy],
    [ImportEntityMappingBase].[StateCode],
    [ImportEntityMappingBase].[CreatedOnBehalfBy],
    [ImportEntityMappingBase].[ModifiedOnBehalfBy]
from [ImportEntityMappingBase] 
    left join [ImportMapBase] [ImportEntityMapping_ImportMap] on ([ImportEntityMappingBase].[ImportMapId] = [ImportEntityMapping_ImportMap].[ImportMapId])
    left join [SystemUserBase] [lk_importentitymapping_createdby] with(nolock) on ([ImportEntityMappingBase].[CreatedBy] = [lk_importentitymapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_importentitymapping_createdonbehalfby] with(nolock) on ([ImportEntityMappingBase].[CreatedOnBehalfBy] = [lk_importentitymapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_importentitymapping_modifiedby] with(nolock) on ([ImportEntityMappingBase].[ModifiedBy] = [lk_importentitymapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_importentitymapping_modifiedonbehalfby] with(nolock) on ([ImportEntityMappingBase].[ModifiedOnBehalfBy] = [lk_importentitymapping_modifiedonbehalfby].[SystemUserId])
