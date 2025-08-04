


--
-- base 'as if published' view for AppConfigAsIfPublished
--
create view dbo.[AppConfigAsIfPublished]
 with view_metadata as
select
T1.* from [AppConfigLogical] T1 left outer join [AppConfigLogical] T2 on
(T1.[AppConfigId] = T2.[AppConfigId] and T1.[AppConfigIdUnique] <> T2.[AppConfigIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)