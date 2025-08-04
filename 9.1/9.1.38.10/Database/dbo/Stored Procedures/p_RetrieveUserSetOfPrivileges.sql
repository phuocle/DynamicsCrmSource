

CREATE PROCEDURE [dbo].[p_RetrieveUserSetOfPrivileges] (
    @userId UNIQUEIDENTIFIER,
    @listPrivilegeIds as EntityIdCollection READONLY
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
	
	DECLARE @basicDepthMask INT = 1;

	;with UnionRolePrivileges (privilegeid,isdisabledwhenintegrated,accessright,privilegedepthmask,businessunitid) as
	(
   		select distinct p.PrivilegeId as privilegeid
			,p.IsDisabledWhenIntegrated as isdisabledwhenintegrated
			,p.AccessRight as accessright
			,rp.PrivilegeDepthMask as privilegedepthmask
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
   		join Privilege as p on p.PrivilegeId = rp.PrivilegeId
   		join @listPrivilegeIds lp on p.PrivilegeId = lp.id

		union
		-- Inherited UserPrivileges from team roles with Basic depth from team roles
		select distinct p.PrivilegeId as privilegeid
			,p.IsDisabledWhenIntegrated as isdisabledwhenintegrated
			,p.AccessRight as accessright
			,@basicDepthMask as privilegedepthmask
            ,@userBusinessUnitId as businessunitid
		from TeamMembership as tm
			join TeamRoles as tr on tr.TeamId = tm.TeamId
			join Role as r on r.RoleId = tr.RoleId
			join RolePrivileges as rp  on rp.RoleId  =  r.ParentRootRoleId
			join Privilege as p on p.PrivilegeId = rp.PrivilegeId
			join @listPrivilegeIds lp on rp.PrivilegeId = lp.id
		where rp.PrivilegeDepthMask = @basicDepthMask and tm.SystemUserId = @userId
            and r.IsInherited = 1
	)

	select privilegeid, isdisabledwhenintegrated, accessright, max(privilegedepthmask) as privilegedepthmask, businessunitid 
		from UnionRolePrivileges 
		group by privilegeid, isdisabledwhenintegrated, accessright, businessunitid
   		order by privilegedepthmask desc 
END