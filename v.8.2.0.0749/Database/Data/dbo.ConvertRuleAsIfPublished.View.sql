USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ConvertRuleAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for ConvertRuleAsIfPublished
--
create view [dbo].[ConvertRuleAsIfPublished]
 with view_metadata as
select
* from [ConvertRule]
GO
