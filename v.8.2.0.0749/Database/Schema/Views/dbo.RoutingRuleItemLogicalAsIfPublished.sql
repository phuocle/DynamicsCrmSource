SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for RoutingRuleItemLogicalAsIfPublished
--
create view [dbo].[RoutingRuleItemLogicalAsIfPublished]
 with view_metadata as
select
* from RoutingRuleItemLogical
GO
