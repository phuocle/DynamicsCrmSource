SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ProcessTriggerLogicalAsIfPublished
--
create view [dbo].[ProcessTriggerLogicalAsIfPublished]
 with view_metadata as
select
* from ProcessTriggerLogical
GO
