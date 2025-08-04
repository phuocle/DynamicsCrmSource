SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for AppModuleRolesLogicalAsIfPublished
--
create view [dbo].[AppModuleRolesLogicalAsIfPublished]
 with view_metadata as
select
* from AppModuleRolesLogical
GO
