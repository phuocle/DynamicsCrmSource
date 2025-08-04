SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for PluginTypeLogicalAsIfPublished
--
create view [dbo].[PluginTypeLogicalAsIfPublished]
 with view_metadata as
select
* from PluginTypeLogical
GO
