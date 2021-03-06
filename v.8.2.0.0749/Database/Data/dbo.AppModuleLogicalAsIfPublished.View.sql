USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AppModuleLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for AppModuleLogicalAsIfPublished
--
create view [dbo].[AppModuleLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [AppModuleLogical] T1 left outer join [AppModuleLogical] T2 on
(T1.[AppModuleId] = T2.[AppModuleId] and T1.[AppModuleIdUnique] <> T2.[AppModuleIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
