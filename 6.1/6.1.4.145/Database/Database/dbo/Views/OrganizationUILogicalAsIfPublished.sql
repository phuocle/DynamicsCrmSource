


--
-- logical 'as if published' view for OrganizationUILogicalAsIfPublished
--
create view dbo.[OrganizationUILogicalAsIfPublished]
 with view_metadata as
select
T1.* from [OrganizationUILogical] T1 left outer join [OrganizationUILogical] T2 on
(T1.[FormId] = T2.[FormId] and T1.[FormIdUnique] <> T2.[FormIdUnique] and (T1.ComponentState = 0 or T1.ComponentState = 2))
where T2.ComponentState is null