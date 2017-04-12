USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[CustomControlDefaultConfigAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for CustomControlDefaultConfigAsIfPublished
--
create view [dbo].[CustomControlDefaultConfigAsIfPublished]
 with view_metadata as
select
T1.* from [CustomControlDefaultConfigLogical] T1 left outer join [CustomControlDefaultConfigLogical] T2 on
(T1.[CustomControlDefaultConfigId] = T2.[CustomControlDefaultConfigId] and T1.[CustomControlDefaultConfigIdUnique] <> T2.[CustomControlDefaultConfigIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
