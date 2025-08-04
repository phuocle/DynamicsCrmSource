


--
-- logical 'as if published' view for NavigationSettingLogicalAsIfPublished
--
create view dbo.[NavigationSettingLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [NavigationSettingLogical] T1 left outer join [NavigationSettingLogical] T2 on
(T1.[NavigationSettingId] = T2.[NavigationSettingId] and T1.[NavigationSettingIdUnique] <> T2.[NavigationSettingIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null