SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for PluginAssemblyLogicalAsIfPublished
--
create view [dbo].[PluginAssemblyLogicalAsIfPublished]
 with view_metadata as
select
* from PluginAssemblyLogical
GO
