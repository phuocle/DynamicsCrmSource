USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RoutingRuleLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for RoutingRuleLogicalAsIfPublished
--
create view [dbo].[RoutingRuleLogicalAsIfPublished]
 with view_metadata as
select
* from RoutingRuleLogical
GO
