


--
-- base 'as if published' view for SystemFormAsIfPublished
--
create view dbo.[SystemFormAsIfPublished]
 with view_metadata as
select
T1.* from [SystemFormLogical] T1 left outer join [SystemFormLogical] T2 on
(T1.[FormId] = T2.[FormId] and T1.[FormIdUnique] <> T2.[FormIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)