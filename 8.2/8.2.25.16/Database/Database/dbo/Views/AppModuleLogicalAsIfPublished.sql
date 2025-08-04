


--
-- logical 'as if published' view for AppModuleLogicalAsIfPublished
--
create view dbo.[AppModuleLogicalAsIfPublished]
 with view_metadata as
select
T1.* from [AppModuleLogical] T1 left outer join [AppModuleLogical] T2 on
(T1.[AppModuleId] = T2.[AppModuleId] and T1.[AppModuleIdUnique] <> T2.[AppModuleIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null