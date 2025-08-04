


--
-- logical 'as if published' view for MobileOfflineProfileItemAssociationLogicalAsIfPublished
--
create view dbo.[MobileOfflineProfileItemAssociationLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [MobileOfflineProfileItemAssociationLogical] T1 left outer join [MobileOfflineProfileItemAssociationLogical] T2 on
(T1.[MobileOfflineProfileItemAssociationId] = T2.[MobileOfflineProfileItemAssociationId] and T1.[MobileOfflineProfileItemAssociationIdUnique] <> T2.[MobileOfflineProfileItemAssociationIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null