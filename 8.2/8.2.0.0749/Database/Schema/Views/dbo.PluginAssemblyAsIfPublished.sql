SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for PluginAssemblyAsIfPublished
--
create view [dbo].[PluginAssemblyAsIfPublished]
 with view_metadata as
select
* from [PluginAssembly]
GO
