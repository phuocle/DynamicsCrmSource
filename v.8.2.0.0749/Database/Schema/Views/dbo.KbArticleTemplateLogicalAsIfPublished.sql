SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for KbArticleTemplateLogicalAsIfPublished
--
create view [dbo].[KbArticleTemplateLogicalAsIfPublished]
 with view_metadata as
select
* from KbArticleTemplateLogical
GO
