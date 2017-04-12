SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ConnectionRoleAsIfPublished
--
create view [dbo].[ConnectionRoleAsIfPublished]
 with view_metadata as
select
* from [ConnectionRole]
GO
