SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ActivityAttachmentAsIfPublished
--
create view [dbo].[ActivityAttachmentAsIfPublished]
 with view_metadata as
select
* from [ActivityAttachment]
GO
