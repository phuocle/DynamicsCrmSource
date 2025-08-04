SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for DisplayStringMapLogicalAsIfPublished
--
create view [dbo].[DisplayStringMapLogicalAsIfPublished]
 with view_metadata as
select
* from DisplayStringMapLogical
GO
