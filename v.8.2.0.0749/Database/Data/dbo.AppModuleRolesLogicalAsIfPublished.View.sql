USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AppModuleRolesLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for AppModuleRolesLogicalAsIfPublished
--
create view [dbo].[AppModuleRolesLogicalAsIfPublished]
 with view_metadata as
select
* from AppModuleRolesLogical
GO
