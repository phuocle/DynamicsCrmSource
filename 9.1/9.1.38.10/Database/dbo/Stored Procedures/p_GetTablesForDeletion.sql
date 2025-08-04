

create procedure dbo.p_GetTablesForDeletion
as;
begin;
    set nocount on;

    select e.BaseTableName as BaseTableName,
           e.ObjectTypeCode as ObjectTypeCode
    from EntityView e
         inner join AttributeView a
             on e.EntityId = a.EntityId
    where a.IsPKAttribute = 1
          and e.IsLogicalEntity = 0
          and exists (
                select 1
                from SubscriptionTrackingDeletedObject o
                where o.ObjectTypeCode = e.ObjectTypeCode)
          and e.IsDuplicateCheckSupported = 1 -- table contains both Replicated and DupDetection enabled entities
    order by e.PhysicalName;
end;