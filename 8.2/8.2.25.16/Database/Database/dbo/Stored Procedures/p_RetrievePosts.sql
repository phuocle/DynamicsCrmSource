

-- Assumption: User has access to @entityId and user has read access to all following entities (responsibility of caller).
create procedure [dbo].[p_RetrievePosts](
    @entityId uniqueidentifier,         -- id of the entity where wall is displayed
    @entityTypeCode int,                -- type of the entity where wall is displayed
    @includeFollowing bit,              -- indicates if followed entities should be displayed
    @currentUserId uniqueidentifier,    -- current user id  
    @type int = -1,                     -- posts type
    @source int = -1 ,                  -- posts source
    @pageNumber int,                    -- posts page number, starts from 1
    @pageSize int,                      -- posts page size
    @commentsPerPost int,               -- number of comments to display per each post
    @startDate datetime = '19000101',   -- start date filter for posts, can be null
    @endDate datetime   = '99991231',   -- end date filter for posts, can be null
    @sortDirection bit = 0)             -- based on sort direction post will return asc, desc. This parameter is not used in v8.x. Ported from v9.0 for ease of code maintenance.
as;
begin;
    set nocount on;

    -- Table to persist post ids
    declare @postId PostIdCollection;

    declare @systemUserTypeCode int = 8; 

    if (@includeFollowing = 1) -- Personal Wall
    begin;
        with SelectedFeeds as
        (
            select distinct post.PostId as id,              
                   post.ModifiedOn as ModifiedOn
            from [PostBase] post
                 inner join [PostRoleBase] prb
                     on post.PostId = prb.PostId
                 inner join [PostFollowBase] pfb
                     on prb.RegardingObjectId = pfb.RegardingObjectId
                        and prb.RegardingObjectTypeCode = pfb.RegardingObjectTypeCode
                        and pfb.OwnerId = @currentUserId  --record user follow                                                                  
            where (@type = -1 or post.Type = @type)
                  and (@source = -1 or post.Source = @source)
                  and post.ModifiedOn between @startDate and @endDate
        )
        insert into @postId (Id)        
        select top (@pageSize + 1) id -- read one more record, for MoreRecords flag
        from (
            select id,
                   row_number() over (order by ModifiedOn desc) as rowNumber,
                   ModifiedOn                              
            from SelectedFeeds) PagedResults
        where rowNumber > @pageSize * (@pageNumber - 1)
        order by case when (@sortDirection = 0) then ModifiedOn end desc,
                 case when (@sortDirection = 1) then ModifiedOn end asc
        option (OPTIMIZE FOR UNKNOWN, HASH JOIN, MERGE JOIN);
    end;
    else if (@entityTypeCode = @systemUserTypeCode)  --User Profile
    begin;
        with SelectedFeeds as
        (
            select distinct post.PostId as id,
                   post.ModifiedOn as ModifiedOn
            from [PostBase] post
                  inner join [PostRoleBase] prb on post.PostId = prb.PostId
            where prb.RegardingObjectId = @entityId and prb.RegardingObjectTypeCode = @entityTypeCode
                  and (@type = -1 or post.Type = @type)
                  and (@source = -1 or post.Source = @source)
                  and post.ModifiedOn between @startDate and @endDate
            union		-- re-written with union instead of "or" for performance improvement and removing duplicates.
            select distinct post.PostId as id,
                   post.ModifiedOn as ModifiedOn
            from [PostBase] post
                  inner join [PostRoleBase] prb on post.PostId = prb.PostId
            where post.CreatedBy = @entityId -- created by user
                  and (@type = -1 or post.Type = @type)
                  and (@source = -1 or post.Source = @source)
                  and post.ModifiedOn between @startDate and @endDate
        )           
        insert into @postId (Id)
        select top (@pageSize + 1) id  -- read one more record, for MoreRecords flag
        from (
            select id,
                   row_number() over (order by ModifiedOn desc) as rowNumber,
                   ModifiedOn
            from SelectedFeeds) PagedResults
            where rowNumber > @pageSize * (@pageNumber - 1)
            order by case when (@sortDirection = 0) then ModifiedOn end desc,
                     case when (@sortDirection = 1) then ModifiedOn end asc
		option (OPTIMIZE FOR UNKNOWN);
    end;
    else
    begin;
        -- record wall
        insert into @postId (Id)
        select top (@pageSize + 1) id   -- read one more record, for MoreRecords flag
        from (
            select post.PostId as id,
                row_number() over (order by ModifiedOn desc) as rowNumber,
                post.ModifiedOn as ModifiedOn
            from [PostBase] post
                 inner join [PostRoleBase] prb
                     on post.PostId = prb.PostId
            where prb.RegardingObjectId = @entityId
                  and prb.RegardingObjectTypeCode = @entityTypeCode
                  and (@type = -1 or post.Type = @type)
                  and (@source = -1 or post.Source = @source)
                  and post.ModifiedOn between @startDate and @endDate) PagedResults
        where rowNumber > @pageSize * (@pageNumber - 1)
        order by case when (@sortDirection = 0) then PagedResults.ModifiedOn end desc,
                 case when (@sortDirection = 1) then PagedResults.ModifiedOn end asc
        option (OPTIMIZE FOR UNKNOWN);
    end;

    -- Return posts recordset.
    execute dbo.p_RetrievePostsAndComments @currentUserId, @commentsPerPost, @postId;
end;