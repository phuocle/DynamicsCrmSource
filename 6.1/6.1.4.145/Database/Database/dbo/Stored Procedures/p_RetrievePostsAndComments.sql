

CREATE procedure [dbo].[p_RetrievePostsAndComments]	
	@currentUserId uniqueidentifier ,	-- current user id	
	@commentsPerPost int,				-- number of comments to display per each post
	@postId [dbo].[PostIdCollection] READONLY	-- List of PostId's to get Comments from
as
begin
-- return posts recordset
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
		(select count (*) from dbo.PostComment comment WITH (NOLOCK) where comment.PostId = post.PostId) as  [commentcount] ,
		(select count (*) from dbo.PostLike [like] WITH (NOLOCK) where [like].PostId = post.PostId) as  [likecount] ,
		(select [like].PostLikeId from dbo.PostLike [like] WITH (NOLOCK) where [like].PostId = post.PostId and [like].CreatedBy =@currentUserId) as  [likeId] ,	
		(select count (*) from dbo.PostFollow [follow] WITH (NOLOCK) where [follow].RegardingObjectId = post.RegardingObjectId and 
															 [follow].RegardingObjectTypeCode = post.RegardingObjectTypeCode and
															 [follow].OwnerId =@currentUserId) as  [followed] ,	

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
	 from dbo.Post post
		inner join @postId postId on postId.Id = post.PostId 
		
	if @commentsPerPost > 0
	begin
		-- return comments recordset
		select * from
		(
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
				rank() over (partition by comment.PostId order by comment.CreatedOn desc) as commentRank
			from dbo.PostComment comment WITH (NOLOCK)
				inner join @postId postid on
					comment.PostId = postid.Id
		) orderedComments
		where commentRank <= @commentsPerPost
		order by orderedComments.CreatedOn desc
	end
end