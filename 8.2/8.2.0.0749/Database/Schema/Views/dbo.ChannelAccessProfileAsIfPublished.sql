SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ChannelAccessProfileAsIfPublished
--
create view [dbo].[ChannelAccessProfileAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfile]
GO
