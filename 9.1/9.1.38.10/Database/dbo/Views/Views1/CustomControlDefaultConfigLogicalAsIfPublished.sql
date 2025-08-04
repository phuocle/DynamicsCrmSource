


--
-- logical 'as if published' view for CustomControlDefaultConfigLogicalAsIfPublished
--
create view dbo.[CustomControlDefaultConfigLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [CustomControlDefaultConfigLogical] T1 left outer join [CustomControlDefaultConfigLogical] T2 on
(T1.[CustomControlDefaultConfigId] = T2.[CustomControlDefaultConfigId] and T1.[CustomControlDefaultConfigIdUnique] <> T2.[CustomControlDefaultConfigIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null