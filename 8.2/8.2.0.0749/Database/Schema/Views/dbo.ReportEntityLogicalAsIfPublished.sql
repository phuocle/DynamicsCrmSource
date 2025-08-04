SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ReportEntityLogicalAsIfPublished
--
create view [dbo].[ReportEntityLogicalAsIfPublished]
 with view_metadata as
select
* from ReportEntityLogical
GO
