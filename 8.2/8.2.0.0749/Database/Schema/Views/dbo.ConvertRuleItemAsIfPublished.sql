SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ConvertRuleItemAsIfPublished
--
create view [dbo].[ConvertRuleItemAsIfPublished]
 with view_metadata as
select
* from [ConvertRuleItem]
GO
