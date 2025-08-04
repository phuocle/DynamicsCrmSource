SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ConvertRuleAsIfPublished
--
create view [dbo].[ConvertRuleAsIfPublished]
 with view_metadata as
select
* from [ConvertRule]
GO
