

create function [dbo].[fn_GetTeamIdsForUser] 
( 
	@systemUserId uniqueidentifier
)

returns @ids table (TeamId uniqueidentifier primary key clustered)
as
begin;
	insert into @ids
	select TeamId as 'TeamId' from TeamMembership where SystemUserId = @systemUserId
	return;
end;
GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetTeamIdsForUser] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetTeamIdsForUser] TO [CRMReaderRole]
    AS [dbo];

