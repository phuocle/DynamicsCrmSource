SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for RoutingRuleItemAsIfPublished
--
create view [dbo].[RoutingRuleItemAsIfPublished]
 with view_metadata as
select
* from [RoutingRuleItem]
GO
