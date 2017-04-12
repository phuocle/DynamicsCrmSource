SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SiteMapLogicalAsIfPublished
--
create view [dbo].[SiteMapLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [SiteMapLogical] T1 left outer join [SiteMapLogical] T2 on
(T1.[SiteMapId] = T2.[SiteMapId] and T1.[SiteMapIdUnique] <> T2.[SiteMapIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO