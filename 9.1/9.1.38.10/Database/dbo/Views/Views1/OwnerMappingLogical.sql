


--
-- logical view for OwnerMappingLogical
--
create view dbo.[OwnerMappingLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedByName],
    [ModifiedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ImportMapIdName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [CreatedOn],
    [TargetUserValueForSourceCRMUserLink],
    [StatusCode],
    [ImportMapId],
    [ModifiedBy],
    [OwnerMappingId],
    [CreatedBy],
    [ProcessCode],
    [SourceSystemUserName],
    [TargetSystemUserId],
    [StateCode],
    [SourceUserValueForSourceCRMUserLink],
    [TargetSystemUserDomainName],
    [ModifiedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [OwnerMappingIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_ownermapping_createdonbehalfby].[FullName],
    [lk_ownermapping_createdby].[FullName],
    [lk_ownermapping_modifiedby].[FullName],
    [lk_ownermapping_createdby].[YomiFullName],
    [lk_ownermapping_createdonbehalfby].[YomiFullName],
    [lk_ownermapping_modifiedby].[YomiFullName],
    [lk_ownermapping_modifiedonbehalfby].[YomiFullName],
    [OwnerMapping_ImportMap].[Name],
    [lk_ownermapping_modifiedonbehalfby].[FullName],

    -- physical attribute
    [T1].[CreatedOn],
    [T1].[TargetUserValueForSourceCRMUserLink],
    [T1].[StatusCode],
    [T1].[ImportMapId],
    [T1].[ModifiedBy],
    [T1].[OwnerMappingId],
    [T1].[CreatedBy],
    [T1].[ProcessCode],
    [T1].[SourceSystemUserName],
    [T1].[TargetSystemUserId],
    [T1].[StateCode],
    [T1].[SourceUserValueForSourceCRMUserLink],
    [T1].[TargetSystemUserDomainName],
    [T1].[ModifiedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[OwnerMappingIdUnique]
from [OwnerMappingBase] [T1]
    left join [SystemUserBase] [lk_ownermapping_createdby] on ([T1].[CreatedBy] = [lk_ownermapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ownermapping_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_ownermapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ownermapping_modifiedby] on ([T1].[ModifiedBy] = [lk_ownermapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ownermapping_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_ownermapping_modifiedonbehalfby].[SystemUserId])
    left join [ImportMapBase] [OwnerMapping_ImportMap] on ([T1].[ImportMapId] = [OwnerMapping_ImportMap].[ImportMapId] and [OwnerMapping_ImportMap].OverwriteTime = 0 and [OwnerMapping_ImportMap].ComponentState = 0)
where T1.OverwriteTime = 0