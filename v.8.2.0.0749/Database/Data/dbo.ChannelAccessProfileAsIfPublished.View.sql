USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ChannelAccessProfileAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for ChannelAccessProfileAsIfPublished
--
create view [dbo].[ChannelAccessProfileAsIfPublished]
 with view_metadata as
select
* from [ChannelAccessProfile]
GO
