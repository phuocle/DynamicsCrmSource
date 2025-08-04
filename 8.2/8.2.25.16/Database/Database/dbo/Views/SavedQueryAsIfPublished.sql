


--
-- base 'as if published' view for SavedQueryAsIfPublished
--
create view dbo.[SavedQueryAsIfPublished]
 with view_metadata as
select
T1.* from [SavedQueryLogical] T1 left outer join [SavedQueryLogical] T2 on
(T1.[SavedQueryId] = T2.[SavedQueryId] and T1.[SavedQueryIdUnique] <> T2.[SavedQueryIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)