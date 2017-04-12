SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for RoleAsIfPublished
--
create view [dbo].[RoleAsIfPublished]
 with view_metadata as
select
* from [Role]
GO
