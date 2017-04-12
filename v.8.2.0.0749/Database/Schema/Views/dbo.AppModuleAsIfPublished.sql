SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for AppModuleAsIfPublished
--
create view [dbo].[AppModuleAsIfPublished]
 with view_metadata as
select
T1.* from [AppModuleLogical] T1 left outer join [AppModuleLogical] T2 on
(T1.[AppModuleId] = T2.[AppModuleId] and T1.[AppModuleIdUnique] <> T2.[AppModuleIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
