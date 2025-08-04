SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for RolePrivilegesAsIfPublished
--
create view [dbo].[RolePrivilegesAsIfPublished]
 with view_metadata as
select
* from [RolePrivileges]
GO
