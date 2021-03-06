USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredKnowledgeArticleCategory]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for knowledgearticlescategories
--
create view [dbo].[FilteredKnowledgeArticleCategory] (
    [categoryid],
    [knowledgearticlecategoryid],
    [knowledgearticleid],
    [versionnumber]
) with view_metadata as
select
    [KnowledgeArticlesCategories].[CategoryId],
    [KnowledgeArticlesCategories].[KnowledgeArticleCategoryId],
    [KnowledgeArticlesCategories].[KnowledgeArticleId],
    [KnowledgeArticlesCategories].[VersionNumber]
from KnowledgeArticlesCategories

GO
