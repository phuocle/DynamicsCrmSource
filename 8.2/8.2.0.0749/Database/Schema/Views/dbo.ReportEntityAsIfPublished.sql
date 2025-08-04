SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ReportEntityAsIfPublished
--
create view [dbo].[ReportEntityAsIfPublished]
 with view_metadata as
select
* from [ReportEntity]
GO
