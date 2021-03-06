USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[HierarchyRuleLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for HierarchyRuleLogicalAsIfPublished
--
create view [dbo].[HierarchyRuleLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [HierarchyRuleLogical] T1 left outer join [HierarchyRuleLogical] T2 on
(T1.[HierarchyRuleID] = T2.[HierarchyRuleID] and T1.[HierarchyRuleIDUnique] <> T2.[HierarchyRuleIDUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
