SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ReportCategoryLogicalAsIfPublished
--
create view [dbo].[ReportCategoryLogicalAsIfPublished]
 with view_metadata as
select
* from ReportCategoryLogical
GO
