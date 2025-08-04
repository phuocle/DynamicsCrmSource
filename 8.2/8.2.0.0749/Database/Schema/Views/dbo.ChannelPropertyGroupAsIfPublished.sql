SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ChannelPropertyGroupAsIfPublished
--
create view [dbo].[ChannelPropertyGroupAsIfPublished]
 with view_metadata as
select
* from [ChannelPropertyGroup]
GO
