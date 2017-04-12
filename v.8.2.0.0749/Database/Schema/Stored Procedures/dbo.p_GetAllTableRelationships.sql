SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetAllTableRelationships]
as;
begin;
    set nocount on;

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
    order by SourceEntity,
             IntersectEntity;
end;
GO
