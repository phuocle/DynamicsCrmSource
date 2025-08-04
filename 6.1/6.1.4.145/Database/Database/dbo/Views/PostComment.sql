


--
-- base view for PostComment
--
create view dbo.[PostComment]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [PostIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [OrganizationId],
    [PostCommentId],
    [PostId],
    [Text],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode]
) with view_metadata as
select
    -- logical attributes
    [lk_postcomment_createdonbehalfby].[FullName],
    [lk_postcomment_createdonbehalfby].[YomiFullName],
    [lk_postcomment_createdby].[FullName],
    [lk_postcomment_createdby].[YomiFullName],
    [organization_PostComment].[Name],
    [Post_Comments].[Text],

    -- physical attribute
    [PostCommentBase].[CreatedBy],
    [PostCommentBase].[CreatedOn],
    [PostCommentBase].[CreatedOnBehalfBy],
    [PostCommentBase].[OrganizationId],
    [PostCommentBase].[PostCommentId],
    [PostCommentBase].[PostId],
    [PostCommentBase].[Text],
    [PostCommentBase].[TimeZoneRuleVersionNumber],
    [PostCommentBase].[UTCConversionTimeZoneCode]
from [PostCommentBase] 
    left join [SystemUserBase] [lk_postcomment_createdby] with(nolock) on ([PostCommentBase].[CreatedBy] = [lk_postcomment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_postcomment_createdonbehalfby] with(nolock) on ([PostCommentBase].[CreatedOnBehalfBy] = [lk_postcomment_createdonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_PostComment] with(nolock) on ([PostCommentBase].[OrganizationId] = [organization_PostComment].[OrganizationId])
    left join [PostBase] [Post_Comments] on ([PostCommentBase].[PostId] = [Post_Comments].[PostId])
