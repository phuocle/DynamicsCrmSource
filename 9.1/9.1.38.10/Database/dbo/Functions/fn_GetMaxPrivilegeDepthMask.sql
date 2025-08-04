
-- TODO andreism: instead of complex queries MaxPrivilegeDepthMask for read privilege should be precomputed and persist in db
--   another option is merge SystemUserRoles and TeamRoles into one table, but it's still one query instead of two
create function dbo.fn_GetMaxPrivilegeDepthMask(@ObjectTypeCode int) 
returns @T table(PrivilegeDepthMask int)
-- It is by design that we return a table with only one row and column
AS
BEGIN
	DECLARE @rootBU uniqueidentifier = (SELECT BusinessUnitId FROM BusinessUnitBase bu WHERE bu.ParentBusinessUnitId is null);
	DECLARE @countBU int = (SELECT COUNT(*) FROM (SELECT TOP(2) BusinessUnitId FROM BusinessUnitBase) as BUCount)

	--privilege depth mask =	1(basic)			2(local)			4(deep)				and 8(global) 
	--							16(inherited read)	32(inherited local)	64(inherited deep)	and	128(inherited global)
	-- do an AND with 0x0F ( =15) to get basic/local/deep/global
	INSERT INTO @T(PrivilegeDepthMask) 
	SELECT PrivilegeDepthMask = max(
		-- If max is Deep, check to see if BU of Deep privilege is root BU, in which case return Global as max depth
		CASE WHEN ((PrivilegeDepthMask & 0x4 > 0) AND BusinessUnitId = @rootBU) THEN 8
		-- If max is Local, check to see if there is only one BU, in which case return Global as max depth
		WHEN ((PrivilegeDepthMask & 0x2 > 0) AND @countBU = 1) THEN 8
		ELSE PrivilegeDepthMask END)
		from (
			select 
			r.BusinessUnitId, rp.PrivilegeDepthMask % 0x0F as PrivilegeDepthMask
			from 
				Privilege priv
				join RolePrivileges rp on (rp.PrivilegeId = priv.PrivilegeId)
				join Role r on (rp.RoleId = r.ParentRootRoleId)
				join SystemUserRoles ur on (r.RoleId = ur.RoleId and ur.SystemUserId = dbo.fn_FindUserGuid())
				join PrivilegeObjectTypeCodeView potc on (potc.PrivilegeId = priv.PrivilegeId)
			where
				potc.ObjectTypeCode = @ObjectTypeCode and 
				priv.AccessRight & 0x01 = 1
			UNION ALL	
				-- from team roles
				select 
					r.BusinessUnitId, rp.PrivilegeDepthMask % 0x0F as PrivilegeDepthMask
				from 
					Privilege priv
					join RolePrivileges rp on (rp.PrivilegeId = priv.PrivilegeId)
					join Role r on (rp.RoleId = r.ParentRootRoleId)
					join TeamRoles tr on (r.RoleId = tr.RoleId)
					join SystemUserPrincipals sup on (sup.PrincipalId = tr.TeamId and sup.SystemUserId = dbo.fn_FindUserGuid())
					join PrivilegeObjectTypeCodeView potc on (potc.PrivilegeId = priv.PrivilegeId)
				where 
					potc.ObjectTypeCode = @ObjectTypeCode and 
					priv.AccessRight & 0x01 = 1
			)X
	RETURN
END
GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetMaxPrivilegeDepthMask] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[fn_GetMaxPrivilegeDepthMask] TO [CRMReaderRole]
    AS [dbo];

