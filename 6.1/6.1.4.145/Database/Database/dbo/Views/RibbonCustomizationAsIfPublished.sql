


--
-- base 'as if published' view for RibbonCustomizationAsIfPublished
--
create view dbo.[RibbonCustomizationAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonCustomizationLogical] T1 left outer join [RibbonCustomizationLogical] T2 on
(T1.[RibbonCustomizationId] = T2.[RibbonCustomizationId] and T1.[RibbonCustomizationUniqueId] <> T2.[RibbonCustomizationUniqueId] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)