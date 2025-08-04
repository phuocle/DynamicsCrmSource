SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ChannelPropertyAsIfPublished
--
create view [dbo].[ChannelPropertyAsIfPublished]
 with view_metadata as
select
* from [ChannelProperty]
GO
