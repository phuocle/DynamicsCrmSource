SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for RoutingRuleAsIfPublished
--
create view [dbo].[RoutingRuleAsIfPublished]
 with view_metadata as
select
* from [RoutingRule]
GO
