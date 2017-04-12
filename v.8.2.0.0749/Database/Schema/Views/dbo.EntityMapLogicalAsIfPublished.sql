SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for EntityMapLogicalAsIfPublished
--
create view [dbo].[EntityMapLogicalAsIfPublished]
 with view_metadata as
select
* from EntityMapLogical
GO
