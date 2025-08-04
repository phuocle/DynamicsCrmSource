


--
-- base 'as if published' view for RibbonRuleAsIfPublished
--
create view dbo.[RibbonRuleAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonRuleLogical] T1 left outer join [RibbonRuleLogical] T2 on
(T1.[RibbonRuleId] = T2.[RibbonRuleId] and T1.[RibbonRuleUniqueId] <> T2.[RibbonRuleUniqueId] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)