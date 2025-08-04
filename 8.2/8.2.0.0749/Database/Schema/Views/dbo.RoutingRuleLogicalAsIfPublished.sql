SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for RoutingRuleLogicalAsIfPublished
--
create view [dbo].[RoutingRuleLogicalAsIfPublished]
 with view_metadata as
select
* from RoutingRuleLogical
GO
