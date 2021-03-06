USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[CustomControlResourceLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for CustomControlResourceLogicalAsIfPublished
--
create view [dbo].[CustomControlResourceLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [CustomControlResourceLogical] T1 left outer join [CustomControlResourceLogical] T2 on
(T1.[CustomControlResourceId] = T2.[CustomControlResourceId] and T1.[CustomControlResourceIdUnique] <> T2.[CustomControlResourceIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
