

create procedure dbo.p_GetTableRelationships(
    @tablename nvarchar(255) = null,
    @tableid uniqueidentifier = null)
as;
begin;
    set nocount on;

    if (@tablename is null and @tableid is null)
    begin;
        raiserror(1074008071, 16, 127) with nowait, seterror;
        return;
    end;

    if (@tableid is null)
    begin;
        select @tableid = EntityId
        from EntityView
        where Name = @tablename
    end;

    select e1.LogicalName as SourceEntity,
           r1.Name as LeftKey,
           i1.LogicalName as IntersectEntity,
           r2.Name as RightKey,
           e3.LogicalName as TargetEntity
    from EntityView e1
         inner join RelationshipView r1
             on e1.EntityId = r1.ReferencedEntityId
         inner join EntityView i1
             on r1.ReferencingEntityId = i1.EntityId
         inner join EntityView i2
             on i1.EntityId = i2.EntityId
         inner join RelationshipView r2
             on r2.ReferencingEntityId = i2.EntityId
         inner join EntityView e3
             on e3.EntityId = r2.ReferencedEntityId
    where e3.IsLookupTable = 0
          and e3.IsIntersect = 0
          and e3.IsSecurityIntersect = 0
          and e1.IsLookupTable = 0
          and e1.IsIntersect = 0
          and e1.IsSecurityIntersect = 0
          and e1.Name <> e3.Name
          and e1.EntityId = @tableid
    order by SourceEntity,
             IntersectEntity;
end;