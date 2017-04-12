SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ReportAsIfPublished
--
create view [dbo].[ReportAsIfPublished]
 with view_metadata as
select
* from [Report]
GO
