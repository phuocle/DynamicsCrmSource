

create procedure dbo.p_PopulateSystemUserPrincipals(
    @id uniqueidentifier)
as;
begin;
    -- Populate teams that are not already in the table.
    insert SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id,
           tm.TeamId
    from TeamMembership tm
	left join SystemUserPrincipals sup on tm.TeamId = sup.PrincipalId and sup.SystemUserId = @id
	where tm.SystemUserId = @id and sup.PrincipalId is null;

    -- Populate business unit membership.
    insert into SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id,
           BusinessUnitId
    from SystemUserBase
    where SystemUserId = @id;

    -- Populate organization membership.
    insert into SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id,
           OrganizationId
    from BusinessUnitBase
    where BusinessUnitId = (select BusinessUnitId
                            from SystemUserBase
                            where SystemUserId = @id);

    -- Insert self.
    insert into SystemUserPrincipals (SystemUserId, PrincipalId) values (@id, @id);
end;