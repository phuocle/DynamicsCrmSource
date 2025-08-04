


--
-- base 'as if published' view for RibbonDiffAsIfPublished
--
create view dbo.[RibbonDiffAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonDiffLogical] T1 left outer join [RibbonDiffLogical] T2 on
(T1.[RibbonDiffId] = T2.[RibbonDiffId] and T1.[RibbonDiffUniqueId] <> T2.[RibbonDiffUniqueId] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)