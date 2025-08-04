SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


-- Assumption: User has access to @entityId and user has read access to all following entities (responsibility of caller).
create procedure [dbo].[p_RetrievePosts](
    @entityId uniqueidentifier,         -- id of the entity where wall is displayed
    @entityTypeCode int,                -- type of the entity where wall is displayed
    @includeFollowing bit,              -- indicates if followed entities should be displayed
    @currentUserId uniqueidentifier,    -- current user id  
    @type int  = -1,                    -- posts type
    @source int  = -1,                  -- posts source
    @pageNumber int,                    -- posts page number, starts from 1
    @pageSize int,                      -- posts page size
    @commentsPerPost int,               -- number of comments to display per each post
    @startDate datetime = null,         -- start date filter for posts, can be null
    @endDate datetime   = null)         -- end date filter for posts, can be null
as;
begin;
    set nocount on;

    -- Table to persist post ids
    declare @postId PostIdCollection;

    declare @systemUserTypeCode int = 8; 
    declare @regardingType int = 1; 
    declare @mentioningAndRegardingType int = 3; 

    -- Workaround query optimizer, because parameter, query optimizer can't apply correct execution plan, since sympton also called parameter sniff
    declare @entityId_c uniqueidentifier;
    declare @entityTypeCode_c int;
    declare @currentUserId_c uniqueidentifier;
    declare @type_c int = -1;
    declare @source_c int = -1;
    declare @fromDate datetime = null;
    declare @toDate datetime = null;
    declare @pageSize_c int = 20;
    declare @includeFollowing_c int = 1;

    select @entityId_c = @entityId,
           @entityTypeCode_c = @entityTypeCode,
           @currentUserId_c = @currentUserId,
           @type_c = @type,
           @source_c = @source,
           @pageSize_c = @pageSize,    
           @includeFollowing_c = @includeFollowing,
           @fromDate = @startDate,
           @toDate = @endDate;

    if (@fromDate is null)
    begin;
        select @fromDate = convert(datetime, '01/01/1753', 101);
    end;

    if (@toDate is null)
    begin;
        select @toDate = convert(datetime, '12/31/9999', 101);
    end;

    if (@includeFollowing_c = 1) --Personal Wall
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
                        and pfb.OwnerId = @currentUserId_c  --record user follow                                                                  
            where (@type_c = -1 or post.Type = @type_c)
                  and (@source_c = -1 or post.Source = @source_c)
                  and post.ModifiedOn between @fromDate and @toDate
        )
        insert into @postId (Id)        
        select top (@pageSize_c + 1) id -- read one more record, for MoreRecords flag
        from (
            select id,
                   row_number() over (order by ModifiedOn desc) as rowNumber,
                   ModifiedOn                              
            from SelectedFeeds) PagedResults
        where rowNumber > @pageSize_c * (@pageNumber - 1)
        order by ModifiedOn desc;
    end;
    else if (@entityTypeCode_c = @systemUserTypeCode)  --User Profile
    begin;
        with SelectedFeeds as
        (
            select distinct post.PostId as id,
                   post.ModifiedOn as ModifiedOn
            from [PostBase] post
                 inner join [PostRoleBase] prb
                     on post.PostId = prb.PostId
            where ((prb.RegardingObjectId = @entityId_c
                    and prb.RegardingObjectTypeCode = @entityTypeCode_c)
                        or  post.CreatedBy = @entityId_c) -- created by user
                  and (@type_c = -1 or post.Type = @type_c)
                  and (@source_c = -1 or post.Source = @source_c)
                  and post.ModifiedOn between @fromDate and @toDate
        )           
        insert into @postId (Id)
        select top (@pageSize_c + 1) id     -- read one more record, for MoreRecords flag
        from (
            select id,
                   row_number() over (order by ModifiedOn desc) as rowNumber,
                   ModifiedOn
            from SelectedFeeds) PagedResults
            where rowNumber > @pageSize_c * (@pageNumber - 1)
            order by ModifiedOn desc;
    end;
    else
    begin;
        -- record wall
        insert into @postId (Id)
        select top (@pageSize_c + 1) id   -- read one more record, for MoreRecords flag
        from (
            select post.PostId as id,
                row_number() over (order by ModifiedOn desc) as rowNumber,
                post.ModifiedOn as ModifiedOn
            from [PostBase] post
                 inner join [PostRoleBase] prb
                     on post.PostId = prb.PostId
            where prb.RegardingObjectId = @entityId_c
                  and prb.RegardingObjectTypeCode = @entityTypeCode_c
                  and (@type_c = -1 or post.Type = @type_c)
                  and (@source_c = -1 or post.Source = @source_c)
                  and post.ModifiedOn between @fromDate and @toDate) PagedResults
        where rowNumber > @pageSize_c * (@pageNumber - 1)
        order by PagedResults.ModifiedOn desc;
    end;

    -- Return posts recordset.
    execute dbo.p_RetrievePostsAndComments @currentUserId, @commentsPerPost, @postId;
end;
GO
