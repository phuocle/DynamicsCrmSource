

create procedure [dbo].[p_RetrievePostsAndComments]
    @currentUserId uniqueidentifier ,           -- current user id  
    @commentsPerPost int,                       -- number of comments to display per each post
    @postId [dbo].[PostIdCollection] READONLY   -- List of PostId's to get Comments from
as;
begin;
    -- Return posts recordset
    select
        -- logical attributes
        [CreatedByName],
        [CreatedByYomiName],
        [CreatedOnBehalfByName],
        [OrganizationIdName],
        [RegardingObjectId],
        [RegardingObjectIdName],
        [RegardingObjectIdYomiName],
        [RegardingObjectTypeCode],
        (select count(*)
         from dbo.PostComment pc
         where pc.PostId = pst.PostId) as [commentcount],
        (select count(*)
         from dbo.PostLike pl
         where pl.PostId = pst.PostId) as [likecount],
        (select pl.PostLikeId
         from dbo.PostLike pl
         where pl.PostId = pst.PostId
               and pl.CreatedBy = @currentUserId) as [likeId],
        (select count(*)
         from dbo.PostFollow pf
         where pf.RegardingObjectId = pst.RegardingObjectId
               and pf.RegardingObjectTypeCode = pst.RegardingObjectTypeCode
               and pf.OwnerId =@currentUserId) as [followed],

        -- physical attributes
        [CreatedBy],
        [CreatedOn],
        [CreatedOnBehalfBy],
        [ModifiedOn],
        [PostId],
        [Source],
        [Text],
        [Type],
        [OrganizationId]
     from dbo.Post pst
        inner join @postId pid
            on pid.Id = pst.PostId
     order by [ModifiedOn] desc;

    if (@commentsPerPost > 0)
    begin;
        -- Return comments recordset
        select *
        from (
            select
                -- logical attributes
                [CreatedByName],
                [CreatedByYomiName],
                [CreatedOnBehalfByName],
                [OrganizationIdName],

                -- physical attributes
                [CreatedBy],
                [CreatedOn],
                [CreatedOnBehalfBy],
                [OrganizationId],
                [PostId],
                [PostCommentId],
                [Text],
                rank() over (partition by pc.PostId order by pc.CreatedOn desc) as commentRank
            from dbo.PostComment pc
                inner join @postId pid
                    on pc.PostId = pid.Id) OrderedComments
        where commentRank <= @commentsPerPost
        order by OrderedComments.CreatedOn desc;
    end;
end;