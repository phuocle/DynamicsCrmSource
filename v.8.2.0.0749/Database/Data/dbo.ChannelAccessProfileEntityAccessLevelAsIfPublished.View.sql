USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ChannelAccessProfileEntityAccessLevelAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for ChannelAccessProfileEntityAccessLevelAsIfPublished
--
create view [dbo].[ChannelAccessProfileEntityAccessLevelAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfileEntityAccessLevel]
GO
