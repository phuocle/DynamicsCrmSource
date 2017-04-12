SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ConnectionRoleLogicalAsIfPublished
--
create view [dbo].[ConnectionRoleLogicalAsIfPublished]
 with view_metadata as
select
* from ConnectionRoleLogical
GO
