


--
-- base view for KbArticleComment
--
create view dbo.[KbArticleComment]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [OrganizationId],

    -- physical attributes
    [KbArticleCommentId],
    [KbArticleId],
    [Title],
    [CommentText],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [VersionNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_kbarticlecommentbase_modifiedby].[YomiFullName],
    [lk_kbarticlecommentbase_modifiedonbehalfby].[FullName],
    [lk_kbarticlecommentbase_createdonbehalfby].[FullName],
    [lk_kbarticlecommentbase_createdby].[FullName],
    [lk_kbarticlecommentbase_createdby].[YomiFullName],
    [lk_kbarticlecommentbase_modifiedby].[FullName],
    [lk_kbarticlecommentbase_modifiedonbehalfby].[YomiFullName],
    [lk_kbarticlecommentbase_createdonbehalfby].[YomiFullName],
    [kbarticle_comments].[OrganizationId],

    -- physical attribute
    [KbArticleCommentBase].[KbArticleCommentId],
    [KbArticleCommentBase].[KbArticleId],
    [KbArticleCommentBase].[Title],
    [KbArticleCommentBase].[CommentText],
    [KbArticleCommentBase].[CreatedOn],
    [KbArticleCommentBase].[CreatedBy],
    [KbArticleCommentBase].[ModifiedOn],
    [KbArticleCommentBase].[ModifiedBy],
    [KbArticleCommentBase].[VersionNumber],
    [KbArticleCommentBase].[CreatedOnBehalfBy],
    [KbArticleCommentBase].[ModifiedOnBehalfBy]
from [KbArticleCommentBase] 
    left join [KbArticleBase] [kbarticle_comments] on ([KbArticleCommentBase].[KbArticleId] = [kbarticle_comments].[KbArticleId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_createdby] with(nolock) on ([KbArticleCommentBase].[CreatedBy] = [lk_kbarticlecommentbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_createdonbehalfby] with(nolock) on ([KbArticleCommentBase].[CreatedOnBehalfBy] = [lk_kbarticlecommentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_modifiedby] with(nolock) on ([KbArticleCommentBase].[ModifiedBy] = [lk_kbarticlecommentbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_modifiedonbehalfby] with(nolock) on ([KbArticleCommentBase].[ModifiedOnBehalfBy] = [lk_kbarticlecommentbase_modifiedonbehalfby].[SystemUserId])
