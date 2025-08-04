


--
-- logical 'as if published' view for RibbonCommandLogicalAsIfPublished
--
create view dbo.[RibbonCommandLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonCommandLogical] T1 left outer join [RibbonCommandLogical] T2 on
(T1.[RibbonCommandId] = T2.[RibbonCommandId] and T1.[RibbonCommandUniqueId] <> T2.[RibbonCommandUniqueId] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null