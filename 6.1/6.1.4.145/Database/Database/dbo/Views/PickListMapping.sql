


--
-- base view for PickListMapping
--
create view dbo.[PickListMapping]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [ColumnMappingIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],

    -- physical attributes
    [StatusCode],
    [PickListMappingId],
    [ModifiedOn],
    [ModifiedBy],
    [TargetValue],
    [ProcessCode],
    [ColumnMappingId],
    [SourceValue],
    [CreatedOn],
    [StateCode],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_picklistmapping_modifiedby].[YomiFullName],
    [lk_picklistmapping_modifiedby].[FullName],
    [lk_picklistmapping_modifiedonbehalfby].[YomiFullName],
    [lk_picklistmapping_modifiedonbehalfby].[FullName],
    [lk_picklistmapping_createdby].[FullName],
    [PickListMapping_ColumnMapping].[SourceAttributeName],
    [lk_picklistmapping_createdonbehalfby].[FullName],
    [lk_picklistmapping_createdonbehalfby].[YomiFullName],
    [lk_picklistmapping_createdby].[YomiFullName],

    -- physical attribute
    [PickListMappingBase].[StatusCode],
    [PickListMappingBase].[PickListMappingId],
    [PickListMappingBase].[ModifiedOn],
    [PickListMappingBase].[ModifiedBy],
    [PickListMappingBase].[TargetValue],
    [PickListMappingBase].[ProcessCode],
    [PickListMappingBase].[ColumnMappingId],
    [PickListMappingBase].[SourceValue],
    [PickListMappingBase].[CreatedOn],
    [PickListMappingBase].[StateCode],
    [PickListMappingBase].[CreatedBy],
    [PickListMappingBase].[CreatedOnBehalfBy],
    [PickListMappingBase].[ModifiedOnBehalfBy]
from [PickListMappingBase] 
    left join [SystemUserBase] [lk_picklistmapping_createdby] with(nolock) on ([PickListMappingBase].[CreatedBy] = [lk_picklistmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_createdonbehalfby] with(nolock) on ([PickListMappingBase].[CreatedOnBehalfBy] = [lk_picklistmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_modifiedby] with(nolock) on ([PickListMappingBase].[ModifiedBy] = [lk_picklistmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_modifiedonbehalfby] with(nolock) on ([PickListMappingBase].[ModifiedOnBehalfBy] = [lk_picklistmapping_modifiedonbehalfby].[SystemUserId])
    left join [ColumnMappingBase] [PickListMapping_ColumnMapping] on ([PickListMappingBase].[ColumnMappingId] = [PickListMapping_ColumnMapping].[ColumnMappingId])
