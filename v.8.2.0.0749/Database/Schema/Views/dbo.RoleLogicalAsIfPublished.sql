SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for RoleLogicalAsIfPublished
--
create view [dbo].[RoleLogicalAsIfPublished]
 with view_metadata as
select
* from RoleLogical
GO
