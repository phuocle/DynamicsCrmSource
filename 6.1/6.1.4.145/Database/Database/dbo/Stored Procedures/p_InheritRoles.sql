


--
-- this stored procedure will inherit the roles from parentBizId into bizId
--
create procedure p_InheritRoles(@bizId uniqueidentifier, @parentBizId uniqueidentifier, @userid uniqueidentifier, @addsupportuserrole bit) as
begin

SET NOCOUNT ON

declare @activeSolutionId uniqueidentifier
set @activeSolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238'

create table #roles(roleid uniqueidentifier primary key)

if ( @addsupportuserrole = 0)
begin
insert into #roles(roleid) select RoleId from Role where BusinessUnitId = @parentBizId
end
else
begin
insert into #roles(roleid) select RoleId from Role 
	where BusinessUnitId = @parentBizId and RoleTemplateId = '{2d101bb3-5ced-4122-83f1-94d5efde4e3b}' 
end

declare @roleid uniqueidentifier
declare RoleCursor cursor local FORWARD_ONLY READ_ONLY for select roleid from #roles
open RoleCursor
fetch next from RoleCursor into @roleid
while (@@fetch_status = 0)
begin

declare @newRoleId uniqueidentifier
select @newRoleId = newid()

--
-- create the role record
-- 

insert into RoleBaseIds(RoleId) values (@newRoleId)

insert into RoleBase(RoleId, RoleTemplateId, OrganizationId, Name, BusinessUnitId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy, ParentRoleId, SolutionId
		, ParentRootRoleId)
select @newRoleId, RoleTemplateId, OrganizationId, Name, @bizId, getutcdate(), null, @userid, null, @roleid, @activeSolutionId
		-- set ParentRootRoleId
		,ParentRootRoleId 
from Role where RoleId = @roleid

fetch next from RoleCursor into @roleid

end -- RoleCursor
close RoleCursor
deallocate RoleCursor

drop table #roles

end -- p_InheritRoles