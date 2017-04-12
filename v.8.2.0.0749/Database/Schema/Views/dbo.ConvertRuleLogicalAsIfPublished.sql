SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ConvertRuleLogicalAsIfPublished
--
create view [dbo].[ConvertRuleLogicalAsIfPublished]
 with view_metadata as
select
* from ConvertRuleLogical
GO
