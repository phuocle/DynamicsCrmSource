USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ConvertRuleItemLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for ConvertRuleItemLogicalAsIfPublished
--
create view [dbo].[ConvertRuleItemLogicalAsIfPublished]
 with view_metadata as
select
* from ConvertRuleItemLogical
GO
