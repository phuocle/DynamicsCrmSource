SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ChannelAccessProfileEntityAccessLevelAsIfPublished
--
create view [dbo].[ChannelAccessProfileEntityAccessLevelAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfileEntityAccessLevel]
GO
