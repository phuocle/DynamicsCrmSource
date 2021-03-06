USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[OwnerMapping]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for OwnerMapping
--
create view [dbo].[OwnerMapping]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ImportMapIdName],

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
    [lk_ownermapping_modifiedonbehalfby].[YomiFullName],
    [lk_ownermapping_modifiedonbehalfby].[FullName],
    [lk_ownermapping_modifiedby].[FullName],
    [lk_ownermapping_modifiedby].[YomiFullName],
    [lk_ownermapping_createdonbehalfby].[FullName],
    [lk_ownermapping_createdonbehalfby].[YomiFullName],
    [lk_ownermapping_createdby].[FullName],
    [lk_ownermapping_createdby].[YomiFullName],
    [OwnerMapping_ImportMap].[Name],

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

GO
