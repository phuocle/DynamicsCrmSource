


--
-- logical 'as if published' view for RibbonTabToCommandMapLogicalAsIfPublished
--
create view dbo.[RibbonTabToCommandMapLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonTabToCommandMapLogical] T1 left outer join [RibbonTabToCommandMapLogical] T2 on
(T1.[RibbonTabToCommandMapId] = T2.[RibbonTabToCommandMapId] and T1.[RibbonTabToCommandMapUniqueId] <> T2.[RibbonTabToCommandMapUniqueId] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null