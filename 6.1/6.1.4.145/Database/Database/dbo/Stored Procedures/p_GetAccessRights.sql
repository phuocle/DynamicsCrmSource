


create procedure p_GetAccessRights(@doc nvarchar(max),
@UserId uniqueidentifier,
@ObjectTypeCode int,
@AccessRights int
)
as
begin

SET NOCOUNT ON

-- Temp table that will store the Member GUID, BU Id, access rights and owning user to be
-- returned to the caller of this SP
create table #tempMemberBase(EntityId uniqueidentifier,
EntityBusinessUnitId uniqueidentifier,
AccessRights int,
OwnerId uniqueidentifier,
OwnerIdType int
)

Create index idx_EntityId on #tempMemberBase(EntityId) -- Create index on EntityId

insert into #tempMemberBase(EntityId) select id from fn_GetGuidsFromString(@doc) 

declare @entityBaseTableName sysname -- base table name for list member type (account/lead/contact etc...)
declare @sql nvarchar(max) -- Dynamic SQL to execute update temp table with the member's BU Id and the owning user.
declare @entityPK sysname -- list member type entity's primary key (AccountId, ContactId, LeadId etc...)

Select @entityBaseTableName = BaseTableName, 
@entityPK = AttributeView.PhysicalName
From EntityView join AttributeView on EntityView.EntityId = AttributeView.EntityId where ObjectTypeCode = @ObjectTypeCode
AND AttributeView.IsPKAttribute = 1

Select @sql = 'Update #tempMemberBase Set EntityBusinessUnitId = ' + @entityBaseTableName + '.OwningBusinessUnit,
OwnerId = ' + @entityBaseTableName + '.OwnerId , OwnerIdType = ' + @entityBaseTableName + '.OwnerIdType
From ' + @entityBaseTableName + ' where ' + @entityBaseTableName + '.' + @entityPK + ' = #tempMemberBase.EntityId'

-- dynamic SQL executed to update the temp table with the Member's BU ID and OwnerId.
exec (@sql)

-- Retrieve the member details like BU Id, access rights for the caller from POA for the given member 

Update #tempMemberBase
Set AccessRights = (
select ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00000001) 
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00000002) 
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00000004)
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00000010) 
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00000020)
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00010000)  
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00080000) 
+ ((POA.AccessRightsMask|POA.InheritedAccessRightsMask) & 0x00040000) 
as 'AccessRights' 
)
from #tempMemberBase join PrincipalObjectAccess as POA
on POA.ObjectId = #tempMemberBase.EntityId
join SystemUserPrincipals sup on POA.PrincipalId = sup.PrincipalId
where sup.SystemUserId = @UserId and POA.ObjectTypeCode = @ObjectTypeCode

-- record set returned back to caller
select EntityId, EntityBusinessUnitId, OwnerId,OwnerIdType, isnull(AccessRights, 0) AccessRights
From #tempMemberBase

drop table #tempMemberBase

end

