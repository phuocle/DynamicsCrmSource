


CREATE proc [dbo].[p_RetrieveYammerPosts]
	@numberOfPosts int ,	-- number of posts to retrieve
	@numberOfRetries int,	-- No of retries to pick for failed posts
	@fetchFollowers bit	-- Bit to indicate if followers should be retrieved
as
begin

	-- Table variable to store the followers and posts/postfollows temporarily
	declare @PostVar table		--TODO: Verify that the lengths of the fields in this temp table is more than the data that can come here
	(
		postid uniqueidentifier,
		owninguseremail nvarchar(200),
		regardingobjectid uniqueidentifier,
		regardingobjectidname nvarchar(4000),
		regardingobjecttypecode int,
		text nvarchar(2000),
		ispostfollow int,
		owninguserid nvarchar(200),
		modifiedon datetime
	)

	--Select top N Posts and also return the count of total pending posts (see the next select statement)
	insert into @PostVar
		select Top (@numberOfPosts)
			p.PostId as [postid],
			s.YammerEmailAddress as [owninguseremail],
			pr.RegardingObjectId as [regardingobjectid],
			pr.RegardingObjectIdName as [regardingobjectidname],
			pr.RegardingObjectTypeCode as [regardingobjecttypecode],
			p.Text as [text],
			0 as [ispostfollow],
			s.YammerUserId as [owninguserid],
			p.ModifiedOn as [modifiedon]
		from dbo.PostBase as p
			inner join dbo.PostRegardingBase as pr (nolock) on p.PostRegardingId = pr.PostRegardingId
			inner join dbo.SystemUserBase as s (nolock) on s.SystemUserId = p.CreatedOnBehalfBy
		where (ISNULL(p.PostToYammer,0) = 1)
			and (ISNULL(p.YammerPostState,0) = 0)
			and (s.YammerEmailAddress IS NOT NULL)
			and (ISNULL(p.YammerRetryCount,0) < @numberOfRetries)
		order by p.ModifiedOn asc

	--Return the total record count of Posts that need to be sent out
	select Count(PostId) as [countofpostsremaining]
		from dbo.PostBase as p
			inner join dbo.SystemUserBase as s (nolock) on s.SystemUserId = p.CreatedOnBehalfBy
		where (ISNULL(p.PostToYammer,0) = 1)
			and (ISNULL(p.YammerPostState,0) = 0)
			and (s.YammerEmailAddress IS NOT NULL)
			and (ISNULL(p.YammerRetryCount,0) < @numberOfRetries)

	--Select top N PostFollows and also return the count of total pending PostFollows (see the next select statement)
	insert into @PostVar
		select Top (@numberOfPosts)
			pf.PostFollowId as [postid],
			s.YammerEmailAddress as [owninguseremail],
			pf.RegardingObjectId as [regardingobjectid],
			pf.RegardingObjectIdName as [regardingobjectidname],
			pf.RegardingObjectTypeCode as [regardingobjecttypecode],
			NULL as [text],
			1 as [ispostfollow],
			s.YammerUserId as [owninguserid],
			pf.CreatedOn as [modifiedon]
		from dbo.PostFollowBase as pf
			inner join dbo.SystemUserBase as s (nolock) on s.SystemUserId = pf.OwnerId
		where (ISNULL(pf.PostToYammer,0) = 1)
			and (ISNULL(pf.YammerPostState,0) = 0)
			and (s.YammerEmailAddress IS NOT NULL)
			and (ISNULL(pf.YammerRetryCount,0) < @numberOfRetries)
		order by pf.CreatedOn asc
	
	--Return the total record count of PostFollows that need to be sent out
	select Count(PostFollowId) as [countofpostfollowsremaining]
		from dbo.PostFollowBase as pf
			inner join dbo.SystemUserBase as s (nolock) on s.SystemUserId = pf.OwnerId
		where (ISNULL(pf.PostToYammer,0) = 1)
			and (ISNULL(pf.YammerPostState,0) = 0)
			and (s.YammerEmailAddress IS NOT NULL)
			and (ISNULL(pf.YammerRetryCount,0) < @numberOfRetries)

	if( @fetchFollowers = 1)
		begin
			--Set 1 : Return the followers of the objects which are the regarding of the selected posts/postFollows above
			select distinct pv.regardingobjectid as [regardingobjectid],
					pv.regardingobjecttypecode as [regardingobjecttypecode],
					su.YammerEmailAddress as [yammeremailaddress]
			from @PostVar as pv
				inner join PostFollowBase as pf (nolock) on pv.regardingobjectid = pf.RegardingObjectId
				inner join SystemUserBase as su (nolock) on pf.OwnerId = su.SystemUserId
			where (su.YammerEmailAddress is not null)
				and 
				(	-- do not get the followers for the UserFollow records (i.e. the set of people following a user (regarding) who was followed by someone recently)
					pv.ispostfollow = 0
					or pv.regardingobjecttypecode <> 8
				)
		end

	-- Set 2 : Return the actual posts / post follows
	select
		[postid],
		[owninguseremail],
		[regardingobjectid],
		[regardingobjectidname],
		[regardingobjecttypecode],
		[text],
		[ispostfollow],
		[owninguserid],
		[modifiedon]
	from @PostVar
end