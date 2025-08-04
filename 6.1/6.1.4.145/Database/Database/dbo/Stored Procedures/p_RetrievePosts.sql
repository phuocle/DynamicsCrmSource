


-- assumption that user has access to @entityId and user has read access to all following entities (responsibility of caller) 
Create Proc [dbo].[p_RetrievePosts]	
	@entityId uniqueidentifier,			-- id of the entity where wall is displayed
	@entityTypeCode int,				-- type of the entity where wall is displayed
	@includeFollowing bit,				-- indicates if followed entities should be displayed
	@currentUserId uniqueidentifier,	-- current user id	
	@type int  = -1,					-- posts type
	@source int  = -1,					-- posts source
	@pageNumber int,					-- posts page number, starts from 1
	@pageSize int,						-- posts page size
	@commentsPerPost int,				-- number of comments to display per each post
	@startDate datetime = null,			-- start date filter for posts, can be null
	@endDate datetime	=null			-- end date filter for posts, can be null
as
begin

	set nocount on

	
	-- table to persist post ids
	declare @postId PostIdCollection;
	
	declare @systemUserTypeCode int = 8; 
	declare @regardingType int = 1; 
	declare @mentioningAndRegardingType int = 3; 

	-- workaround query optimizer, because parameter, query optimizer can't apply correct execution plan, since sympton also called parameter sniff
	declare @entityId_c uniqueidentifier;
	declare @entityTypeCode_c int;
	declare @currentUserId_c uniqueidentifier; 
	declare @type_c int = -1;
	declare @source_c int = -1;
	declare @fromDate Datetime = null;
	declare @toDate Datetime = null;
	declare @pageSize_c int = 20;
	declare @includeFollowing_c int  =1;
		
	set @entityId_c = @entityId;
	set @entityTypeCode_c = @entityTypeCode;
	set @currentUserId_c = @currentUserId;
	set @type_c = @type;
	set @source_c = @source;
	set @pageSize_c = @pageSize;	
	set @includeFollowing_c = @includeFollowing;	
	set @fromDate = @startDate;
	set @toDate = @endDate;
	
	if(@fromDate is null)
	begin
		select @fromDate = CONVERT(datetime, '01/01/1753', 101)
	end
	
	if(@toDate is null)
	begin
		select @toDate = CONVERT(datetime, '12/31/9999', 101)
	end
		
	
	if @includeFollowing_c = 1 --Personal Wall
	begin			
		with SelectedFeeds As
		(
				select 				
					distinct		
					post.PostId as id,				
					post.ModifiedOn as ModifiedOn
				from [PostBase] post WITH (NOLOCK) 
					 inner join [PostRoleBase] postRole  WITH (NOLOCK) on post.PostId = postRole.PostId					 
					 inner join [PostFollowBase] follow WITH (NOLOCK) on  
						(postRole.RegardingObjectId = follow.RegardingObjectId and
						 postRole.RegardingObjectTypeCode = follow.RegardingObjectTypeCode and
						 follow.OwnerId = @currentUserId_c )  --record user follow						 											
				where 
					( @type_c = -1 or post.Type = @type_c) and
					( @source_c = -1 or post.Source = @source_c) and
					post.ModifiedOn between @fromDate and @toDate 					
						
		)
		insert into @postId (Id)		
		select top (@pageSize_c + 1) id from   -- read one more record, for MoreRecords flag
		(
			select 
				id,
				row_number() over (order by ModifiedOn desc) as rowNumber,
				ModifiedOn								
			from   
				SelectedFeeds									
		) pagedResults
		where rowNumber > @pageSize_c * (@pageNumber - 1)
		order by ModifiedOn desc	
		
	end
	else if @entityTypeCode_c = @systemUserTypeCode  --User Profile
	begin
			with SelectedFeeds as
			(
				select distinct
						post.PostId as id,
						post.ModifiedOn as ModifiedOn
					from [PostBase] post WITH (NOLOCK)
						inner join [PostRoleBase] postRole WITH (NOLOCK) on 
							post.PostId = postRole.PostId
					where 
						---131565: Posts made by a user does not appear on the user's Record Wall
						((postRole.RegardingObjectId =@entityId_c and postRole.RegardingObjectTypeCode = @entityTypeCode_c) 
						  or  post.CreatedBy = @entityId_c) and -- created by user
						( @type_c = -1 or post.Type = @type_c)  and
						( @source_c = -1 or post.Source = @source_c) and
						post.ModifiedOn between @fromDate and @toDate		
			)			
			insert into @postId (Id)		
			select top (@pageSize_c + 1) id from   -- read one more record, for MoreRecords flag
			(
				select 
					id,
					row_number() over (order by ModifiedOn desc) as rowNumber,
					ModifiedOn								
				from   
					SelectedFeeds									
			) pagedResults
			where rowNumber > @pageSize_c * (@pageNumber - 1)
			order by ModifiedOn desc	
		
	end
	else
	begin
		-- record wall
		insert into @postId (Id)
		select top (@pageSize_c+1) id from  -- read one more record, for MoreRecords flag
		(
			select 
				post.PostId as id,
				row_number() over (order by ModifiedOn desc) as rowNumber,
				post.ModifiedOn as ModifiedOn
			from [PostBase] post WITH (NOLOCK)
				inner join [PostRoleBase] postRole WITH (NOLOCK) on 
					post.PostId = postRole.PostId 
			where 
				postRole.RegardingObjectId =  @entityId_c  and
				postRole.RegardingObjectTypeCode = @entityTypeCode_c and
				( @type_c = -1 or post.Type = @type_c)  and
			    ( @source_c = -1 or post.Source = @source_c) and
				post.ModifiedOn between @fromDate and @toDate		
		) pagedResults
		where rowNumber > @pageSize_c * (@pageNumber - 1)
		order by pagedResults.ModifiedOn desc
	end		

	-- return posts recordset
	EXECUTE p_RetrievePostsAndComments @currentUserId,@commentsPerPost,@postId
end
