USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SavedQueryVisualizationLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for SavedQueryVisualizationLogicalAsIfPublished
--
create view [dbo].[SavedQueryVisualizationLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [SavedQueryVisualizationLogical] T1 left outer join [SavedQueryVisualizationLogical] T2 on
(T1.[SavedQueryVisualizationId] = T2.[SavedQueryVisualizationId] and T1.[SavedQueryVisualizationIdUnique] <> T2.[SavedQueryVisualizationIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null
GO
