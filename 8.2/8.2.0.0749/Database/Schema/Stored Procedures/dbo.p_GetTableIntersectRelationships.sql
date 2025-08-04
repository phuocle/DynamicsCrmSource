SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetTableIntersectRelationships](
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
        where Name = @tablename;
    end;

    select e1.Name as SourceEntity,
           r1.Name as LeftKey,
           la.Name as LeftKeyName,
           i1.Name as IntersectEntity,
           r2.Name as RightKey,
           ra.Name as RightKeyName,
           e3.Name as TargetEntity
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
         inner join AttributeView as ra
             on ra.AttributeId = r2.ReferencingAttributeId
                and ra.EntityId = r2.ReferencingEntityId
         inner join AttributeView as la
             on la.AttributeId = r1.ReferencingAttributeId
                and la.EntityId = r1.ReferencingEntityId
    where e3.IsLookupTable = 0
          and e3.IsIntersect = 0
          and e3.IsSecurityIntersect = 0
          and e1.IsLookupTable = 0
          and e1.IsIntersect = 0
          and e1.IsSecurityIntersect = 0
          and e1.Name <> e3.Name
          and e1.EntityId = @tableid
          and e3.IsIntersect = 1
    order by SourceEntity,
             IntersectEntity;
end;
GO
