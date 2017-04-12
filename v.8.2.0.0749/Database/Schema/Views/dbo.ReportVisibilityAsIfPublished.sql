SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ReportVisibilityAsIfPublished
--
create view [dbo].[ReportVisibilityAsIfPublished]
 with view_metadata as
select
* from [ReportVisibility]
GO
