USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RibbonCustomizationAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for RibbonCustomizationAsIfPublished
--
create view [dbo].[RibbonCustomizationAsIfPublished]
 with view_metadata as
select
T1.* from [RibbonCustomizationLogical] T1 left outer join [RibbonCustomizationLogical] T2 on
(T1.[RibbonCustomizationId] = T2.[RibbonCustomizationId] and T1.[RibbonCustomizationUniqueId] <> T2.[RibbonCustomizationUniqueId] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
