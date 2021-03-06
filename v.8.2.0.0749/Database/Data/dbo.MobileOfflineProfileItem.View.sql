USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[MobileOfflineProfileItem]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for MobileOfflineProfileItem
--
create view [dbo].[MobileOfflineProfileItem]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ProfileItemRuleName],
    [OrganizationIdName],
    [RegardingObjectIdName],

    -- physical attributes
    [MobileOfflineProfileItemId],
    [Name],
    [ViewQuery],
    [VersionNumber],
    [SolutionId],
    [CanBeFollowed],
    [GetRelatedEntityRecords],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [RegardingObjectId],
    [ProcessId],
    [StageId],
    [IsManaged],
    [OrganizationId],
    [ProfileItemRule],
    [TraversedPath],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [PublishedOn],
    [MobileOfflineProfileItemIdUnique],
    [IntroducedVersion],
    [SelectedEntityTypeCode],
    [IsVisibleInGrid],
    [RecordDistributionCriteria],
    [RecordsOwnedByMe],
    [RecordsOwnedByMyTeam],
    [RecordsOwnedByMyBusinessUnit],
    [RelationshipData],
    [IsValidated],
    [SelectedEntityMetadata],
    [EntityObjectTypeCode],
    [ProfileItemEntityFilter]
) with view_metadata as
select
    -- logical attributes
    [lk_mobileofflineprofileitem_createdonbehalfby].[YomiFullName],
    [lk_mobileofflineprofileitem_createdonbehalfby].[FullName],
    [lk_mobileofflineprofileitem_modifiedby].[FullName],
    [lk_mobileofflineprofileitem_modifiedby].[YomiFullName],
    [lk_MobileOfflineProfileItem_createdby].[FullName],
    [lk_MobileOfflineProfileItem_createdby].[YomiFullName],
    [lk_mobileofflineprofileitem_modifiedonbehalfby].[YomiFullName],
    [lk_mobileofflineprofileitem_modifiedonbehalfby].[FullName],
    [lk_mobileofflineprofileitem_savedquery].[Name],
    [MobileOfflineProfileItem_organization].[Name],
    [MobileOfflineProfile_MobileOfflineProfileItem].[Name],

    -- physical attribute
    [T1].[MobileOfflineProfileItemId],
    [T1].[Name],
    [T1].[ViewQuery],
    [T1].[VersionNumber],
    [T1].[SolutionId],
    [T1].[CanBeFollowed],
    [T1].[GetRelatedEntityRecords],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[RegardingObjectId],
    [T1].[ProcessId],
    [T1].[StageId],
    [T1].[IsManaged],
    [T1].[OrganizationId],
    [T1].[ProfileItemRule],
    [T1].[TraversedPath],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[PublishedOn],
    [T1].[MobileOfflineProfileItemIdUnique],
    [T1].[IntroducedVersion],
    [T1].[SelectedEntityTypeCode],
    [T1].[IsVisibleInGrid],
    [T1].[RecordDistributionCriteria],
    [T1].[RecordsOwnedByMe],
    [T1].[RecordsOwnedByMyTeam],
    [T1].[RecordsOwnedByMyBusinessUnit],
    [T1].[RelationshipData],
    [T1].[IsValidated],
    [T1].[SelectedEntityMetadata],
    [T1].[EntityObjectTypeCode],
    [T1].[ProfileItemEntityFilter]
from [MobileOfflineProfileItemBase] [T1]
    left join [SystemUserBase] [lk_MobileOfflineProfileItem_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_MobileOfflineProfileItem_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_mobileofflineprofileitem_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_mobileofflineprofileitem_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_mobileofflineprofileitem_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_mobileofflineprofileitem_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_mobileofflineprofileitem_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_mobileofflineprofileitem_modifiedonbehalfby].[SystemUserId])
    left join [SavedQueryBase] [lk_mobileofflineprofileitem_savedquery] on ([T1].[ProfileItemRule] = [lk_mobileofflineprofileitem_savedquery].[SavedQueryId] and [lk_mobileofflineprofileitem_savedquery].OverwriteTime = 0 and [lk_mobileofflineprofileitem_savedquery].ComponentState = 0)
    left join [MobileOfflineProfileBase] [MobileOfflineProfile_MobileOfflineProfileItem] on ([T1].[RegardingObjectId] = [MobileOfflineProfile_MobileOfflineProfileItem].[MobileOfflineProfileId] and [MobileOfflineProfile_MobileOfflineProfileItem].OverwriteTime = 0 and [MobileOfflineProfile_MobileOfflineProfileItem].ComponentState = 0)
    left join [OrganizationBase] [MobileOfflineProfileItem_organization] with(nolock) on ([T1].[OrganizationId] = [MobileOfflineProfileItem_organization].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
