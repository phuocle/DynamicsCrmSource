SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for FieldPermissionAsIfPublished
--
create view [dbo].[FieldPermissionAsIfPublished]
 with view_metadata as
select
* from [FieldPermission]
GO
