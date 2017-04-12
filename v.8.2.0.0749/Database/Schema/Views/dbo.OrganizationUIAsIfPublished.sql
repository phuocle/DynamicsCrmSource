SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for OrganizationUIAsIfPublished
--
create view [dbo].[OrganizationUIAsIfPublished]
 with view_metadata as
select
T1.* from [OrganizationUILogical] T1 left outer join [OrganizationUILogical] T2 on
(T1.[FormId] = T2.[FormId] and T1.[FormIdUnique] <> T2.[FormIdUnique] and (T1.ComponentState = 0 OR T1.ComponentState = 2))
where T2.ComponentState is null and (T1.ComponentState = 0 OR T1.ComponentState = 1)
GO