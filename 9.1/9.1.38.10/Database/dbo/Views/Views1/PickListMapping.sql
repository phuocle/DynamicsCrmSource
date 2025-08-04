


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
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [PickListMappingIdUnique]
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
    [T1].[StatusCode],
    [T1].[PickListMappingId],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[TargetValue],
    [T1].[ProcessCode],
    [T1].[ColumnMappingId],
    [T1].[SourceValue],
    [T1].[CreatedOn],
    [T1].[StateCode],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[PickListMappingIdUnique]
from [PickListMappingBase] [T1]
    left join [SystemUserBase] [lk_picklistmapping_createdby] on ([T1].[CreatedBy] = [lk_picklistmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_picklistmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_modifiedby] on ([T1].[ModifiedBy] = [lk_picklistmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_picklistmapping_modifiedonbehalfby].[SystemUserId])
    left join [ColumnMappingBase] [PickListMapping_ColumnMapping] on ([T1].[ColumnMappingId] = [PickListMapping_ColumnMapping].[ColumnMappingId] and [PickListMapping_ColumnMapping].OverwriteTime = 0 and [PickListMapping_ColumnMapping].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0