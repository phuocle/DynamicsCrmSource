SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for AttributeMapAsIfPublished
--
create view [dbo].[AttributeMapAsIfPublished]
 with view_metadata as
select
* from [AttributeMap]
GO
