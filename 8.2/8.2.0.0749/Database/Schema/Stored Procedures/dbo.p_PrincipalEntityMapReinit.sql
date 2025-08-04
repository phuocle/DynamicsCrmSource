SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


-- this stored procedure reinit PrincipalEntityMap for a principal (owner): user or team

CREATE     procedure [dbo].[p_PrincipalEntityMapReinit](@principalIds EntityIdCollection READONLY, @type int) as
begin
SET NOCOUNT ON

-- Define and Set constants
declare @User int
declare @Team int
declare @BASIC_MASK int
declare @UserOwnedMask int
declare @ReadAccessRight int
declare @OtcPrincipalEntityMap int

select @User = 8
select @Team = 9
select @BASIC_MASK = 1 -- PRIVILEGE_DEPTH_MASK.BASIC_MASK
select @UserOwnedMask = 1 -- OwnerShipTypes.UserOwned
select @ReadAccessRight = 1 -- AccessRights.ReadAccess
select @OtcPrincipalEntityMap = 41 -- ObjectTypeCode 41

-- Use in memory tables because PrincipalEntityMap is only for userowned entities (~hundred)
declare @Old table(ObjectTypeCode int, PrincipalId uniqueidentifier, primary key clustered (ObjectTypeCode, PrincipalId))
declare @New table(ObjectTypeCode int, PrincipalId uniqueidentifier, primary key clustered (ObjectTypeCode, PrincipalId))

declare	 @CountInNewSet int
		,@CountInOldSet int
		,@CountInserted int

-- Populate Old set 
insert into @Old(ObjectTypeCode, PrincipalId) 
	select pem.ObjectTypeCode, pem.PrincipalId from PrincipalEntityMap pem
	join @principalIds p on pem.PrincipalId = p.id
	order by ObjectTypeCode

select @CountInOldSet = @@ROWCOUNT

-- Populate New set
if (@type = @User) 
	begin
		insert into @New(ObjectTypeCode, PrincipalId)
			select distinct potc.ObjectTypeCode, pr.id from PrivilegeObjectTypeCodes potc
				join PrivilegeBase p on p.PrivilegeId = potc.PrivilegeId
				join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
				join Role r on r.ParentRootRoleId = rp.RoleId
				join SystemUserRoles sur on sur.RoleId = r.RoleId
				join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
				join @principalIds pr on pr.id = sur.SystemUserId
			where p.AccessRight = @ReadAccessRight
			  and (rp.PrivilegeDepthMask = @BASIC_MASK)
			  and e.OwnershipTypeMask = @UserOwnedMask
			order by potc.ObjectTypeCode
	end
else if (@type = @Team) 
	begin
		insert into @New(ObjectTypeCode, PrincipalId)
			select distinct potc.ObjectTypeCode, pr.id from PrivilegeObjectTypeCodes potc
				join PrivilegeBase p on p.PrivilegeId = potc.PrivilegeId
				join RolePrivileges rp on rp.PrivilegeId = p.PrivilegeId
				join Role r on r.ParentRootRoleId = rp.RoleId
				join TeamRoles tr on tr.RoleId = r.RoleId
				join EntityView e on e.ObjectTypeCode = potc.ObjectTypeCode
				join @principalIds pr on pr.id = tr.TeamId
			where p.AccessRight = @ReadAccessRight
			  and (rp.PrivilegeDepthMask = @BASIC_MASK)
			  and e.OwnershipTypeMask = @UserOwnedMask
			order by potc.ObjectTypeCode
	end
else
	RAISERROR ('invalid principal type', 16, 1)

select @CountInNewSet=@@ROWCOUNT

-- Insert added	  
insert PrincipalEntityMap (PrincipalId, ObjectTypeCode)
    select PrincipalId, ObjectTypeCode from @New
    Except
    select PrincipalId, ObjectTypeCode from @Old

select @CountInserted=@@ROWCOUNT

-- if OldSet == NewSet do not execute delete
if (0<>@CountInserted or @CountInNewSet<>@CountInOldSet)
begin
	-- Delete removed with tracking deleted for offline sync
	delete PrincipalEntityMap 
			OUTPUT  DELETED.PrincipalEntityMapId, @OtcPrincipalEntityMap 
			into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
		from PrincipalEntityMap prm
		join
		(
			select PrincipalId, ObjectTypeCode from @Old
			Except
			select PrincipalId, ObjectTypeCode from @New
		) deletedPrm
		on prm.PrincipalId = deletedPrm.PrincipalId and prm.ObjectTypeCode = deletedPrm.ObjectTypeCode option (recompile)
end

end
GO
