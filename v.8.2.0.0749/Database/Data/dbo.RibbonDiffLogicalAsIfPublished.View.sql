USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RibbonDiffLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for RibbonDiffLogicalAsIfPublished
--
create view [dbo].[RibbonDiffLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonDiffLogical] T1 left outer join [RibbonDiffLogical] T2 on
(T1.[RibbonDiffId] = T2.[RibbonDiffId] and T1.[RibbonDiffUniqueId] <> T2.[RibbonDiffUniqueId] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
