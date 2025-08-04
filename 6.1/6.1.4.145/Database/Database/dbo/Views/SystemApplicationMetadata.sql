


--
-- base view for SystemApplicationMetadata
--
create view dbo.[SystemApplicationMetadata]
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

    -- physical attributes
    [SystemApplicationMetadataId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [AssociatedEntityLogicalName],
    [Data],
    [DisplayName],
    [FormFactor],
    [IsDefault],
    [MetadataType],
    [SourceId],
    [MetadataSubtype],
    [Lcid],
    [Version],
    [State]
) with view_metadata as
select
    -- logical attributes
    [lk_systemapplicationmetadata_createdby].[FullName],
    [lk_systemapplicationmetadata_createdby].[YomiFullName],
    [lk_systemapplicationmetadata_createdonbehalfby].[FullName],
    [lk_systemapplicationmetadata_createdonbehalfby].[YomiFullName],
    [lk_systemapplicationmetadata_modifiedby].[FullName],
    [lk_systemapplicationmetadata_modifiedby].[YomiFullName],
    [lk_systemapplicationmetadata_modifiedonbehalfby].[FullName],
    [lk_systemapplicationmetadata_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [SystemApplicationMetadataBase].[SystemApplicationMetadataId],
    [SystemApplicationMetadataBase].[CreatedOn],
    [SystemApplicationMetadataBase].[CreatedBy],
    [SystemApplicationMetadataBase].[ModifiedOn],
    [SystemApplicationMetadataBase].[ModifiedBy],
    [SystemApplicationMetadataBase].[CreatedOnBehalfBy],
    [SystemApplicationMetadataBase].[ModifiedOnBehalfBy],
    [SystemApplicationMetadataBase].[OrganizationId],
    [SystemApplicationMetadataBase].[AssociatedEntityLogicalName],
    [SystemApplicationMetadataBase].[Data],
    [SystemApplicationMetadataBase].[DisplayName],
    [SystemApplicationMetadataBase].[FormFactor],
    [SystemApplicationMetadataBase].[IsDefault],
    [SystemApplicationMetadataBase].[MetadataType],
    [SystemApplicationMetadataBase].[SourceId],
    [SystemApplicationMetadataBase].[MetadataSubtype],
    [SystemApplicationMetadataBase].[Lcid],
    [SystemApplicationMetadataBase].[Version],
    [SystemApplicationMetadataBase].[State]
from [SystemApplicationMetadataBase] 
    left join [SystemUserBase] [lk_systemapplicationmetadata_createdby] with(nolock) on ([SystemApplicationMetadataBase].[CreatedBy] = [lk_systemapplicationmetadata_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_systemapplicationmetadata_createdonbehalfby] with(nolock) on ([SystemApplicationMetadataBase].[CreatedOnBehalfBy] = [lk_systemapplicationmetadata_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_systemapplicationmetadata_modifiedby] with(nolock) on ([SystemApplicationMetadataBase].[ModifiedBy] = [lk_systemapplicationmetadata_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_systemapplicationmetadata_modifiedonbehalfby] with(nolock) on ([SystemApplicationMetadataBase].[ModifiedOnBehalfBy] = [lk_systemapplicationmetadata_modifiedonbehalfby].[SystemUserId])
