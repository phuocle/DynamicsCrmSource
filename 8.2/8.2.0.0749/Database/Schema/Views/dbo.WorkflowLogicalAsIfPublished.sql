SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for WorkflowLogicalAsIfPublished
--
create view [dbo].[WorkflowLogicalAsIfPublished]
 with view_metadata as
select
* from WorkflowLogical
GO
