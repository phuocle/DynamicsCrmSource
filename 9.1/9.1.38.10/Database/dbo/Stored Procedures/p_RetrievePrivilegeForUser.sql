

CREATE PROCEDURE [dbo].[p_RetrievePrivilegeForUser] (
    @userId UNIQUEIDENTIFIER,
    @privilegeId UNIQUEIDENTIFIER
)
AS
BEGIN
    SET NOCOUNT on;
	DECLARE @error varchar(500);
	
	DECLARE @userBusinessUnitId uniqueidentifier = (select businessUnitId from SystemUserBase where SystemUserId = @userId);
    
	if (@@ROWCOUNT != 1)
    begin
        select @error = 'Invalid UserId = '+ cast(@userId as varchar(50))
        RAISERROR(@error, 16, 1)
    end

	DECLARE @isdisabledwhenintegrated BIT;
	DECLARE @accessright INT;
	SELECT @isdisabledwhenintegrated = IsDisabledWhenIntegrated , @accessright = AccessRight
		FROM Privilege
		WHERE PrivilegeId = @privilegeId
	
	if (@@ROWCOUNT != 1)
    begin
        select @error = 'Invalid PrivilegeId = '+ cast(@privilegeId as varchar(50))
        RAISERROR(@error, 16, 1)
    end

	DECLARE @basicDepthMask INT = 1;

	;with UnionRolePrivileges (privilegedepthmask,businessunitid) as
    (
   		select rp.PrivilegeDepthMask as privilegedepthmask
			,r.BusinessUnitId as businessunitid
     	 -- Get User Roles directly and Union with indirect Team Roles
   		from 
		(
			select sur.RoleId from SystemUserRoles as sur where sur.SystemUserId = @userId
       		UNION
       		select tr.RoleId from TeamMembership as tm
        	join TeamRoles as tr on tm.TeamId = tr.TeamId and tm.SystemUserId = @userId
    	) as roleIds
   		join Role as r on r.RoleId = roleIds.RoleId   --  To get r.BusinessUnitId which defines depth
   		join RolePrivileges as rp on rp.RoleId = r.ParentRootRoleId
		where rp.PrivilegeId = @privilegeId

		union
        -- Inherited UserPrivileges from team roles with Basic depth from team roles
        select @basicDepthMask as privilegedepthmask
            ,@userBusinessUnitId as businessunitid
		from TeamMembership as tm
			join TeamRoles as tr on tr.TeamId = tm.TeamId
			join Role as r on r.RoleId = tr.RoleId
			join RolePrivileges as rp  on rp.RoleId  =  r.ParentRootRoleId
		where rp.PrivilegeId = @privilegeId and rp.PrivilegeDepthMask = @basicDepthMask and tm.SystemUserId = @userId
            and r.IsInherited = 1
	)

	select @privilegeId as privilegeid, @isdisabledwhenintegrated as isdisabledwhenintegrated, @accessright as accessright, max(privilegedepthmask) as privilegedepthmask, businessunitid
	from UnionRolePrivileges
		group by businessunitid
		order by privilegedepthmask desc
END