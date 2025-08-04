SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


-- TODO andreism: instead of complex queries MaxPrivilegeDepthMask for read privilege should be precomputed and persist in db
--   another option is merge SystemUserRoles and TeamRoles into one table, but it's still one query instead of two
create function [dbo].[fn_GetMaxPrivilegeDepthMask](@ObjectTypeCode int) 
returns @d table(PrivilegeDepthMask int)
-- It is by design that we return a table with only one row and column
as
begin;
	declare @UserId uniqueidentifier
	select @UserId = dbo.fn_FindUserGuid()

	declare @t table(depth int)

	-- from user roles
	insert into @t(depth)	
	select
	--privilege depth mask =	1(basic)			2(local)			4(deep)				and 8(global) 
	--							16(inherited read)	32(inherited local)	64(inherited deep)	and	128(inherited global)
	-- do an AND with 0x0F ( =15) to get basic/local/deep/global
		max(rp.PrivilegeDepthMask % 0x0F) as PrivilegeDepthMask
	from 
		PrivilegeBase as priv
		inner join RolePrivileges as rp on (rp.PrivilegeId = priv.PrivilegeId)
		inner join Role as r on (rp.RoleId = r.ParentRootRoleId)
		inner join SystemUserRoles as ur on (r.RoleId = ur.RoleId and ur.SystemUserId = @UserId)
		inner join PrivilegeObjectTypeCodes as potc on (potc.PrivilegeId = priv.PrivilegeId)
	where potc.ObjectTypeCode = @ObjectTypeCode 
		and priv.AccessRight & 0x01 = 1;

	-- from user's teams roles
	insert into @t(depth)	
	select
	--privilege depth mask = 1(basic)			2(local)			4(deep)				and 8(global) 
	--						 16(inherited read)	32(inherited local)	64(inherited deep)	and	128(inherited global)
	-- do an AND with 0x0F ( =15) to get basic/local/deep/global
		max(rp.PrivilegeDepthMask % 0x0F) as PrivilegeDepthMask
	from 
		PrivilegeBase as priv
        inner join RolePrivileges as rp on (rp.PrivilegeId = priv.PrivilegeId)
        inner join Role as r on (rp.RoleId = r.ParentRootRoleId)
        inner join TeamRoles as tr on (r.RoleId = tr.RoleId)
        inner join SystemUserPrincipals as sup on (sup.PrincipalId = tr.TeamId and sup.SystemUserId = @UserId)
        inner join PrivilegeObjectTypeCodes as potc on (potc.PrivilegeId = priv.PrivilegeId)
	where potc.ObjectTypeCode = @ObjectTypeCode 
		and priv.AccessRight & 0x01 = 1;
	
	insert into @d select max(depth) from @t;

	return;
end;
GO
