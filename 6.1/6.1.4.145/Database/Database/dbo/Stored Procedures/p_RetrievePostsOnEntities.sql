

CREATE procedure [dbo].[p_RetrievePostsOnEntities]	
	@currentUserId uniqueidentifier,	-- current user id	
	@source int  = -1,					-- posts source
	@pageSize int,						-- posts page size
	@commentsPerPost int,				-- number of comments to display per each post
	@endDate datetime = null,			-- end date of the post. null means first page
	@relatedEntities PostObjectId READONLY	-- List of Records to filter on for Posts
as
begin

	set nocount on

	
	-- table to persist post ids
	declare @postId PostIdCollection;
	
	WITH SelectedFeeds As
	(
				select 				
					distinct		
					post.PostId as id,				
					post.ModifiedOn as ModifiedOn
				from [PostBase] post WITH (NOLOCK)
					inner join [PostRoleBase] postRole WITH (NOLOCK) on 
						post.PostId = postRole.PostId
					inner join @relatedEntities RelatedEntities on  
						(postRole.RegardingObjectId = RelatedEntities.ObjectId and
						 postRole.RegardingObjectTypeCode = RelatedEntities.ObjectTypeCode
						 )  					 					
				where 
					( @source = -1 or post.Source = @source) and
					((@endDate is null or post.ModifiedOn <= @endDate))			
			
	)
	-- As we always know the last posts Time stamp from PagingCookie. We can efficiently get the Next set of posts based on PagingCookie.
	insert into @postId (Id)		
	select top (@pageSize + 1) id from   -- read one more record, for MoreRecords flag
	SelectedFeeds									
	order by ModifiedOn desc	
	
	-- Return the Posts and Comments
	EXECUTE p_RetrievePostsAndComments @currentUserId=@currentUserId,@commentsPerPost=@commentsPerPost,@postId=@postId
end
	