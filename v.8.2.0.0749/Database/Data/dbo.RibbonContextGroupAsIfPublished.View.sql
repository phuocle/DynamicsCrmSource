USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RibbonContextGroupAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for RibbonContextGroupAsIfPublished
--
create view [dbo].[RibbonContextGroupAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonContextGroupLogical] T1 left outer join [RibbonContextGroupLogical] T2 on
(T1.[RibbonContextGroupId] = T2.[RibbonContextGroupId] and T1.[RibbonContextGroupUniqueId] <> T2.[RibbonContextGroupUniqueId] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
