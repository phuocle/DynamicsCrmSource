


--
-- base view for KbArticleComment
--
create view dbo.[KbArticleComment]
 (
    -- logical attributes
    [OrganizationId],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],

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
    [kbarticle_comments].[OrganizationId],
    [lk_kbarticlecommentbase_modifiedonbehalfby].[FullName],
    [lk_kbarticlecommentbase_modifiedonbehalfby].[YomiFullName],
    [lk_kbarticlecommentbase_createdonbehalfby].[FullName],
    [lk_kbarticlecommentbase_createdonbehalfby].[YomiFullName],
    [lk_kbarticlecommentbase_createdby].[FullName],
    [lk_kbarticlecommentbase_createdby].[YomiFullName],
    [lk_kbarticlecommentbase_modifiedby].[YomiFullName],
    [lk_kbarticlecommentbase_modifiedby].[FullName],

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
    left join [SystemUserBase] [lk_kbarticlecommentbase_createdby]  on ([KbArticleCommentBase].[CreatedBy] = [lk_kbarticlecommentbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_createdonbehalfby]  on ([KbArticleCommentBase].[CreatedOnBehalfBy] = [lk_kbarticlecommentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_modifiedby]  on ([KbArticleCommentBase].[ModifiedBy] = [lk_kbarticlecommentbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_kbarticlecommentbase_modifiedonbehalfby]  on ([KbArticleCommentBase].[ModifiedOnBehalfBy] = [lk_kbarticlecommentbase_modifiedonbehalfby].[SystemUserId])
