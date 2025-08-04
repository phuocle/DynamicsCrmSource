


--
-- logical 'as if published' view for MobileOfflineProfileItemLogicalAsIfPublished
--
create view dbo.[MobileOfflineProfileItemLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [MobileOfflineProfileItemLogical] T1 left outer join [MobileOfflineProfileItemLogical] T2 on
(T1.[MobileOfflineProfileItemId] = T2.[MobileOfflineProfileItemId] and T1.[MobileOfflineProfileItemIdUnique] <> T2.[MobileOfflineProfileItemIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null