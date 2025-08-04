SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ChannelAccessProfileRuleItemLogicalAsIfPublished
--
create view [dbo].[ChannelAccessProfileRuleItemLogicalAsIfPublished]
 with view_metadata as
select
* from ChannelAccessProfileRuleItemLogical
GO
