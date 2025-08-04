


--
-- base 'as if published' view for RibbonCommandAsIfPublished
--
create view dbo.[RibbonCommandAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonCommandLogical] T1 left outer join [RibbonCommandLogical] T2 on
(T1.[RibbonCommandId] = T2.[RibbonCommandId] and T1.[RibbonCommandUniqueId] <> T2.[RibbonCommandUniqueId] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)