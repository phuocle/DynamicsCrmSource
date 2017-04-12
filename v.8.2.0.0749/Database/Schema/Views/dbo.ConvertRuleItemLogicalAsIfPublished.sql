SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ConvertRuleItemLogicalAsIfPublished
--
create view [dbo].[ConvertRuleItemLogicalAsIfPublished]
 with view_metadata as
select
* from ConvertRuleItemLogical
GO
