SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for EntityMapAsIfPublished
--
create view [dbo].[EntityMapAsIfPublished]
 with view_metadata as
select
* from [EntityMap]
GO
