


--
-- logical 'as if published' view for WebResourceLogicalAsIfPublished
--
create view dbo.[WebResourceLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [WebResourceLogical] T1 left outer join [WebResourceLogical] T2 on
(T1.[WebResourceId] = T2.[WebResourceId] and T1.[WebResourceIdUnique] <> T2.[WebResourceIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null