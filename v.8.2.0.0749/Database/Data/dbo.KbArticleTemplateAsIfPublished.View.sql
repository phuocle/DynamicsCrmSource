USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[KbArticleTemplateAsIfPublished]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for KbArticleTemplateAsIfPublished
--
create view [dbo].[KbArticleTemplateAsIfPublished]
 with view_metadata as
select
* from [KbArticleTemplate]
GO
