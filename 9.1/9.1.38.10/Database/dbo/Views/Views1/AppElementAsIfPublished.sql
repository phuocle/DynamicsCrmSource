


--
-- base 'as if published' view for AppElementAsIfPublished
--
create view dbo.[AppElementAsIfPublished]
 with view_metadata as
select
T1.* from [AppElementLogical] T1 left outer join [AppElementLogical] T2 on
(T1.[AppElementId] = T2.[AppElementId] and T1.[ComponentIdUnique] <> T2.[ComponentIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)