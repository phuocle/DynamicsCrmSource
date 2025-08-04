


--
-- base view for PostComment
--
create view dbo.[PostComment]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [lk_postcomment_createdby].[FullName],
    [lk_postcomment_createdby].[YomiFullName],
    [organization_PostComment].[Name],
    [lk_postcomment_createdonbehalfby].[FullName],
    [lk_postcomment_createdonbehalfby].[YomiFullName],
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
    left join [SystemUserBase] [lk_postcomment_createdby]  on ([PostCommentBase].[CreatedBy] = [lk_postcomment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_postcomment_createdonbehalfby]  on ([PostCommentBase].[CreatedOnBehalfBy] = [lk_postcomment_createdonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_PostComment]  on ([PostCommentBase].[OrganizationId] = [organization_PostComment].[OrganizationId])
    left join [PostBase] [Post_Comments] on ([PostCommentBase].[PostId] = [Post_Comments].[PostId])
