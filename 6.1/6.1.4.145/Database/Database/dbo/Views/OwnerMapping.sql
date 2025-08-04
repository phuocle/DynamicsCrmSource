


--
-- base view for OwnerMapping
--
create view dbo.[OwnerMapping]
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
    [ModifiedOnBehalfBy]
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
    [OwnerMappingBase].[CreatedOn],
    [OwnerMappingBase].[TargetUserValueForSourceCRMUserLink],
    [OwnerMappingBase].[StatusCode],
    [OwnerMappingBase].[ImportMapId],
    [OwnerMappingBase].[ModifiedBy],
    [OwnerMappingBase].[OwnerMappingId],
    [OwnerMappingBase].[CreatedBy],
    [OwnerMappingBase].[ProcessCode],
    [OwnerMappingBase].[SourceSystemUserName],
    [OwnerMappingBase].[TargetSystemUserId],
    [OwnerMappingBase].[StateCode],
    [OwnerMappingBase].[SourceUserValueForSourceCRMUserLink],
    [OwnerMappingBase].[TargetSystemUserDomainName],
    [OwnerMappingBase].[ModifiedOn],
    [OwnerMappingBase].[CreatedOnBehalfBy],
    [OwnerMappingBase].[ModifiedOnBehalfBy]
from [OwnerMappingBase] 
    left join [SystemUserBase] [lk_ownermapping_createdby] with(nolock) on ([OwnerMappingBase].[CreatedBy] = [lk_ownermapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_ownermapping_createdonbehalfby] with(nolock) on ([OwnerMappingBase].[CreatedOnBehalfBy] = [lk_ownermapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_ownermapping_modifiedby] with(nolock) on ([OwnerMappingBase].[ModifiedBy] = [lk_ownermapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_ownermapping_modifiedonbehalfby] with(nolock) on ([OwnerMappingBase].[ModifiedOnBehalfBy] = [lk_ownermapping_modifiedonbehalfby].[SystemUserId])
    left join [ImportMapBase] [OwnerMapping_ImportMap] on ([OwnerMappingBase].[ImportMapId] = [OwnerMapping_ImportMap].[ImportMapId])
