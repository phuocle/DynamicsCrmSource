SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ChannelAccessProfileRuleItemAsIfPublished
--
create view [dbo].[ChannelAccessProfileRuleItemAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfileRuleItem]
GO
