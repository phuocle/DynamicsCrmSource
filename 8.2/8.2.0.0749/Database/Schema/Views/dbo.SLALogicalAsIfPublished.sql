SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SLALogicalAsIfPublished
--
create view [dbo].[SLALogicalAsIfPublished]
 with view_metadata as
select
* from SLALogical
GO
