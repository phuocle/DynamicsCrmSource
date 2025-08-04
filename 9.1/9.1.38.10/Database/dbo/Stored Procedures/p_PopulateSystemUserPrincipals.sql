

create procedure dbo.p_PopulateSystemUserPrincipals(
    @id uniqueidentifier)
as;
declare @rowsInserted int = 0
begin;
    --Left Joins vs NOT EXISTS (https://dba.stackexchange.com/questions/121034/best-practice-between-using-left-join-or-not-exists)
    -- Populate teams that are not already in the table
    insert SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id, TeamId
    from TeamMembership
    where not exists (select 1 from SystemUserPrincipals where PrincipalId = TeamMembership.TeamId and SystemUserId = @id)
    and SystemUserId = @id

    set @rowsInserted += @@ROWCOUNT;

    -- Populate business unit membership, if not present already.
    insert into SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id, BusinessUnitId
    from SystemUserBase
    where not exists (select 1 from SystemUserPrincipals where PrincipalId = SystemUserBase.BusinessUnitId and SystemUserId = @id)
    and SystemUserId = @id;

    set @rowsInserted += @@ROWCOUNT;

    -- Populate organization membership, if not present already.
    insert into SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id, OrganizationId
    from OrganizationBase
    where not exists (select 1 from SystemUserPrincipals where PrincipalId = OrganizationBase.OrganizationId and SystemUserId = @id)

    set @rowsInserted += @@ROWCOUNT;

    -- Populate self membership, if not present already.
    insert into SystemUserPrincipals (SystemUserId, PrincipalId)
    select @id, @id
    from SystemUserBase
    where not exists (select 1 from SystemUserPrincipals where PrincipalId = @id and SystemUserId = @id)
    and SystemUserId = @id

    set @rowsInserted += @@ROWCOUNT;

    select @rowsInserted
    return
end;