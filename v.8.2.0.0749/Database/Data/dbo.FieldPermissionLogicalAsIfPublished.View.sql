USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FieldPermissionLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for FieldPermissionLogicalAsIfPublished
--
create view [dbo].[FieldPermissionLogicalAsIfPublished]
 with view_metadata as
select
* from FieldPermissionLogical
GO
