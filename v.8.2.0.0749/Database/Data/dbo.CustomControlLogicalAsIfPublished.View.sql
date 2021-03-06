USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[CustomControlLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for CustomControlLogicalAsIfPublished
--
create view [dbo].[CustomControlLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [CustomControlLogical] T1 left outer join [CustomControlLogical] T2 on
(T1.[CustomControlId] = T2.[CustomControlId] and T1.[CustomControlIdUnique] <> T2.[CustomControlIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
