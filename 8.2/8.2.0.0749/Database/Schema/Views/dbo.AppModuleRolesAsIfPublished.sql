SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for AppModuleRolesAsIfPublished
--
create view [dbo].[AppModuleRolesAsIfPublished]
 with view_metadata as
select
* from [AppModuleRoles]
GO
