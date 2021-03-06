USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[WebResourceAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for WebResourceAsIfPublished
--
create view [dbo].[WebResourceAsIfPublished]
 with view_metadata as
select
T1.* from [WebResourceLogical] T1 left outer join [WebResourceLogical] T2 on
(T1.[WebResourceId] = T2.[WebResourceId] and T1.[WebResourceIdUnique] <> T2.[WebResourceIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
