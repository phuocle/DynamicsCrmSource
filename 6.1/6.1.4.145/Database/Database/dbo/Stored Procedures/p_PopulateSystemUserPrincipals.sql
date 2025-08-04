

create procedure p_PopulateSystemUserPrincipals(@id uniqueidentifier) as
begin
	-- populate teams
	insert SystemUserPrincipals (SystemUserId, PrincipalId) select @id, TeamId from TeamMembership where SystemUserId = @id
		
	-- populate business unit membership	
	insert into SystemUserPrincipals (SystemUserId, PrincipalId) select @id, BusinessUnitId from SystemUserBase where SystemUserId = @id
		
	-- populate organization membership
	insert into SystemUserPrincipals (SystemUserId, PrincipalId) select @id, OrganizationId from BusinessUnitBase where BusinessUnitId = (select BusinessUnitId from SystemUserBase where SystemUserId = @id)
		
	-- insert self	
	insert into SystemUserPrincipals (SystemUserId, PrincipalId) values(@id, @id)
end