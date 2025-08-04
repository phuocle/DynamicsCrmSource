SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredKnowledgeArticleCategory] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredKnowledgeArticleCategory] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
