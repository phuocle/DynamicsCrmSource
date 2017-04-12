USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SiteMapAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for SiteMapAsIfPublished
--
create view [dbo].[SiteMapAsIfPublished]
 with view_metadata as
select
T1.* from [SiteMapLogical] T1 left outer join [SiteMapLogical] T2 on
(T1.[SiteMapId] = T2.[SiteMapId] and T1.[SiteMapIdUnique] <> T2.[SiteMapIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO
