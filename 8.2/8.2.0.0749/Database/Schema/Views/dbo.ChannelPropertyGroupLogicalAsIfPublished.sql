SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ChannelPropertyGroupLogicalAsIfPublished
--
create view [dbo].[ChannelPropertyGroupLogicalAsIfPublished]
 with view_metadata as
select
* from ChannelPropertyGroupLogical
GO
