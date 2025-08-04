

--
-- report view for knowledgearticlescategories
--
create view dbo.[FilteredKnowledgeArticleCategory] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeArticleCategory] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeArticleCategory] TO [CRMReaderRole]
    AS [dbo];

