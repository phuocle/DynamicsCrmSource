USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SystemFormAsIfPublished]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for SystemFormAsIfPublished
--
create view [dbo].[SystemFormAsIfPublished]
 with view_metadata as
select
T1.* from [SystemFormLogical] T1 left outer join [SystemFormLogical] T2 on
(T1.[FormId] = T2.[FormId] and T1.[FormIdUnique] <> T2.[FormIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
