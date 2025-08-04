SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SLAAsIfPublished
--
create view [dbo].[SLAAsIfPublished]
 with view_metadata as
select
* from [SLA]
GO
