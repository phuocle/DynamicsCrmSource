

-- use 'union all' to avoid distinct of regular union because correct @systemUserId should not intersect with any teamid
create function [dbo].[fn_GetTeamIdsWithUserIdForUser] 
( 
	@systemUserId uniqueidentifier
) 
returns @ids table (TeamIdOrUserId uniqueidentifier primary key clustered)
as
begin;
	insert into @ids
	select TeamId as 'TeamIdOrUserId' from TeamMembership where SystemUserId = @systemUserId
	union all
	select @systemUserId  as 'TeamIdOrUserId';
	return;
end;