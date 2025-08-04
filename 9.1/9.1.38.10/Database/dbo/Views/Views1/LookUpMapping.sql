


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
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [LookUpMappingIdUnique]
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
    [T1].[LookUpEntityName],
    [T1].[CreatedBy],
    [T1].[LookUpSourceCode],
    [T1].[ColumnMappingId],
    [T1].[ModifiedOn],
    [T1].[LookUpMappingId],
    [T1].[TransformationParameterMappingId],
    [T1].[ProcessCode],
    [T1].[StatusCode],
    [T1].[StateCode],
    [T1].[CreatedOn],
    [T1].[LookUpAttributeName],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[LookUpMappingIdUnique]
from [LookUpMappingBase] [T1]
    left join [SystemUserBase] [lk_lookupmapping_createdby] on ([T1].[CreatedBy] = [lk_lookupmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_lookupmapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_lookupmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_lookupmapping_modifiedby] on ([T1].[ModifiedBy] = [lk_lookupmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_lookupmapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_lookupmapping_modifiedonbehalfby].[SystemUserId])
    left join [ColumnMappingBase] [LookUpMapping_ColumnMapping] on ([T1].[ColumnMappingId] = [LookUpMapping_ColumnMapping].[ColumnMappingId] and [LookUpMapping_ColumnMapping].OverwriteTime = 0 and [LookUpMapping_ColumnMapping].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0