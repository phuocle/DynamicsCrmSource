


--
-- base view for UserApplicationMetadata
--
create view dbo.[UserApplicationMetadata]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [UserApplicationMetadataId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [AssociatedEntityLogicalName],
    [Data],
    [DisplayName],
    [FormFactor],
    [IsDefault],
    [MetadataType],
    [MetadataSubtype],
    [SourceId],
    [State],
    [Lcid]
) with view_metadata as
select
    -- logical attributes
    [lk_userapplicationmetadata_createdby].[FullName],
    [lk_userapplicationmetadata_createdby].[YomiFullName],
    [lk_userapplicationmetadata_createdonbehalfby].[FullName],
    [lk_userapplicationmetadata_createdonbehalfby].[YomiFullName],
    [lk_userapplicationmetadata_modifiedby].[FullName],
    [lk_userapplicationmetadata_modifiedby].[YomiFullName],
    [lk_userapplicationmetadata_modifiedonbehalfby].[FullName],
    [lk_userapplicationmetadata_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [UserApplicationMetadataBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [UserApplicationMetadataBase].[UserApplicationMetadataId],
    [UserApplicationMetadataBase].[CreatedOn],
    [UserApplicationMetadataBase].[CreatedBy],
    [UserApplicationMetadataBase].[ModifiedOn],
    [UserApplicationMetadataBase].[ModifiedBy],
    [UserApplicationMetadataBase].[CreatedOnBehalfBy],
    [UserApplicationMetadataBase].[ModifiedOnBehalfBy],
    [UserApplicationMetadataBase].[OwningBusinessUnit],
    [UserApplicationMetadataBase].[AssociatedEntityLogicalName],
    [UserApplicationMetadataBase].[Data],
    [UserApplicationMetadataBase].[DisplayName],
    [UserApplicationMetadataBase].[FormFactor],
    [UserApplicationMetadataBase].[IsDefault],
    [UserApplicationMetadataBase].[MetadataType],
    [UserApplicationMetadataBase].[MetadataSubtype],
    [UserApplicationMetadataBase].[SourceId],
    [UserApplicationMetadataBase].[State],
    [UserApplicationMetadataBase].[Lcid]
from [UserApplicationMetadataBase] 
    left join [SystemUserBase] [lk_userapplicationmetadata_createdby] with(nolock) on ([UserApplicationMetadataBase].[CreatedBy] = [lk_userapplicationmetadata_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_userapplicationmetadata_createdonbehalfby] with(nolock) on ([UserApplicationMetadataBase].[CreatedOnBehalfBy] = [lk_userapplicationmetadata_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_userapplicationmetadata_modifiedby] with(nolock) on ([UserApplicationMetadataBase].[ModifiedBy] = [lk_userapplicationmetadata_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_userapplicationmetadata_modifiedonbehalfby] with(nolock) on ([UserApplicationMetadataBase].[ModifiedOnBehalfBy] = [lk_userapplicationmetadata_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([UserApplicationMetadataBase].OwnerId = XXowner.OwnerId)
