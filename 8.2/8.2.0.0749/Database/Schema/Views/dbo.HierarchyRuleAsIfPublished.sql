SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for HierarchyRuleAsIfPublished
--
create view [dbo].[HierarchyRuleAsIfPublished]
 with view_metadata as
select
T1.* from [HierarchyRuleLogical] T1 left outer join [HierarchyRuleLogical] T2 on
(T1.[HierarchyRuleID] = T2.[HierarchyRuleID] and T1.[HierarchyRuleIDUnique] <> T2.[HierarchyRuleIDUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
