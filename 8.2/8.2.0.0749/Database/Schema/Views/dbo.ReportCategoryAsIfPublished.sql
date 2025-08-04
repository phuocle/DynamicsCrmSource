SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ReportCategoryAsIfPublished
--
create view [dbo].[ReportCategoryAsIfPublished]
 with view_metadata as
select
* from [ReportCategory]
GO
