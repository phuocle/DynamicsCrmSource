USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RoutingRuleAsIfPublished]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for RoutingRuleAsIfPublished
--
create view [dbo].[RoutingRuleAsIfPublished]
 with view_metadata as
select
* from [RoutingRule]
GO
