SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ReportLogicalAsIfPublished
--
create view [dbo].[ReportLogicalAsIfPublished]
 with view_metadata as
select
* from ReportLogical
GO
