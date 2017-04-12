SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ProcessTriggerAsIfPublished
--
create view [dbo].[ProcessTriggerAsIfPublished]
 with view_metadata as
select
* from [ProcessTrigger]
GO
