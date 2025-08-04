

create procedure p_GetTablesForDeletion as
set nocount on

  select
	e.BaseTableName as BaseTableName,
	e.ObjectTypeCode as ObjectTypeCode
from EntityView e join AttributeView a on (e.EntityId = a.EntityId)
where a.IsPKAttribute = 1 and
  e.IsLogicalEntity = 0 and
  exists (select * from SubscriptionTrackingDeletedObject o (NOLOCK) where o.ObjectTypeCode=e.ObjectTypeCode) and -- this table contains both Replicated and DupDetection enabled entities
  e.IsDuplicateCheckSupported = 1
order by e.PhysicalName