USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AppModuleRolesAsIfPublished]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for AppModuleRolesAsIfPublished
--
create view [dbo].[AppModuleRolesAsIfPublished]
 with view_metadata as
select
* from [AppModuleRoles]
GO
