


--
-- base 'as if published' view for SavedQueryVisualizationAsIfPublished
--
create view dbo.[SavedQueryVisualizationAsIfPublished]
 with view_metadata as
select
T1.* from [SavedQueryVisualizationLogical] T1 left outer join [SavedQueryVisualizationLogical] T2 on
(T1.[SavedQueryVisualizationId] = T2.[SavedQueryVisualizationId] and T1.[SavedQueryVisualizationIdUnique] <> T2.[SavedQueryVisualizationIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)