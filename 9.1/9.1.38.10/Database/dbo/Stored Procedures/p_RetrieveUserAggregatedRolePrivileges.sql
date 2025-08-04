

-- this stored procedure union all privileges with basic depth of all teams that the user belongs, then aggregate the team privileges with user privileges.
CREATE procedure dbo.p_RetrieveUserAggregatedRolePrivileges(@userId uniqueidentifier) as
begin
    SET NOCOUNT ON
    
    declare @userBusinessUnitId uniqueidentifier
    declare @error varchar(500)

    select @userBusinessUnitId = businessUnitId from SystemUserBase
    where SystemUserId = @userId
    if (@@ROWCOUNT != 1)
    begin
        select @error = 'Invalid UserId = '+ cast(@userId as varchar(50))
        RAISERROR(@error, 16, 1)
    end

    -- UserPrivileges from Explicit roles
    ;with UnionRolePrivileges (privilegeid,isdisabledwhenintegrated,accessright,privilegedepthmask,businessunitid) as
    (
        select p.PrivilegeId as privilegeid
            ,p.IsDisabledWhenIntegrated as isdisabledwhenintegrated
            ,p.AccessRight as accessright
            ,rp.PrivilegeDepthMask as privilegedepthmask
            ,@userBusinessUnitId as businessunitid
        from Privilege as p WITH (NOLOCK)
            join RolePrivileges as rp WITH (NOLOCK) on (p.PrivilegeId  =  rp.PrivilegeId)
            join Role as r WITH (NOLOCK) on (rp.RoleId  =  r.ParentRootRoleId)
            join SystemUserRoles as sur WITH (NOLOCK)  on (r.RoleId  =  sur.RoleId)   
        where  (sur.SystemUserId = @userId) 

        union
        -- Inherited UserPrivileges from team roles with Basic depth from team roles
        select distinct rp.PrivilegeId as privilegeid
            ,p.IsDisabledWhenIntegrated as isdisabledwhenintegrated
            ,p.AccessRight as accessright
            ,rp.PrivilegeDepthMask as privilegedepthmask
            ,@userBusinessUnitId as businessunitid
        from Privilege as p WITH (NOLOCK)
            join RolePrivileges as rp WITH (NOLOCK) on (rp.PrivilegeId = p.PrivilegeId)
            join Role as r WITH (NOLOCK) on (rp.RoleId  =  r.ParentRootRoleId)
            join TeamRoles as tr WITH (NOLOCK)  on (r.RoleId  =  tr.RoleId)  
            join TeamMembership as tm WITH (NOLOCK) on (tr.TeamId = tm.TeamId and tm.SystemUserId = @userId)
        where rp.PrivilegeDepthMask = 1
            and r.IsInherited = 1
    )
    select privilegeid, isdisabledwhenintegrated, accessright, max(privilegedepthmask) as privilegedepthmask, businessunitid 
    from UnionRolePrivileges 
    group by privilegeid
            ,isdisabledwhenintegrated
            ,accessright
            ,businessunitid

end
