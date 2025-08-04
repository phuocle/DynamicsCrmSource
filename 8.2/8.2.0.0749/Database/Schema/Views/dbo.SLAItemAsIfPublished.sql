SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SLAItemAsIfPublished
--
create view [dbo].[SLAItemAsIfPublished]
 with view_metadata as
select
* from [SLAItem]
GO
