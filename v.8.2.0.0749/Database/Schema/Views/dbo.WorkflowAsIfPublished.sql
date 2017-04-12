SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for WorkflowAsIfPublished
--
create view [dbo].[WorkflowAsIfPublished]
 with view_metadata as
select
* from [Workflow]
GO
