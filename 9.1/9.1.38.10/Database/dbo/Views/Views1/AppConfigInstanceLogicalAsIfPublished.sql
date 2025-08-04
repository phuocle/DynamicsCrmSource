


--
-- logical 'as if published' view for AppConfigInstanceLogicalAsIfPublished
--
create view dbo.[AppConfigInstanceLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [AppConfigInstanceLogical] T1 left outer join [AppConfigInstanceLogical] T2 on
(T1.[AppConfigInstanceId] = T2.[AppConfigInstanceId] and T1.[AppConfigInstanceIdUnique] <> T2.[AppConfigInstanceIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null