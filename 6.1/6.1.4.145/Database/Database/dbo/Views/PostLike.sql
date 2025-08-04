


--
-- base view for PostLike
--
create view dbo.[PostLike]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [PostIdName],
    [CreatedByName],
    [OrganizationIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [OrganizationId],
    [PostId],
    [PostLikeId],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode]
) with view_metadata as
select
    -- logical attributes
    [lk_postlike_createdonbehalfby].[FullName],
    [lk_postlike_createdonbehalfby].[YomiFullName],
    [Post_Likes].[Text],
    [lk_postlike_createdby].[FullName],
    [organization_postlike].[Name],

    -- physical attribute
    [PostLikeBase].[CreatedBy],
    [PostLikeBase].[CreatedOn],
    [PostLikeBase].[CreatedOnBehalfBy],
    [PostLikeBase].[OrganizationId],
    [PostLikeBase].[PostId],
    [PostLikeBase].[PostLikeId],
    [PostLikeBase].[TimeZoneRuleVersionNumber],
    [PostLikeBase].[UTCConversionTimeZoneCode]
from [PostLikeBase] 
    left join [SystemUserBase] [lk_postlike_createdby] with(nolock) on ([PostLikeBase].[CreatedBy] = [lk_postlike_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_postlike_createdonbehalfby] with(nolock) on ([PostLikeBase].[CreatedOnBehalfBy] = [lk_postlike_createdonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_postlike] with(nolock) on ([PostLikeBase].[OrganizationId] = [organization_postlike].[OrganizationId])
    left join [PostBase] [Post_Likes] on ([PostLikeBase].[PostId] = [Post_Likes].[PostId])
