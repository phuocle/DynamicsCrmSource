SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for KbArticleTemplateAsIfPublished
--
create view [dbo].[KbArticleTemplateAsIfPublished]
 with view_metadata as
select
* from [KbArticleTemplate]
GO