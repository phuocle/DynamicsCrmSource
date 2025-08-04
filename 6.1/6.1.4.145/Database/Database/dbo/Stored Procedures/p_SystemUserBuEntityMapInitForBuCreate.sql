

-- this stored procedure inits SystemUserBusinessUnitEntityMap for a BU create
CREATE     procedure p_SystemUserBuEntityMapInitForBuCreate(@BusinessUnitId uniqueidentifier) as
begin
SET NOCOUNT ON

declare @DEEP_MASK int
declare @parentBusinessId uniqueidentifier

select @DEEP_MASK = 4 -- PRIVILEGE_DEPTH_MASK.DEEP_MASK
select @parentBusinessId=ParentBusinessUnitId from BusinessUnit
where BusinessUnitId=@BusinessUnitId

insert into SystemUserBusinessUnitEntityMap
(SystemUserId, BusinessUnitId, ObjectTypeCode, ReadPrivilegeDepth ) 
select SystemUserId, @BusinessUnitId, ObjectTypeCode, ReadPrivilegeDepth 
		from SystemUserBusinessUnitEntityMap
		where BusinessUnitId = @parentBusinessId AND 
		ReadPrivilegeDepth = @DEEP_MASK

end