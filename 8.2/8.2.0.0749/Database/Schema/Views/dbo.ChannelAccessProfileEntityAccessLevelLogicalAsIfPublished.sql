SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ChannelAccessProfileEntityAccessLevelLogicalAsIfPublished
--
create view [dbo].[ChannelAccessProfileEntityAccessLevelLogicalAsIfPublished]
 with view_metadata as
select
* from ChannelAccessProfileEntityAccessLevelLogical
GO
