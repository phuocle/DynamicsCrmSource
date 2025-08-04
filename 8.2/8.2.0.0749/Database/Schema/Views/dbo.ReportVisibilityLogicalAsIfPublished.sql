SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ReportVisibilityLogicalAsIfPublished
--
create view [dbo].[ReportVisibilityLogicalAsIfPublished]
 with view_metadata as
select
* from ReportVisibilityLogical
GO
