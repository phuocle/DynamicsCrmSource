SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ActivityAttachmentLogicalAsIfPublished
--
create view [dbo].[ActivityAttachmentLogicalAsIfPublished]
 with view_metadata as
select
* from ActivityAttachmentLogical
GO
