SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ChannelAccessProfileRuleLogicalAsIfPublished
--
create view [dbo].[ChannelAccessProfileRuleLogicalAsIfPublished]
 with view_metadata as
select
* from ChannelAccessProfileRuleLogical
GO
