SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for PluginTypeAsIfPublished
--
create view [dbo].[PluginTypeAsIfPublished]
 with view_metadata as
select
* from [PluginType]
GO
