


--
-- logical 'as if published' view for RibbonCustomizationLogicalAsIfPublished
--
create view dbo.[RibbonCustomizationLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonCustomizationLogical] T1 left outer join [RibbonCustomizationLogical] T2 on
(T1.[RibbonCustomizationId] = T2.[RibbonCustomizationId] and T1.[RibbonCustomizationUniqueId] <> T2.[RibbonCustomizationUniqueId] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null