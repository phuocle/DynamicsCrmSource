


--
-- logical 'as if published' view for SystemFormLogicalAsIfPublished
--
create view dbo.[SystemFormLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [SystemFormLogical] T1 left outer join [SystemFormLogical] T2 on
(T1.[FormId] = T2.[FormId] and T1.[FormIdUnique] <> T2.[FormIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null