USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RibbonTabToCommandMapLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for RibbonTabToCommandMapLogicalAsIfPublished
--
create view [dbo].[RibbonTabToCommandMapLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonTabToCommandMapLogical] T1 left outer join [RibbonTabToCommandMapLogical] T2 on
(T1.[RibbonTabToCommandMapId] = T2.[RibbonTabToCommandMapId] and T1.[RibbonTabToCommandMapUniqueId] <> T2.[RibbonTabToCommandMapUniqueId] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
