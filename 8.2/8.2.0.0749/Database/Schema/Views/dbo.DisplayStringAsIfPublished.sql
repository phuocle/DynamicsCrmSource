SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for DisplayStringAsIfPublished
--
create view [dbo].[DisplayStringAsIfPublished]
 with view_metadata as
select
* from [DisplayString]
GO
