

CREATE   PROCEDURE [dbo].[p_AddMarketingListMembers](@doc ntext, @EntityType int, @ListId uniqueidentifier,@CreatedBy uniqueidentifier) as

BEGIN
DECLARE @idoc int

create table #tempMemberBase(EntityId uniqueidentifier,
EntityType int,
ListId uniqueidentifier,
ListMemberId uniqueidentifier,
CreatedBy uniqueidentifier,
ModifiedBy uniqueidentifier,
dup int
)

EXEC sp_xml_preparedocument @idoc OUTPUT, @doc

insert into #tempMemberBase(EntityId, EntityType, ListId, ListMemberId, CreatedBy, ModifiedBy, dup)
select entityid, @EntityType, @ListId, NEWID(), @CreatedBy, @CreatedBy, 0 FROM 
OPENXML(@idoc, '/VALUES/VALUE',1)
WITH (entityid uniqueidentifier)

Create index idx_EntityId on #tempMemberBase(EntityId)

update #tempMemberBase
Set dup = 1
FROM #tempMemberBase, ListMemberBase
Where ListMemberBase.ListId = @ListId
AND ListMemberBase.EntityId = #tempMemberBase.EntityId

insert into ListMemberBase(EntityId, EntityType, ListId, ListMemberId, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy) 
select EntityId, @EntityType, @ListId, NEWID(), dbo.fn_GetUtcDateTrunc(), @CreatedBy, dbo.fn_GetUtcDateTrunc(), @CreatedBy FROM 
#tempMemberBase
WHERE dup = 0

drop table #tempMemberBase


END


