SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_RetrievePostsOnEntities]
    @currentUserId uniqueidentifier,        -- current user id
    @source int  = -1,                      -- posts source
    @pageSize int,                          -- posts page size
    @commentsPerPost int,                   -- number of comments to display per each post
    @endDate datetime = null,               -- end date of the post. null means first page
    @relatedEntities PostObjectId READONLY  -- List of Records to filter on for Posts
as;
begin;
    set nocount on;

    -- Table to persist post ids
    declare @postId PostIdCollection;

    with SelectedFeeds as
    (
        select distinct pb.PostId as id,
               pb.ModifiedOn as ModifiedOn
        from [PostBase] pb
             inner join [PostRoleBase] prb
                 on pb.PostId = prb.PostId
             inner join @relatedEntities re
                 on prb.RegardingObjectId = re.ObjectId
                    and prb.RegardingObjectTypeCode = re.ObjectTypeCode
        where (@source = -1 or pb.Source = @source)
              and ((@endDate is null or pb.ModifiedOn <= @endDate))
    )
    -- We know the last posts time stamp from PagingCookie. We can efficiently get the next set of posts based on PagingCookie.
    insert into @postId (Id)
    select top (@pageSize + 1) id   -- read one more record, for MoreRecords flag
    from SelectedFeeds
    order by ModifiedOn desc;

    -- Return the Posts and Comments.
    execute dbo.p_RetrievePostsAndComments @currentUserId = @currentUserId, @commentsPerPost = @commentsPerPost, @postId = @postId;
end;
GO
