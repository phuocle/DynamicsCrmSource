SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for MobileOfflineProfileItemAssociationLogical
--
create view [dbo].[MobileOfflineProfileItemAssociationLogical]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [MobileOfflineProfileItemIdName],

    -- physical attributes
    [MobileOfflineProfileItemAssociationId],
    [Name],
    [SelectedRelationShipsSchema],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [MobileOfflineProfileItemId],
    [VersionNumber],
    [OrganizationId],
    [RelationshipId],
    [RelationshipDisplayName],
    [SolutionId],
    [ProcessId],
    [StageId],
    [IsManaged],
    [TraversedPath],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [PublishedOn],
    [MobileOfflineProfileItemAssociationIdUnique],
    [RelationshipData],
    [IntroducedVersion],
    [IsValidated],
    [RelationshipName],
    [ProfileItemAssociationEntityFilter]
) with view_metadata as
select
    -- logical attributes
    [lk_MobileOfflineProfileItemAssociation_createdby].[FullName],
    [lk_MobileOfflineProfileItemAssociation_createdby].[YomiFullName],
    [lk_mobileofflineprofileitemassociation_modifiedby].[FullName],
    [lk_mobileofflineprofileitemassociation_modifiedby].[YomiFullName],
    [lk_mobileofflineprofileitemassociation_createdonbehalfby].[YomiFullName],
    [lk_mobileofflineprofileitemassociation_createdonbehalfby].[FullName],
    [lk_mobileofflineprofileitemassociation_modifiedonbehalfby].[YomiFullName],
    [lk_mobileofflineprofileitemassociation_modifiedonbehalfby].[FullName],
    [MobileOfflineProfileItemAssociation_organization].[Name],
    [MobileOfflineProfileItem_MobileOfflineProfileItemAssociation].[Name],

    -- physical attribute
    [T1].[MobileOfflineProfileItemAssociationId],
    [T1].[Name],
    [T1].[SelectedRelationShipsSchema],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[MobileOfflineProfileItemId],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[RelationshipId],
    [T1].[RelationshipDisplayName],
    [T1].[SolutionId],
    [T1].[ProcessId],
    [T1].[StageId],
    [T1].[IsManaged],
    [T1].[TraversedPath],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[PublishedOn],
    [T1].[MobileOfflineProfileItemAssociationIdUnique],
    [T1].[RelationshipData],
    [T1].[IntroducedVersion],
    [T1].[IsValidated],
    [T1].[RelationshipName],
    [T1].[ProfileItemAssociationEntityFilter]
from [MobileOfflineProfileItemAssociationBase] [T1]
    left join [SystemUserBase] [lk_MobileOfflineProfileItemAssociation_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_MobileOfflineProfileItemAssociation_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_mobileofflineprofileitemassociation_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_mobileofflineprofileitemassociation_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_mobileofflineprofileitemassociation_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_mobileofflineprofileitemassociation_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_mobileofflineprofileitemassociation_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_mobileofflineprofileitemassociation_modifiedonbehalfby].[SystemUserId])
    left join [MobileOfflineProfileItemBase] [MobileOfflineProfileItem_MobileOfflineProfileItemAssociation] on ([T1].[MobileOfflineProfileItemId] = [MobileOfflineProfileItem_MobileOfflineProfileItemAssociation].[MobileOfflineProfileItemId] and [MobileOfflineProfileItem_MobileOfflineProfileItemAssociation].OverwriteTime = 0 and [MobileOfflineProfileItem_MobileOfflineProfileItemAssociation].ComponentState = 0)
    left join [OrganizationBase] [MobileOfflineProfileItemAssociation_organization] with(nolock) on ([T1].[OrganizationId] = [MobileOfflineProfileItemAssociation_organization].[OrganizationId])
where T1.OverwriteTime = 0
GO
