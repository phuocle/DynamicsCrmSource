SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for FieldPermissionLogicalAsIfPublished
--
create view [dbo].[FieldPermissionLogicalAsIfPublished]
 with view_metadata as
select
* from FieldPermissionLogical
GO