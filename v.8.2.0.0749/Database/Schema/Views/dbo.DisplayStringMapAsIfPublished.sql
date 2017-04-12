SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for DisplayStringMapAsIfPublished
--
create view [dbo].[DisplayStringMapAsIfPublished]
 with view_metadata as
select
* from [DisplayStringMap]
GO
