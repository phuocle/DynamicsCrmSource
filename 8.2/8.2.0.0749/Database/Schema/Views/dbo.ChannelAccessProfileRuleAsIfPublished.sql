SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ChannelAccessProfileRuleAsIfPublished
--
create view [dbo].[ChannelAccessProfileRuleAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfileRule]
GO
