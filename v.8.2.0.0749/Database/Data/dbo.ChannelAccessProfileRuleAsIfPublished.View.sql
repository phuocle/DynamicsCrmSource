USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ChannelAccessProfileRuleAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for ChannelAccessProfileRuleAsIfPublished
--
create view [dbo].[ChannelAccessProfileRuleAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfileRule]
GO
