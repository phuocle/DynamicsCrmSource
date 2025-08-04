SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for TemplateLogicalAsIfPublished
--
create view [dbo].[TemplateLogicalAsIfPublished]
 with view_metadata as
select
* from TemplateLogical
GO
