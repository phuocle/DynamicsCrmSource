SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for DisplayStringLogicalAsIfPublished
--
create view [dbo].[DisplayStringLogicalAsIfPublished]
 with view_metadata as
select
* from DisplayStringLogical
GO
