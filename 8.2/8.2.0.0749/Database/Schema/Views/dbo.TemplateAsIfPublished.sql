SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for TemplateAsIfPublished
--
create view [dbo].[TemplateAsIfPublished]
 with view_metadata as
select
* from [Template]
GO
